class Shape {
  draw() {
    throw new Error('draw method must be implemented');
  }
}

class Circle extends Shape {
  draw() {
    return 'Drawing a circle';
  }
}

class Square extends Shape {
  draw() {
    return 'Drawing a square';
  }
}

class Triangle extends Shape {
  draw() {
    return 'Drawing a triangle';
  }
}

class ShapeDrawer {
  draw(shape) {
    return shape.draw();
  }
}

// Usage
const drawer = new ShapeDrawer();
const circle = new Circle();
const square = new Square();
const triangle = new Triangle();

console.log(drawer.draw(circle));
console.log(drawer.draw(square));
console.log(drawer.draw(triangle));

module.exports = { Shape, Circle, Square, Triangle, ShapeDrawer };
