import { useContext } from 'react';
import { CartContext } from '../store/CartContext';
import Modal from './UI/Modal';
import { currencyFormatter } from '../util/formatting';
import Button from './UI/Button';
import { UserProgressContext } from '../store/UserProgressContext';

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
      <h2 className="my-4">Your Cart</h2>
      <ul className="my-2">
        {cartCtx.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p id="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p id="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        <Button>Go to Checkout</Button>
      </p>
    </Modal>
  );
};

export default Cart;
