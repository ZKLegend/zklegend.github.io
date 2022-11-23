import React from "react";
import "./style.css";
import { Button, Input, Form } from "antd";

const Footer = () => {
  return (
    <div className="footer">
      <div className="subscribe-container">
        <span className="sub-heading">Subcribe to our</span>
        <h2 className="heading">Newsletter</h2>
        <div className="email-form-container">
          <Form style ={{marginTop: '30px'}}>
            <Input.Group compact>
                <Input style ={{width: 'calc(100% - 90px)'}} placeholder="Enter email address"/>
                <Button>Submit</Button>
            </Input.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
