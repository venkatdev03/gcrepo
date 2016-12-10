import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import ToDoApp from 'ToDoApp';

describe('ToDoApp', () => {
  it('should exist' , () => {
    expect(ToDoApp).toExist();
  });
});
