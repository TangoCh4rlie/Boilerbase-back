export type JwtPayload = {
  id: string;
  iat?: number;
  exp?: number;
  username: string;
  avatar?: string;
};
