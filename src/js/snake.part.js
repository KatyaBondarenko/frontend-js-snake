'use strict';

var BaseElement = require('./base.element.js');

function  SnakePart (options){

    options = options || {};
    this.direction =  (options.direction !== undefined) ? options.direction : 'right';

}

SnakePart.prototype = Object.create(BaseElement.prototype);
SnakePart.prototype.constructor = SnakePart;

SnakePart.prototype.move = function(steps){

    if (steps > 0) {
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
            default:
                this.x = 0;
                this.y = 0;
        }
    }


};

module.exports = SnakePart;

