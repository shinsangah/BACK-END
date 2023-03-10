// 메인 index 페이지 만들기

const express = require('express');
const app = express();
const PORT = 4000;

const userRouter = require('./routes/users');
const mainRouter = require('./routes/index');

app.set('view engine', 'ejs');
app.use(express.static('public'));

//localhost:4000
app.use('/', mainRouter);
//localhost:4000/users
app.use('/users', userRouter);

app.listen(PORT, () => {
  console.log(`포트번호 ${PORT}번 실행 중`);
});
