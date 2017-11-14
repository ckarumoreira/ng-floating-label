(function () {
    angular.module('ng-floating-label.directives')
    .directive("ngModel", function() {
        return {
            restrict: 'A',
            priority: -1, 
            link: function(scope, element, attributes) {
                scope.$watch(attributes.ngModel, function (newValue, oldValue) {
                    if (oldValue !== newValue) {
                        element.triggerHandler("change");
                    }
                });
            }
        };
    });
})();