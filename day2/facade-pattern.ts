class PaymentService {
  processPayment(amount: number): boolean {
    console.log(`Processing payment of $${amount}...`);
    const isValid = amount > 0;
    console.log(isValid ? 'Payment successful!' : 'Payment failed!');
    return isValid;
  }
}

class InventoryService {
  updateInventory(productId: string, quantity: number): void {
    console.log(`Updating inventory for product ${productId}, quantity: ${quantity}`);
  }
}

class NotificationService {
  sendNotification(userId: string, message: string): void {
    console.log(`Sending notification to ${userId}: ${message}`);
  }
}

class LoggingService {
  logTransaction(transactionId: string, details: string): void {
    console.log(`Logging transaction [${transactionId}]: ${details}`);
  }
}

class ValidationService {
  validateOrder(order: Order): boolean {
    console.log('Validating order...');
    return order.items.length > 0 && order.totalAmount > 0;
  }
}

interface Order {
  orderId: string;
  userId: string;
  items: { productId: string; quantity: number; price: number }[];
  totalAmount: number;
}

class CheckoutService {
  private paymentService: PaymentService;
  private inventoryService: InventoryService;
  private notificationService: NotificationService;
  private loggingService: LoggingService;
  private validationService: ValidationService;

  constructor() {
    this.paymentService = new PaymentService();
    this.inventoryService = new InventoryService();
    this.notificationService = new NotificationService();
    this.loggingService = new LoggingService();
    this.validationService = new ValidationService();
  }

  processCheckout(order: Order): boolean {
    try {
      if (!this.validationService.validateOrder(order)) {
        throw new Error('Order validation failed');
      }

      const paymentSuccess = this.paymentService.processPayment(order.totalAmount);
      if (!paymentSuccess) {
        throw new Error('Payment processing failed');
      }

      for (const item of order.items) {
        this.inventoryService.updateInventory(item.productId, item.quantity);
      }

      this.notificationService.sendNotification(
        order.userId,
        `Your order ${order.orderId} has been processed successfully!`
      );

      this.loggingService.logTransaction(
        order.orderId,
        `Order completed for user ${order.userId}, total: $${order.totalAmount}`
      );

      console.log('Checkout completed successfully!\n');
      return true;
    } catch (error) {
      console.error('Checkout failed:', error);
      return false;
    }
  }
}

const checkout = new CheckoutService();
const order: Order = {
  orderId: 'ORD-12345',
  userId: 'USR-001',
  items: [
    { productId: 'PROD-1', quantity: 2, price: 25 },
    { productId: 'PROD-2', quantity: 1, price: 50 }
  ],
  totalAmount: 100
};
checkout.processCheckout(order);
