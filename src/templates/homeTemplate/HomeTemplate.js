import { Fragment } from "react";
import { Route } from "react-router-dom";
import FooterComponent from "./layout/footer/FooterComponent";
import HeaderComponent from "./layout/header/HeaderComponent";

const HomeTemplate = (props) => {
  const { Component, ...restProps } = props;

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <HeaderComponent {...propsRoute} />
            <Component {...propsRoute} />
            <FooterComponent {...propsRoute} />
          </Fragment>
        );
      }}
    ></Route>
  );
};
export default HomeTemplate;
