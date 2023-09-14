import {Request, Response} from "express"
import { PersonService } from "../services/PersonService"


export class PersonController {

  /**
   * 
   * @param req Request 
   * @param res Response
   * @returns Person
   */
  public static createPerson = async (req: Request, res: Response) => {
      const name = req.body.name as string 
      const result = await PersonService.create(name)
      return res.status(result.status_code).json(result)
  }

  /**
   * 
   * @param req Request
   * @param res Response
   * @returns Person
   */
  public static getPerson = async (req: Request, res: Response) => {
    const result = await PersonService.get(parseInt(req.params.id))
    return res.status(result.status_code).json(result)
  }

  /**
   * 
   * @param req Request
   * @param res Response
   * @returns Person
   */
  public static updatePerson = async (req: Request, res: Response) => {
    const result = await PersonService.update(parseInt(req.params.id), req.body)
    return res.status(result.status_code).json(result)
  }

  /**
   * 
   * @param req Request
   * @param res Response
   * @returns void
   */
  public static deletePerson = async (req: Request, res: Response) => {
    const result = await PersonService.remove(parseInt(req.params.id))
    return res.status(result.status_code).json(result)
  }
}
