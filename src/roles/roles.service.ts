import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly rolRepository: Repository<Role>,
  ) {}

  async create(createRoleDto: CreateRoleDto) {
    const rol = this.rolRepository.create(createRoleDto);
    return await this.rolRepository.save(rol);
  }

  async findAll() {
    return this.rolRepository.find();
  }

  async findOne(id: number) {
    return this.rolRepository.findOneBy({ rol_id: id });
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    return this.rolRepository.update(id, updateRoleDto);
  }

  async remove(id: number) {
    return this.rolRepository.softDelete({ rol_id: id });
  }
}
