import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

export interface IPet {
  id?: number;
  user?: string;
  name?: string;
  happinessLevel?: number;
  co2emission?: number;
  color?: string;
  createdAt?: Date;
  timeLastFed?: Date;
}

@Entity({ name: "pet" })
export class Pet implements IPet {
  @PrimaryGeneratedColumn()
  id?: number;

  // matches google auth id
  @Column({ unique: true, type: "varchar" })
  user?: string;

  @Column({ type: "varchar" })
  name?: string;

  @Column({ type: "varchar" })
  color?: string;

  // 0 - 100
  @Column({ type: "integer" })
  happinessLevel?: number;

  @Column({ type: "integer" })
  co2emission?: number;

  @CreateDateColumn()
  createdAt?: Date;

  @Column({ type: "date" })
  timeLastFed?: Date;

  constructor() {
    this.co2emission = 0;
    this.happinessLevel = 100;
    this.timeLastFed = new Date();
  }
}
