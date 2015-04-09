/// <reference path="angular.js" />

angular.module("todoApp", [])
.controller("todoController", function($scope, $http) {

    

    var clearTodoItem = function() {
        $scope.todoItem = {
            Name: "",
            IsComplete: "False"
        }
    }

    $scope.getAllItems = function() {
        $http.get("/api/todo")
        .success(function(data) {
            $scope.todoItems = data;
        });
    }

    $scope.getItem = function(id) {
        
    }

    $scope.addNewItem = function() {
        $http.post("/api/todo", $scope.todoItem)
        .success(function (data) {
            $scope.todoItems = data;
        })
        .error(function (data) {
            console.log(data);
        });
        clearTodoItem();
    }

    $scope.UpdateItem = function() {
        
    }

    $scope.getAllItems();
});