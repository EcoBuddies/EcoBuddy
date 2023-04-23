import axios from "axios";
import { LABELS } from "../carbon/carbon.service";

interface ModelResponse {
  ok?: boolean;
  label: LABELS | null;
}

export class ScanService {
  modelUrl: string = "";
  constructor() {
    this.modelUrl = "";
  }

  async sendBase64ToModel(base64: string): Promise<ModelResponse> {
    try {
      const response = await axios.post(this.modelUrl, { base64img: base64 });
      return { ok: true, label: response.data.label };
    } catch (error) {
      return { ok: false, label: null };
    }
  }
}
