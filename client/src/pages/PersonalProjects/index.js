import React, { Component } from "react";
import "react-bootstrap";
import "./style.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import AddForm from "../../components/AddForm";

class PersonalProjects extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  // Funtion to handleFormSubmit

  render() {
    return (
        <Container>
            <Row>
                <Col>
                    <AddForm 
                        // handleFormSubmit ???
                    />
                </Col>
                <Col lg={6}>
                    <Card id="todo-list" className="text-center">
                        <h1>TO DO</h1>
                        <div id="current-todos"></div>
                    </Card>
                </Col >
                <Col>
                    <Card id="done-list" className="text-center">
                        <h1>DONE</h1>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
  }
}

export default PersonalProjects;