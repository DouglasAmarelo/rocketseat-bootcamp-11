import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../models/Users';

import AppError from '../errors/AppError';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const usersRepositiry = getRepository(User);

    const checkUserExists = await usersRepositiry.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new AppError('Email already exists.');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepositiry.create({
      name,
      email,
      password: hashedPassword,
    });

    await usersRepositiry.save(user);

    return user;
  }
}

export default CreateUserService;
