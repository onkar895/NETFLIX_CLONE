import { Router } from 'express'
import { addToLikedMovies, getLikedMovies } from '../Controllers/userController.js'

const router = Router()

router.post('/add', addToLikedMovies)
router.get('/liked/:email', getLikedMovies)

export default router
