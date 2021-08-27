import { Route } from "react-router-dom";
import { CustomCard } from "@tsamantanis/react-glassmorphism";

import "./UserTemplateStyle.scss";

const UserTemplate = (props) => {
  const { Component, ...restProps } = props;

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <div className="template__user">
            <CustomCard effectColor="#000" blur={10}>
              <Component {...propsRoute} />
            </CustomCard>
          </div>
        );
      }}
    />
  );
};

export default UserTemplate;
