/* Controllers */

myApp.myControllers = angular.module('myApp.controllers', []);

myApp.myControllers.controller('HomeController', ['$scope', function($scope) {

}]);

myApp.myControllers.controller('MoviesController', ['$scope', 'VideoService', function($scope, VideoService) {

    function _getVideos() {

        VideoService.getVideos().then(function(videos) {
            // SUCCESS
            $scope.movies.videos = videos;
        }, function(data, status, headers, config) {
            // FAILURE
            alert('Oops! something went wrong: ' + status);
        });
    }

    function _init() {

        $scope.movies = {
            videos: null
        };

        _getVideos();
    }

    _init();
}]);