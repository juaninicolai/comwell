import {
  Get,
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';
import { EmailIsTakenError } from 'src/users/errors/email-is-taken.error';
import { UserDocument } from '../users/entities/user.entity';
import { User } from 'src/users/user.decorator';
import { Public } from './public.decorator';
import { LogInDto } from './dto/log-in.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('signup')
  @Public()
  async signUp(@Body() signUpDto: SignUpDto) {
    try {
      return await this.authService.signUp(signUpDto);
    } catch (err) {
      if (err instanceof EmailIsTakenError) {
        throw new HttpException(
          `"${err.email}" is taken`,
          HttpStatus.BAD_REQUEST,
        );
      }
      throw err;
    }
  }

  //TODO if we send wrong credentials, we get 500 error => error not handled
  @Post('login')
  @Public()
  logIn(@Body() loginDto: LogInDto) {
    return this.authService.login(loginDto);
  }

  @Get('profile')
  getProfile(@User() user: UserDocument) {
    return user;
  }
}
