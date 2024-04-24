import { useContext } from 'react';
import Modal from './UI/Modal';
import { CartContext } from '../store/CartContext';
import { currencyFormatter } from '../util/formatting';
import Button from './UI/Button';
import Input from './Input';
import { UserProgressContext } from '../store/UserProgressContext';

const Checkout = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0,
  );
  const handleClose = () => {
    userProgressCtx.hideCheckout();
  };

  return (
    <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
      <form>
        <h2 className="text-xl font-bold text-center uppercase">Checkout</h2>
        <p>Total amount: {currencyFormatter.format(cartTotal)}</p>

        <Input label="Full Name" type="text" id="full-name" />
        <Input label="E-mail address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="flex justify-start gap-4">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p id="modal-actions" className="flex justify-end gap-4">
          <Button type="button" textOnly onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleClose}>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
};

export default Checkout;
