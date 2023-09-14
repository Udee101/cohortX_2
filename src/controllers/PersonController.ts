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
    try {
      const person = await AppDataSource.getRepository(Person).findOneBy({ id: parseInt(req.params.id) })

      if (!person) {
        return res.status(404).json({ message: "Person not found" })
      }
      return res.status(200).json(person)

    } catch (error) {
      return res.status(500).json({ error: "An error occured while retrieving person" })
    }
  }

  /**
   * 
   * @param req Request
   * @param res Response
   * @returns Person
   */
  public static updatePerson = async (req: Request, res: Response) => {
    try {
      const personRepository = AppDataSource.getRepository(Person)

      const person = await personRepository.findOneBy({ id: parseInt(req.params.id) })

      const name = req.body.name as string

      if (!person) {
        return res.status(404).json({ message: "Person not found" })
      }

      if (!name) {
        return res.status(200).json(person)
      }

      if (await personRepository.findOneBy({ name: name })) {
        return res.status(400).json({ message: "Unable to update person. This name has already been taken." })
      }
      
      AppDataSource.getRepository(Person).merge(person, req.body)
      const updatedPerson = await AppDataSource.getRepository(Person).save(person)

      return res.status(200).json({
        message: "Person Updated!",
        person: updatedPerson
      })

    } catch (error) {
      return res.status(500).json({ error: "An error occured while updating person" })
    }
  }

  /**
   * 
   * @param req Request
   * @param res Response
   * @returns void
   */
  public static deletePerson = async (req: Request, res: Response) => {
     try {
      const personRepository = AppDataSource.getRepository(Person)
      const person = await personRepository.findOneBy({ id: parseInt(req.params.id) })
      if (!person) {
        return res.status(404).json({ message: "Person not found" })
      }
      
      await personRepository.remove(person)
      return res.status(200).json({ message: "Person Deleted!" })

    } catch (error) {
      return res.status(500).json({ error: "An error occured while deleting person" })
    }
  }
}
