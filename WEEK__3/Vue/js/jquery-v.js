/*! jQuery-verson-scripting.js @ 2017, yamoo9.net */
(function(global, $){
  'use strict';

  var $demo  = $('.demo'),
      $input = $demo.find('.user-input'),
      $print = $demo.find('.print-input');

  $input.val(data.title);
  $print.text(data.title);

  $input.on('keyup', updateData);

  function updateData(e) {
    // var value = e.target.value;
    var value = $input.val();
    data.title = value; // 데이터 업데이트
    $print.text(value); // UI View 업데이트
  }

})(window, window.jQuery);