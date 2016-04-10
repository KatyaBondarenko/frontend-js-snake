'use strict';

var BaseElement = require('./base.element.js');

function  SnakePart (options){

    options = options || {};
    BaseElement.call(this, options);
    this.direction =  (options.direction !== undefined) ? options.direction : 'right';

}

SnakePart.prototype = Object.create(BaseElement.prototype);
SnakePart.prototype.constructor = SnakePart;

SnakePart.prototype.move = function(steps){

    steps = steps || 0

        switch (this.direction) {
            case 'right':
                this.x = this.x + steps;
                break;
            case 'left':
                this.x = this.x - steps;
                break;
            case 'up':
                this.y = this.y - steps;
                break;
            case 'down':
                this.y = this.y + steps;
                break;

        }

};

module.exports = SnakePart;

