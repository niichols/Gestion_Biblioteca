import { Departamentos } from 'src/departamentos/entities/departamento.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Ciudades {
  @PrimaryGeneratedColumn()
  ciud_cod: number;

  @Column()
  ciud_nombre: string;

  @Column({ select: false })
  dept_cod: number;

  @ManyToOne(() => Departamentos, (departamento) => departamento.dept_cod)
  @JoinColumn({ name: 'dept_cod', referencedColumnName: 'dept_cod' })
  departamento: Departamentos;
}
