import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RomanToNumberPipe } from './roman-to-number.pipe';
import { NumberToRomanPipe} from './numbertoroman.pipe';
import { CelsiustoforenhPipe } from './celsiustoforenh.pipe';
import { AddgmailPipe } from './addgmail.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RomanToNumberPipe,
    NumberToRomanPipe,
    CelsiustoforenhPipe,
    AddgmailPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
