# ng-floating-label
A module for Material-like floating label inputs on AngularJS.

## Installation
    bower install --save ng-floating-label

## Configuration

* Import the `ng-floating-label.min.js` script in your page. For example:
```html
<script src="ng-floating-label.min.js"></script>
```
* Import the `ng-floating-label.min.css` stylesheet in your page. For example:
```html
<link href="ng-floating-label.min.css" type="text/css" rel="stylesheet" />
```
* Include the module name 'ng-floating-label' in your angular app. For example:
```javascript
angular.module('app', ['ng-floating-label']);
```

## Usage
You just need to encapsulate your `input`, `textarea` or `select` tag with a `<ng-floating-label>` element. Like this:
```html
<ng-floating-label placeholder="ctrl.CustomLabel">
    <input type="text" ng-model="ctrl.CustomValue" />
</ng-floating-label>

<ng-floating-label placeholder="ctrl.CustomLabel">
    <textarea ng-model="ctrl.CustomValue" rows="1"></textarea>
</ng-floating-label>

<ng-floating-label placeholder="ctrl.CustomLabel">
    <select ng-model="ctrl.CustomValue">
        <option ng-value="1">1</option>
        <option ng-value="2">2</option>
        <option ng-value="3">3</option>
    </select>
</ng-floating-label>
```

## Author
[Carlos Moreira](http://www.codepen.io/ckarumoreira)
