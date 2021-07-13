import react,{Component}from 'react';
import logo from './logo.svg';
import './App.css';
import  {CardList, cardList} from'./components/card-list/card-list.component'
class App extends Component {
constructor(){
  super();
  this.state={monsters:[],
  searchField:'' }};
  componentDidMount(){
fetch('https://jsonplaceholder.typicode.com/users')
.then(response=>response.json())
.then(users=>this.setState({monsters:users
}))

}

  render(){
const {monsters,searchField}=this.state
const filtersedMonsters=monsters.filter(monster=>
  monster.name.toLowerCase().includes(searchField.toLowerCase()))

  return (
    <div className="App">
      <h1>rolodex Monsters</h1>
      <input type='search'
      placeholder='search monsters' 
    onChange={e=>{this.setState({searchField:e.target.value})
  }}
    ></input>
    <CardList monster={filtersedMonsters}>
    </CardList>
      </div>
  );
}
}
export default App;
