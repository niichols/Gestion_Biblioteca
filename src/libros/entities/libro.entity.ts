import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Categorias } from '../../categorias/entities/categoria.entity';

@Entity()
export class Libros {
  @PrimaryGeneratedColumn()
  lib_id: number;

  @Column()
  lib_titulo: string;

  @Column()
  lib_descripcion: string;

  @Column()
  lib_edicion: number;

  @Column()
  lib_stock: number;

  @Column()
  lib_imagen: string;

  @Column()
  lib_estado: string;

  @Column()
  cat_id: number;

  @ManyToOne(() => Categorias, (categoria) => categoria.cat_id, {
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'cat_id', referencedColumnName: 'cat_id' })
  categoria: Categorias;
}
