import { Context } from "koa";
import { PetService } from "../../modules/pet/pet.service";
import { CarbonService } from "../../modules/carbon/carbon.service";

interface LoginBody {
  deviceId: string;
}

export const scan = async (ctx: Context) => {
  ctx.status = hasPet ? 200 : 404;
};
