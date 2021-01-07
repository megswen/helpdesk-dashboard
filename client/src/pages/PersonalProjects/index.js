import React, { Component } from "react";
import "react-bootstrap";
import "./style.css";
import { Container, Row, Col, Card, InputGroup } from "react-bootstrap";

class PersonalProjects extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  render() {
    return (
        <Container>
            <Row>
                <Col>
                    <Card id="add-todo" className="text-center">
                        <h1>ADD</h1>
                        <InputGroup>
                            Input forms to add a task
                        </InputGroup>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card id="todo-list" className="text-center">
                        <h1>TO DO</h1>
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