import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import AddToDo from 'AddToDo';

describe('AddToDo', () => {
  it('should exist' , () => {
    expect(AddToDo).toExist();
  });


  it('get the add item to be passed to the main component' , () => {
    var todoitem = "something";
    var spy = expect.createSpy();
    var addToDo = TestUtils.renderIntoDocument(<AddToDo onHandleToDoItem={spy}/>)
    var $el = $(ReactDOM.findDOMNode(addToDo));

    addToDo.refs.todoitem.value = todoitem;
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith(todoitem);
  });
});
