import React,{Component} from 'react';
import './App.css';
import ListItems from './ListItems';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.handleInput=this.handleInput.bind(this);
    this.addItem=this.addItem.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
    this.setUpdate=this.setUpdate.bind(this);
  }

  setUpdate(text, key){
      const items=this.state.items
      items.map(item=>{
        if(item.key==key){
          item.text=text
        }
      })

      this.setState({
       items:items 
      })
  }
  deleteItem(key){
      const filteredItems=this.state.items.filter(item=>item.key!==key);
      this.setState({
        items: filteredItems
      })
  }
  handleInput(e){
    //console.log("handle item"+e.target.value)
    this.setState({
      currentItem:{
      text: e.target.value,
      key:Date.now()

      }
    })

  }
  addItem(e){
      e.preventDefault();
      const newItem=this.state.currentItem;
      //console.log(this.state.currentItem)
      if(newItem.text!==""){
        const newItems=[...this.state.items,newItem]
        this.setState({
          items:newItems,
          currentItem:{
            text:'',
            key:''
          }
        })
      }
  }
  render(){
  return (
    <div className="app">
      <header>
      <form id="to-do-form" onSubmit={this.addItem}>
        <input id="input" type="text" placeholder="Enter Text" value={this.state.currentItem.text}
        onChange={this.handleInput}/>
        <button type="submit"> Add</button>
      </form>
    </header>
    <ListItems items={this.state.items} deleteItem={this.deleteItem}  setUpdate={this.setUpdate}></ListItems>

    </div>
  )
  }
}

export default App;
