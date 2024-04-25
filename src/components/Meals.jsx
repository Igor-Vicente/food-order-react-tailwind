import MealItem from './MealItem';
import useHttp from '../hooks/useHttp';
import Error from './Error';

const requestConfig = {};

const Meals = () => {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp('http://localhost:3000/meals', requestConfig, []);

  console.log(loadedMeals);

  if (isLoading) return <p className="text-center text-xl text-yellowDark">Fetching meals...</p>;

  if (error) return <Error title="Failed to fetch meals" message={error} />;

  return (
    <ul id="meals" className="max-w-6xl my-8 mx-auto grid grid-cols-meals gap-4 p-4">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
