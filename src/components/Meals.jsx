import { useEffect, useState } from 'react';
import MealItem from './MealItem';

const Meals = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      //todo --> try catch no request
      const response = await fetch('http://localhost:3000/meals');

      if (!response.ok) {
        //tratativa de erro
      }

      const meals = await response.json();
      setLoadedMeals(meals);
    };

    fetchMeals();
  }, []);

  return (
    <ul id="meals" className="max-w-6xl my-8 mx-auto grid grid-cols-meals gap-4 p-4">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
