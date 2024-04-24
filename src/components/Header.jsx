import { useContext } from 'react';
import { logoJpg } from '../assets';
import Button from './UI/Button';
import { CartContext } from '../store/CartContext';
import { UserProgressContext } from '../store/UserProgressContext';

const Header = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  const handleShowCart = () => {
    userProgressCtx.showCart();
  };

  return (
    <header className="flex justify-between items-center py-12 px-[10%] xl:px-[20%]">
      <div className="flex items-center gap-4">
        <img
          src={logoJpg}
          alt="organized dinner plate"
          className="w-16 h-16 object-contain border-2 border-yellow rounded-full"
        />
        <h1 className="font-lato font-bold text-4xl text-yellow tracking-[0.2rem] uppercase">
          FoodOrder
        </h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart} className={'font-lato text-2xl'}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
};

export default Header;
