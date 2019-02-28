(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var classCache = {};

  // @thanks to zeptojs:
  function classRE(inName) {
    return inName in classCache
      ? classCache[inName]
      : (classCache[inName] = new RegExp('(^|\\s)' + inName + '(\\s|$)'));
  }

  // https://github.com/madrobby/zepto/blob/master/src/zepto.js
  var NxDomClass = nx.declare('nx.DomClass', {
    statics: {
      add: function() {},
      remove: function() {},
      replace: function() {},
      toggle: function() {},
      contains: function(inElement, inClassName) {
        if (!inClassName) return false;
        var className = inElement.className;
        return classRE(inClassName).test(className);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxDomClass;
  }
})();
