import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { Role } from '../roles/entities/role.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,

    @InjectRepository(Role)
    private readonly rolRepository: Repository<Role>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    return this.usuarioRepository.save(createUsuarioDto);
  }

  findOneByEmail(email: string) {
    return this.usuarioRepository.findOneBy({ user_correo: email });
  }

  async findAll() {
    return await this.usuarioRepository.find();
  }

  async findOne(id: number) {
    return await this.usuarioRepository.findOneBy({ user_id: id });
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return;
    //await this.usuarioRepository.update(id, updateUsuarioDto);
  }

  async remove(id: number) {
    return await this.usuarioRepository.softDelete({ user_id: id });
  }
}
