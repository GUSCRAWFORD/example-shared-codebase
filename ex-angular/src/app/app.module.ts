import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoinComponent } from './coin/coin.component';
import { CoinService } from './coin.service';

@NgModule({
  declarations: [
    AppComponent,
    CoinComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ CoinService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
