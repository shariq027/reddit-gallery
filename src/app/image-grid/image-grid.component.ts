import { Component, OnInit } from '@angular/core';
import { IImgurImage } from '../Models/IImgurImage';
import { IImgurResponse } from '../Models/IImgurResponse';
import { ImgurService } from '../services/imgur.service';

@Component({
    selector: 'app-image-grid',
    templateUrl: './image-grid.component.html',
    styleUrls: ['./image-grid.component.scss']
})
export class ImageGridComponent {

    images: Array<IImgurImage> = [];
    searchText: string = '';
    onLoad = true;
    constructor(private _imgurService: ImgurService) { }

    getImages() {
        this._imgurService.getImages(this.searchText).subscribe((response: IImgurResponse) => {
            if (response?.success) {
                this.images = response.data;
            }
            if (this.onLoad) {
                this.onLoad = false;
            }
        })
    }
}
