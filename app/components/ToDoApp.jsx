import React from 'react';
import * as Redux from 'react-redux';

import ToDoList from 'ToDoList'
import AddToDo from 'AddToDo';
import ToDoSearch from 'ToDoSearch';
import * as actions from 'actions';



export  class ToDoApp extends React.Component{
  constructor(){
    super();
    this.state = {
    }
    this.onLogout = this.onLogout.bind(this);
  }
  onLogout(e) {
      var {dispatch} = this.props;
      e.preventDefault();
      dispatch(actions.startLogout());
    }
  render(){
    return(
      <div>
      <div className="page-actions">
         <a href="#" onClick={this.onLogout}>Logout</a>
       </div>
      <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
      <div className="container">
      <ToDoSearch ></ToDoSearch>
      <ToDoList></ToDoList>
      <AddToDo></AddToDo>
      </div>
      </div>
      </div>
      </div>
    )
  }
}

export default Redux.connect()(ToDoApp);
