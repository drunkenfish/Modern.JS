'use strict';

/*! ECMAScript2015(ES6).js © yamoo9.net, 2017 */

// [Babel](http://babeljs.io/)
// [ES6 호환성 테이블](http://kangax.github.io/compat-table/es6/)
// [ECMAScript 2015 (ES6)](https://github.com/yamoo9/FDS/blob/3rd_FDS/REFERENCES/ECMAScript2015.md)
// [Airbnb JavaScript 스타일 가이드](https://github.com/tipjs/javascript-style-guide)
// [ESDoc: 문서화 도구](https://esdoc.org/)

// ——————————————————————————————————————
// ECMA Script 2015 (v6)
// ES6 -- Babel(Node.js 환경) --> ES5
// ——————————————————————————————————————

////////////////
// let, const //
////////////////

// var 로 선언된 변수(선언부)는 영역 내 상단으로 끌어올려지는 현상
// function 정의 구문은 몸체가 전부 끌어올려진다.

var ko = 'Korean';

// Hoist

// 함수 영역만 가지고 있던 자바스크립트가
// let, const를 사용하게 되면서 블록 영역까지 사용 가능

// 상수 constant
var DOG_TO_HUMAN = 7;

{
  var airplain = '항공기';
  var _trailer = '트레일러';
  console.log(airplain); // airplain
  console.log(_trailer); // _trailer
  console.log(DOG_TO_HUMAN);
  // let trailer = '트레일ㄹ러러러러';
}

var airplain = '에어플레인';

// DOG_TO_HUMAN = airplain;

console.log(airplain); // airplain
console.log(trailer); // trailer
console.log(DOG_TO_HUMAN);

////////////////////////
// String Additions   //
////////////////////////
// string.includes()   //
// string.startsWith() //
// string.endsWith()   //
// string.repeat()     //
////////////////////////

// OOJS, JavaScript

var yamoo9 = {};
yamoo9.ui = {};

// 생성자
yamoo9.ui.Carousel = function () {};

// 생성자.프로토타입
yamoo9.ui.Carousel.prototype = {
  constructor: yamoo9.ui.Carousel,
  init: function init() {},
  destory: function destory() {},
  update: function update() {},
  render: function render() {}
};

//////////////////////
// Array Additions  //
//////////////////////
// array.find()     //
// array.includes() //
// array.fill()     //
// array.keys()     //
// array.values()   //
// array.entries()  //
//////////////////////


//////////////////////
// Template Strings //
//////////////////////


////////////////////
// Arrow Function //
////////////////////


////////////////////////
// Default Parameters //
////////////////////////


///////////////////////////////
// Rest or Spread Parameters //
///////////////////////////////


/////////////////////////
// Object Enhancements //
/////////////////////////


///////////////////////////
// Class & Inheritance //
///////////////////////////


////////////////////////////
// ECMAScript2015 Modules //
////////////////////////////


///////////////////
// Destructuring //
///////////////////


//////////////////////////////////
// Module Bundling with Webpack //
//////////////////////////////////


/////////////
// Promise //
/////////////


//////////
// Sets //
//////////


////////////////
// Generators //
////////////////