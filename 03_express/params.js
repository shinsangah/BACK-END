// @ts-check

const express = require('express');

const app = express();
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`${PORT}번 실행 중`);
});
