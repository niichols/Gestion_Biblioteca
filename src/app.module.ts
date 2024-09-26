import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DepartamentosModule } from './departamentos/departamentos.module';
import { CiudadesModule } from './ciudades/ciudades.module';
import { LibrosModule } from './libros/libros.module';
import { CategoriasModule } from './categorias/categorias.module';
import { PrestamosModule } from './prestamos/prestamos.module';
import { EquiposModule } from './equipos/equipos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'user_crud',
      password: 'root',
      database: 'db_crud',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsuariosModule,
    RolesModule,
    UsersModule,
    AuthModule,
    DepartamentosModule,
    CiudadesModule,
    LibrosModule,
    CategoriasModule,
    PrestamosModule,
    EquiposModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
