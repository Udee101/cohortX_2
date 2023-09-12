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
    try {
      const personRepository = AppDataSource.getRepository(Person)
      const name = req.body.name as string 

      if (!name) {
        return res.status(400).json({ message: "name field is required." })
      }

      if (typeof name !== "string") {
        return res.status(400).json({ message: "This field can only take string as value." })
      }

      if (await personRepository.findOneBy({ name: name })) {
        return res.status(400).json({ message: "This person already exists." })
      }

      const person = new Person()
      person.name = name
      await personRepository.save(person)

      return res.status(201).json({
        message: "Person Created!",
        person: person
      })

    } catch (error) {
      return res.status(500).json({ error: "An error occured while creating a person" })
    }
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
