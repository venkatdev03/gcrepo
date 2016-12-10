import React from 'react';
import {connect} from 'react-redux';
import ToDo from 'ToDo';
import ToDoApi from 'ToDoApi';
export  class ToDoList extends React.Component{
  constructor(){
    super();

this.renderToDOs = this.renderToDOs.bind(this);
  }
  renderToDOs = () => {
    var {todos, completedToDo, searchquery} = this.props;
      var filteredTodos = TodoAPI.filterTodos(todos, completedToDo, searchquery);
      
         if (filteredTodos.length === 0) {
           return (
             <p className="container__message">Nothing To Do</p>
           );
         }

    return filteredTodos.map((todo) => {
      return (<ToDo key={todo.id} {...todo}></ToDo>);
    });
  }
  render(){

return(
      <div>
        {this.renderToDOs()}
      </div>
    )
  }
};

export default connect(
  (state) => {
    return state;
  }
)(ToDoList);
