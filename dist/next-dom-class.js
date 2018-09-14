(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var BLANK = ' ';

  // https://github.com/madrobby/zepto/blob/master/src/zepto.js

  var NxDomClass = nx.declare('nx.DomClass', {
    statics: {
      add: function (inElement, inClassName) {
        var cssClass = inClassName.split(BLANK);
        cssClass.forEach(function (cls) {
          inElement.classList.add(cls);
        });
      },
      contains: function (inElement, inClassName) {
        return inElement.classList.contains(inClassName);
      },
      remove: function (inElement, inClassName) {
        var cssClass = inClassName.split(BLANK);
        cssClass.forEach(function (cls) {
          inElement.classList.remove(cls);
        });
      },
      replace: function (inElement, inOldClassName, inClassName) {
        var cssClass = inClassName.split(BLANK);
        cssClass.forEach(function (cls) {
          inElement.classList.replace(inOldClassName, cls);
        });
      },
      toggle: function (inElement, inClassName) {
        inElement.classList.toggle(inClassName);
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxDomClass;
  }

}());
