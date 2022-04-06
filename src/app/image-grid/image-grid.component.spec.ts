import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, ComponentFixtureAutoDetect, fakeAsync, flushMicrotasks, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { ImgurService } from '../services/imgur.service';
import { ImageGridComponent } from './image-grid.component';

describe('ImageGridComponent', () => {
    let component: ImageGridComponent;
    let fixture: ComponentFixture<ImageGridComponent>;
    const imgurServiceSpy = jasmine.createSpyObj('ImgurService', ['']);

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                FormsModule
            ],
            declarations: [
                ImageGridComponent
            ],
            providers: [
                { provide: ImgurService, useValue: imgurServiceSpy },
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        }).compileComponents();
    });

    beforeEach(()=>{
        fixture = TestBed.createComponent(ImageGridComponent);
        component = fixture.componentInstance;
    });

    it('should crete component', () => {
        expect(component).toBeTruthy();
    });

    it('On adding valid Subreddit text and search', fakeAsync(() => {

        component.searchText = 'searchText';
        component['_imgurService'].getImages = () => of({
            success: true,
            status: 200,
            data: []
        });
        
        component.getImages();
        flushMicrotasks();
        expect(component.onLoad).toBeFalsy();
    }));
});
