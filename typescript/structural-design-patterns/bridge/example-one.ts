interface MediaPlayerImplementation {
  palyAudio(): void;
  palyVideo(): void;
}

class WindowsMediaPlayer implements MediaPlayerImplementation {
  palyAudio(): void {
    console.log(`Playing audio on windows media player`);
  }
  palyVideo(): void {
    console.log("Playing video on windows media player");
  }
}

class MacMediaPlayer implements MediaPlayerImplementation {
  palyAudio(): void {
    console.log(`Playing audio on mac media player`);
  }
  palyVideo(): void {
    console.log("Playing video on mac media player");
  }
}

abstract class MediaPlayerAbstraction {
  constructor(protected implementation: MediaPlayerImplementation) {}

  abstract playFile(): void;
}

class AudioPlayer extends MediaPlayerAbstraction {
  playFile(): void {
    this.implementation.palyAudio();
  }
}

class VideoPlayer extends MediaPlayerAbstraction {
  playFile(): void {
    this.implementation.palyVideo();
  }
}

// Client code

const WindowsAudioPlayer = new AudioPlayer(new WindowsMediaPlayer());
WindowsAudioPlayer.playFile();

const macOsVideoPlayer = new VideoPlayer(new MacMediaPlayer());

macOsVideoPlayer.playFile();
