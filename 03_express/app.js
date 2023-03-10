// 메인 index 페이지 만들기

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

const mainRouter = require('./routes/');
const userRouter = require('./routes/users');
// const postRouter = require('./routes/post');
const postRouter = require('./routes/posts');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// urlencoded 이 부분은 그냥 외우는게 좋다.

//localhost:4000
app.use('/', mainRouter);
//localhost:4000/users
app.use('/users', userRouter);
//localhost:4000/post
// app.use('/post', postRouter);
//localhost:4000/posts
app.use('/posts', postRouter);

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode);
  res.send(err.message + `<br /><a href="/">홈으로</a>`);
  res.send(`<a href="/">홈으로</a>`);
});

app.listen(PORT, () => {
  console.log(`포트번호 ${PORT}번 실행 중`);
});
