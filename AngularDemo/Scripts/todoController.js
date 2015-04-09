/// <reference path="angular.js" />

angular.module("todoApp", [])
.controller("todoController", function($scope, $http) {

    $scope.todoItem = {
        Name: "Lebohang",
        IsComplete: "False"
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
        
    }

    $scope.UpdateItem = function() {
        
    }

    $scope.getAllItems();
});