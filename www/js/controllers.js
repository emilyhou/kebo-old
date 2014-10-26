angular.module('demo.controllers', [])

//var fav_queue = [];

.controller('MainCtrl', function($scope, $state, $ionicModal, $ionicPopup, Queue, Fav) {
    $scope.dishes = Queue.all();
    $scope.dish = $scope.dishes[2];
    $scope.favorites = Fav.all();
    /*
function trash() {
    console.log("someone dun gooft");
}

function yum() {
    console.log("you liked a dish!!!");
}

function info(){
    console.log("happy birthday");
}*/
    
    
    $scope.onSwipeRight = function(index, element){
        var index = $scope.dishes.indexOf(this.dish);
        angular.element(document.getElementById(element)).addClass('right-swipe');
        var nextItem;
        this.dishes.splice(index, 1);
        if (this.dishes.length === 0) {
            var myPopup = $ionicPopup.show({
            template: 'No more pics to see. Stay Tuned.',
            title: 'Alert',
            scope: $scope,
            buttons: [
                { text: 'OK' }
            ]
            });
        }
        if(index > 0 && index <= this.dishes.length - 1){
            nextItem = this.dishes[index - 1]
        } else {
            nextItem = this.dishes[this.dishes.length-1];
        }
        this.favorites.push(this.dish);
        this.dish = nextItem;
    }
    
    $scope.onSwipeLeft = function(index, element){
        var index = $scope.dishes.indexOf(this.dish);
        angular.element(document.getElementById(element)).addClass('left-swipe');
        var nextItem;
        this.dishes.splice(index, 1);
        if (this.dishes.length === 0) {
            var myPopup = $ionicPopup.show({
            template: 'No more pics to see. Stay Tuned.',
            title: 'Alert',
            scope: $scope,
            buttons: [
                { text: 'OK' }
            ]
            });
        }
        if(index > 0 && index <= this.dishes.length - 1){
            nextItem = this.dishes[index - 1]
        } else {
            nextItem = this.dishes[this.dishes.length-1];
        }
        this.dish = nextItem;
    }
    
    $scope.onTap = function(index) {
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
    };
})

.controller('RestaurantCtrl', function($scope) {
})
