import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Fries from './Fries'
import Coffee from './Coffee';
import Sushi from './Sushi';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/fries">
          <Fries />
        </Route>
        <Route exact path="/coffee">
          <Coffee />
        </Route>
        <Route exact path="/sushi">
          <Sushi />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
