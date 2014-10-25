angular.module('demo.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Queue', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
var dishes = [
    {"dish": "Very Delicious Cookies", "imagePath": "img/cookies.jpg", "restaurant": "Res A", "price": 2.99, "rating": 4.0},
    {"dish": "House Special Spaghetti", "imagePath": "img/spaghetti.jpg", "restaurant": "Res A", "price": 9.99, "rating": 4.0},
    {"dish": "Smeely Smokey ribs", "imagePath": "img/ribs.jpg", "restaurant": "Res B", "price": 12.99, "rating": 4.3}
];

    return {
    all: function() {
      return dishes;
    },
    get: function(dishId) {
      // Simple index lookup
      return dishes[dishId];
    }
  }
});
