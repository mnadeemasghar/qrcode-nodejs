// qrcontroller.js
const qr = require('qrcode');

exports.qrcode = async (req, res) => {
  const text = req.query.text;
  const qrCode = await qr.toString(text, { type: 'svg' });
  res.set('Content-Type', 'image/svg+xml');
  res.send(qrCode);
};
