import { IsEmail, IsNotEmpty } from 'class-validator';

//TODO unused class
export class LogInDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
