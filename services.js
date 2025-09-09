app.factory("AuthService", function() {
  var user = null;
  return {
    setUser: function(u) { user = u; },
    getUser: function() { return user; }
  };
});

app.factory("ApiService", function($http) {
  return {
    getDados: function() {
      return $http.get("https://api.appselsyn.com.br/keek/rest/v1/integracao/posicao?apikey={eyJucyI6InRlc3RlIiwic2MiOjE1MjY2Njk2NTJ9}");
    }
  };
});