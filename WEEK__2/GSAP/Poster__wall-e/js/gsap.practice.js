/*! gsap.practice.js @ 2017, yamoo9.net */
(function(){
  'use strict';

  var $soundtrac      = $('.soundtrac');
  var $disney_pixar   = $('.disney-pixar');
  var $logo           = $('.logo');
  var $eve            = $('.eve');
  var $m_o            = $('.m-o');
  var $wall_e         = $('.wall-e');
  var $music_composed = $('.music-composed');

  // 멀티 엘리먼트 애니메이션 설정 —————————————————————————————————————————————————————————————————————————
  TweenMax.from( $soundtrac,      0.3, { autoAlpha: 0, y: -100, ease: Power1.easeOut, delay: 0   } );
  TweenMax.from( $disney_pixar,   0.3, { autoAlpha: 0, y: -100, ease: Power1.easeOut, delay: 0.2 } );
  TweenMax.from( $logo,           0.3, { autoAlpha: 0, y: -100, ease: Power1.easeOut, delay: 0.4 } );
  TweenMax.from( $eve,            0.3, { autoAlpha: 0, y: -100, ease: Power1.easeOut, delay: 0.6 } );
  TweenMax.from( $m_o,            0.3, { autoAlpha: 0, y: -100, ease: Power1.easeOut, delay: 0.8 } );
  TweenMax.from( $wall_e,         0.3, { autoAlpha: 0, y: -100, ease: Power1.easeOut, delay: 1.0 } );
  TweenMax.from( $music_composed, 0.3, { autoAlpha: 0, y: -100, ease: Power1.easeOut, delay: 1.2 } );

})();