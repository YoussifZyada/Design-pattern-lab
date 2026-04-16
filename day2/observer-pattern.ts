interface Device {
  name: string;
  update(temperature: number, humidity: number): void;
}

class Phone implements Device {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(temperature: number, humidity: number): void {
    console.log(`${this.name}: Temperature is ${temperature}°C, Humidity is ${humidity}%`);
  }
}

class Tablet implements Device {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(temperature: number, humidity: number): void {
    console.log(`${this.name}: Temperature is ${temperature}°C, Humidity is ${humidity}%`);
  }
}

class SmartHome implements Device {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(temperature: number, humidity: number): void {
    console.log(`${this.name}: Temperature is ${temperature}°C, Humidity is ${humidity}%`);
  }
}

class WeatherStation {
  private devices: Device[] = [];
  private temperature: number = 0;
  private humidity: number = 0;

  subscribe(device: Device): void {
    this.devices.push(device);
    console.log(`${device.name} subscribed to weather updates.`);
  }

  unsubscribe(device: Device): void {
    const index = this.devices.indexOf(device);
    if (index > -1) {
      this.devices.splice(index, 1);
      console.log(`${device.name} unsubscribed from weather updates.`);
    }
  }

  setWeatherData(temperature: number, humidity: number): void {
    console.log('\nWeather Station: New weather data received!');
    this.temperature = temperature;
    this.humidity = humidity;
    this.notify();
  }

  private notify(): void {
    for (const device of this.devices) {
      device.update(this.temperature, this.humidity);
    }
  }
}

const weatherStation = new WeatherStation();
const phone = new Phone('Phone');
const tablet = new Tablet('Tablet');
const smartHome = new SmartHome('SmartHome');

weatherStation.subscribe(phone);
weatherStation.subscribe(tablet);
weatherStation.subscribe(smartHome);

weatherStation.setWeatherData(30, 60);
