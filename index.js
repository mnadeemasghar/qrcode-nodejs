/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */

const qrcode = require('qrcode');

exports.helloWorld = (req, res) => {
  let message = req.query.message || req.body.message || 'Hello World!';

  const svg = await qrcode.toString(message, { type: 'svg' });

  res.set('Content-Type', 'image/svg+xml');
  res.status(200).send(svg);
};
