import * as express from "express"
import { PersonController } from "./controllers/PersonController"

const router = express.Router()

router.post('/', PersonController.createPerson)
// router.get('/', PersonController.getPeople)
router.get('/:id', PersonController.getPerson)
router.put('/:id', PersonController.updatePerson)
router.delete('/:id', PersonController.deletePerson)

export default router
