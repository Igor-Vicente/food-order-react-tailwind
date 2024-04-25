import { useContext } from 'react';
import Modal from './UI/Modal';
import { CartContext } from '../store/CartContext';
import { currencyFormatter } from '../util/formatting';
import Button from './UI/Button';
import Input from './Input';
import Error from './Error';
import { UserProgressContext } from '../store/UserProgressContext';
import useHttp from '../hooks/useHttp';

const requestConfig = {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
};

const Checkout = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    clearData,
  } = useHttp('http://localhost:3000/orders', requestConfig);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0,
  );

  const handleClose = () => {
    userProgressCtx.hideCheckout();
  };

  const handleFinish = () => {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      }),
    );
  };

  let actions = (
    <>
      <Button type="button" textOnly onClick={handleClose}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  if (isSending) actions = <span>Sending order data...</span>;
  if (data && !error) {
    return (
      <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleFinish}>
        <h2>Success!</h2>
        <p>Your order was submitted successfully.</p>
        <p>We will get back to you with more details via email within the next few minutes.</p>
        <p className="flex justify-end gap-4">
          <Button onClick={handleFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }
  return (
    <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold text-center uppercase">Checkout</h2>
        <p>Total amount: {currencyFormatter.format(cartTotal)}</p>

        <Input label="Full Name" type="text" id="name" />
        <Input label="E-mail address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="flex justify-start gap-4">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        {error && <Error title="Failed to submit order." message={error} />}
        <p className="flex justify-end gap-4">{actions}</p>
      </form>
    </Modal>
  );
};

export default Checkout;
