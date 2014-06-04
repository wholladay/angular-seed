/* Services */

// Demonstrate how to register services
myApp.myServices = angular.module('myApp.services', []);

// In this case it is a simple value service.
myApp.myServices.value('version', '0.2');

myApp.myServices.service('VideoService', ['$http', '$q', function($http, $q) {

    return {

        getVideos: function() {

            var deferred = $q.defer();
            var url = 'http://localhost:8282/movies-lite/video';
            $http.get(url).success(function(data, status, headers, config) {

                deferred.resolve(data.videos);
            }).error(function(data, status, headers, config) {

                deferred.reject(data, status, headers, config);
            });
            return deferred.promise;
        }
    }
}]);