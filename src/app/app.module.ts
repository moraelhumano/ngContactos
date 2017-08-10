import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from "angular2-materialize";

import 'hammerjs';
import { DetallesComponent } from './detalles/detalles.component';



export const firebaseConfig = {
  apiKey: "AIzaSyDVIyfZgn_3OTaKt7vBYIo4sO85l-6v2_M",
    authDomain: "ngtest-5067b.firebaseapp.com",
    databaseURL: "https://ngtest-5067b.firebaseio.com",
    storageBucket: "ngtest-5067b.appspot.com",
    messagingSenderId: "798556389049"
}


@NgModule({
  declarations: [
    AppComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireDatabaseModule,
    MaterialModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterializeModule,

  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
