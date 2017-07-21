/*! vue.scripting.js @ 2017, yamoo9.net */
(function(global, Vue){
  'use strict';

  // Vue 개발 방법론(비교)
  // 데이터를 사용해서 사용자 화면을 업데이트 한다.
  // 데이터를 변경하면 사용자 화면은 자동으로 업데이트 된다.

  // Vue() 생성자 함수를 사용해서 객체를 생성한다.
  global.app = new Vue({
    // 마운트 할 DOM 객체의 식별자(선택자)
    el: '.demo-vue',
    // Vue 객체가 관리할 데이터
    data: {
      data: global.data
    }
  });

  // console.log(app.data);

})(window, window.Vue);