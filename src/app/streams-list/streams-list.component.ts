import { Component, OnInit } from '@angular/core';
import { Stream } from '../Stream';
import { STREAMS } from '../mock-streams';

@Component({
  selector: "app-streams-list",
  templateUrl: "./streams-list.component.html",
  styleUrls: ["./streams-list.component.css"]
})
export class StreamsListComponent implements OnInit {
  
  streams = STREAMS;

  constructor() {}

  ngOnInit() {}
}
