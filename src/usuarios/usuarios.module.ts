import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { RolesModule } from '../roles/roles.module';
import { RolesService } from '../roles/roles.service';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario]), RolesModule],
  controllers: [UsuariosController],
  providers: [UsuariosService, RolesService],
  exports: [UsuariosService],
})
export class UsuariosModule {}
