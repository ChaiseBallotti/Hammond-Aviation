import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-video-player',
    template: '<video controls autoplay><source [src]="videoUrl" type="video/mp4"></video>',
    styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
    videoUrl!: string;

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.getVideoStream();
    }

    getVideoStream() {
        this.videoUrl = 'http://localhost:3000/video';
    }
}