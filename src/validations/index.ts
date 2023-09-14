import { Request, Response,NextFunction } from "express";
import { body, param, validationResult } from "express-validator";
import { PersonModel } from "../models/Person/PersonModel";

export const ValidateRequestBody = (req: Request, res: Response, next: NextFunction) => {
  const {name, ...rest} = req.body as PersonModel
  if (Object.keys(rest).length > 0) {
    return res.status(400).json({ error: "Unexpected properties in the request body" })
  }
  next()
}

export const validateRequest = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() })
  }
  next()
}

export const validateName = [
  body('name')
    .exists().withMessage('The name field is required')
    .isString().withMessage('The name field can only take string as value.')
    .isLength({ min: 2 }).withMessage('name must contain at least two characters')
    .trim()
]

export const validateID = [
  param('id')
    .isInt().withMessage('id must be an integer')
]
