import React, { Component } from "react";
import "react-bootstrap";
import "./style.css";
import { Row, Col, Card, InputGroup } from "react-bootstrap";

class PersonalProjects extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  render() {
    return (
        <>
        <Row>
            <Col>
                <Card id="add-todo" className="">
                    <h1>Add a To Do</h1>
                    <InputGroup>
                        Input forms to add a task
                    </InputGroup>
                </Card>
            </Col>
            <Col>
                <Card id="todo-list">
                    <h1>TO DO</h1>
                </Card>
            </Col>
            <Col>
            
            </Col>
        </Row>
        </>
    );
  }
}

export default PersonalProjects;