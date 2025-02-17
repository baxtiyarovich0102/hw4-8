import express from 'express'
import cors from 'cors'
let app = express()
app.use(express.json() )
// app.use(cors())
app.use(cors({ origin: 'http://localhost:3000' }))
import userRoute from '../routes/users.route.js'

app.use(userRoute)

export {app}