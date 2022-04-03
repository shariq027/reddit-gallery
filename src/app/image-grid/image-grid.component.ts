import { Component, OnInit } from '@angular/core';
import { IImgurImage } from '../Models/IImgurImage';
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
        setTimeout(()=>{
            this.onLoad = false;
        }, 2000);        
        this._imgurService.getImages(this.searchText).subscribe((response: any) => {
            if(response){
                this.images = response.data;
            }
        })
    }
}
