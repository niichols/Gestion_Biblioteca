import { Transform } from 'class-transformer';
import { IsEmail, IsInt, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  user_nombre: string;

  @IsEmail()
  user_correo: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(6)
  user_password: string;

  @IsInt()
  user_documento?: number;

  @IsInt()
  user_contacto?: number;
}
