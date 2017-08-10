import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AppService } from './app.service';
import { MaterializeModule } from "angular2-materialize";

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


  constructor(private servicio: AppService){ }

  ngOnInit(){
      this.servicio.getContactos()
        .subscribe(contactos => this.contactos = contactos)
  }

  onClick(contacto){
      this.contacto = contacto;
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

  cerrarDetalles(){
      this.contacto = null;
  }
}
