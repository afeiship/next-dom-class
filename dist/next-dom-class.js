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
      add: function () {
        return this.__class__('add', arguments);
      },
      contains: function () {
        return this.__class__('contains', arguments);
      },
      remove: function () {
        return this.__class__('remove', arguments);
      },
      replace: function () {
        return this.__class__('replace', arguments);
      },
      toggle: function (inClassName) {
        return this.__class__('toggle', arguments);
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
