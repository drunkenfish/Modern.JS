/*! es5.js © yamoo9.net, 2017 */

//////////////////////////////
// 1. JavaScript 데이터 유형
// 참고: https://goo.gl/UqYzzm
//////////////////////////////

var num, str, boo, fnc, arr, obj;

// 1-1) 원시(Primitive) 데이터 유형
// Number
num = 2018;
// String
str = 'Phone Number';
// Boolean
boo = false;
// undefined
// null

// 1-2) 참조(Reference)형 데이터 유형
// Function
fnc = function(){};
// Array
arr = [];
// Object
obj = {};


// 1-3) 원시 데이터 타입, 참조형 데이터 타입 구분
// 1-3-1) 값 복사(pass by value)
// 원시 데이터 유형: 숫자 값, 문자 값, 논리 값, null, undefined

console.groupCollapsed('값 복사 예시');

var copyed_data = num; // 값 복사

console.log('num: %s, copyed_data: %s', num, copyed_data);

// 데이터 변형
num = num + 20; // 2018 + 20 = 2038

console.log('num: %s, copyed_data: %s', num, copyed_data);

console.groupEnd('값 복사 예시');

// 1-3-2) 값 참조(pass by reference)
// 참조 데이터 유형: 함수 객체, 배열 객체, 객체

console.groupCollapsed('값 참조 예시');

var ref_data = arr; // []

console.log('arr: %s, ref_data: %s', arr, ref_data);

// 참조형 데이터 변형
arr.push(window);
arr.push(document);
arr.push(document.body);

console.log('arr:', arr, 'ref_data:', ref_data);
console.log('arr: %s, ref_data: %s', arr, ref_data);

console.groupEnd('값 참조 예시');


// 1-4) 자바스크립트 메모리 관리는 어떻게 하는가?
// 가비지 컬렉터 알고리즘
// 참조되어 있지 않은 데이터는 메모리에서 삭제한다.
// 참고: https://goo.gl/EWWHnZ


////////////////////////////////////
// 2. JavaScript 데이터 유형 올바른 감지
////////////////////////////////////

// JAVA  vs JavaScript
// 표범   vs 바다표범
// 정적 형지정 언어 vs 동적 형지정 언어 (TypeScript, 정적 형지정)

// 2-1) 데이터 타입 검증 방법 typeof
// 참고: https://goo.gl/6rpQQi

// typeof는 배열 데이터를 정확하게 검증하지 못한다.
// typeof는 null도 정확하게 검증하지 못한다.
console.groupCollapsed('typeof의 문제점');


function id(name) {
  // 매개변수 데이터 타입 검증
  // validation parameter's data type
  // 문자열만 가능!
  if ( typeof name !== 'string' ) {
    throw '전달인자는 문자열만 가능합니다.';
  }
  return document.getElementById(name);
}

// var app = id(9293); // 오류가 발생하지 않는 것이 문제다
// console.log(app);

function copyArray(data) {
  // 매개변수 조건: 반드시 data 배열이어야 한다.
  // if ( !data || typeof data !== 'array' ) {
  // if ( !data || (typeof data === 'object' && !data.length) ) {
  // if ( !data || !(data instanceof Array) ) {
  if ( !data || !Array.isArray(data) ) {
    throw '전달인자는 배열이어야만 합니다.';
  }
  return data.slice();
}

var origin_data = ['재능기부', '세계여행']; // Array

console.log( typeof origin_data ); // 'array' ?

var wishlist = copyArray( origin_data );

console.log(wishlist);

console.groupEnd('typeof의 문제점');


// 2-2) 데이터 타입 검증 방법 객체 instanceof
// 참고: https://goo.gl/3w3EEw

// JAVA 에서는...
// 붕어빵 틀 : 클래스(Class)란?
// 붕어빵    : 인스턴스(Instance)란?

// JavaScript 에서는...
// 생성자(Constructor)
// 객체(Object)

// 객체 생성 구문 JAVA와 흡사
// var instance = new Class()

// 객체(인스턴스) instanceof 생성자(클래스)
console.groupCollapsed('instanceof 는 올바르게 데이터 검증하는가?');

console.log( 'origin_data instanceof Array:', origin_data instanceof Array ); // true
console.log( 'origin_data instanceof Object:', origin_data instanceof Object ); // true

