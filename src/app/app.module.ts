import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReusableCardComponent } from './shared/reusable-card/reusable-card.component';
import { ReusableListComponent } from './shared/reusable-list/reusable-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ReusableCardComponent,
    ReusableListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
