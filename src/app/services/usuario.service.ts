import { Injectable } from '@angular/core';
import { Usuario } from '../domain/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  // constructor(private firestore: AngularFirestore) {}

  // getUser(uid: string) {
  //   return this.firestore.collection('users').doc<Usuario>(uid).valueChanges();
  // }

  // updateUser(user: Usuario) {
  //   return this.firestore.collection('users').doc(user.id).set(user, { merge: true });
  // }

}
