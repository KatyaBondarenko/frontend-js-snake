'use strict';

var SnakePart = require('./snake.part.js');

function  Snake (options){

    options = options || {};

    this.length = options.length || 0;
    this.direction = options.direction || 'right';
    this.parts = [];
    this.head = this.parts[0];

}

Snake.prototype.eat = function(){

    var snakePart = new SnakePart();
        this.parts.push(snakePart);
    snakePart.direction = (this.parts[this.parts.length - 1].direction !== undefined)
        ? this.parts[this.parts.length - 1].direction : this.direction;

};


Snake.prototype.move = function(steps){

    this.steps = (this.steps !== undefined) ? this.steps : 1;



};


module.exports = Snake;