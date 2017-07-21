/*! ECMAScript2015(ES6).js © yamoo9.net, 2017 */

// [Babel](http://babeljs.io/)
// [ES6 호환성 테이블](http://kangax.github.io/compat-table/es6/)
// [ECMAScript 2015 (ES6)](https://github.com/yamoo9/FDS/blob/3rd_FDS/REFERENCES/ECMAScript2015.md)
// [Airbnb JavaScript 스타일 가이드](https://github.com/tipjs/javascript-style-guide)
// [ESDoc: 문서화 도구](https://esdoc.org/)

// ——————————————————————————————————————
// ECMA Script 2015 (v6)
// ——————————————————————————————————————

////////////////
// let, const //
////////////////
// 기존에 사용되던 변수로 함수 내부가 아닐 경우,
// 해당 영역의 변수로 활용된다. (C, JAVA와 다르게 설계 되었다.)

// 변수와 다르게 상수는
// 선언과 값 할당이 한 라인에서 동시에 이루어져야 한다.
// 그렇지 않을 경우, 컴파일 오류가 발생한다.
const ROOT = window;
// ROOT = window;

var course_name = '모던 자바스크립트 환경 구성';
{
  // let은 새로운 변수 키워드
  // var 와 달리 지역(Local Scope)을 가진다.

  // var는 선언, 초기화가 동시에 이루어집니다.

  // let 변수 선언 > 초기화
  let course_name;

  // 선언, 초기화된 변수에 값을 할당
  course_name = 'Modern JavaScript';
  // 상수(Constant)는 런타임(실행) 중에 변형되지 않는 데이터 저장소
  // 이름 작성 규칙에서 상수는 모두 대문자로 작성합니다.
  const ROOT = document.querySelector('html');
}

// var    VS    let
// var 키워드를 사용하지 않아도 자동으로 변수를 생성한다.
// let 키워드는 반드시 사용해야 변수가 생성된다.
// var는 지역 스코프를 가지지 않지만,
// let은 지역 스코프를 가집니다.
// var는 스코프 호이스팅(끌어 올려진다) 선언 이전에 확인 가능
// let은 스코프 호이스팅(끌어 올려진다) 이루어지기는 하지만, 선언 이전에 확인은 오류 발생

function scope() {
  var local_variable; // 선언 과 초기화(undefined)
  // console.log(local_variable); // undefined
  local_variable = '지역 내 변수';

  let l_v; // 선언
  // console.log(l_v); // Error
  l_v = 'let을 사용한 지역 변수';
  // l_vv = [];


  if (true) {
    var local_variable = 9;
  }
}

scope();

// const 용도
// 상수 / 객체(일반,함수,배열)를 변질시키지 않되 활용하는 목적
// 초기 선언될 때 값이 할당된 후
// 브라우저에서 실행중인 상태에 값을 변경할 수는 없다.
// 하지만, 값이 유지되는 상황에서 내부의 속성이 변경되는 것은 허용한다.
// 참조형 데이터 유형의 경우 const를 사용해서 보호할 수 있다.
// 함부로 누군가에 의해서 변질되는 것을 막을 수 있다.





////////////////////////
// String Additions   //
////////////////////////
// string.includes(match[, position])   //
// string.startsWith() //
// string.endsWith()   //
// string.repeat()     //
////////////////////////




//////////////////////
// Array Additions  //
//////////////////////
// [].map()
// [].filter()
// [].forEach()
// array.find()     //
// array.includes() //
// array.fill()     //
// array.keys()     //
// array.values()   //
// array.entries()  //
//////////////////////

// forEach  VS  map
let data = [1, 3, 6, 9, 13];

let each_data = data.forEach(function(item){
  let r = item * item;
  return r;
});

console.log('each_data:', each_data);

let map_data = data.map(function(item){
  var r = item*item;
  return r;
});

console.log('map_data:', map_data);

// map  VS  filter

let filter_data = data.filter(function(item){
  return item % 3 === 0; // 조건 값의 결과가 참인 것을 필터링(걸러내기)하여 새로운 배열 반환
});

console.log('filter_data:', filter_data);

// filter  VS  find

let find_data = data.find(function(item){
  return item % 3 === 0; // 조건이 참인 첫번째 매칭 결과 값을 반환
});

console.log('find_data:', find_data);

Array.prototype.findMatch = function(condition, index) {
  if ( typeof condition !== 'function' || typeof index !== 'number' ) {
    throw '전달인자는 함수, 숫자 순입니다.';
  }
  var collection = this.filter(function(item){
    if (condition(item)) { return item; }
  });
  return collection[index];
};


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



