import { OrderStatus } from './interfaces/OrderStatus';
import { ShoppingCartProtocol } from './interfaces/ShoppingCartProtocol';
import { MessagingProtocol } from './interfaces/MessagingProtocol';
import { PersistencyProtocol } from './interfaces/PersistencyProtocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
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
    this.messaging.sendMessage(
      `Seu pedido total com desconto de R$${this.cart.totalWithDiscount()} foi recebido`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
