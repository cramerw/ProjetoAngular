app.controller('DashboardController', function($scope, ApiService) {
  $scope.apiData = [];
  $scope.loading = true;
  $scope.error = '';
  $scope.sortColumn = 'id';
  $scope.reverseSort = false;

  ApiService.getData()
    .then(function(data) {
      console.log('Dados da API:', data);
      $scope.apiData = data;
      $scope.loading = false;
    })
    .catch(function(err) {
      $scope.error = err;
      $scope.loading = false;
    });

  $scope.sortBy = function(column) {
    $scope.reverseSort = ($scope.sortColumn === column) ? !$scope.reverseSort : false;
    $scope.sortColumn = column;
  };

  $scope.formatIgnicao = function(ignicao) {
    return ignicao ? 'Sim' : 'Não';
  };

  $scope.formatDate = function(dateHora) {
    return new Date(dateHora).toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };
});
