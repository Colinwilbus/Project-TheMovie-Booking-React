import "./App.css";
import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HomeTemplate } from "./templates/homeTemplate/HomeTemplate";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MovieDetailPage from "./pages/MovieDetailPage/MovieDetailPage";
import "aos/dist/aos.css";
import "antd/dist/antd.css";

export const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <HomeTemplate exact path="/home" Component={HomePage} />
        <HomeTemplate exact path="/login" Component={LoginPage} />
        <HomeTemplate
          exact
          path="/movie-detail/:id"
          Component={MovieDetailPage}
        />

        <HomeTemplate exact path="/" Component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
