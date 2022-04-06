import { IImgurImage } from "./IImgurImage";

export interface IImgurResponse{
    status: number,
    success: boolean,
    data: Array<IImgurImage>
}