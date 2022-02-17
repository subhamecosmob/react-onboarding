import React from 'react';
import todos from './data.json'


class List extends React.Component {

  createList = () =>{
      
    return todos.map((todo) => {
        return <h1 key={todo.userId + todo.title}>{todo.title}</h1>
      })
  
    }

  render(){
    return this.createList()
  }

}

export default List;
