// ES6 방식 - export 실습!

const student = ['세호', '재석'];

function showStudent() {
  student.map((el) => console.log(el));
}

export { showStudent };
