(function () {
    angular.module('ng-floating-label', ['ng-floating-label.directives']);
    angular.module('ng-floating-label.directives', []);
})();
(function () {
    angular.module('ng-floating-label.directive').directive('ngFloatingLabel', [function () {
        return {
            template: '<label ng-bind="placeholder"></label><ng-transclude />',
            restrict: 'E',
            scope: {
                placeholder: '<'
            },
            link: function link(scope, element, attributes) {
                function OnFocus() {
                    element.addClass('focused');
                }
                function OnBlur() {
                    element.removeClass('focused');
                }
                function OnChange() {
                    var value = element.find('input,select').val();
                    if (value == '' || value == null || typeof value === 'undefined') {
                        element.removeClass('filled');
                    } else {
                        element.addClass('filled');
                    }
                }

                element.on('focus', 'input', OnFocus);
                element.on('blur', 'input', OnBlur);
                element.on('change', 'input', OnChange);

                OnChange();
            }
        };
    }]);
})();
(function () {
    angular.module('ng-floating-label.directive').directive("ngModel", function () {
        return {
            restrict: 'A',
            priority: -1,
            link: function link(scope, element, attributes) {
                scope.$watch(attributes.ngModel, function (newValue, oldValue) {
                    if (oldValue !== newValue) {
                        element.triggerHandler("change");
                    }
                });
            }
        };
    });
})();