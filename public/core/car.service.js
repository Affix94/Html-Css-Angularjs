angular.
  module('core.car').
  factory('Car', ['$resource',
    function($resource) {
      return $resource('cars/:carId.json', {}, {
        query: {
          method: 'GET',
          params: {carId: 'cars'},
          isArray: true
        }
      });
    }
  ]);