import { Router } from 'express'
import controller from '../controllers/curso.js'

const router = Router()

router.post('/', controller.create)

router.get('/', controller.retrieveAll)

router.get('/:id', controller.retrieveOne)

router.put('/', controller.update)

router.delete('/', controller.delete)

export default router