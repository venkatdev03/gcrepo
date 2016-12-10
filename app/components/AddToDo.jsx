import React from 'react';
import {connect} from 'react-redux';
import actions from 'actions';

export  class AddToDo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
    this.getToDoItem = this.getToDoItem.bind(this);
    //this.props.onHandleToDoItem = this.props.onHandleToDoItem.bind(this);
  }
  getToDoItem(e){
    e.preventDefault();
    var {dispatch} = this.props;
    var todoItem = this.refs.todoitem.value;
    alert(todoItem);
    if(todoItem.length > 0 ){
      this.refs.todoitem.value = '';
    dispatch(actions.addTodo(todoItem));
    }else{
      this.refs.todoitem.focus();
    }

  }
  render(){


    return(
      <div className="container__footer">
      <form onSubmit={this.getToDoItem}>
    <input type="text" ref='todoitem' />
    <button className="button expanded">Add Item</button>
    </form>
      </div>
    )
  }
};

export default connect()(AddToDo);
