// 27강 - p/64 (실습, 회원 수정 – 삭제 API 만들기!)
// @ ts-check

// • 회원 수정, 삭제 API를 만들어 주세요 ☺
// • 회원 수정 테스트 URL
// • PUT Localhost:4000/users/modify/1?id=test&name=test
// • 회원 삭제 테스트 URL
// • DELETE Localhost:4000/users/delete/1

//@ts-check

const express = require('express');
// express는 프레임워크 같은 것이다. 라이브러리랑 좀 다르다.
const app = express();
// app은 express 라고 지정해준거, app이 쓰기 편하니까.
const PORT = 9000;
// PORT도 굳이 쓸 필요 없고 그냥 4000 써도 된다고
const USER = {
  // USER 임의로 데이터 만들어서 객체로 만든것이다.
  1: {
    email: 'kr.sangah@gmail.com',
    name: '신상아',
  },
};
const userRouter = express.Router();
// / 슬래쉬하고 유저로 왔다갔다 불러오는 애, 차원을 넘나든다.

app.use('/users', userRouter);
// express 안에 router라는 기능이 있어서 그때그때 쓰려고
// /users 라는 것을 router로 사용하겠다는 것임.
// 지금 담겨있는 데이터를 보게 해줘 = users

// /users 라고 쓰는걸 userRouter라고 선언해준 것이다.
// 귀찮아서 계속 써줘야 하니까

userRouter.get('/', (req, res) => {
  // 그냥 슬래시만 써도 user가 자동으로 붙은거임. router는 /users 랑 똑같은거다.
  res.send(USER);
  // 위에 작동을 한다는거면 USER를 보내는 것임
  // users를 편하게 쓰려고 하는거임. 앞에 항상 users/ 가 있다고 생각해야함
});

// put은 있는 정보를 수정할 수 있다.
// put은 전체 수정, patch가 부분 수정
userRouter.put('/modify/:id', (req, res) => {
  // express.Router().put 써야 함 근데 편하게 선언해놓고 쓰는것이다.
  // 앞에는 무조건 /users/modify/:id users가 있는 것이다.
  if (req.query.email && req.query.name) {
    //둘 다 무조건 입력이 되어야 함. 파라미터로 이메일과, 이름이 들어왔을 때
    // query는 사용자가 id, name을 적어야 하는 형식이다.
    if (req.params.id in USER) {
      // USER key 값이 있는지 확인해서 1이 맞으면 밑에가 실행되는 것
      USER[req.params.id] = {
        // USER 1 을 불러온 것이다.
        // key 값을 가져오는 것이니까 params이다.
        email: req.query.email,
        name: req.query.name,
        // 형식이 위에랑 똑같다. 그런데 / 쓰고 그거 한걸 (=query) 여기 대입하라는 것이다.
      };
      res.send('회원 정보 수정 완료!');
      // 다 처리해준 다음에 얘기해주는 것임. 서버가 응답해주는 것.
    } else {
      res.send('해당 ID를 가진 회원이 존재하지 않습니다.');
    }
  } else {
    //쿼리 입력이 잘못 되었거나, 파라미터 입력이 잘못되었거나
    res.send('잘못 된 쿼리 입력입니다.');
  }
});

// 이름이랑 전화번호 적어주세요. = 쿼리
// 아예 그냥 문서에다 적어놓은 다음에 해당 칸 내용을 적어주세요. = 파람스
// 파람스는 그냥 해당 칸에 데이터만 적었지. params로 id가 1로 들어왔다는 것.

userRouter.delete('/delete/:id', (req, res) => {
  if (req.params.id in USER) {
    delete USER[req.params.id];
    // delete 여기에 있는건 진짜 기능을 함
    // 우린 편하게 설명하려고 1이라고 했지만, USER 안에 1도 있고, 3도 있을 수 있다.
    // 사용자가 입력한 값을 입력하라고! 고객에게 주문 받으려고 1,2,3 중 뭐를 입력할건지..
    res.send(`회원 삭제 완료`);
  } else {
    res.send('해당 ID를 가진 회원이 존재하지 않습니다.');
  }
});

userRouter.post('/create', (req, res) => {
  // 코드 depth 줄이기
  if (!req.query.email || !req.query.name)
    // id가 입력이 되지 않았거나, name이 입력이 되지 않았거나, 둘중에 하나라도 false인 경우
    return res.end('쿼리 입력이 잘못 되었습니다.');
  // 근데, 둘 다 입력이 됐을 경우에는
  // 새로운 키 값이니까 임의로 하나 만든 것이다. (newUser)
  const newUser = {
    email: req.query.email,
    name: req.query.name,
  };

  // Object.keys() ; 인자로 전달받은 키 값들을 배열로 만들어줌
  USER[Object.keys(USER).length + 1] = newUser;
  // USER[1] + 1 = 2
  // 기존 것에서 하나가 더 추가 되니까 +1 되서 그게 이제 새로운 newUser

  res.send('회원 등록 완료!');
  // 이것을 이제 잘 들어왔는지 확인하고 싶으면 http://127.0.0.1:9000/users/ 페이지 라우터가 users 임
});

app.listen(PORT, () => {
  console.log(`${PORT}번에서 실행 중!`);
});
// PORT가 여러개를 듣고 듣고있다.
// 서버가 겹칠 수 있으니까 PORT 적어주는 것이다.

// 데이터베이스를 배우기 전이니까
// VS CODE 에서 저장하면 데이터베이스가 연결이 안되서 영구 박제가 안되는 것이다.
// 다시 저장하면 초기화가 된다.
