import { Component, OnInit } from '@angular/core';
import { Stream } from '../Stream';
import { StreamService } from '../stream.service';

@Component({
  selector: "app-streams-list",
  templateUrl: "./streams-list.component.html",
  styleUrls: ["./streams-list.component.css"]
})
export class StreamsListComponent implements OnInit {
  
  streams: Stream[] = [];

  stream: Stream;

  constructor(private streamService: StreamService) {}

  ngOnInit() {
    this.getStreams();
  }

  getStreams(): void {
    this.streamService.getStreams()
      .subscribe(data => {
        this.stream = {
          displayName: data["stream"]["channel"]["display_name"],
          name: data["stream"]["channel"]["name"],
          game: data["stream"]["game"],
          status: data["stream"]["channel"]["status"],
          image: data["stream"]["preview"]["medium"],
          url: data["stream"]["channel"]["url"]
        }
        this.streams.push(this.stream);
      }
  )
  }
}
