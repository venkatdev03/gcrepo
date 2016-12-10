var uuid = require('node-uuid');
var moment = require('moment');

export var searchQueryReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      return action.searchquery;
    default:
      return state;
  };
};

export var completedToDoReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_COMPLTED_TODO':
      return !state;
    default:
      return state;
  }
};

export var todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.todo
      ];
    case 'UPDATE_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            ...action.updates
          };
        } else {
          return todo;
        }
      });
    case 'ADD_TODOS':
      return [
        ...state,
        ...action.todos
      ];
    default:
      return state;
  }
};

export var authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
