import { AppDataSource } from "../data-source"
import { Person } from "../models/Person/PersonEntity"
import { request ,response} from "express"

export class PersonService {
  public static personRepository = AppDataSource.getRepository(Person)

  public static async create(name: string) {
    try {
      if (await this.personRepository.findOneBy({ name: name })) {
        return { status_code: 400, error: "This person already exists." }
      }

      const person = new Person()
      person.name = name
      await this.personRepository.save(person)

      return {
        status_code: 201,
        message: "Person Created!",
        person: person
      }

    } catch (error) {
      return { status_code: 500, error: "An error occured while creating a person" }
    }
  }

  public static async get(id: number) {
    try {
      const person = await this.personRepository.findOneBy({ id: id })
      if (!person) {
        return { status_code: 400, error: "Person not found" }
      }

      return { status_code: 200, person: person}

    } catch (error) {
      return { status_code: 500, error: "An error occured while retrieving person" }
    }
  }

  public static async update(id: number, data: any) {
    try {
      const person = await this.personRepository.findOneBy({ id: id })
      if (!person) {
        return { staus_code: 404, error: "Person not found" }
      }

      if (await this.personRepository.findOneBy({ name: data.name })) {
        return { status_code: 400, error: "Unable to update person. This name has already been taken." }
      }
      
      this.personRepository.merge(person, data)
      const updatedPerson = await this.personRepository.save(person)

      return {
        status_code: 200,
        message: "Person Updated!",
        person: updatedPerson
      }

    } catch (error) {
      return { status_code: 500, error: "An error occured while updating person" }
    }
  }

  public static async remove(id: number) {
    try {
      const person = await this.personRepository.findOneBy({ id: id })
      if (!person) {
        return { status_code: 404, error: "Person not found" }
      }
      
      await this.personRepository.remove(person)
      return { status_code:200, message: "Person Deleted!" }

    } catch (error) {
      return { status_code: 500, error: "An error occured while deleting person" }
    }
  }
}
