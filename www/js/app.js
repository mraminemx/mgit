angular.module('starter', ['ionic', 'starter.controllers', 'starter.directives'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "tabs.html",
      controller: 'MainCtrl'
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "main.html",
          controller: 'MainCtrl'
        }
      }
    })
    .state('tabs.org', {
      url: "/home/:org",
      views: {
        'org-tab': {
          templateUrl: "org.html",
          controller: 'OrgCtrl'
        }
      }
    })
    .state('tabs.repo', {
      url: "/home/:org/:repo",
      views: {
        'repo-tab': {
          templateUrl: 'repo.html',
          controller: 'RepoCtrl'
        }
      }
      
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');
});

