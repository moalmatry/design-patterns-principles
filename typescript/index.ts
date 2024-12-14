class Amplifier {
  turnOn() {
    console.log("Amplifier is turned on");
  }

  setVolume(level: number) {
    console.log(`Volume is set to ${level}`);
  }
}

class DVDPlayer {
  turnOn() {
    console.log("DVD player is turned on");
  }
  play(movie: string) {
    console.log(`Playing ${movie}`);
  }
}

class Projector {
  turnOn() {
    console.log("Projector is turned on");
  }

  setInput(dvdPlayer: DVDPlayer) {
    console.log("Input set to dvd player");
  }
}

class Lights {
  dim(level: number) {
    console.log(`Lighting is set to ${level}`);
  }
}

class HomeTheaterFacade {
  constructor(
    private amplifier: Amplifier,
    private dvdPlayer: DVDPlayer,
    private projector: Projector,
    private lights: Lights,
  ) {}

  watchMovie(movie: string, volume: number, lights: number) {
    console.log(`Get ready to watch ${movie}`);
    this.lights.dim(lights);
    this.amplifier.turnOn();
    this.amplifier.setVolume(volume);
    this.dvdPlayer.turnOn();
    this.projector.turnOn();
    this.projector.setInput(this.dvdPlayer);
    this.dvdPlayer.play(movie);
    console.log(`playing movie 🥳🥳🥳`);
  }
}

// client code
const amplifier = new Amplifier();
const dvdPlayer = new DVDPlayer();
const projector = new Projector();
const lights = new Lights();
const homeTheater = new HomeTheaterFacade(
  amplifier,
  dvdPlayer,
  projector,
  lights,
);

homeTheater.watchMovie("The Godfather", 10, 100);
