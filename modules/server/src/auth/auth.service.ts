import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { LoginDto, SignUpDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService,
  ) { }

  async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
    const { name, email, password } = signUpDto;
    const hashedpassword = await bcrypt.hash(password, 10);
    const user = await this.userModel.create({
      name,
      email,
      password: hashedpassword,
    });
    const token = this.jwtService.sign({ id: user._id });
    return { token };
  }

  async logIn(loginDto: LoginDto): Promise<{ token: string; }> {
    throw new Error('Method not implemented.');
  }
}
