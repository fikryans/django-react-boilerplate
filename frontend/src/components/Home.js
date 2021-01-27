import React, { Component } from "react";
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Container>
            <h1>Home</h1>
            <p>
              <Link to="/login">Login</Link>
            </p>
            <p>
              <Link to="/signup">Signup</Link>
            </p>
            <p>
              <Link to="/dashboard">Dashboard</Link>
            </p>
        </Container>
      </div>
    );
  }
}
