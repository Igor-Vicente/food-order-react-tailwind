import { useContext } from 'react';
import { currencyFormatter } from '../util/formatting';
import Button from './UI/Button';
import { CartContext } from '../store/CartContext';

const MealItem = ({ meal }) => {
  const cartCtx = useContext(CartContext);

  const handleAddMealItem = () => {
    cartCtx.addItem(meal);
  };

  return (
    <li
      id="meal-item"
      className="bg-bgMealItem rounded-2xl overflow-hidden text-center shadow-black shadow-md"
    >
      <article className="flex flex-col justify-between h-full">
        <img
          src={`http://localhost:3000/${meal.image}`}
          alt=""
          className="w-full h-80 object-cover"
        />
        <div>
          <h3 className="text-2xl font-bold my-3">{meal.name}</h3>
          <p className="inline-block bg-mealPrice text-yellow text-base font-bold py-2 px-8 rounded">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="m-4">{meal.description}</p>
        </div>
        <p className="mb-6">
          <Button onClick={handleAddMealItem}> Add to Cart</Button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
