import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    let currentGear = await req.db.collection('gear').find({current: 0}).toArray();
    res.json(currentGear);
});

export default handler;