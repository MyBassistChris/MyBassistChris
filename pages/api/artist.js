import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    var artistUrl = req.query.artist;
    let artist = await req.db.collection('artists').findOne({artistUrl: artistUrl});
    res.json(artist);
});

export default handler;