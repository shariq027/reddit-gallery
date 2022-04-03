import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'image-gallery';
  formdata = new FormData();
  token: string = '';
  requestOptions = {
    method: 'POST',
    body: this.formdata
  };

  ngOnInit(): void {
  }
}

