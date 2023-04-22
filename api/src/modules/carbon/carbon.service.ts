// put map here to calculate emission
const emissionFootprintMap = {};

export class CarbonService {
  #calcCarbonFootprint(label: string): number {
    // const getEmission = emissionFootprintMap[label];
    return 0;
  }

  #normalizeTo100g(emission: number): number {
    // const getEmission = emissionFootprintMap[label];
    return 0;
  }

  async execute(userId: string, label: string) {
    const emission = this.#calcCarbonFootprint(label);
    return this.#normalizeTo100g(emission);
  }
}
