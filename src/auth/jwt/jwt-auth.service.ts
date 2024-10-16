import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../../user/entities/user.entity';
import { JwtPayload } from '../entities/jwt-payload.entity';

@Injectable()
export class JwtAuthService {
  constructor(private jwtService: JwtService) {}

  login(user: UserEntity) {
    const { id, username } = user;
    const payload: JwtPayload = {
      id,
      username,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
