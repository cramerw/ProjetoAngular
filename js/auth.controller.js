app.controller('AuthController', function($scope, $window) {
  $scope.username = '';
  $scope.password = '';
  $scope.error = '';

  $scope.login = function() {
    if ($scope.username === 'admin' && $scope.password === '1234') {
      $window.location.href = 'home.html';
    } else {
      $scope.error = 'Credenciais inválidas!';
    }
  };
});