console.groupEnd('instanceof 는 올바르게 데이터 검증하는가?');


// 2-3) 데이터 타입 검증 방법 .constructor 속성
// 참고: https://goo.gl/RqAF6f

// JavaScript의 모든 객체는 반드시 .constructor 속성을 가진다.
console.groupCollapsed('constructor 사용 예시');

console.log('num.constructor:', num.constructor === Number);
console.log('str.constructor:', str.constructor === String);
console.log('boo.constructor:', boo.constructor === Boolean);
console.log('fnc.constructor:', fnc.constructor === Function);
console.log('arr.constructor:', arr.constructor === Array);
console.log('obj.constructor:', obj.constructor === Object);

console.groupEnd('constructor 사용 예시');


// 2-4) 데이터 타입 검증 방법 직접 만든 유틸리티 함수

console.group('사용자 정의 데이터 타입 검증 유틸리티 함수 type()');

// JavaScript는 동적 형지정 언어로 많은 허점을 가진다.
// JavaScript가 제공하는 데이터 유형 검증 방법은 모두 완벽하지 않다.
// 하여 사용자가 직접 올바르게 데이터 유형을 검증할 수 있는 유틸리티 함수를 만들어야 한다.
function type(data) {
  // 검증 결과 반환 (소문자 문자열로 반환)
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
}
function isNumber(data)   { return type(data) === 'number';   }
function isString(data)   { return type(data) === 'string';   }
function isBoolean(data)  { return type(data) === 'boolean';  }
function isFunction(data) { return type(data) === 'function'; }
function isArray(data)    { return type(data) === 'array';    }
function isObject(data)   { return type(data) === 'object';   }

// DOM API
// - HTMLCollection
// - Nodelist
// - Node 객체
//   - document.ELEMENT_NODE
//   - document.ATTRIBUTE_NODE
//   - document.TEXT_NODE
//   - document.COMMENT_NODE
//   - document.DOCTYPE_NODE
//   - document.DOCUMENT_NODE

function isElementNode(data) {

  // 문, Statement
  // 문은 값을 반환할 수 없다.
  // if ( data && data.nodeType === document.ELEMENT_NODE ) {
  //   return true;
  // } else {
  //   return false;
  // }

  // 식, Expression
  // 식은 연산(계산)되어 최종적으로 값을 도출한다.
  return data && data.nodeType === document.ELEMENT_NODE;

}
function isNodeList(data) {
  var data_type = type(data);
  return data && (data_type === 'htmlcollection' || data_type === 'nodelist');
}

console.groupEnd('사용자 정의 데이터 타입 검증 유틸리티 함수 type()');




////////////////////////////
// 3. JavaScript 구문, 표현식
////////////////////////////


// 3-1) 구문(Statement)
// statement는 "구문" 이라고 할 수 있습니다.
// 의미 상으로 보면 자바스크립트 인터프리터(번역기)에게 내리는 지시문(Directive)이라 할 수 입니다.
// 인터프리터가 이것을 보고 어떤 동작을 해야하는지 알게됩니다.
// 구문은 어떻게 동작해야 하는지 동작만 알려주고 사라집니다.
// 즉, 구문의 결과로는 아무것도 남지 않습니다.


// 3-2) 표현식(Expression)
// 식은 expression 이라 하는데, 간단히 말해 하나의 값이 되는 것입니다.
// 결론적으로 다른 모든 식은 하나의 값이 수렴하여 값 식이 되는 것이므로 "식 == 값"으로 이해해도 무방합니다.







////////////////////
// 4. JavaScript 함수
////////////////////

// 함수호출 : 함수를 호출한 결과는 값이 됩니다.
// 자바는 void를 반환하면 값이 될 수 없습니다만,
// 자바스크립트는 명시적으로 반환하지 않아도 undefined 가 반환되어
// 언제나 값으로 수렴됩니다.


// 4-1) 영역(Scope)

// 4-1-1) 라이프 사이클(Life Cycle)

// 4-1-2) 호이스팅(Hosting)

// 4-1-3) this 컨텍스트 참조

// 4-1-4) .call(), .apply(), .bind()







////////////////////
// 5. JavaScript 배열
////////////////////


// 5-1) 데이터 관리

// 5-1-1) 데이터 아이템 생성(Create)

// 5-1-2) 데이터 아이템 읽기(Read)

