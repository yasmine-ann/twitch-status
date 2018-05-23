import { Component, OnInit } from "@angular/core";
import { Stream } from "../Stream";
import { StreamService } from "../stream.service";

@Component({
  selector: "app-streams-list",
  templateUrl: "./streams-list.component.html",
  styleUrls: ["./streams-list.component.css"]
})
export class StreamsListComponent implements OnInit {
  streams: Stream[] = [];

  stream: Stream;

  searchValue: string = '';

  constructor(private streamService: StreamService) {}

  ngOnInit() {
    this.getStreams("freecodecamp");
  }

  getStreams(name): void {
    this.streamService.getStreams(name).subscribe(data => {
      if (data["stream"] != null) {
        this.stream = {
          displayName: data["stream"]["channel"]["display_name"],
          name: data["stream"]["channel"]["name"],
          game: data["stream"]["game"],
          status: data["stream"]["channel"]["status"],
          image: data["stream"]["preview"]["medium"],
          url: data["stream"]["channel"]["url"]
        };
      }
      else {
        this.stream = {
          displayName: name,
          name: name,
          game: null,
          status: "This stream is offline or unavailable.",
          image: null,
          url: "https://www.twitch.tv/" + name
        }
      }
      this.streams.push(this.stream);
      this.searchValue = null;
    });
  }

  deleteStream(i: number): void {
    this.streams.splice(i, 1);
  }
}
