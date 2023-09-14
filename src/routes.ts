import * as express from "express"
import { PersonController } from "./controllers/PersonController"
import { ValidateRequestBody, validateID, validateName, validateRequest } from "./validations"


const router = express.Router()

router.post('/', ValidateRequestBody, validateName,validateRequest, PersonController.createPerson)
router.get('/:id', validateID, validateRequest, PersonController.getPerson)
router.put('/:id', ValidateRequestBody, validateID, validateName, validateRequest, PersonController.updatePerson)
router.delete('/:id', validateID, validateRequest, PersonController.deletePerson)

export default router
