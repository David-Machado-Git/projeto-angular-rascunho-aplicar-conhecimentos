import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenusComponent } from './components/menus/menus.component';
import { HomeComponent } from './components/home/home.component';
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';
import { FilhoComponent } from './components/filho/filho.component';
import { NetoComponent } from './components/neto/neto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenusComponent,
    HomeComponent,
    QuemSomosComponent,
    FilhoComponent,
    NetoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
