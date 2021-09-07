import "./App.css";
import { createBrowserHistory } from "history";
import { BrowserRouter, Switch } from "react-router-dom";
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
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AdminTemplate from "./templates/adminTemplate/AdminTemplate";
import DashboardAdminComponent from "./pages/Admin/Dashboard/DashboardAdminComponent";
import ShowTimesAdminComponent from "./pages/Admin/ShowTimes/ShowTimesAdminComponent";
import ShowFilmsAdminComponent from "./pages/Admin/ShowFilms/ShowFilmsAdminComponent.jsx";

export const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <LazyLoadingLogoComponent />
      <Switch>
        <HomeTemplate exact path="/" Component={HomePage} />
        <HomeTemplate exact path="/home" Component={HomePage} />
        <HomeTemplate
          exact
          path="/movie-detail/:id"
          Component={MovieDetailPage}
        />
        <CheckoutTemplate
          exact
          path="/check-out/:id"
          Component={CheckoutPage}
        />
        <UserTemplate exact path="/login" Component={LoginPage} />
        <UserTemplate exact path="/profile" Component={ProfilePage} />
        <UserTemplate exact path="/register" Component={RegisterPage} />
        <AdminTemplate
          exact
          path="/admin"
          Component={DashboardAdminComponent}
        />
        <AdminTemplate
          exact
          path="/admin/dashboard"
          Component={DashboardAdminComponent}
        />
        <AdminTemplate
          path="/admin/showfilms"
          Component={ShowFilmsAdminComponent}
        />
        <AdminTemplate
          path="/admin/showTimes"
          Component={ShowTimesAdminComponent}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
