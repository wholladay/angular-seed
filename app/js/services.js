/* Services */

// Demonstrate how to register services
myApp.myServices = angular.module('myApp.services', []);

// In this case it is a simple value service.
myApp.myServices.value('version', '0.4');

myApp.myServices.service('VideoService', ['$http', '$q', '$rootScope', function($http, $q, $rootScope) {

    return {
        movieCount: '?',

        getVideos: function() {

            var deferred = $q.defer();
            var url = 'http://localhost:8282/movies-lite/video';
            var self = this;
            $http.get(url).success(function(data, status, headers, config) {

                self.movieCount = data.videos.length;
                $rootScope.$broadcast('movieCount', self.movieCount);
                deferred.resolve(data.videos);
            }).error(function(data, status, headers, config) {

                deferred.reject(data, status, headers, config);
            });
            return deferred.promise;
        }
    }
}]);