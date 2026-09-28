import { Injectable, inject } from '@angular/core';
import { Auth as FirebaseAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, authState } from '@angular/fire/auth';
import { Firestore, doc, setDoc, getDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(FirebaseAuth);
  private firestore = inject(Firestore);
  user$: Observable<any>;

  constructor() {
    this.user$ = authState(this.auth);
  }

  async register(email: string, password: string, nom: string) {
    const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
    const user = userCredential.user;

    const userDoc = doc(this.firestore, `users/${user.uid}`);
    await setDoc(userDoc, {
      uid: user.uid,
      email: email,
      nom: nom,
      createdAt: new Date()
    });

    return user;
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }

  async getUserData(uid: string) {
    const userDoc = doc(this.firestore, `users/${uid}`);
    const snap = await getDoc(userDoc);
    return snap.data();
  }
}