// 5-1-3) 데이터 아이템 변경(Update)

// 5-1-4) 데이터 아이템 제거(Delete)


// 5-2) Array.isArray()


// 5-3) .forEach()  VS  .map()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


// 5-4) .slice()  VS  .filter()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


// 5-5) .indexOf()  VS  .lastIndexOf()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf


// 5-6) .every()  VS  .some()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some


// 5-7) .reduce()  VS  .reduceRight()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight







////////////////////
// 6. JavaScript 객체
////////////////////


// 6-1) Object.create()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/create


// 6-2) Object.defineProperty(), Object.defineProperties()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties


// 6-3) Object.getPrototypeOf()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf


// 6-4) Object.keys()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys


// 6-5) Object.seal()  VS Object.freeze()  VS  Object.preventExtensions()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/seal
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions


// 6-6) Object.isSealed()  VS  Object.isFreeze()  VS  Object.isExtensible()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible







/////////////
// 7. ES5 상속
/////////////

var human = {
  sleeping : function() {},
  running  : function() {},
  eating   : function() {},
  going    : function() {},
};

var artist = Object.create(human, {
  thinking: {
    value: function(){},
    writable: true,
    enumerable: true,
    configurable: true
  },
  drawing: {
    value: function(){},
    writable: true,
    enumerable: true,
    configurable: true
  },
});






////////////////////////
// 8. DOM API
////////////////////////


// 8-1) DOM 선택 API 메서드
// getElementById()
// getElementsByTagName()
// getElementsByClassName() (IE 9+)
// querySelector() (IE 8+ CSS2 선택자로 제한, IE 9+)
// querySelectorAll()
// matches() (IE 9+ `ms` 프리픽스 필요)
// - msMatcheSelector()
// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches


// 8-2) Node 속성
// childNodes
// firstChild
// lastChild
// nextSibling
// previousSibling
// parentNode
// nodeType
// nodeName
// nodeValue


// 8-3) Node 메서드
// hasChildNodes()
// appendChild()
// insertBefore()
// removeChild()
// replaceChild()
// cloneNode()
// contains()
// https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
// isEqualNode() (IE 9+)
// https://developer.mozilla.org/en-US/docs/Web/API/Node/isEqualNode
// compareDocumentPosition() (IE 9+)
// https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition


// 8-4) Document 메서드
// createElement()
// createTextNode()


// 8-5) HTML*Element 속성
// children
// firstElementChild
// lastElementChild
// nextElementSibling
// previousElementSibling
// attributes (이 속성을 통해 반환되는 유사 배열 집합은 라이브 상태, 즉 실시간으로 변경된다)
// innerHTML
// outerHTML
// innerText
// textContent (IE 9+)
// https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
// childElementCount (IE 9+)
// https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/childElementCount
// classList (IE 10+)
// - add()
// - remove()
// - contains()
// - toggle()
// dataset (JavaScript 객체로 `data-*` 속성에 사용된 `-`은 모두 camelCase로 처리하여 사용)


// 8-6) HTML*Element 메서드
// getAttribute()
// setAttribute()
// removeAttribute()
// hasAttribute() (요소노드에 속성이 있으면 값이 없어도 `true`를 반환, `Boolean` 속성 반환 값일 경우 상태 확인 가능)
// insertAdjacentHTML()
// https://developer.mozilla.org/ko/docs/Web/API/Element/insertAdjacentHTML
// insertAdjacentElement() (IE 8+)
// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
// insertAdjacentText() (IE ?)
// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentText







////////////////////////
// 9. AJAX & REST API
////////////////////////

// 비동기 통신을 위한 객체 생성 (생성자 함수로부터)
// IE 6-, ActiveXObject() 사용....
// IE 7+, XMLHttpRequest() 사용 가능

// 비동기 통신을 설정
// 서버에 요청


// REST API
// HTTP 메서드: GET, POST, PUT, DELETE
// https://myjson.com


// defer, async 속성 사용 방법, 차이점 설명
// http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html

// defer 속성은 HTML 해석이 끝난 후 차례대로 실행된다.
// 하지만 모든 브라우저에서 지원하지는 않는다. (IE 10+)

// async 속성은 비동기적으로 실행되기에 실행 순서가 보장되지 않는다.
// 그러므로 의존 모듈이 있을 경우 사용에 주의가 요구된다.