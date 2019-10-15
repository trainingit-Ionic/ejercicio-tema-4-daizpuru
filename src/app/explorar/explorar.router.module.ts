import { ExplorarPage } from './explorar.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ExplorarPage,
    children: [
      {
        path: 'peliculas',
        children: [
          {
            path: '',
            loadChildren: '../pages/explorar/peliculas/peliculas.module#PeliculasPageModule'
          }
        ]
      },
      {
        path: 'musica',
        children: [
          {
            path: '',
            loadChildren: '../pages/explorar/musica/musica.module#MusicaPageModule'
          }
        ]
      },
      {
        path: 'libros',
        children: [
          {
            path: '',
            loadChildren: '../pages/explorar/libros/libros.module#LibrosPageModule'
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExplorarPageRoutingModule {}
