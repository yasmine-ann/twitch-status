import { Component, Input, OnInit } from '@angular/core';
import { Stream } from '../Stream';

@Component({
  selector: 'app-stream-card',
  templateUrl: './stream-card.component.html',
  styleUrls: ['./stream-card.component.css']
})
export class StreamCardComponent implements OnInit {

  @Input() stream: Stream;

  constructor() { }

  ngOnInit() {
  }

}
