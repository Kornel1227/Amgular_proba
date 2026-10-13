var app = angular.module('PeldaApp', [])

app.run(function($rootScope, $http){
    $rootScope.appName = 'AngularJS Példa App';
    $rootScope.company = 'Bajai SZC Türr István Technikum';
    $rootScope.author = '13.a szoftverfejlesztő'

    $rootScope.apiUrl = 'http://localhost:4444';
});