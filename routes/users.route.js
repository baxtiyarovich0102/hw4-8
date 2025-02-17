import { Router } from 'express'
import { getUsers, getUserById, postUsers, updateUsers, deleteUsers} from '../controllers/users.controller.js'

let route = Router()

route.get('/users',getUsers)
route.get('/users/:id', getUserById)
route.post('/users', postUsers)
route.put('/users/:id', updateUsers)
route.delete('/users/:id', deleteUsers)




export default route