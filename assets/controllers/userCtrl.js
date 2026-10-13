app.controller('UserCtrl', function($scope, $http, $rootScope){

    $scope.users = [];

    $scope.loadUsers = function (){
        $http.get($rootScope.apiUrl + '/users')
            .then(function(response){
                $scope.users = response.data
            })
            .catch(function(error){
                console.log(error)
            })
    };

    $scope.loadUsers();
});