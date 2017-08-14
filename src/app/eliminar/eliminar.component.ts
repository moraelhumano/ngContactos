import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from '@angular/material';



@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

  constructor(
      public dialogRef: MdDialogRef<EliminarComponent>
  ) { }

  ngOnInit() {
  }

  onEliminar(){
      this.dialogRef.close(true);
  }

  onCancelar(){
      this.dialogRef.close(false);
  }



}
