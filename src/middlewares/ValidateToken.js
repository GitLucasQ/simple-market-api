import jwt from 'jsonwebtoken'
import config from '../config'
import User from '../models/User'


export const validateToken = async (req, res, next) => {
    const recibedToken = req.headers["x-access-token"]

    try {
        const decodedToken = jwt.verify(recibedToken, config.SECRET_TOKEN)
        await User.findById(decodedToken.id)
        next()
    } catch (error) {
        return res.status(404).json('invalid user')
    }

}