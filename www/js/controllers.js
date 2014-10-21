angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope, $stateParams, $state) {
  $scope.findOrg = function (org) {
    console.log("Org selected: " + org);
    $state.go('tabs.org', {org: org});
  }
})

.controller('OrgCtrl', function($scope, $http, $stateParams, $ionicLoading, $timeout) {
  var org = $stateParams.org;
  $scope.org = org;
  console.log("OrgCtrl: " + org);

  $scope.show = function() {
    $ionicLoading.show({
      templateUrl: 'loading.html'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  $scope.show();

  var gitUrl = 'https://api.github.com/orgs/' + org + '/repos';

  $timeout(function() {
    // Do something with a delay here
    $http.get(gitUrl).
      success(function(data, status, headers, config) {
        $scope.repos = data;
        $scope.hide();
      }).
      error(function(data, status, headers, config) {

      })
    }, 1000);
  })

 .controller('RepoCtrl', function($scope, $http, $stateParams, $ionicLoading, $timeout) {

  var org = $stateParams.org;
  var repo = $stateParams.repo;

  $scope.show = function() {
    $ionicLoading.show({
      templateUrl: 'loading.html'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  $scope.show();

  var repoUrl = 'https://api.github.com/repos/' + org + '/' + repo;

  $timeout(function() {
    // Do something with a delay here
    $http.get(repoUrl).
      success(function(data, status, headers, config) {
        $scope.repo = data;
        $scope.hide();
      }).
      error(function(data, status, headers, config) {

      })
    }, 1000);
})

;
