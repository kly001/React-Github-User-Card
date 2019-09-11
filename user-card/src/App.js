import React from 'react';
import './App.css';
import Followers from "./component/Followers";


class App extends React.Component {
  constructor() {
    // console.log("Constructor invoked")
    super();
    this.state = {
      user:{},
      followers:[]
    }
    // console.log("State in constructor:",this.state)
  }
  
    componentDidMount() {
     fetch("https://api.github.com/users/kly001")
        .then(res => res.json())
        .then(res => this.setState({user: res})
        )
        .catch(error => console.log(error))
       

        fetch("https://api.github.com/users/kly001/followers")
        .then(res => res.json())
        .then(res => this.setState({followers: res})
        )
        .catch(error => console.log(error))
          
  }
  
  render() {
    console.log("App=>rendering User:",this.state.user)
    console.log("App=>rendering Followers:",this.state.followers )
  return (
    <div className="App">
     <h1>React GitHub User Card Project</h1>
     <div className="user-card">
        <h2>User:</h2>
        <p>{this.state.user.login}</p>
        <p>{this.state.user.created_at}</p>
        <p>{this.state.user.url}</p>
     </div>
     <div className="followers-card">
        <h3>Followers:</h3>
      {this.state.followers.map(follower => 
        <Followers 
         follower={follower}>
        </Followers>
      )}
        </div>
    </div>
   );
  }
}

export default App;
