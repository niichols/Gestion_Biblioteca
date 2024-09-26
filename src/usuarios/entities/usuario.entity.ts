import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from '../../roles/entities/role.entity';

@Entity()
export class Usuario {
  //@PrimaryGeneratedColumn()
  @Column({ primary: true, generated: true })
  user_id: number;

  @Column()
  user_nombre: string;

  @Column({ unique: true, nullable: false })
  user_correo: string;

  @Column()
  user_documento: number;

  @Column()
  user_contacto: number;

  @Column({ nullable: false })
  user_password: string;

  @CreateDateColumn()
  user_created_at: Date;

  @Column({ default: 'user' })
  rols: string;

  @DeleteDateColumn()
  user_deleted_at: Date;

  @ManyToOne(() => Role, (rol) => rol.rol_id, {
    eager: true,
  })
  rol: Role;
}
