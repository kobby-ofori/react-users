import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import "./User.css";

function User(props) {
  const handleEdit = (e) => {
    e.preventDefault();
    console.log("edit");
  };

  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteUser(props.userInfo.id);
  };

  return (
    <Col md="4">
      <Card
        className="custom-card"
        style={{
          width: "18rem",
          marginBottom: "10px",
          cursor: "pointer",
          boxShadow: "5px 10px 8px #888888",
        }}
      >
        <Card.Body className="card-body">
          <Card.Title>{props.userInfo.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">User Data</Card.Subtitle>
          <Card.Text>
            <p>
              <strong>Email</strong>: {props.userInfo.email}
            </p>
            <p>
              <strong>Gen</strong>: {props.userInfo.gen}
            </p>
          </Card.Text>
          <Card.Link href="#">
            <Button variant="primary" size="sm" onClick={handleEdit}>
              Edit
            </Button>
          </Card.Link>
          <Card.Link href="#">
            <Button variant="dark" size="sm" onClick={handleDelete}>
              Delete
            </Button>
          </Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default User;
