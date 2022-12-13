import React from "react";
import { useState } from "react";
import { Form, Input, Button, Typography, Row, Col } from "antd";
import { Link } from "react-router-dom";

const { Text } = Typography;

const Login = (props) => {
  console.log("Props:", props);
  //   const [form] = Form.useForm();
  const [validation, setValidation] = useState(true);
  const onFinish = (values) => {
    console.log(values);
    if (
      values.username != localStorage.getItem("username") ||
      values.password != localStorage.getItem("password")
    ) {
      setValidation(false);
    }
    if (
      values.username == localStorage.getItem("username") &&
      values.password == localStorage.getItem("password")
    ) {
      props.setIsLogin(true);
    }
  };

  return (
    <>
      {props.isLogin ? (
        <>
          {" "}
          <h1 style={{ color: "white" }}>Login Success</h1>
          <Link to="/">
            <Button
              style={{ display: "block", margin: "auto", marginBottom: "20px" }}
            >
              Back to Home
            </Button>
          </Link>
        </>
      ) : (
        <>
          <h1 style={{ color: "white" }}>THIS IS LOGIN PAGE</h1>
          <Row>
            <Col span={16} offset={6}>
              <Form
                // form={form}
                name="login"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 6 }}
                onFinish={onFinish}
              >
                <Form.Item
                  rules={[
                    { require: "true", message: "Please input your username!" },
                  ]}
                  name="username"
                  label={<label style={{ color: "white" }}>Username: </label>}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  rule={[
                    { require: "true", message: "Please input your password!" },
                  ]}
                  name="password"
                  label={<label style={{ color: "white" }}>Password: </label>}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ display: "block" }}
                  >
                    Log in
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
          <Row justify={"center"} style={{ marginBottom: "20px" }}>
            <Col>
              {" "}
              {!validation && (
                <Text style={{ color: "red" }}>
                  Your username or password is wrong
                </Text>
              )}
              <br />
              <Text style={{ color: "white", textAlign: "center" }}>
                Don't have account? <Link to="/register">Register</Link> now
              </Text>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default Login;
