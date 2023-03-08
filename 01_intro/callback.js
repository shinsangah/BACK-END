// #ts-check

// knockDoor (name, time, callback)
// console.log(`노크를 하고 기다립니다!`);
function buySync(item, price, quantity, callback) {
  console.log(`${item} 상품을 ${quantity}개 골라서 점원에게 주었습니다.`);

  setTimeout(() => {
    console.log('계산이 필요합니다.');
    const total = price * quantity;

    // callback(time)
    callback(total);
  }, 2000);
}
// function pay(name)) {
//   console.log(`${name} 이가 3초 만에 문을 열고 나왔습니다..`)
// }

// function pay(total) {
//   console.log(`${total} 원을 지불하였습니다.`);
// }

// buySync('포켓몬빵', 1000, 5, pay);

// 자바스크립트의 비동기적 특성을 버리고,
// 콜백으로 동기적으로 함
