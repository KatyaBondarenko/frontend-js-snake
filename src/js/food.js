'use strict';

var BaseElement = require('./base.element.js');

function Food (options) {

    options = options || {};

}

Food.prototype = Object.create(BaseElement.prototype);
Food.prototype.constructor = Food;

Food.prototype.feed = function(){

    this.isVisible = false;

};


module.exports = Food;