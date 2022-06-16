import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {add,remove} from './redux';

function App() {
  const dispatch =useDispatch();
  const product = [
    {
    id:1,
    price:10
  },
    {
    id:2,
    price:10
  },
    {
    id:3,
    price:120
  },

]
  return (
    <div className="App">
     {product.map(p => <div>
      <p>product {p.id}</p>
      <p>price {p.price}</p>
      <button onClick={() => dispatch(add({product:p}))}>Add</button>
      <button onClick={()=>dispatch(remove({product:p}))}>remove</button>
     </div>)}
    </div>
  );
}

export default App;
