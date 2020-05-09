import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    let artists = await req.db.collection('artists').find({}).sort({artist: 1}).toArray();
    res.json(artists);
});

export default handler;