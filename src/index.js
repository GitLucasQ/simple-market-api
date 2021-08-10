import express from 'express'
const config = require('./config')
const cors = require('cors')
import productsRoutes from './routes/products.routes'
import './database'


// VARIABLES CONFIG
const app = express()
const port = config.PORT


// USES
app.use(cors())
app.use(express.json())

// ROUTES
app.get('/', (req, res) => {
    res.send('Its works!!')
})
app.use(`/products`, productsRoutes)




app.listen(port, () => {
    console.log(`Server listen on port ${port}`)
})