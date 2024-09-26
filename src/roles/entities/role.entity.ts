import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  rol_id: number;

  @Column({ length: 50 })
  rol_nombre: string;

  @OneToMany(() => Usuario, (usuario) => usuario.rol)
  usuario: Usuario[];
}
