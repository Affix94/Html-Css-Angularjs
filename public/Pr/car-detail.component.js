angular.
  module('carDetail').
  component('carDetail', {
    templateUrl: 'Pr/car-detail.template.html',
    controller: ['$routeParams', 'Car',
      function CarDetailController($routeParams, Car) {
        var self = this;
        self.car = Car.get({carId: $routeParams.carId}, function(car) {
          self.setImage(car.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });