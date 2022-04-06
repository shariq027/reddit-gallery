import { ComponentFixture, TestBed, } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('ImageGridComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    let titleEle: HTMLElement;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [
                HeaderComponent
            ],
        }).compileComponents();
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        titleEle = fixture.nativeElement.querySelector('a');
        fixture.detectChanges();
    });

    it('should create the header', () => {
        expect(component).toBeTruthy();
      });

    it('title should be Image Gallery', () => {
        expect(titleEle.textContent).toContain(component.title);
    });

});
