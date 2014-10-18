angular.module('starter.directives', [])
.directive('dragBack', function($ionicGesture, $state) {
  return {
    restrict : 'EAC',
    link : function(scope, elem, attr) {
            
      $ionicGesture.on('swiperight', function(event) {
      
        event.preventDefault();
        window.history.back();
        
      }, elem);
      
    }
  }
});