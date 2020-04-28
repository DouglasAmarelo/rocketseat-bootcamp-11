import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '../config/auth';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

const ensureAuthenticated = (
  request: Request,
  response: Response,
  next: NextFunction,
): void => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('JWT Token is missing');
  }

  const [, token] = authHeader.split(' ');

  try {
    const tokenDecoded = verify(token, authConfig.jwt.secret);

    const { sub } = tokenDecoded as TokenPayload;

    request.user = {
      id: sub,
    };

    console.log(tokenDecoded);

    return next();
  } catch (error) {
    throw new Error('Invalid JWT token');
  }
};

export default ensureAuthenticated;
