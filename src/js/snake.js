'use strict';

function  Snake (options){

    options = options || {};

    this.length = options.length;
    this.direction = options.direction;
    this.parts = [];

}

Snake.prototype.eat = function(){

    this.length = this.length + 1;

};


Snake.prototype.move = function(steps){



};


module.exports = Snake;