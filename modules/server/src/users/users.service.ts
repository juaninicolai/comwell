import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  create(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;
    const userToCreate = new this.userModel({
      email,
      hashedPassword: password,
    });
    return userToCreate.save();
  }

  findByEmail(email: string) {
    return this.userModel.findOne({ email });
  }

  findById(id: number) {
    return this.userModel.findById(id);
  }
}
