import express from 'express'
const config = require('./config')
const cors = require('cors')
import productsRoutes from './routes/products.routes'
import authRoutes from './routes/auth.routes'
import './database'


// VARIABLES CONFIG
const app = express()
const port = config.PORT


// USES
app.use(cors())
app.use(express.json())

// ROUTES
app.use(`/products`, productsRoutes)
app.use('/auth', authRoutes)




app.listen(port, () => {
    console.log(`Server listen on port ${port}`)
})