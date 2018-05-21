import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { Stream } from './Stream';
import { STREAMS } from './mock-streams';

@Injectable()
export class StreamService {

  streams: Stream[] = [];


  streamsUrl: string = 'https://wind-bow.gomix.me/twitch-api/streams/';

  constructor(private http: HttpClient) {}

  getStreams(name): Observable<any> {
    // console.log(this.streamsUrl);
    return this.http.get(this.streamsUrl + name);
  }
}
