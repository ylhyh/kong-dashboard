(function() {

  angular.module('app').component('resourceAttribute', {
    restrict: 'E',
    scope: {},
    bindings: {
      schema: '<',
      name: '<'
    },
    templateUrl: 'components/resource_attribute/template.html',
    controller: 'ResourceAttributeController'
  });

})();
