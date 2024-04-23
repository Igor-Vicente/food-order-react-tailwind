const MealItem = ({ meal }) => {
  return (
    <li id="meal-item" className="bg-bgMealItem rounded-2xl overflow-hidden text-center shadow-xl">
      <article className="flex flex-col justify-between h-full">
        <img
          src={`http://localhost:3000/${meal.image}`}
          alt=""
          className="w-full h-80 object-cover"
        />
        <div>
          <h3 className="text-2xl font-bold my-3">{meal.name}</h3>
          <p className="inline-block bg-mealPrice text-yellow text-base font-bold py-2 px-8 rounded">
            {meal.price}
          </p>
          <p className="m-4">{meal.description}</p>
        </div>
        <p className="mb-6">
          <button className="bg-yellow border-yellow text-[#1f1a09] py-2 px-6 rounded">
            Add to Cart
          </button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
