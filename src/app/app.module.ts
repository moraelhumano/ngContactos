import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';



export const firebaseConfig = {
  apiKey: "AIzaSyDVIyfZgn_3OTaKt7vBYIo4sO85l-6v2_M",
    authDomain: "ngtest-5067b.firebaseapp.com",
    databaseURL: "https://ngtest-5067b.firebaseio.com",
    storageBucket: "ngtest-5067b.appspot.com",
    messagingSenderId: "798556389049"
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
