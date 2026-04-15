class Printable {
  print() {
    throw new Error('print method must be implemented');
  }
}

class Scannable {
  scan() {
    throw new Error('scan method must be implemented');
  }
}

class Faxable {
  fax() {
    throw new Error('fax method must be implemented');
  }
}

class BasicPrinter {
  print() {
    return 'Printing document...';
  }
}

class AdvancedPrinter {
  print() {
    return 'Printing document...';
  }

  scan() {
    return 'Scanning document...';
  }
}

class AllInOnePrinter {
  print() {
    return 'Printing document...';
  }

  scan() {
    return 'Scanning document...';
  }

  fax() {
    return 'Faxing document...';
  }
}

// Usage
const basicPrinter = new BasicPrinter();
console.log(basicPrinter.print());

const advancedPrinter = new AdvancedPrinter();
console.log(advancedPrinter.print()); 
console.log(advancedPrinter.scan());

const allInOne = new AllInOnePrinter();
console.log(allInOne.print());
console.log(allInOne.scan()); 
console.log(allInOne.fax()); 

module.exports = { BasicPrinter, AdvancedPrinter, AllInOnePrinter };
