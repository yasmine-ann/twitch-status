import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from "rxjs/observable/of";
import { Stream } from './Stream';
import { STREAMS } from './mock-streams';

@Injectable()
export class StreamService {

  public streams: Stream[] = [];

  constructor() { }

  getStreams(): Observable<Stream[]> {
    return of(STREAMS);
  }

}
