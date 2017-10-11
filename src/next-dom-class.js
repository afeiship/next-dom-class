(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var _ = nx.import(['is']);


  // https://github.com/madrobby/zepto/blob/master/src/zepto.js

  var NxDomClass = nx.declare('nx.DomClass', {
    statics: {
      add: function(){},
      has: function(){},
      set: function(){},
      get: function(){},
      remove: function(){},
      replace: function(){},
      toggle: function(){},
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxDomClass;
  }

}());
