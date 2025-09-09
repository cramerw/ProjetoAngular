angular.module('meuApp').service('ApiService', function($http, $q) {
  this.getData = function() {
    var deferred = $q.defer();

  $http.get('http://localhost:3000/api/posicao')
      .then(function(response) {
        deferred.resolve(response.data);
      })
      .catch(function(error) {
        deferred.reject(error.statusText || 'Erro desconhecido');
      });

    return deferred.promise;
  };
});
