import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Textarea from "react-validation/build/textarea";
import { isEmail, isEmpty, isMobilePhone } from "validator";
import "./contact-form.scss";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      content: "",
    };
  }

  required = (value) => {
    if (isEmpty(value)) {
      return <small className="form-text text-danger">This field is required</small>;
    }
  };

  email = (value) => {
    if (!isEmail(value)) {
      return <small className="form-text text-danger">Invalid email format</small>;
    }
  };

  phone = (value) => {
    if (!isMobilePhone(value)) {
      return <small className="form-text text-danger">Invalid Phone number format</small>;
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      alert(
        " success!" +
          "\n name: " +
          this.state.name +
          "\n email: " +
          this.state.email +
          "\n phone:" +
          this.state.phone +
          "\n content:" +
          this.state.content +
          ""
      );
    }
  };

  render_backup() {
    return (
      <Form
        className="form-group-v1"
        onSubmit={(e) => this.onSubmit(e)}
        ref={(c) => {
          this.form = c;
        }}>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="form-group">
              <Input
                name="name"
                onChange={(e) => {
                  this.setState({ name: e.target.value });
                }}
                value={this.state.name}
                type="text"
                placeholder="Your name *"
                className="form-control"
                validations={[this.required]}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="form-group">
              <Input
                name="phone"
                onChange={(e) => {
                  this.setState({ phone: e.target.value });
                }}
                value={this.state.phone}
                type="text"
                placeholder="Phone number *"
                className="form-control"
                validations={[this.required, this.phone]}
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <Input
            name="email"
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
            value={this.state.email}
            type="email"
            placeholder="Your e-mail *"
            className="form-control"
            validations={[this.required, this.email]}
          />
        </div>

        <div className="form-group">
          <Textarea
            onChange={(e) => {
              this.setState({ content: e.target.value });
            }}
            value={this.state.content}
            className="form-control"
            placeholder="How can we help you ?"
            rows="3"
            validations={[this.required]}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-4 btn-block">
          Submit
        </button>
        <CheckButton
          style={{ display: "none" }}
          ref={(c) => {
            this.checkBtn = c;
          }}
        />
      </Form>
    );
  }

  render() {
    return (
      <div className="section-1 text-center">
        <h6 className="text-uppercase">BOOKINGS</h6>
        <p>Only a select few bookings are taken each year.</p>

        <h6 className="text-uppercase">E-MAIL:</h6>
        <a href={"mailto:simoncar+jolimont@gmail.com?subject=106 Jolimont Road"}>simoncar@gmail.com</a>
        <p></p>
      </div>
    );
  }
}

export default ContactForm;
