import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http' ;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import {ReactiveFormsModule } from '@angular/forms'; 
import {BrowserAnimationsModule } from '@angular/platform-browser/animations'; 


import {MatIconModule} from '@angular/material/icon'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { PokematerialComponent } from './pokematerial/pokematerial.component';
import { Pokematerial2Component } from './pokematerial2/pokematerial2.component';
import { HomeComponent } from './components/home/home.component';
import { MenuPokeComponent } from './menu-poke/menu-poke.component';
import { Error404Component } from './error404/error404.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component'; // Importa FormsModule

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokematerialComponent,
    Pokematerial2Component,
    HomeComponent,
    MenuPokeComponent,
    Error404Component,
    MenuComponentComponent,
    LoginComponent,
    IndexComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    BrowserAnimationsModule,
    HttpClientModule, 
    MatSelectModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatIconModule, 
    MatButtonModule, 
    MatCardModule ,
    MatMenuModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
