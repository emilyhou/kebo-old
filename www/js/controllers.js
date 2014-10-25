angular.module('demo.controllers', [])

.controller('MainCtrl', function($scope, Queue) {
    $scope.dishes = Queue.all();
    $scope.dish = $scope.dishes[0];
    
    $scope.onSwipeRight = function(){
        var index = $scope.dishes.indexOf(this.dish);
        var nextItem;
        if(index >= 0 && index < this.dishes.length - 1){
            nextItem = this.dishes[index + 1]
        } else {
            nextItem = this.dishes[0];
        }
        this.dish = nextItem;
    }
    
    $scope.onSwipeLeft = function(){
        var index = $scope.dishes.indexOf(this.dish);
        var nextItem;
        if(index > 0 && index <= this.dishes.length - 1){
            nextItem = this.dishes[index - 1]
        } else {
            nextItem = this.dishes[this.dishes.length-1];
        }
        this.dish = nextItem;
    }
})

.controller('QueueCtrl', function($scope) {
  
})
