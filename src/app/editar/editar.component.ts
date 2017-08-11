import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormBuilder , FormGroup } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

    @Input() set contacto();
    
    form: FormGroup;
    contactoOriginal: any;

  constructor(
      private service: AppService,
      private fb: FormBuilder
  ) {

   }

  ngOnInit() {
      this.crearFormulario();
  }

  crearFormulario(){
      this.form = this.fb.group({
          nombre: '',
          appelidos:'',
          direccion:'',
          telefono:'',
          email:'',
          empresa:''
      })
  }
}
