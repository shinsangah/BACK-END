// function knockDoor(name, time, callback) {
//   console.log('노크를 하고 기다립니다!');
//   const sec = time * 1000;
//   setTimeout(() => {
//     callback(name, time);
//   }, sec);
// }

// function callName(name, time) {
//   console.log(`${name}이가 ${time}초 만에 문을 열고 나왔습니다.`);
// }

// knockDoor('영식', 3, callName);

// 강사님 정답

function knockDoor(time, name, callback) {
  // cb 라고 줄여서 쓰기도 함
  console.log('노크를 하고 기다립니다.');

  setTimeout(function () {
    // 실행하고싶은 코드
    callback(time, name);
  }, 1000 * time);
}

function callName(time, name) {
  console.log(`${name} 이가 ${time} 초 만에 문을 열고 나왔습니다!`);
}

knockDoor(3, '영식', callName);
