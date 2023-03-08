// 간단하게 카피하고 보여주심
// p.118
// 안적어서 혼자 적어봐야함

// p.126

const lucky = false;
const promise = new Promise((resolve, reject) => {
  console.log('주식이 오르기를 기다리기 시작합니다!');
  setTimeout(() => {
    console.log('3년의 시간이 흐르고..');
    if (lucky) {
      const profit = 3000;
      resolve(profit);
    } else {
      reject('아.. 망했어요.');
    }
  }, 1000);
});

async function howMuch() {
  try {
    const result = await promise;
    if (result) console.log(`기다림의 보상으로 ${result} 원을 벌었습니다!`);
  } catch (err) {
    console.log(err);
  }
}

howMuch();
