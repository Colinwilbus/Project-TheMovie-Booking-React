import "./App.css";
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HomeTemplate } from "./templates/homeTemplate/HomeTemplate";
import HomePage from "./pages/HomePage/HomePage";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/home" exact Component={HomePage} />
        <HomeTemplate path="/" exact Component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
