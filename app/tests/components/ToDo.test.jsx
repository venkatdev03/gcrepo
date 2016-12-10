import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import ToDo from 'ToDo';

describe('ToDo', () => {
  it('should exist' , () => {
    expect(ToDo).toExist();
  });
});
