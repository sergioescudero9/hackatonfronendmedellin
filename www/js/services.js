(function () {
    angular.module('starter.services', [])
        .service('appServices', function ($http, $q) {
            return {
                getInformation: getInformation,
                sendInformation: sendInformation
            }

            function getInformation() {
                var defered = $q.defer();
                var promise = defered.promise;

                $http({
                    method: "GET",
                    url: "http://node-api.mybluemix.net/api/sitiosportipo/1"
                }).success(function (data) {
                    defered.resolve(data);
                }).error(function (err) {
                    defered.reject(err)
                });

                return promise;
            }
            function sendInformation(data) {
                
                var defered = $q.defer();
                var promise = defered.promise;

                $http({
                    method: "POST",
                    url: "https://sara-controller.mybluemix.net/api/message",
                    data: { payload: {message:data}}
                }).success(function (data) {
                    defered.resolve(data);
                }).error(function (err) {
                    defered.reject(err)
                });

                return promise;
            }

        })
})()

