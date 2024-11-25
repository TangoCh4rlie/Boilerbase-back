import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../../user/entities/user.entity';
import { JwtPayload } from '../entities/jwt-payload.entity';

@Injectable()
export class JwtAuthService {
  constructor(private jwtService: JwtService) {}

  login(user: UserEntity) {
    const { id, username, avatar } = user;
    const payload: JwtPayload = {
      id,
      username,
      avatar,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
