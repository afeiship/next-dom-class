(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var BLANK = /\s+/;

  // https://github.com/madrobby/zepto/blob/master/src/zepto.js

  var NxDomClass = nx.declare('nx.DomClass', {
    statics: {
      add: function(){},
      remove: function(){},
      replace: function(){},
      toggle: function(){},
      contains: function(){}
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxDomClass;
  }

}());
