'use strict';

function  Snake (options){

    options = options || {};

    this.length = options.length || 0;
    this.direction = options.direction || 'down';
    this.parts = [];
    this.head = this.parts[0];

}

Snake.prototype.eat = function(){

    this.length = this.length + 1;

};


Snake.prototype.move = function(steps){

    this.steps = (this.steps !== undefined) ? this.steps : 1;

};


module.exports = Snake;