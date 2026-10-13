app.controller('UserCtrl', function($scope, $http, $rootScope){

    $scope.users = [];
    $scope.newUser = [];
    $scope.error = '';
    $scope.succes = '';

    $scope.loadUsers = function (){
        $http.get($rootScope.apiUrl + '/users')
            .then(function(response){
                $scope.users = response.data
            })
            .catch(function(error){
                console.log(error)
            })
    };

    $scope.addUser = function(){
        console.log($scope.newUser)

        if($scope.newUser.passwd != $scope.newUser.confirm){
            $scope.error = 'Passwords do not match!';
            return;
        }
        $http.post($rootScope.apiUrl + '/users', {
            name: $scope.newUser.name,
            email: $scope.newUser.email,
            password: $scope.newUser.password,
            role: 'user'
        })
        .then(function(response){
            $scope.succes = 'User added succesfully!'
            $scope.newUser = {};
            $scope.loadUsers();
        })
        .catch(function(error){
            $scope.error = error.data.error;
        })
    }

    $scope.deleteUser = function(id){
        if(!confirm('Are you sure you want to delete this user?')){
            return
        }

        $http.delete($rootScope.apiUrl + '/users/' + id)
            .then(function(response){
                $scope.succes = 'User deleted succesfully!'
                $scope.loadUsers();
            })
            .catch(function(error){
                $scope.error = error.data.error;
            })
    }

    $scope.loadUsers();
});