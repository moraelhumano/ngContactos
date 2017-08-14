import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Contactos';
  contactos:any[];
  ciudades = ['CDMX', 'GDL', 'MTRey'];
  contacto = null;
  contactoEditar = null;

  constructor(private servicio: AppService){ }

  ngOnInit(){
      this.servicio.getContactos()
        .subscribe(contactos => this.contactos = contactos)
  }


  onSelect(event){
      let query = null;

      if(event.value == "Todos"){
          query = this.servicio.getContactos;
      }
      else{
          query = this.servicio.getContactoFiltro(event.value);
      }

      query.subscribe(contactos =>{
          this.contactos = contactos
      });
       this.contacto = null;

  }

  onClick(contacto){
      this.contacto = contacto;
  }
  
  cerrarDetalles(){
      this.contacto = null;
  }

  onEditar(contacto){
      this.contactoEditar = contacto;
  }

  cerrarEdicion(){
      this.contactoEditar = null;
  }


}
