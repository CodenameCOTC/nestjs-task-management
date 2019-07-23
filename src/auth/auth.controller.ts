import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-creadentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authCrendentialsDto: AuthCredentialsDto,
  ): Promise<void> {
    return this.authService.signUp(authCrendentialsDto);
  }

  @Post('/signin')
  signIn(
    @Body(ValidationPipe) authCrentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCrentialsDto);
  }
}
