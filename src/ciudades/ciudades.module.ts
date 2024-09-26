import { Module } from '@nestjs/common';
import { CiudadesService } from './ciudades.service';
import { CiudadesController } from './ciudades.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ciudades } from './entities/ciudade.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ciudades])],
  controllers: [CiudadesController],
  providers: [CiudadesService],
})
export class CiudadesModule {}
