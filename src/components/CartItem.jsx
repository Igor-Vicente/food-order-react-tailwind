import { currencyFormatter } from '../util/formatting';

const CartItem = ({ name, quantity, price, onIncrease, onDecrease }) => {
  return (
    <li className="flex justify-between items-center my-2">
      <p>
        {name} - {quantity} * {currencyFormatter.format(price)}
      </p>
      <p id="cart-item-actions" className="flex gap-4 items-center">
        <button
          onClick={onDecrease}
          className="cursor-pointer w-6 h-6 rounded-full bg-bgBodyGradient2 text-yellowDark  flex items-center justify-center text-xl hover:text-bgBodyGradient2 hover:bg-yellowDark"
        >
          -
        </button>
        <span>QTY</span>
        <button
          onClick={onIncrease}
          className="cursor-pointer w-6 h-6 rounded-full bg-bgBodyGradient2 text-yellowDark flex items-center justify-center text-xl hover:text-bgBodyGradient2 hover:bg-yellowDark"
        >
          +
        </button>
      </p>
    </li>
  );
};

export default CartItem;
