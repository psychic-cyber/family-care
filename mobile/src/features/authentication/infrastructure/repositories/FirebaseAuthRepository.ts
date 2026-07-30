import auth from '@react-native-firebase/auth';

import { IAuthRepository } from '../../domain/repositories/IAuthRepository';

export class FirebaseAuthRepository implements IAuthRepository {
  async signIn(
    email: string,
    password: string,
  ): Promise<void> {
    await auth().signInWithEmailAndPassword(
      email,
      password,
    );
  }

  async signOut(): Promise<void> {
    await auth().signOut();
  }

  async isAuthenticated(): Promise<boolean> {
    return auth().currentUser !== null;
  }
}