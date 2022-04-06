import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APIInterceptor } from './http-interceptor';
import { ImgurService } from './imgur.service';

describe(`AuthHttpInterceptor`, () => {
  let service: ImgurService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ImgurService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: APIInterceptor,
          multi: true,
        },
      ],
    });

    service = TestBed.inject(ImgurService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should add an Authorization header', () => {
    service.getImages('searchText').subscribe(response => {
      expect(response).toBeTruthy();
    });
  
    const httpRequest = httpMock.expectOne(`https://api.imgur.com/3/gallery/r/searchText`);
  
    expect(httpRequest.request.headers.has('Authorization')).toEqual(true);
  });
});