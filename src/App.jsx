import { Header, Meals } from './components';
import { CartContextProvider } from './store/CartContext';

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Meals />
    </CartContextProvider>
  );
}

export default App;
