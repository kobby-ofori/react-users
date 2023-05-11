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
          id: "2",
        },
        {
          name: "Kofi",
          email: "kofi@gmail.com",
          gen: 24,
          id: "3",
        },
      ],
    };
  }
  addNewUser = (user) => {
    user.id = Math.random().toString();
    this.setState({
      users: [...this.state.users, user],
    });
  };
  editUser = (id, updatedUser) => {
    this.setState({
      users:this.state.users.map(user=>user.id===id ? updatedUser : user)
    });
  };
  deleteUser = (id) => {
    let activeUsers = this.state.users.filter((user) => user.id !== id);
    this.setState({
      users: activeUsers,
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
              <Users
                usersData={this.state.users}
                deleteUser={this.deleteUser}
                editUser={this.editUser}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
