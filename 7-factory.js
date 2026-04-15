class Notification {
  send(message) {
    throw new Error('send method must be implemented');
  }
}

class EmailNotification extends Notification {
  constructor() {
    super();
    this.type = 'email';
  }

  send(message) {
    return `Sending EMAIL notification: "${message}"`;
  }
}

class SMSNotification extends Notification {
  constructor() {
    super();
    this.type = 'sms';
  }

  send(message) {
    return `Sending SMS notification: "${message}"`;
  }
}

class PushNotification extends Notification {
  constructor() {
    super();
    this.type = 'push';
  }

  send(message) {
    return `Sending PUSH notification: "${message}"`;
  }
}

class NotificationFactory {
  static create(type) {
    switch (type.toLowerCase()) {
      case 'email':
        return new EmailNotification();
      case 'sms':
        return new SMSNotification();
      case 'push':
        return new PushNotification();
      default:
        throw new Error(`Unknown notification type: ${type}`);
    }
  }
}

// Usage Examples
const emailNotification = NotificationFactory.create('email');
console.log(emailNotification.send('Hello via Email!'));

const smsNotification = NotificationFactory.create('sms');
console.log(smsNotification.send('Hello via SMS!'));

const pushNotification = NotificationFactory.create('push');
console.log(pushNotification.send('Hello via Push!'));

module.exports = { Notification, EmailNotification, SMSNotification, PushNotification, NotificationFactory };
