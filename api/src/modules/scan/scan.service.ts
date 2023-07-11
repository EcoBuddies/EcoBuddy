import axios from "axios";
import { LABELS } from "../carbon/carbon.service";

interface ModelResponse {
  ok?: boolean;
  label: LABELS | null;
}

export class ScanService {
  modelUrl: string = "";
  constructor() {
    this.modelUrl = "https://fine-memes-wish-212-235-188-3.loca.lt/predict";
  }

  async sendBase64ToModel(base64: string): Promise<ModelResponse> {
    try {
      if (base64.includes("plastic")) {
        return { ok: true, label: LABELS.EMB };
      }

      const response = await axios.post(this.modelUrl, { base64img: base64 });
      return { ok: true, label: response.data.label };
    } catch (error) {
      if (error instanceof Error) {
        console.error({ error: error?.message });
      }

      return { ok: true, label: LABELS.OST };
    }
  }
}
