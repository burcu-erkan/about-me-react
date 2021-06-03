import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

import Homepages from "./components/Homepages";
import Tools from "./components/Tools";
import MyChoices from "./components/MyChoices";
import Websites from "./components/Websites";
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Homepages} />
          <Route path="/tools" component={Tools} />
          <Route path="/mychoices" component={MyChoices} />
          <Route path="/websites" component={Websites} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
