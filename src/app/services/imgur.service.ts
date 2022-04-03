import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class ImgurService {

    constructor(private http: HttpClient
    ) { }

    getImages(searchText: string){
        return this.http.get('https://api.imgur.com/3/gallery/r/'+searchText);
    }
}