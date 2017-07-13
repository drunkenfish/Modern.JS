/*! vanilla-version-scripting.js @ 2017, yamoo9.net */
(function(global){
  'use strict';

  // ——————————————————————————————————————
  // 초기화
  // ——————————————————————————————————————
  var
    document = global.document,
    demo, user_input, print_input;
  function init() {
    // .demo 찾기
    demo = document.querySelector('.demo');
    // .user-input 찾기
    user_input = demo.querySelector('.user-input');
    // .print-input 찾기
    print_input = demo.querySelector('.print-input');

    // 초기 UI 렌더링
    render();

    // 이벤트 연결
    bind();
  }

  // ——————————————————————————————————————
  // 렌더링
  // ——————————————————————————————————————
  function render() {
    var value = data.title;
    console.log(value);
    user_input.value = print_input.textContent = value;
  }

  // ——————————————————————————————————————
  // 이벤트 바인딩
  // ——————————————————————————————————————
  function bind() {
    user_input.addEventListener('keyup', updateData);
  }

  // ——————————————————————————————————————
  // 이벤트 핸들러(함수)
  // ——————————————————————————————————————
  function updateData(ev) {
    var target = ev.target;
    var value = target.value;
    // 데이터 업데이트
    data.title = value;
    // 사용자 화면을 업데이트
    print_input.innerText = value;
  }

  init();

})(window);