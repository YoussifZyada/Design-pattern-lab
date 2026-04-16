abstract class ControlMethod {
  abstract drive(): void;
}

class ManualControl extends ControlMethod {
  drive(): void {
    console.log('Driving with Manual control (manual gear shifting)');
  }
}

class AutomaticControl extends ControlMethod {
  drive(): void {
    console.log('Driving with Automatic control (automatic gear shifting)');
  }
}

abstract class Vehicle {
  protected controlMethod: ControlMethod;

  constructor(controlMethod: ControlMethod) {
    this.controlMethod = controlMethod;
  }

  setControlMethod(controlMethod: ControlMethod): void {
    this.controlMethod = controlMethod;
  }

  abstract drive(): void;
}

class Car extends Vehicle {
  drive(): void {
    console.log('Car is being driven:');
    this.controlMethod.drive();
  }
}

class Bike extends Vehicle {
  drive(): void {
    console.log('Bike is being driven:');
    this.controlMethod.drive();
  }
}

const car = new Car(new ManualControl());
car.drive();
car.setControlMethod(new AutomaticControl());
car.drive();

const bike = new Bike(new AutomaticControl());
bike.drive();
bike.setControlMethod(new ManualControl());
bike.drive();
