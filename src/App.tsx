import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const PizzaToppings = () => <h2>Choose your pizza toppings...</h2>

function App() {

  return (
    <div
      className='m-3'
    >
      <h1>
        React Components
      </h1>
      <PizzaToppings />
      <PizzaToppings />
      <PizzaToppings />
      <PizzaToppings />
      <PizzaToppings />
    </div>
  )
}

export default App
