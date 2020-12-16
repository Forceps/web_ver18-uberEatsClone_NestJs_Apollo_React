import { http_BackEnd } from "../../../../../../../../GlobalLib/Apollo/apolloSetting/BackendWay";

export const ImgInfoReturn = (URI: string) => {
  let image = new Image();
  image.src = URI;
  image.onload = () => {
    const wid: any = image.width;
    const heig: any = image.height;
    return { wid, heig };
  };
};

export const mediaSummon = (filename: string, type: string = "image") => {
  return `${http_BackEnd}/api/media/${filename}/${type}/read`;
};
