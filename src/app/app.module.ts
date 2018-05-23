import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { StreamsListComponent } from './streams-list/streams-list.component';
import { StreamCardComponent } from './stream-card/stream-card.component';

import { StreamService } from './stream.service';


@NgModule({
  declarations: [
    AppComponent,
    StreamsListComponent,
    StreamCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ StreamService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
