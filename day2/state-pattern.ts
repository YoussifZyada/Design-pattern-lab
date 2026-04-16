interface LightState {
  change(trafficLight: TrafficLight): void;
  getColor(): string;
}

class RedState implements LightState {
  change(trafficLight: TrafficLight): void {
    console.log('Changing state...');
    trafficLight.setState(new GreenState());
  }

  getColor(): string {
    return 'Red';
  }
}

class GreenState implements LightState {
  change(trafficLight: TrafficLight): void {
    console.log('Changing state...');
    trafficLight.setState(new YellowState());
  }

  getColor(): string {
    return 'Green';
  }
}

class YellowState implements LightState {
  change(trafficLight: TrafficLight): void {
    console.log('Changing state...');
    trafficLight.setState(new RedState());
  }

  getColor(): string {
    return 'Yellow';
  }
}

class TrafficLight {
  private state: LightState;

  constructor() {
    this.state = new RedState();
  }

  setState(state: LightState): void {
    this.state = state;
  }

  change(): void {
    this.state.change(this);
  }

  getCurrentColor(): string {
    return this.state.getColor();
  }
}

const trafficLight = new TrafficLight();
console.log(`Traffic light is ${trafficLight.getCurrentColor()}.`);
for (let i = 0; i < 4; i++) {
  trafficLight.change();
  console.log(`Traffic light is now ${trafficLight.getCurrentColor()}.`);
}
