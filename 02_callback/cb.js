// CALL BACK

function func1(callback) {
  console.log('1번 함수');
  callback();
}

function func2() {
  console.log('2번 함수');
}

function func3() {
  console.log('3번 함수');
}

func1(func3);
