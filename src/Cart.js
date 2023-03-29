import { CartCard } from './CartCard';

export function Cart({ cartItems, removeItemFromCart }) {

  return (
    <div className="food-cart">
      <div className="product-list">
        <h1>Product list</h1>
        <p>Total Items: {cartItems.length}</p>
        <CartCard cartItems={cartItems} removeItemFromCart={removeItemFromCart} />
      </div>
    </div>
  );
}
