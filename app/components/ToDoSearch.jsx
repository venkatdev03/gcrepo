import React from 'react';
import {connect} from 'react-redux';
import actions from 'actions';

export  class ToDoSearch extends React.Component{
  constructor(){
    super();
    this.state = {
    }
  }

  render(){
     var {dispatch, completedToDo, searchquery} = this.props;
    return(
      <div className="container__header">
      <div>
       <input type="search" placeholder="Search Todo list" ref="searchquery" value={searchText} onChange={() => {
              var searchquery = this.refs.searchquery.value;
              dispatch(actions.setSearchQuery(searchquery));
            }}/>

        </div>
        <div>
        <label><input type="checkbox" ref="completedToDo"  checked={completedToDo} onChange={() => {
                dispatch(actions.toggleCompletedToDo());
              }}/> completed items </label>

      </div>
      </div>
    )
  }
};

export default connect(
  (state) => {
    return {
      completedToDo: state.completedToDo,
      searchquery: state.searchquery
    }
  }
)(ToDoSearch);
