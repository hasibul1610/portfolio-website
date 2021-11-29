import './App.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>

      <Router>
        <Switch>
          <Route>
            <Home></Home>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
