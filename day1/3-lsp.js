class Vehicle {
  move() {
    return 'Vehicle is moving';
  }
}

class EngineVehicle extends Vehicle {
  startEngine() {
    return 'Engine started';
  }

  move() {
    return 'Engine vehicle is moving';
  }
}

class NonEngineVehicle extends Vehicle {
  move() {
    return 'Non-engine vehicle is moving';
  }
}

class Car extends EngineVehicle {
  startEngine() {
    return 'Car engine started';
  }

  move() {
    return 'Car is driving on the road';
  }
}

class Bicycle extends NonEngineVehicle {
  pedal() {
    return 'Pedaling the bicycle';
  }

  move() {
    return 'Bicycle is rolling';
  }
}

class Motorcycle extends EngineVehicle {
  startEngine() {
    return 'Motorcycle engine started';
  }

  move() {
    return 'Motorcycle is riding';
  }
}

// Usage
const car = new Car();
console.log(car.startEngine()); 
console.log(car.move());

const bike = new Bicycle();
console.log(bike.move());      
console.log(bike.pedal());

const motorcycle = new Motorcycle();
console.log(motorcycle.startEngine()); 
console.log(motorcycle.move()); 

function testVehicle(vehicle) {
  return vehicle.move();
}

console.log(testVehicle(car));       
console.log(testVehicle(bike));       
console.log(testVehicle(motorcycle));

module.exports = { Vehicle, EngineVehicle, NonEngineVehicle, Car, Bicycle, Motorcycle };
