import { OrderStatus } from './interfaces/OrderStatus';
import { Messaging } from '../services/Messaging';
import { Persistency } from '../services/Persistency';
import { ShoppingCart } from './ShoppingCart';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu Carrinho está vazio');
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage(
      `Seu pedido com total de R$${this.cart.total()} foi recebido`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
