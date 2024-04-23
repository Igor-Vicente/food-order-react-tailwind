import { logoJpg } from '../assets';
import Button from './UI/Button';

const Header = () => {
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
        <Button textOnly className={'font-lato text-2xl'}>
          Cart (0)
        </Button>
      </nav>
    </header>
  );
};

export default Header;
