import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  checkLogin(){
    if(firebase.auth().currentUser == null){
      alert('Debe Iniciar Sesión para poder acceder a esta sección.')
      location.replace('login');
    }
  }

}
