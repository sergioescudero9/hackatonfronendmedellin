(function () {
  angular.module('starter.controllers', ['starter.services'])
    .controller('AppCtrl', function ($scope, $ionicModal, $timeout, $ionicScrollDelegate) {

      // With the new view caching in Ionic, Controllers are only called
      // when they are recreated or on app start, instead of every page change.
      // To listen for when this page is active (for example, to refresh data),
      // listen for the $ionicView.enter event:
      //$scope.$on('$ionicView.enter', function(e) {
      //});

      // Form data for the login modal
      $scope.loginData = {};
      $scope.print = function () {
        appServices.prueba();
      }

      $scope.scrollBottom = function () {
        $ionicScrollDelegate.scrollBottom([true]);
      };
      $scope.scrollPosition = function () {
        return $ionicScrollDelegate.getScrollPosition();
      };



      // Create the login modal that we will use later
      $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
      }).then(function (modal) {
        $scope.modal = modal;
      });

      // Triggered in the login modal to close it
      // $scope.closeLogin = function () {
      //   $scope.modal.hide();
      // };

      // // Open the login modal
      // $scope.login = function () {
      //   $scope.modal.show();
      // };

      // // Perform the login action when the user submits the login form
      // $scope.doLogin = function () {
      //   console.log('Doing login', $scope.loginData);

      //   // Simulate a login delay. Remove this and replace with your login
      //   // code if using a login system
      //   $timeout(function () {
      //     $scope.closeLogin();
      //   }, 1000);
      // };
    })

    .controller('ChatCtrl', function ($scope, appServices, $timeout) {
      $scope.userData = {};
      $scope.userData.data = [];
      $scope.sendInformation = sendInformation;
      $scope.sendInformation();
      $scope.enter = function (event) {
        if (event.which == 13 && $scope.userData.message) {
          event.preventDefault();
          $scope.sendInformation();
        }
      }

      function sendInformation() {
        
        if ($scope.userData.message) {
          $scope.userData.load = true;
          $scope.userData.data.push({ "title": $scope.userData.message, "user": true });
          $scope.scrollBottom();
        }

        appServices.sendInformation($scope.userData.message?$scope.userData.message:"Hola")
          .then(function (response) {
            if (response.message) {
              $scope.userData.data = $scope.userData.data.concat({ title: response.message });
              $scope.userData.load = false;
              $scope.scrollBottom();
            }


          }).catch(function (error) {
            $scope.userData.data = [];
          })

        $scope.userData.message = "";


      }


    })


    .controller('PlaylistCtrl', function ($scope, $stateParams) {
    });





})()
