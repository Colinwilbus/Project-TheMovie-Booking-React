import { Fragment } from "react";
import { Route } from "react-router-dom";
import FooterComponent from "./layout/footer/FooterComponent";
import HeaderComponent from "./layout/header/HeaderComponent";

export const HomeTemplate = (props) => {
  const { Component, ...restProps } = props;

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <HeaderComponent />
            <Component {...propsRoute} />
            <FooterComponent />
          </Fragment>
        );
      }}
    ></Route>
  );
};
