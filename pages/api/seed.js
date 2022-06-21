
import Room from '../../models/room'
import data from '../../utils/data';
import dbConnect from '../../config/dbConnect';

const handler = async (req, res) => {
  await dbConnect.connect();
  await Room.deleteMany();
  await Room.insertMany(data.rooms);
  
  await dbConnect.disconnect();
  res.send({ message: 'seeded successfully' });
};
export default handler;