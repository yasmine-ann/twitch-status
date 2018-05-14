import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StreamsListComponent } from './streams-list/streams-list.component';
import { StreamCardComponent } from './stream-card/stream-card.component';


@NgModule({
  declarations: [
    AppComponent,
    StreamsListComponent,
    StreamCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
