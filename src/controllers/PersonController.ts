import {Request, Response} from "express"
import { Person } from "../models/Person"
import { AppDataSource } from "../data-source"


export class PersonController {

  /**
   * 
   * @param req Request 
   * @param res Response
   * @returns Person
   */
  public static createPerson = async (req: Request, res: Response) => {
  
  }

  /**
   * 
   * @param req Request
   * @param res Response
   * @returns Person
   */
  public static getPerson = async (req: Request, res: Response) => {
  
  }

  /**
   * 
   * @param req Request
   * @param res Response
   * @returns Person
   */
  public static updatePerson = async (req: Request, res: Response) => {
  
  }

  /**
   * 
   * @param req Request
   * @param res Response
   * @returns void
   */
  public static deletePerson = async (req: Request, res: Response) => {
  
  }
}
