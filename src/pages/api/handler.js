import nextConnect from 'next-connect';
import { createRouter } from 'next-connect';

const options = {
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end('Something broke!');
  },
};

const handler = createRouter();

export default handler;
