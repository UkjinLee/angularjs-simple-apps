var app = angular.module('todoApp', [])

app.controller('todoCtrl', function () {

    this.todos = [
        { name: "Learn Angular JS" },
        { name: "Try out exercises" },
        { name: "Buy groceries" }
    ];

    this.editMode = false;

    this.addNewTodo = function () {
        this.todos.push({ name: this.newTodo });
        this.newTodo = "";
    };

    this.deleteTodo = function (index) {
        this.todos.splice(index, 1);
    };

    this.triggerEditMode = function () {
        this.editMode = !this.editMode;
    };
});
