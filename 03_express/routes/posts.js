// 28강 실습, posts 서비스 만들기 (강사님)

const express = require('express');

const router = express.Router();

const POSTS = [
  {
    title: 'title1',
    content: 'title1 내용입니다.',
  },
  {
    title: 'title2',
    content: 'title2 내용입니다.',
  },
];

router.get('/', (req, res) => {
  res.render('posts', { POSTS, postsCounts: POSTS.length });
});

// localhost:4000/posts
router.post('/add', (req, res) => {
  if (Object.keys(req.body).length >= 1) {
    if (req.body.title && req.body.content) {
      const newPost = {
        title: req.body.title,
        content: req.body.content,
      };

      POSTS.push(newPost);
      res.redirect('/posts');
    } else {
      const err = new Error('폼 데이터 입력을 확인하세요.');
      err.statusCode = 400;
      // 400번대가 맞는 번호가 아니라, 다시 수업준비해서 알려주신다고 함
      throw err;
    }
  } else {
    const err = new Error('데이터가 입력 되지 않았습니다!');
    err.statusCode = 400;
    throw err;
  }
});

module.exports = router;
