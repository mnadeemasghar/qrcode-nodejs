const express = require('express');
const app = express();
const port = 3000;
const qrcontroller = require('./qrcontroller');

app.get('/qrcode', qrcontroller.qrcode);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
