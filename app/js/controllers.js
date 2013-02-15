'use strict';

function PhoneListCtrl($scope, $http) {
  $scope.phones = Phone.query();

  $scope.orderProp = 'age';
}

function PhoneDetailCtrl($scope, $routeParams, $http) {
  $scope.phoneId = $routeParams.phoneId;

  $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
    $scope.phone = data;
    $scope.mainImageUrl = $scope.phone.images[0];
  });


  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}
