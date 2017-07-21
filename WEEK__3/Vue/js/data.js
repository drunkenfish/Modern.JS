// VUEX: STORE => STATE, DATA
var data = {
  title: 'Hello Vue',
  message: 'Vue.js is Modern Progressive Framework.'
};

(function(global){
  'use strict';

  // ES5 (IE 9+)
  // Object.defineProperty()
  // Reactivity System
  global.data = {};

  var title = '';

  // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
  Object.defineProperty(data, 'title', {
    get: function() {
      console.log('get title');
      return title;
    },
    set: function(value) {
      console.log('set title');
      title = value;
    }
  });

})//(window);