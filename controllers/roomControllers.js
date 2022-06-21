import Room from '../models/room'

//Get all rooms => /api/rooms

const allRooms = async (req, res) => {

    const rooms = await Room.find()
    res.status(200).json({
        success: true,
        count: rooms.length,
        rooms
    })

    try {
        
    } catch (error) {
        res.status(400).json({
            error:error.message
        })
        
    }
   
}

//Create new room => /api/rooms

const newRoom = async (req, res ) => {
    

    try {
        const room = await Room.create(req.body)
        res.status(200).json({
            success:true,
            room
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }

    
}

//GET single room details => /api/rooms/:id

const getSingleRoom = async (req, res ) => {
    

    try {
        const room = await Room.findById(req.query.id)

        if(!room) {
            return res.status(404).json({
                success: false,
                error: 'Room not found with this ID'
            })
        }

        res.status(200).json({
            success:true,
            room
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }

    
}
//Update  room details => /api/rooms/:id

const updateRoom = async (req, res ) => {
    

    try {
        let room = await Room.findById(req.query.id)

        if(!room) {
            return res.status(404).json({
                success: false,
                error: 'Room not found with this ID'
            })
        }

        room = await Room.findByIdAndUpdate(req.query.id, req.body, {
            new: true,
            runValidators: true
        }) 

        res.status(200).json({
            success:true,
            room
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }

    
}
//Delete  room  => /api/rooms/:id

const deleteRoom = async (req, res ) => {
    

    try {
        const room = await Room.findById(req.query.id)

        if(!room) {
            return res.status(404).json({
                success: false,
                error: 'Room not found with this ID'
            })
        }

        await room.remove()

        res.status(200).json({
            success:true,
            message: 'Room is deleted'
        })
        
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }

    
}

export {
    allRooms,
    newRoom,
    getSingleRoom,
    updateRoom,
    deleteRoom
}