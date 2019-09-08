import React from 'react';
import './App.css';
import User from "./component/User";
import Followers from "./component/Followers";


class App extends React.Component {
  constructor() {
    console.log("Constructor invoked")
    super();
    this.state = {
      user:{},
      followers:[]
    }
    console.log("State in constructor:",this.state)
  }
  
    componentDidMount() {
     fetch("https://api.github.com/users/kly001")
        .then(res => res.json())
        .then(res => {this.setState({user: res.data})
          console.log("Apps => user:",res)
        })
        .catch(error => console.log(error))
       

        fetch("https://api.github.com/users/kly001/followers")
        .then(res => res.json())
        .then(res => {this.setState({followers: res.data})
          console.log("App => followers:",res)
        })
        .catch(error => console.log(error))
          
  }
  
  render() {
    console.log("App=>rendering:",this.state)
  return (
    <div className="App">
     <h1>React GitHub User Card Project</h1>
      <h2>User:</h2>
      <User />
      <h3>Followers:</h3>
      <Followers />
    </div>
    
  );
  }
}

export default App;
