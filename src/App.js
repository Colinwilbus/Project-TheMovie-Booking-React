import { Suspense, lazy } from "react";
import "./App.css";
import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from "./pages/HomePage/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage/MovieDetailPage";
import "aos/dist/aos.css";
import "antd/dist/antd.css";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import LazyLoadingLogoComponent from "./components/LazyLoadingComponent/LazyLoadingLogoComponent";
import UserTemplate from "./templates/userTemplate/UserTemplate";
import HomeTemplate from "./templates/homeTemplate/HomeTemplate";
import CheckoutTemplate from "./templates/checkOutTemplate/CheckoutTemplate";

import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfiePage";
// const CheckoutTemplateLazy = lazy(() =>
//   import("./templates/checkOutTemplate/CheckoutTemplate")
// );
// const HomeTemplateLazy = lazy(() =>
//   import("./templates/homeTemplate/HomeTemplate")
// );
// const UserTemplateLazy = lazy(() =>
//   import("./templates/userTemplate/UserTemplate")
// );

export const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter>
      <LazyLoadingLogoComponent />
      <Switch>
        <HomeTemplate exact path="/home" Component={HomePage} />
        <HomeTemplate
          exact
          path="/movie-detail/:id"
          Component={MovieDetailPage}
        />
        <HomeTemplate exact path="/" Component={HomePage} />
        <CheckoutTemplate
          exact
          path="/check-out/:id"
          Component={CheckoutPage}
        />
        <UserTemplate exact path="/login" Component={LoginPage} />
        <UserTemplate exact path="/profile" Component={ProfilePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
