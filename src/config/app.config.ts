import { AppConfig } from './interfaces/app-config';

export default (): AppConfig => ({
  port: parseInt(<string>process.env.PORT) || 3000,
  auth: {
    jwt: {
      secret: <string>process.env.JWT_SECRET,
      expiresInSeconds:
        parseInt(<string>process.env.JWT_EXPIRATION_TIME_SECONDS) || 900,
    },
    github: {
      clientId: <string>process.env.AUTH_GITHUB_ID,
      clientSecret: <string>process.env.AUTH_GITHUB_SECRET,
      callbackURL: <string>process.env.AUTH_GITHUB_CALLBACK_URL,
    },
  },
});
