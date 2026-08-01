import { IAuthRepository } from '../../domain/repositories/IAuthRepository';

export class LoginUseCase {
  constructor(
    private readonly authRepository: IAuthRepository,
  ) {}

  async execute(email: string, password: string): Promise<void> {
    const normalizedEmail = email.trim().toLowerCase();

    await this.authRepository.signIn(
      normalizedEmail,
      password,
    );
  }
}