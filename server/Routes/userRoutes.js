import { Router } from 'express'
import { addToLikeMovies, getLikedMovies } from '../Controllers/userController.js'

const router = Router()

router.post('/add', addToLikeMovies)
router.get('/liked/:email', getLikedMovies)

export default router
