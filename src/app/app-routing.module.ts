import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageGridComponent } from './image-grid/image-grid.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', redirectTo: '/images', pathMatch: 'full'
      },
      {
        path: 'images', component: ImageGridComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
