class Logger {
  log(msg) {
    throw new Error('log method must be implemented');
  }
}

class FileLogger extends Logger {
  log(msg) {
    return `Log to file: ${msg}`;
  }
}

class ConsoleLogger extends Logger {
  log(msg) {
    return `Log to console: ${msg}`;
  }
}

class DatabaseLogger extends Logger {
  log(msg) {
    return `Log to database: ${msg}`;
  }
}

class App {
  constructor(logger) {
    if (!(logger instanceof Logger)) {
      throw new Error('Logger must be an instance of Logger');
    }
    this.logger = logger;
  }

  run() {
    return this.logger.log('Application is running...');
  }

  stop() {
    return this.logger.log('Application is stopping...');
  }
}

const fileLogger = new FileLogger();
const consoleLogger = new ConsoleLogger();
const dbLogger = new DatabaseLogger();

const app1 = new App(fileLogger);
console.log(app1.run());
console.log(app1.stop());

const app2 = new App(consoleLogger);
console.log(app2.run());

const app3 = new App(dbLogger);
console.log(app3.run());

module.exports = { Logger, FileLogger, ConsoleLogger, DatabaseLogger, App };
