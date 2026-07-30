import { LoginUseCase } from '../useCases/LoginUseCase';
import { FirebaseAuthRepository } from '../../infrastructure/repositories/FirebaseAuthRepository';

const authRepository = new FirebaseAuthRepository();

export const loginUseCase = new LoginUseCase(authRepository);