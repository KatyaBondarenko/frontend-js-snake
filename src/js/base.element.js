'use strict';


function  BaseElement (options){

    options = options || {};
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.isVisible = (options.isVisible !== undefined) ? options.isVisible : true;

}

module.exports = BaseElement;