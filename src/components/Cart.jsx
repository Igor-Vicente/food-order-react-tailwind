import { useContext } from 'react';
import { CartContext } from '../store/CartContext';
import Modal from './UI/Modal';
import { currencyFormatter } from '../util/formatting';
import Button from './UI/Button';
import { UserProgressContext } from '../store/UserProgressContext';
import CartItem from './CartItem';

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0,
  );

  const handleCloseCart = () => {
    userProgressCtx.hideCart();
  };

  return (
    <Modal open={userProgressCtx.progress === 'cart'}>
      <h2 className="my-4 font-bold text-xl">Your Cart</h2>
      <ul className="my-2">
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onDecrease={() => cartCtx.removeItem(item.id)}
            onIncrease={() => cartCtx.addItem(item)}
          />
        ))}
      </ul>
      <p className="flex justify-end my-8 text-lg font-bold text-darkGray">
        {currencyFormatter.format(cartTotal)}
      </p>
      <p id="modal-actions" className="flex justify-end gap-4">
        <Button textOnly onClick={handleCloseCart} className={'text-bgBodyGradient2'}>
          Close
        </Button>
        <Button>Go to Checkout</Button>
      </p>
    </Modal>
  );
};

export default Cart;
