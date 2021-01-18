import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { FileInterceptor } from "@nestjs/platform-express";
import * as AWS from "aws-sdk";

@Controller("uploads")
export class UploadsController {
  constructor(private readonly config: ConfigService) {}
  @Post("")
  @UseInterceptors(FileInterceptor("file"))
  async uploadFile(@UploadedFile() file) {
    AWS.config.update({
      credentials: {
        accessKeyId: this.config.get("AWS_S3_nestUpload_AccessKey"),
        secretAccessKey: this.config.get("AWS_S3_nestUpload_SecretKey"),
      },
    });
    try {
      const objectName = `${Date.now() + file.originalname}`;
      console.log(objectName);
      await new AWS.S3()
        .putObject({
          Body: file.buffer,
          Bucket: this.config.get("AWS_S3_nestUpload_BucketName"),
          Key: objectName,
          ACL: "public-read",
        })
        .promise();
      const fileUrl = `https://${process.env.AWS_S3_nestUpload_BucketName}.s3.amazonaws.com/${objectName}`;
      return { url: fileUrl };
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}
