import { IsOptional, IsString } from 'class-validator';

export class CreateRoleDto {
  @IsString()
  @IsOptional()
  rol_nombre: string;
}
