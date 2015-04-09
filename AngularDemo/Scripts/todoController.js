/// <reference path="angular.js" />

angular.module("todoApp", [])
.controller("todoController", function($scope, $http) {
    
    $scope.getItem = function(id) {
        
    }

    $scope.addNewItem = function () {
        if ($scope.todoItem.Name == "")
            return;

        postItem($scope.todoItem);
        clearTodoItem();
    }

    $scope.UpdateItem = function(item) {
        item.IsComplete = true;
        postItem(item);
    }

    var clearTodoItem = function () {
        $scope.todoItem = {
            Name: "",
            IsComplete: "False"
        }
    }

    var postItem = function (item) {
        $http.post("/api/todo", item)
        .success(function (data) {
            $scope.todoItems = data;
        })
        .error(function (data) {
            console.log(data);
        });
    }

    var getAllItems = function () {
        $http.get("/api/todo")
        .success(function (data) {
            $scope.todoItems = data;
        });
    }

    getAllItems();
    clearTodoItem();
});