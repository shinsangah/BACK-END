// 26강 p.120

const fs = require('fs').promises;

fs.readFile('test.txt', 'utf-8')
  // fs.readFile('test.txt', 'utf-8', function(err, data)) 내장되어 있는거임
  .then(function (data) {
    console.log('1번', data.toString());
    return fs.readFile('test.txt', 'utf-8');
  })
  .then((data) => {
    console.log('2번', data.toString());
    return fs.readFile('test.txt', 'utf-8');
  })
  .then((data) => {
    console.log('3번', data.toString());
    return fs.readFile('test.txt', 'utf-8');
  })
  .then((data) => {
    console.log('4번', data.toString());
    return fs.readFile('test.txt', 'utf-8');
  })
  .catch(function (err) {
    console.log(err);
    throw err;
    // 에러 자체를 자바스크립트로 던져서 처리하는 코드
  });

// 동기적으로 실행함!
