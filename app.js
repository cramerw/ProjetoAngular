var app = angular.module("meuApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
    .when("/login", {
      templateUrl: "login.html",
      controller: "LoginController"
    })
    .when("/home", {
      templateUrl: "home.html",
      controller: "HomeController"
    })
    .otherwise({
      redirectTo: "/login"
    });
});

app.controller("LoginController", function($scope, $location) {
  $scope.data = { username: "", password: "" };
  $scope.error = "";

  $scope.login = function() {
    if ($scope.data.username === "admin" && $scope.data.password === "1234") {
      $location.path("/home");
    } else {
      $scope.error = "Credenciais inválidas!";
    }
  };
});

app.controller("HomeController", function($scope, $http) {
  $scope.apiData = [];
  $scope.loading = true;
  $scope.error = "";
  $scope.sortColumn = 'id';
  $scope.reverseSort = false;

  const API_URL = "https://cors-anywhere.herokuapp.com/https://api.appselsyn.com.br/keek/rest/v1/integracao/posicao?apikey=eyJucyI6InRlc3RlIiwic2MiOjE1MjY2Njk2NTJ9";

  $http.get(API_URL)
    .then(function(response) {
      $scope.apiData = response.data;
    })
    .catch(function(error) {
      $scope.error = "Erro ao buscar API: " + (error.statusText || "Desconhecido");
    })
    .finally(function() {
      $scope.loading = false;
    });

  $scope.sortBy = function(column) {
    $scope.reverseSort = ($scope.sortColumn === column) ? !$scope.reverseSort : false;
    $scope.sortColumn = column;
  };
});

