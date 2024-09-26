import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Libros } from '../../libros/entities/libro.entity';

@Entity()
export class Categorias {
  @PrimaryGeneratedColumn()
  cat_id: number;

  @Column()
  cat_nombre: string;

  @OneToMany(() => Libros, (libro) => libro.lib_id)
  libro: Libros[];
}
