import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { RoomListComponent } from './components/views/room-list/room-list.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'rooms',
    component: RoomListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
