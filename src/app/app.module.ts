import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './components/views/home/home.component';
import { RoomListComponent } from './components/views/room-list/room-list.component';
import { MaterialModule } from './shared/material/material-modulo';
import { AlertaComponent } from './shared/alerta/alerta.component';
import { RoomCreateComponent } from './components/views/room-create/room-create.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    RoomListComponent,
    AlertaComponent,
    RoomCreateComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  entryComponents: [AlertaComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
