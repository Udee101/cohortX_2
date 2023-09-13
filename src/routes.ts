import * as express from "express"
import { PersonController } from "./controllers/PersonController"
import { validateID, validateName, validateRequest } from "./validations"


const router = express.Router()

router.post('/', validateName,validateRequest, PersonController.createPerson)
router.get('/:id', validateID, validateRequest, PersonController.getPerson)
router.put('/:id', validateID, validateName, validateRequest, PersonController.updatePerson)
router.delete('/:id', validateID, validateRequest, PersonController.deletePerson)

export default router
