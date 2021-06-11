import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { contadorComponent } from './contador/contador.component';

import { HeoresModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
    contadorComponent
  ],
  imports: [
    BrowserModule,
    HeoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
