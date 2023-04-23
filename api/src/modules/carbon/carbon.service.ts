// class_names = ['bio', 'emb', 'ost', 'pap', 'ste', 'zbc']
export enum LABELS {
  BIO = "bio",
  EMB = "emb",
  OST = "ost",
  PAP = "pap",
  ZBC = "zbc",
  STE = "ste",
}

// reference: ekoskladovnica.si/LETAKI/Letak%20-%20ODPADKI_5-21.pdf
// put map here to calculate emission
const emissionFootprintMap = {
  [LABELS.EMB]: 3.3,
  [LABELS.PAP]: 2.1,
  [LABELS.OST]: 1.2,
  [LABELS.BIO]: 0.6,
  [LABELS.ZBC]: 1.2,
  [LABELS.STE]: 1.25,
};

export class CarbonService {
  FACTOR_100g = 100;
  FACTOR_HP = 10;

  #calcCarbonFootprint(label: LABELS): number {
    return emissionFootprintMap[label];
  }

  #normalizeTo100g(emission: number): number {
    return Math.round(emission * this.FACTOR_100g);
  }

  #normalizeToHP(emission: number): number {
    return Math.round(emission * this.FACTOR_HP);
  }

  async calculate(label: LABELS) {
    const emission = this.#calcCarbonFootprint(label);
    return { emission: this.#normalizeTo100g(emission), hp: this.#normalizeToHP(emission) };
  }
}
