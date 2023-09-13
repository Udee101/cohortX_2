import { Request, Response,NextFunction } from "express";
import { body, param, validationResult } from "express-validator";

export const validateRequest = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json(errors)
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
