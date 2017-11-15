(function () {
    angular.module('ng-floating-label', ['ng-floating-label.directives']);
    angular.module('ng-floating-label.directives', []);
})();
(function () {
    angular.module('ng-floating-label.directives').directive('ngFloatingLabel', [function () {
        return {
            template: '<label ng-bind="placeholder"></label><ng-transclude />',
            transclude: true,
            restrict: 'E',
            scope: {
                placeholder: '<'
            },
            link: function link(scope, element, attributes) {
                var edit = void 0;

                function OnFocus() {
                    element.addClass('focused');
                }
                function OnBlur() {
                    element.removeClass('focused');
                }
                function OnChange() {
                    var value = edit.val();
                    if (value == '' || value == null || typeof value === 'undefined') {
                        element.removeClass('filled');
                    } else {
                        element.addClass('filled');
                    }

                    if (edit[0].tagName.toLowerCase() == 'textarea') {
                        edit.css("height", "auto");
                        var height = edit[0].scrollHeight;
                        if (height > 0) {
                            edit.css("height", height + "px");
                        }
                    }
                }

                element.ready(function () {
                    if (element.find('input').length > 0) {
                        edit = element.find('input');
                    } else if (element.find('select').length > 0) {
                        edit = element.find('select');
                    } else if (element.find('textarea')) {
                        edit = element.find('textarea');
                    }

                    edit.on('focus', OnFocus);
                    edit.on('blur', OnBlur);
                    edit.on('change', OnChange);

                    OnChange();
                });
            }
        };
    }]);
})();
(function () {
    angular.module('ng-floating-label.directives').directive("ngModel", function () {
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