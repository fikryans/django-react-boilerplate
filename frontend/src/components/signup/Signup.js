import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl,
} from "react-bootstrap";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSignupClick = () => {
    const userData = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log("Sign up" + userData.username + "" + userData.password);
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h1>Signup</h1>
              <Form>
                <Form.Group controlId="usernameId">
                  <Form.Label>User name</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Enter user name"
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                  <FormControl.Feedback type="invalid"></FormControl.Feedback>
                </Form.Group>

                <Form.Group controlId="passwordId">
                  <Form.Label>Your password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={this.password}
                    onChange={this.onChange}
                  />
                  <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>
              </Form>
              <Button onClick={this.onSignupClick} color="primary">
                Sign up
              </Button>
              <p className="mt-2">
              Already have account? <Link to="/login">Login</Link>
            </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
