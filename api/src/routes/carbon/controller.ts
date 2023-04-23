import { Context } from "koa";
import { PetService } from "../../modules/pet/pet.service";
import { CarbonService } from "../../modules/carbon/carbon.service";
import { ScanService } from "../../modules/scan/scan.service";

interface ScanBody {
  img: string;
  user: string;
}

export const scan = async (ctx: Context) => {
  const scanService = new ScanService();
  const carbonService = new CarbonService();
  const petService = new PetService();

  const { img, user } = ctx.request.body as ScanBody;

  try {
    const { ok, label } = await scanService.sendBase64ToModel(img);
    if (ok && label) {
      const carbonFootprint = await carbonService.calculate(label);
      const updatedPet = await petService.updatePetStats(user, carbonFootprint);

      if (!updatedPet) {
        throw new Error("Pet not updated succesfully");
      }

      ctx.status = 200;
      ctx.body = {
        ok: true,
        pet: updatedPet,
      };
    } else {
      ctx.status = 400;
      ctx.body = { ok: false, pet: null };
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { ok: false, pet: null };
  }
};
