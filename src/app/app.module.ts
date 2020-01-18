import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReusableCardComponent } from './shared/reusable-card/reusable-card.component';
import { ReusableListComponent } from './shared/reusable-list/reusable-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CollectionComponent } from './collection/collection.component';

@NgModule({
  declarations: [
    AppComponent,
    ReusableCardComponent,
    ReusableListComponent,
    HomepageComponent,
    CollectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
