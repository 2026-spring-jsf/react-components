import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { PizzaToppings } from './PizzaToppings';
import TsteeleComponent from './TsteeleComponent';

function App() {

  return (
    <div
      className='m-3'
    >
      <h1>
        React Components
      </h1>
      <PizzaToppings />
      <TsteeleComponent />
    </div>
  )
}

export default App
