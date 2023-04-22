import { Context } from "koa";
import { PetService } from "../../modules/pet/pet.service";
import { IPet, Pet } from "../../modules/pet/pet.entity";

interface CreatePetBody {
  pet: IPet;
}

export const create = async (ctx: Context): Promise<void> => {
  const petService = new PetService();
  const {
    pet: { color, user, name },
  } = ctx.request.body as CreatePetBody;
  const pet = new Pet();
  pet.name = name;
  pet.color = color;
  pet.user = user;

  try {
    await petService.create(pet);
    ctx.status = 201;
    ctx.body = { success: true };
  } catch (error) {
    console.error(error);
    ctx.status = 400;
    ctx.body = { error: "Failed to create pet" };
  }
};
