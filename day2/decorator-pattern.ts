abstract class Pizza {
  abstract getDescription(): string;
  abstract cost(): number;
}

class Margherita extends Pizza {
  getDescription(): string {
    return 'Margherita';
  }

  cost(): number {
    return 8;
  }
}

abstract class PizzaDecorator extends Pizza {
  protected decoratedPizza: Pizza;

  constructor(pizza: Pizza) {
    super();
    this.decoratedPizza = pizza;
  }

  getDescription(): string {
    return this.decoratedPizza.getDescription();
  }

  cost(): number {
    return this.decoratedPizza.cost();
  }
}

class Cheese extends PizzaDecorator {
  getDescription(): string {
    return `${this.decoratedPizza.getDescription()}, Cheese`;
  }

  cost(): number {
    return this.decoratedPizza.cost() + 2;
  }
}

class Olives extends PizzaDecorator {
  getDescription(): string {
    return `${this.decoratedPizza.getDescription()}, Olives`;
  }

  cost(): number {
    return this.decoratedPizza.cost() + 1.5;
  }
}

class Mushrooms extends PizzaDecorator {
  getDescription(): string {
    return `${this.decoratedPizza.getDescription()}, Mushrooms`;
  }

  cost(): number {
    return this.decoratedPizza.cost() + 1;
  }
}

class Pepperoni extends PizzaDecorator {
  getDescription(): string {
    return `${this.decoratedPizza.getDescription()}, Pepperoni`;
  }

  cost(): number {
    return this.decoratedPizza.cost() + 2.5;
  }
}

let pizza: Pizza = new Margherita();
pizza = new Cheese(pizza);
pizza = new Olives(pizza);
pizza = new Mushrooms(pizza);
pizza = new Pepperoni(pizza);
console.log(`Order: ${pizza.getDescription()}`);
console.log(`Total Cost: $${pizza.cost()}`);
