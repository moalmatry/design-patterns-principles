interface Observer {
  update(temperature: number, humidity: number, pressure: number): void;
}

interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
  getObservers(): Observer[];
}

class WeatherData implements Subject {
  private observers: Observer[] = [];
  private temperature: number | undefined;
  private humidity: number | undefined;
  private pressure: number | undefined;

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  getObservers(): Observer[] {
    return this.observers;
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(): void {
    if (
      this.temperature !== undefined &&
      this.humidity !== undefined &&
      this.pressure !== undefined
    ) {
      for (let observer of this.observers) {
        observer.update(this.temperature, this.humidity, this.pressure);
      }
    }
  }

  setMeasurements(
    temperature: number,
    humidity: number,
    pressure: number,
  ): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.notifyObservers();
  }
}

class CurrentConditionsDisplay implements Observer {
  private temperature: number | undefined;
  private humidity: number | undefined;
  private pressure: number | undefined;

  constructor(private weatherData: Subject) {
    this.weatherData.registerObserver(this);
  }

  update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.display();
  }
  display() {
    if (
      this.temperature !== undefined &&
      this.humidity !== undefined &&
      this.pressure !== undefined
    ) {
      console.log(
        `Current conditions: ${this.temperature}°C, ${this.humidity}% humidity , ${this.pressure}% pressure`,
      );
      return;
    }
    console.log("Weather data no available");
  }
}
// Client code

const weatherData = new WeatherData();
const currentDisplay = new CurrentConditionsDisplay(weatherData);
// const yesterday = new CurrentConditionsDisplay(weatherData);
weatherData.setMeasurements(80, 65, 30.4);
weatherData.setMeasurements(82, 70, 29.9);

weatherData.setMeasurements(80, 50, 30);
console.log(weatherData.getObservers());
