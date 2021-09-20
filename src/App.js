import './App.scss';


import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/">

        </Route>
        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
    </Router>
    </div>
  );
}

export default App;
