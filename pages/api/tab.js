import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const { artistName, songUrl } = req.query;
    let song = await req.db.collection("songs2").findOne({songUrl: songUrl, artist: artistName})
    res.json(song);
});

export default handler;