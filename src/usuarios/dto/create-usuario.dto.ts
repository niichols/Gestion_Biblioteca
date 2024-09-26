import {
  IsDate,
  IsEmail,
  IsInt,
  IsOptional,
  IsPositive,
  isString,
  IsString,
} from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  user_nombre: string;

  @IsString()
  @IsEmail()
  user_correo: string;

  @IsInt()
  @IsPositive()
  user_documento: number;

  @IsPositive()
  @IsInt()
  @IsOptional()
  user_contacto: number;

  @IsString()
  user_password: string;
}
