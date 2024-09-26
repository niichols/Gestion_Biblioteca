import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Ciudades } from '../../ciudades/entities/ciudade.entity';

@Entity()
export class Departamentos {
  @PrimaryGeneratedColumn()
  dept_cod: number;

  @Column()
  dept_nombre: number;

  @OneToMany(() => Ciudades, (ciudad) => ciudad.ciud_cod)
  ciudades: Ciudades[];
}
