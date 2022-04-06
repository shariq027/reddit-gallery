import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IImgurResponse } from '../Models/IImgurResponse';

@Injectable({
    providedIn: 'root',
})

export class ImgurService {

    constructor(private http: HttpClient
    ) { }

    getImages(searchText: string): Observable<any> {
        return this.http.get<IImgurResponse>('https://api.imgur.com/3/gallery/r/' + searchText);
    }
}