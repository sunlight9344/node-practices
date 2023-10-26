/**
 * poscodx-math 파일 모듈 테스트
 * 하나의 프로젝트 안의 모듈간 export/import 할 때 방식
 */

var math = require('./poscodx-math');
console.log(math.PI);
console.log(math.min(10, 20, 5, 100, 1, 3000));
console.log(math.max(10, 20, 5, 100, 1, 3000));

//이거 error임요
console.log(math.a);