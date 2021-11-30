import './App.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Project from './pages/Home/Project/Project';

function App() {
  return (
    <div>

      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/project/:projectId">
            <Project></Project>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
