import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-gallery',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.css'
})
export class GalleryComponent {
    images = [
        { src: 'video/1001172737.jpg' },
        { src: 'video/1001186047.jpg' },
        { src: 'video/1001187675.jpg' }
    ];

    videos = [
        { src: 'video/1001302495.mp4' },
        { src: 'video/1001302496_2.mp4' },
        { src: 'video/1001302541.mp4' }
    ];

    playingStates: boolean[] = [false, false, false];

    toggleVideo(index: number, video: HTMLVideoElement) {
        if (video.paused) {
            video.play();
            this.playingStates[index] = true;
        } else {
            video.pause();
            this.playingStates[index] = false;
        }
    }
}
