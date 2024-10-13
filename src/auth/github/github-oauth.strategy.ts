import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { AppConfig } from '../../config/interfaces/app-config';
import { UserService } from '../../user/user.service';
import { Strategy, Profile } from 'passport-github';

@Injectable()
export class GithubOAuthStrategy extends PassportStrategy(Strategy, 'github') {
  constructor(
    configService: ConfigService<AppConfig>,
    private usersService: UserService,
  ) {
    super({
      clientId: configService.get<string>('auth.github.clientId'),
      clientSecret: configService.get<string>('auth.github.clientSecret'),
      callbackURL: configService.get<string>('auth.github.callbackURL'),
      scope: ['public_profile'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    const user = await this.usersService.findOrCreate(profile);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
