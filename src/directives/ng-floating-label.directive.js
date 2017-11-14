(function () {
    angular.module('ng-floating-label.directive')
    .directive('ngFloatingLabel', [
        function () {
            return {
                template: '<label ng-bind="placeholder"></label><ng-transclude />',
                restrict: 'E',
                scope: {
                placeholder: '<'
            },
            link: function (scope, element, attributes) {
                function OnFocus() {
                    element.addClass('focused');
                }
                function OnBlur() {
                    element.removeClass('focused');
                }
                function OnChange() {
                    let value = element.find('input,select').val();
                    if (value == '' || value == null || typeof(value) === 'undefined') {
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
        }
    ]);
})();