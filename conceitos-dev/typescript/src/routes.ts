import { Request, Response } from 'express';
import CreateUser from './servcies/CreateUser';

const HelloWorld = (req: Request, res: Response) => {
  const user = CreateUser({
    email: 'douglas@lopes.com',
    password: '5555',
  });

  return res.json({ message: 'Hello' });
};

export { HelloWorld };
