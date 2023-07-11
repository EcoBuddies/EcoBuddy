import { Context } from "koa";
import { PetService } from "../../modules/pet/pet.service";
import { CarbonService, LABELS } from "../../modules/carbon/carbon.service";
import { ScanService } from "../../modules/scan/scan.service";

interface ScanBody {
  img: string;
  user: string;
  testMode: boolean;
}

export const scan = async (ctx: Context) => {
  const scanService = new ScanService();

  const { img, user, testMode = false } = ctx.request.body as ScanBody;

  try {
    const { ok, label } = testMode ? { ok: true, label: LABELS.EMB } : await scanService.sendBase64ToModel(img);
    if (ok && label) {
      const updatedPet = await handleModelResults({ user, label });

      if (!updatedPet) {
        throw new Error("Pet not updated succesfully");
      }

      ctx.status = 200;
      ctx.body = {
        ok: true,
        pet: updatedPet,
        label,
      };
    } else {
      ctx.status = 400;
      ctx.body = { ok: false, pet: null, label: null };
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { ok: false, pet: null, label: null };
  }
};

const handleModelResults = async ({ user, label }: { user: string; label: LABELS }) => {
  const carbonService = new CarbonService();
  const petService = new PetService();

  const carbonFootprint = await carbonService.calculate(label);
  const updatedPet = await petService.updatePetStats(user, carbonFootprint);

  return updatedPet;
};
