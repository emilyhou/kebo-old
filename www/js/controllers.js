angular.module('demo.controllers', [])

.controller('MainCtrl', function($scope, $state, $ionicModal, $ionicPopup, Queue) {
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
    
    $scope.onTap = function() {
        var index = $scope.dishes.indexOf(this.dish);
        //alert(this.dishes[index].dish);

            // An elaborate, custom popup
            var myPopup = $ionicPopup.show({
            template: 'Price: $' + this.dishes[index].price + '<br>Rating: ' + this.dishes[index].rating + "/5",
            title: this.dishes[index].dish,
            scope: $scope,
            buttons: [
                { text: 'OK' }
            ]
        });
    }
    $ionicModal.fromTemplateUrl("queue.html", {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });
    $scope.swipeQueue = function(){
        $scope.modal.show();
    };
    $scope.closeQueue = function() {
        $scope.modal.hide();
    };
})

.controller('QueueCtrl', function($scope, $state) {
    $scope.viewDetails = function() {
        alert("Hello");
        $state.go('restaurant');
    }
})

.controller('RestaurantCtrl', function($scope) {
})
