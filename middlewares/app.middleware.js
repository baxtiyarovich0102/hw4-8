import express from 'express'
import cors from 'cors'
import userRoute from '../routes/users.route.js'
app.use(userRoute)

let app = express()
app.use(express.json() )

app.use(cors({ origin: 'http://localhost:7000' }))

app.get('/public', (req, res) => {
    res.json({ message: 'This is a public API' });
});

app.get('/private', (req, res) => {
    res.json({ message: 'Access denied' });
});





export {app}