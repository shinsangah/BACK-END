// 28강 P.85 실습, posts 서비스 만들기

const express = require('express');

const router = express.Router();

const POST = [
  {
    title: 'sangah',
    content: '신상아',
  },
  {
    title: 'comgen',
    content: '컴퓨터천재',
  },
];

router.get('/', (req, res) => {
  const postCount = POST.length;
  res.render('post', { POST, postCount });
});

router.post('/add', (req, res) => {
  console.log(req.body);
  if (Object.keys(req.query).length >= 1) {
    if (req.query.title && req.query.content) {
      const newPost = {
        title: req.query.title,
        content: req.query.content,
      };

      POST.push(newPost);

      res.send('게시 완료!');
    } else {
      const err = new Error('쿼리 입력이 잘못 되었습니다!');
      err.statusCode = 400;
      throw err;
      // postman에서 localhost:4000/post/add?title=dd 하나라도 입력 안하면 나옴
    }
  } else if (Object.keys(req.body).length >= 1) {
    if (req.body.title && req.body.content) {
      const newPost = {
        title: req.body.title,
        content: req.body.content,
      };
      POST.push(newPost);
      res.redirect('/post');
    } else {
      const err = new Error('폼 태그 입력을 확인 하세요!');
      err.statusCode = 400;
      throw err;
    }
  } else {
    const err = new Error('데이터가 입력 되지 않았습니다!');
    err.statusCode = 400;
    throw err;
  }
});

module.exports = router;
