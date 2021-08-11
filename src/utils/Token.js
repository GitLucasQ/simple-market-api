import jwt from 'jsonwebtoken'
import config from '../config'

export const createToken = (idUser) => {
    const generatedToken = jwt.sign({ id: idUser }, config.SECRET_TOKEN, {
        expiresIn: 60 * 60 * 24
    })

    return generatedToken
}
