const promise = new Promise(function (resolve, reject) {
  const tetz = 'old';

  if (tetz === 'old') {
    setTimeout(function () {
      resolve('tetz is old');
    }, 3000);
  } else {
    reject('tetz is getting old');
  }
});
