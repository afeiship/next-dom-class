(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var BLANK = ' ';

  // https://github.com/madrobby/zepto/blob/master/src/zepto.js

  var NxDomClass = nx.declare('nx.DomClass', {
    methods: {
      init: function (inElement) {
        this.element = inElement;
      },
      'add,remove,replace,toggle,contains': function (inName) {
        return function () {
          return this.__class__(inName, arguments);
        }
      },
      __class__: function (inAction, inArgs) {
        var cssClass = inArgs;
        var context = this.element.classList;
        if (inArgs.length === 1) {
          cssClass = inArgs[0].split(BLANK);
        }
        return context[inAction].apply(context, cssClass);
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxDomClass;
  }

}());
