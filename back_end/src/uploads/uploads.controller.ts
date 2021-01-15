import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import * as S3 from "aws-sdk/client/s3";

@Controller("uploads")
export class UploadsController {
  @Post("")
  @UseInterceptors(FileInterceptor("file"))
  uploadFile(@UploadedFile() file) {
    console.log(file);
  }
}
