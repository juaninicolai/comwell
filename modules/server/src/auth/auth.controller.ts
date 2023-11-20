import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto, SignUpDto } from './dto/signup.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('/signup')
  signup(@Body() signupDto: SignUpDto): Promise<{ token: string }> {
    return this.authService.signUp(signupDto);
  }

  @Post('/login')
  login(@Body() loginDto: LoginDto): Promise<{ token: string }> {
    return this.authService.logIn(loginDto);
  }
}
