import logo from './logo.svg';
import '../containers/App.css';
import Scroll from '../components/scroll';
import CardList from '../components/cardList';
import SearchBox from '../components/searchBox';
import { Component } from 'react';
// State simply means the description of your app

class App extends Component {

  constructor(){
    super();
    this.state={
      robots:[],
    searchfield:'',
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>
      response.json()
    ).then((users)=>{
    this.setState({robots:users})
     
    })
  }
  onSearchChange=(event)=>{
    this.setState({searchfield:event.target.value});
  }

 

  render() {
   const {robots,searchfield}=this.state;
    const filteredRobots=this.state.robots.filter((robot)=>
    robot.name.toLowerCase().includes(searchfield.toLowerCase())
  )
if(!robots.length){
  return <h1>Loading</h1>
}else{
    return (
      <div className="App">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
  <Scroll>
  <CardList robots={filteredRobots} />
  </Scroll>
      </div>
    );
  }
  }
}

export default App;
