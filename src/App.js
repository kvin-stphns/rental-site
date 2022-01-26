import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Rentals from "./components/Rentals.js";
import Main from "./components/MainComp.js";
// import Memberships from "./components/Memberships.js";
// import Pricing from "./components/Pricing.js";
// import { RENTALS } from "./data/Rentals";
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavbarComp from "./components/NavbarComp.js";






function App() {
  return (
    <Router>
    <div>
     <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/rentals" component={Main} />
      {/* <Route path="/memberships" component={Memberships} />
      <Route path="/pricing" component={Pricing} /> */}
     </Switch>
    </div>
    {/* <Main /> */}
    </Router>
  );
}

export default App;