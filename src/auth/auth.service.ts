import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';
import { RegisterDto } from './dto/register.dto';

import * as bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuariosService,
    private readonly jwtService: JwtService,
  ) {}

  async register({
    user_nombre,
    user_correo,
    user_password,
    user_contacto,
    user_documento,
  }: RegisterDto) {
    const user = await this.usuarioService.findOneByEmail(user_correo);
    if (user) {
      throw new BadRequestException('User alrealy exists');
    }
    return await this.usuarioService.create({
      user_nombre,
      user_correo,
      user_password: await bcryptjs.hash(user_password, 10),
      user_contacto,
      user_documento,
    });
  }

  async login({ user_correo, user_password }: LoginDto) {
    const user = await this.usuarioService.findOneByEmail(user_correo);
    if (!user) {
      throw new UnauthorizedException('email is wrong');
    }
    const isPasswordValid = await bcryptjs.compare(
      user_password,
      user.user_password,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('password is wrong');
    }

    const payload = { user_correo: user.user_correo, sub: user.user_id };
    console.log(payload);
    const token = await this.jwtService.signAsync(payload);
    console.log(token);
    return {
      token,
      user_correo,
    };
  }
}
