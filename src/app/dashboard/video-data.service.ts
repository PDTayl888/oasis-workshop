import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VideoArray } from './dashboard-video-player/types';

const apiUrl = 'https://api.angularbootcamp.com/videos';

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {
  constructor(private http: HttpClient) {}

  do() {
    console.log("hello");
  }

  loadVideos(): Observable<VideoArray[]> {
    return this.http
      .get<VideoArray[]>(apiUrl)
      .pipe(map(videoData => videoData.slice()));
  }
}
