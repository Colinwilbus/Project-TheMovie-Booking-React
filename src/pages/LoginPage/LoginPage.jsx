import React from "react";
import { Form, Input, Button } from "antd";
import "./LoginPageStyle.scss";
import logo from "../../assets/img/logo_2.png";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function LoginPage(props) {
  console.log(props);
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch({
      type: "postUserLoginAction",
      userLogin: values,
      history: props.history,
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div data-aos="zoom-out" data-aos-once="true" className="Login">
      <NavLink to="/home">
        <img src={logo} alt="" />
      </NavLink>
      <h3>JOIN US NOW</h3>
      <div className="login__form">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="taiKhoan"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input placeholder="username" />
          </Form.Item>

          <Form.Item
            name="matKhau"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder="password" />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
