import { inject } from 'tsyringe';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

class CreateUserUseCase {
  constructor(
    @inject()
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    name,
    username,
    password,
    email,
    driver_license,
  }: ICreateUserDTO): Promise<void> {}
}

export { CreateUserUseCase };
