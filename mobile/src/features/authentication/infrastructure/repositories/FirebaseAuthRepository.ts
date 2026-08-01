import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from '@react-native-firebase/auth';

import { IAuthRepository } from '../../domain/repositories/IAuthRepository';

export class FirebaseAuthRepository implements IAuthRepository {
  private auth = getAuth();

  async signIn(email: string, password: string): Promise<void> {
    await signInWithEmailAndPassword(this.auth, email, password);
  }

  async signOut(): Promise<void> {
    await signOut(this.auth);
  }

  async isAuthenticated(): Promise<boolean> {
    return this.auth.currentUser !== null;
  }
}