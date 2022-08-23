import Home from "./pages/home/Home";
import Profile from "./pages/profile/profile";
import Login from "./pages/login/Login";
import Registre from "./pages/registre/Registre";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Profile">
          <Profile />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Registre">
          <Registre />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
