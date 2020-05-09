import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const { artist } = req.query;
    let songs = await req.db.collection("songs2").find({artist: artist}).sort({songTitle: 1}).toArray()
    res.json(songs);
});

export default handler;