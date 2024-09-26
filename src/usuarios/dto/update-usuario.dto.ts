import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';
import { IsIn, IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
  @IsString()
  @IsOptional()
  user_nombre: string;

  @IsString()
  @IsOptional()
  user_correo: string;

  @IsInt()
  @IsOptional()
  user_documento: number;

  @IsInt()
  @IsOptional()
  user_contacto: number;

  @IsString()
  @IsOptional()
  rol: string;
}
