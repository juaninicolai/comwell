import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post, Req, UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';
import { EmailIsTakenError } from 'src/users/errors/email-is-taken.error';
import {LocalAuthGuard} from "./local-auth.guard";
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
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

  @UseGuards(LocalAuthGuard)
  @Post('login')
  logIn(@Req() req : Request) {
    return this.authService.login(req.user);
  }
}
