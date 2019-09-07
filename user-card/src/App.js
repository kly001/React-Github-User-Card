import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user:[],
      followers:[]
    }
    console.log("State in constructor:",this.state)
  }
  
    componentDidMount() {
     fetch("https://api.github.com/users/kly001")
        .then(res => res.json())
        .then(res => {this.setState({user: res.data})
        console.log("User:",res)
        })
        .catch(error => console.log(error))
       

        fetch("https://api.github.com/users/kly001/followers")
        .then(res => res.json())
        .then(res => {this.setState({followers: res.data})
        console.log("Followers:",res)
        })
        .catch(error => console.log(error))
       

        
  }
  
  render() {
    console.log("App:",this.state.user)
  return (
    <div className="App">
     <h1>React GitHub User Card Project</h1>
     {/* <UserData users = {this.state.users}/> */}
   
    </div>
    
  );
  }
}

export default App;
