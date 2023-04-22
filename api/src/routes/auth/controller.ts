import { Context } from "koa";
import { PetService } from "../../modules/pet/pet.service";

interface LoginBody {
  gname: string;
}

export const me = async (ctx: Context) => {
  const petService = new PetService();
  const { gname } = ctx.body as LoginBody;
  const pet = await petService.getByUser(gname);
  const hasPet = pet !== null;

  ctx.body = {
    hasPet,
    data: pet,
  };

  ctx.status = hasPet ? 200 : 404;
};
