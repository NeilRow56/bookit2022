import nc from 'next-connect'
import dbConnect from '../../../config/dbConnect'
import { getSingleRoom , updateRoom, deleteRoom } from '../../../controllers/roomControllers'

const handler = nc()

dbConnect.connect()

handler.get(getSingleRoom)

handler.put(updateRoom)

handler.delete(deleteRoom)



export default handler