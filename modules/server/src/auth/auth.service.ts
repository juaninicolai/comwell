import { Injectable } from '@nestjs/common';
import { SignUpDto } from './dto/sign-up.dto';
import { UsersService } from 'src/users/users.service';
import bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { UserDocument } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignUpDto) {
    const { email, password: plainTextPassword } = signUpDto;
    const hashedPassword = await bcrypt.hash(plainTextPassword, 10);
    return this.usersService.create({ email, password: hashedPassword });
  }

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.hashedPassword,
    );

    if (!isPasswordCorrect) {
      return null;
    }

    return user;
  }

  async login(user: UserDocument) {
    const payload = { sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
