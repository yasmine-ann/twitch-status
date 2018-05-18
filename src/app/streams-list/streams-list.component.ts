import { Component, OnInit } from '@angular/core';
import { Stream } from '../Stream';
import { StreamService } from '../stream.service';

@Component({
  selector: "app-streams-list",
  templateUrl: "./streams-list.component.html",
  styleUrls: ["./streams-list.component.css"]
})
export class StreamsListComponent implements OnInit {
  
  streams: Stream[];

  constructor(private streamService: StreamService) {}

  ngOnInit() {
    this.getStreams();
  }

  getStreams(): void {
    this.streamService.getStreams()
      .subscribe(streams => this.streams = streams);
  }
}
