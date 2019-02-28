(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var classCache = {};
  var BLANK_RE = /\s+/g;

  // @thanks to zeptojs:
  function classRE(inName) {
    return inName in classCache
      ? classCache[inName]
      : (classCache[inName] = new RegExp('(^|\\s)' + inName + '(\\s|$)'));
  }

  // https://github.com/madrobby/zepto/blob/master/src/zepto.js
  var NxDomClass = nx.declare('nx.DomClass', {
    statics: {
      add: function(inElement, inClassName) {
        var classList = [];
        var oldClass = inElement.className;
        var space = oldClass ? ' ' : '';
        inClassName.split(BLANK_RE).forEach(function(cls) {
          !this.contains(inElement, cls) && classList.push(cls);
        }, this);

        if (classList.length) {
          inElement.className = oldClass + space + classList.join(' ');
        }
      },
      remove: function(inElement, inClassName) {
        var oldClass = inElement.className;
        var currentClass = oldClass;
        inClassName.split(BLANK_RE).forEach(function(cls) {
          if (this.contains(inElement, cls)) {
            currentClass = currentClass.replace(inClassName, '');
          }
        }, this);
        inElement.className = currentClass.trim();
      },
      replace: function(inElement, inClassName1, inClassName2) {
        var oldClass = inElement.className;
        var currentClass = oldClass.replace(inClassName1, inClassName2);
        inElement.className = currentClass.trim();
      },
      toggle: function(inElement, inClassName) {
        var action = this.contains(inElement, inClassName) ? 'remove' : 'add';
        this[action](inElement, inClassName);
      },
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
