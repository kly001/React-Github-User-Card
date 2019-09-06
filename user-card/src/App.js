import React from 'react';
import axios from "axios"
import Users from "./component/Users";
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users:[]
    }
    console.log("State in constructor:",this.state)
  }
  
    componentDidMount() {
      axios
        .get("https://api.github.com/users/kly001")
        .then(res => {console.log("res:",res)
        })
        .catch(error => console.log(error))
  }
  
  render() {
  return (
    <div className="App">
     <h1>React GitHub User Card Project</h1>
     <Users />
    </div>
  );
  }
}

export default App;
