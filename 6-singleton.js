class Config {
  constructor() {
    if (Config.instance) {
      return Config.instance;
    }

    this.settings = {
      apiUrl: 'https://api.example.com',
      timeout: 5000,
      retries: 3
    };

  Config.instance = this;
  }

  static getInstance() {
    if (!Config.instance) {
      Config.instance = new Config();
    }
    return Config.instance;
  }

  get(key) {
    return this.settings[key];
  }

  set(key, value) {
    this.settings[key] = value;
  }

  getAll() {
    return { ...this.settings };
  }
}

const config1 = Config.getInstance();
const config2 = Config.getInstance();

console.log('Are they the same instance?', config1 === config2); // true

config1.set('timeout', 10000);

console.log('config2 timeout:', config2.get('timeout')); // 10000

const config3 = new Config();
console.log('config3 === config1?', config3 === config1);

module.exports = { Config };
