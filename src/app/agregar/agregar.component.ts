import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { AppService } from '../app.service'

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {


    @Input() mostrar: boolean = false;
    @Output() cerrar = new EventEmitter();

    form: FormGroup;
    validationMessages = {
        'nombre': {'required': 'El nombre es requerido'},
        'apellidos': {'required': 'Los apellidos son requerido'},
        'direccion': {'required': 'La dirección es requerida!'},
    };

  constructor(
      private service: AppService,
      private fb: FormBuilder
  ) { }

  ngOnInit() {
      this.crearFormulario();
  }

  crearFormulario(){
      this.form = this.fb.group({
          nombre: '',
          apellidos:'',
          direccion:'',
          telefono:'',
          email:'',
          empresa:''
      })
  }

  onGuardar(){
      this.service.addContacto(this.form.value);
      this.onCancelar();
  }

  onCancelar(){
      this.cerrar.emit();
  }



}
