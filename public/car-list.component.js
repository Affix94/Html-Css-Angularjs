angular.
  module('carList').
  component('carList', {
    templateUrl: 'car-list.template.html',
    controller: ['Car',
      function CarListController(Car) {
        this.cars = Car.query();
        this.orderProp = 'age';
      }
    ]
  });
