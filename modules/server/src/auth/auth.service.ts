import { Injectable } from '@nestjs/common';
import { SignUpDto } from './dto/sign-up.dto';
import { UsersService } from 'src/users/users.service';
import bcrypt from 'bcryptjs';
import { LogInDto } from './dto/log-in.dto';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signUp(signUpDto: SignUpDto) {
    const { email, password: plainTextPassword } = signUpDto;
    const hashedPassword = await bcrypt.hash(plainTextPassword, 10);
    return this.usersService.create({ email, password: hashedPassword });
  }

  async logIn(logInDto: LogInDto) {
    const { email, password: plainTextPassword } = logInDto;

    const user = await this.usersService.findByEmail(email);

    const isPasswordCorrect = await bcrypt.compare(
      plainTextPassword,
      user.hashedPassword,
    );
    // TODO: Generate JWT token and return it directly.
    if (isPasswordCorrect) {
      return true;
    }
    return false;
  }
}
