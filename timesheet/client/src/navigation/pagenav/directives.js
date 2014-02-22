(function () {
  'use strict';

  angular.module('navigation.pagenav.directives', [])

    .directive('tszPagenav', function () {
        return {
          replace: true,
          restrict: 'A',
          scope: {
            items: "="
          },
          templateUrl: 'assets/templates/navigation/pagenav/pagenav.html'
        };
      }
    )

    .directive('tszPagenavItem',
      function () {
        return {
          replace: false,
          transclude: true,
          restrict: 'A',
          controller : 'PagenavItemCtrl',
          scope: {
            item: "="
          },
          template: '<a ng-transclude></a>'
        };
      }
    );

}());
