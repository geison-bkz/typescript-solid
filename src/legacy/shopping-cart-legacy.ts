type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu Carrinho está vazio');
    }

    this._orderStatus = 'closed';
    this.sendMessage(`Seu pedido com total de R$${this.total()} foi recebido`);
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log('Mensagem enviada>:', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso...');
  }

  clear(): void {
    console.log('Carrinho de compras limpo...');
    this._items.length = 0;
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }
}

const shoppingCartLegacy = new ShoppingCartLegacy();
shoppingCartLegacy.addItem({ name: 'Camiset', price: 49.91 });
shoppingCartLegacy.addItem({ name: 'Caderno', price: 9.9123 });
shoppingCartLegacy.addItem({ name: 'Lápis', price: 1.59 });

console.log(shoppingCartLegacy.items);
console.log(shoppingCartLegacy.total());
console.log(shoppingCartLegacy.orderStatus);
shoppingCartLegacy.checkout();
console.log(shoppingCartLegacy.orderStatus);
