import { getRepository } from "typeorm";
import { Pet } from "./pet.entity";

export class PetService {
  private petRepository = getRepository(Pet);

  async create(pet: Pet): Promise<Pet> {
    return await this.petRepository.save(pet);
  }

  async update(id: number, pet: Pet): Promise<Pet | null> {
    const existingPet = await this.petRepository.findOneBy({ id });
    if (!existingPet) return null;
    const updatedPet = await this.petRepository.merge(existingPet, pet);
    return await this.petRepository.save(updatedPet);
  }

  async delete(id: number): Promise<boolean> {
    const deleteResult = await this.petRepository.delete(id);
    return deleteResult.affected !== 0;
  }

  async getById(id: number): Promise<Pet | null> {
    return await this.petRepository.findOneBy({ id });
  }

  async getByUser(gname: string): Promise<Pet | null> {
    return await this.petRepository.findOneBy({ name: gname });
  }

  async getAll(): Promise<Pet[]> {
    return await this.petRepository.find();
  }
}
