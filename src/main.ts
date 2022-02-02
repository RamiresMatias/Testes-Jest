import { Order } from './classes/order'
import { Persistency } from './services/persistency'
import { Product } from './classes/product'
import { ShoppingCart } from './classes/shopping-cart'
import { FiftyPercentDiscount } from './classes/discount'
import { IndividualCustomer } from './classes/customer'
import { MessagingProtocol } from './interfaces/messaging-protocol'

class MessagingMock implements MessagingProtocol {
  sendMessage(msg: string): void {
    console.log(`A mensagem: ${msg} foi enviada pelo mock`)
  }
}

const messagingMock = new MessagingMock()

const fiftyPercentDiscount = new FiftyPercentDiscount()
const shoppingCart = new ShoppingCart(fiftyPercentDiscount)
const persistency = new Persistency()
const customer = new IndividualCustomer('Luiz', 'Miranda', '111.111.111-11')
const order = new Order(shoppingCart, messagingMock, persistency, customer)
shoppingCart.addItem(new Product('Camiseta', 49.9))
shoppingCart.addItem(new Product('Caneta', 2.9))
shoppingCart.addItem(new Product('Borracha', 4.25))

console.log(shoppingCart.items)
console.log(shoppingCart.total())
console.log(shoppingCart.totalWithDiscount())
console.log(order.orderStatus)
order.checkout()
console.log(order.orderStatus)
