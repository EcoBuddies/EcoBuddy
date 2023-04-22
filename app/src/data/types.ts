export enum PetColors {
  GREEN = "GREEN",
  YELLOW = "YELLOW",
  ORANGE = "ORANGE",
  BLUE = "BLUE",
  PINK = "PINK",
}

export interface IPet {
  id?: number;
  user?: string;
  name?: string;
  happinessLevel?: number;
  co2emission?: number;
  color?: PetColors;
  createdAt?: Date;
  timeLastFed?: Date;
}
