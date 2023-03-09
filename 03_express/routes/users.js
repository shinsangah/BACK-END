// #ts-check
const express = require('express');

const router = express.Router();

const USER = {
  1: {
    email: 'sangah',
    name: '신상아',
  },
};

const USER_ARR = [
  {
    id: 'tetz',
    name: '이효석',
    email: 'tetz@gmail.com',
  },
  {
    id: 'pororo',
    name: '뽀로로',
    email: 'pororo@gmail.com',
  },
];

// http://localhost:4000/users
router.get('/', (req, res) => {
  // res.send('회원 목록');
  // res.send(USER);
  res.render('users', { USER_ARR, userCount: USER_ARR.length });
});

router.get('/id/:id', (req, res) => {
  // res.send('특정 회원 정보');
  if (!req.params.id) res.send('ID를 입력해주세요.');
  // depth는 유지를 하면서 동일한 기능 만드는 것이다.
  // 요즘 코딩 트렌드임. if else문 다 안씀..
  const userData = USER[req.params.id];
  if (userData) {
    res.send(userData);
  } else {
    res.send('ID를 못찾겠어요.');
  }
});

// get 방식은 서버에 변경을 하지 않을 때 사용
router.post('/add', (req, res) => {
  // res.send('회원 등록');

  // 코드 depth 줄이기
  if (!req.query.id || !req.query.name)
    return res.end('쿼리 입력이 잘못 되었습니다.');

  const newUser = {
    id: req.query.id,
    name: req.query.name,
  };

  // Object.keys() ; 인자로 전달받은 키 값들을 배열로 만들어줌
  USER[Object.keys(USER).length + 1] = newUser;

  res.send('회원 등록 완료!');
});

// p/69
router.get('/show', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
  res.write('<h1>Hello, Dynamic Web Page</h1>');

  for (let i = 0; i < USER_ARR.length; i++) {
    res.write(`<h2>USER ID is ${USER_ARR[i].id}</h2>`);
    res.write(`<h2>USER NAME is ${USER_ARR[i].name}</h2>`);
    res.write(`<h2>USER EMAIL is ${USER_ARR[i].email}</h2>`);
  }

  res.end();
});

module.exports = router;
