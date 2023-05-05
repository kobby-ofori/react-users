import "./App.css";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Users from "./components/Users";
import UsersForm from "./components/UsersForm";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Kwabena",
          email: "kobbyofori9@gmail.com",
          gen: 24,
        },
        {
          name: "Kofi",
          email: "kofi@gmail.com",
          gen: 24,
        },
      ],
    };
  }
  addNewUser = (user) => {
    this.setState({
      users: [...this.state.users, user],
    });
  };
  render() {
    return (
      <>
        <Container fluid style={{ marginTop: "2rem" }}>
          <Row>
            <Col md="4">
              <UsersForm addUser={this.addNewUser} />
            </Col>
            <Col>
              <Users usersData={this.state.users} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
