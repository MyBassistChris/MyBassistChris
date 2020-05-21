import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    let gear = await req.db.collection('gear').find({}).sort({gear: 1}).toArray();
    res.json(gear);
});

export default handler;