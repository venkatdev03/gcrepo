
import $ from 'jquery';

module.exports = {


  filterTodos: function (todos, completedToDo, searchquery) {
    var filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || completedToDo;
    });

    // Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase();
      return searchquery.length === 0 || text.indexOf(searchquery) > -1;
    });


    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};
