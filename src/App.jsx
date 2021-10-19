import "./App.scss";

import { Navbar } from "./Components/Navbar/Navbar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Components/Home/Home.jsx";
import { About } from "./Components/About/About.jsx";
import { Footer } from "./Components/Footer/Footer.jsx";
import { Projects } from "./Components/Projects/Projects.jsx";
import { Resume } from "./Components/Resume/Resume.jsx";
import { Contact } from "./Components/Contact/Contact.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div id="layout">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            {/* <Route path="*" component={NotFound} /> */}
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
