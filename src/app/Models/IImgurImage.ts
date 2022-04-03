export interface IImgurImage {
    account_id: number,
    account_url: string,
    ad_type: number,
    ad_url: string,
    animated: boolean,
    bandwidth: number,
    datetime: Date,
    deletehash: string,
    description: string | null,
    edited: string,
    favorite: boolean,
    has_sound: boolean,
    height: number,
    id: string,
    in_gallery: boolean,
    in_most_viral: boolean,
    is_ad: boolean,
    link: string,
    name: string,
    nsfw: any,
    section: any,
    size: number,
    tags: Array<any>,
    title: any,
    type: string,
    views: number,
    vote: any,
    width: number
}