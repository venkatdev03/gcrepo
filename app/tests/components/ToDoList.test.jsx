import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import ToDoList from 'ToDoList';
import ToDo from 'ToDo';

describe('ToDoList', () => {
  it('should exist' , () => {
    expect(ToDoList).toExist();
  });

  it('it should render the todos with iteration of input object', ()=>{
  var todos = [{
    id : 1,
    text: 'first one'
  },
  {
    id : 2,
    text : 'second one'
  }];

  var todoList = TestUtils.renderIntoDocument(<ToDoList todos={todos}/>);
  var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList,ToDo);
expect(todosComponents.length).toBe(todos.length);
  });
});
