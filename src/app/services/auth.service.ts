import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {}

  // async googleSignIn() {
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   return await this.afAuth.signInWithPopup(provider);
  // }

  // async emailSignUp(email: string, password: string, nombre: string, apellido: string) {
  //   const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
  //   await this.firestore.collection('users').doc(userCredential.user?.uid).set({
  //     nombre: nombre,
  //     apellido: apellido,
  //     email: email,
  //     role: 'user'
  //   });
  //   return userCredential;
  // }

  // async emailSignIn(email: string, password: string) {
  //   return await this.afAuth.signInWithEmailAndPassword(email, password);
  // }

  // async signOut() {
  //   await this.afAuth.signOut();
  // }


}
