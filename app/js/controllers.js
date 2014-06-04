/* Controllers */

myApp.myControllers = angular.module('myApp.controllers', []);

myApp.myControllers.controller('HomeController', ['$scope', 'VideoService', function($scope, VideoService) {

    function _init() {

        $scope.home = {
            movieCount: '?'
        };

        $scope.home.movieCount = VideoService.movieCount;
    }

    _init();

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

myApp.myControllers.controller('MovieCountController', ['$scope', function($scope) {

    function _init() {

        $scope.movieCount = {
            count: '?'
        };

        $scope.$on('movieCount', function(event, count) {

            $scope.movieCount.count = count;
        });
    }

    _init();
}]);