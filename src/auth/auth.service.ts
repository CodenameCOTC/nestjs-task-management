import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-creadentials.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async signUp(authCrendetialsDto: AuthCredentialsDto): Promise<void> {
    return this.userRepository.signUp(authCrendetialsDto);
  }

  async signIn(authCrendetialsDto: AuthCredentialsDto) {
    const username = await this.userRepository.validateUserPassword(
      authCrendetialsDto,
    );
    if (!username) {
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}
