import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';




@Injectable()
export class AppService {

  contactos: FirebaseListObservable<any[]>;
  constructor(private afDb: AngularFireDatabase){};

  getContactos(){
      this.contactos = this.afDb.list('/contactos') as FirebaseListObservable<any[]>;
      return this.contactos;
   }

   getContactoFiltro(filtro:string){
       this.contactos = this.afDb.list('/contactos',{
           query:{
               orderByChild: 'direccion',
               equalTo: filtro
           }
       })as FirebaseListObservable<any[]>;
           return this.contactos;
   }


   updateContacto(key, contacto){
       this.contactos.update(key, contacto);
   }
}
