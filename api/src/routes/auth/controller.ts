import { Context } from "koa";
import { PetService } from "../../modules/pet/pet.service";

interface LoginBody {
  deviceId: string;
}

export const me = async (ctx: Context) => {
  const petService = new PetService();
  const { deviceId } = ctx.request.body as LoginBody;
  const pet = await petService.getByUser(deviceId);
  const hasPet = pet !== null;

  ctx.body = {
    hasPet,
    data: pet,
  };

  ctx.status = hasPet ? 200 : 404;
};
