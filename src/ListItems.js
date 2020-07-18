import React from 'react';
import './ListItems.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import FlipMove from 'react-flip-move';


function ListItems(props){
    const items=props.items;
    const listItems=items.map(item=>{
        return(
            <div className="list" key={item.key}>
                 <p>
                     <input type="text" id={item.key} value={item.text} onChange={(e)=>{
                         props.setUpdate(e.target.value,item.key)
                     }}></input>
                     
                     <span className="fa fa-trash fa-lg" onClick={()=>props.deleteItem(item.key)}/>
                 </p>
            </div>
        )
    })
  return(
    <FlipMove duration={1500} easing="ease-in-out">
      <div>
          {listItems}
      </div>
      </FlipMove>
  )
}

export default ListItems;