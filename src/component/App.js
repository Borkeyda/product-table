//import { ProductRow } from './ProductRow';
import '../styles/App.css';
import { ProductTable } from './ProductTable';
import { SearchBar } from './SearchBar';

function App() {
  return (
    <section className='filterable-product-table'>
      <SearchBar/>
      <ProductTable/>
    </section>
  );
}

export default App;
