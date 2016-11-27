(function () {
    angular.module('starter.services', [])
        .service('appServices', function ($http, $q,$timeout) {
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
                console.log(data);
                var defered = $q.defer();
                var promise = defered.promise;
                $timeout(function () {
                    defered.resolve("How are you today?");                                        
                }, 2000);

                // $http({
                //     method: "POST",
                //     url: "http://node-api.mybluemix.net/api/sitiosespecifico/1/1",
                //     data: { payload: {message:data,token:"ddc29db2-bed4-4e69-a06d-8829b6de9689"} }
                // }).success(function (data) {
                //     defered.resolve(data);
                // }).error(function (err) {
                //     defered.reject(err)
                // });

                return promise;
            }

        })
})()

