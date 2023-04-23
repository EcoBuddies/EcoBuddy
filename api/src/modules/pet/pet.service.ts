import { getRepository } from "typeorm";
import { Pet } from "./pet.entity";

export class PetService {
  private petRepository = getRepository(Pet);

  async create(pet: Pet): Promise<Pet> {
    return await this.petRepository.save(pet);
  }

  async update(pet: Pet, id?: number): Promise<Pet | null> {
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

  async getByUser(deviceId: string): Promise<Pet | null> {
    return await this.petRepository.findOneBy({ user: deviceId });
  }

  async getAll(): Promise<Pet[]> {
    return await this.petRepository.find();
  }

  async updatePetStats(user: string, emissionFootprint: { hp: number; emission: number }): Promise<Pet | null> {
    const pet = await this.getByUser(user);

    if (!pet) {
      return new Promise((resolve) => resolve(null));
    }

    pet.co2emission = (pet.co2emission || 0) + emissionFootprint.emission;
    pet.happinessLevel = (pet.happinessLevel || 0) + emissionFootprint.hp;

    if (pet.happinessLevel > 100) {
      pet.happinessLevel = 100;
    }

    return await this.update(pet, pet.id);
  }
}
