import React, { Component } from "react";

import { Layout } from "../../components/layout/Layout";
import { BannerBottom } from "../../global/banner-bottom/BannerBottom";
import { FormInput } from "../../components/forms/FormInput";
import { Button } from "../../components/buttons/Button";

import styles from "./Contact.module.scss";

const validEmail = RegExp(/^\w@\w+\.\w$/);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

export class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      errors: {
        name: "",
        email: "",
        message: "",
      },
    };
  }

  componentDidMount() {
    document.title = `Letha | ${this.props.title}`;
  }

  handleChange = (event) => {
    const { formData } = this.state;
    const { name, value } = event.target;
    formData[event.target.name] = event.target.value;

    let errors = this.state.errors;

    switch (name) {
      case "name":
        errors.name =
          value.length < 5 ? "Name must be 5 or more characters long" : "";
        break;
      case "email":
        errors.email = validEmail.test(value) ? "" : "email is not valid";
        break;
      case "message":
        errors.message =
          value.length < 8 ? "Message must be 8 characters long!" : "";
        break;
      default:
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm(this.state.errors)) {
      console.info("valid from");
    } else {
      console.error("invalid form");
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <Layout>
        <BannerBottom />
        <div className={styles.wrapper}>
          <section className={styles.contact}>
            <h2>Contact Us</h2>
            <form onSubmit={this.handleSubmit}>
              <FormInput
                label="name:"
                placeholder="enter your name"
                type="text"
                id="name"
                name="name"
                className=""
                onChange={this.handleChange}
                error={errors.name}
              />

              <FormInput
                label="email:"
                placeholder="enter your email address"
                type="email"
                id="email"
                name="email"
                className=""
                onChange={this.handleChange}
                error={errors.email}
              />

              <FormInput
                label="message"
                placeholder="enter your messafe"
                type="textarea"
                id="message"
                name="message"
                className=""
                required
                onChange={this.handleChange}
                error={errors.message}
              />

              <Button label="Submit" type="submit" onClick></Button>
            </form>
          </section>
        </div>
      </Layout>
    );
  }
}
