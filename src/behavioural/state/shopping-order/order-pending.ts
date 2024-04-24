import { ShoppingOrder } from './shopping-order';
import { OrderApproved } from './order-approved';
import { OrderRejected } from './order-rejected';
import { ShoppingOrderState } from '../interfaces/shopping-order-state';

export class OrderPending implements ShoppingOrderState {
  private name = 'OrderPending';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    this.order.setState(new OrderApproved(this.order));
  }

  rejectPayment(): void {
    this.order.setState(new OrderRejected(this.order));
  }

  waitPayment(): void {
    console.log('O pedido já está no estado pagamento pendente.');
  }

  shipOrder(): void {
    console.log('Não posso enviar o pedido com pagamento pendente.');
  }
}
