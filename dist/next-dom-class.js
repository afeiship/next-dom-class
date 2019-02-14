(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var BLANK = /\s/;

  // https://github.com/madrobby/zepto/blob/master/src/zepto.js

  var NxDomClass = nx.declare('nx.DomClass', {
    statics: {
      'add,remove,replace,toggle,contains': function (inName) {
        return function () {
          return this.__class__(inName, arguments);
        }
      },
      __class__: function (inAction, inArgs) {
        var cssClass = inArgs;
        var context = inArgs[0].classList;
        var args = nx.slice(inArgs).slice(1)
        if (args.length === 1) {
          cssClass = args[0].split(BLANK);
        }
        return context[inAction].apply(context, cssClass);
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxDomClass;
  }

}());
