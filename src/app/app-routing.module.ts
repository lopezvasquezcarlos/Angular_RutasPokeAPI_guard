import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokematerialComponent } from './pokematerial/pokematerial.component';
//import { HomeComponent } from './components/home/home.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { MenuPokeComponent } from './menu-poke/menu-poke.component';
import { Error404Component } from './error404/error404.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { AuthGuard } from './auth.guard';
import { AuthRedirectGuard } from './auth-redirect-guard.guard';
const routes: Routes = [

  { path: 'login', component: LoginComponent,canActivate: [AuthRedirectGuard] },
//
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  //{ path: 'dashboard', component: HomeComponent, canActivate: [AuthGuard]  },

  { path: 'dashboard', component: IndexComponent, canActivate: [AuthGuard]  },

  { path: 'menu-componet', component: MenuComponentComponent, canActivate: [AuthGuard]},

  { path: 'pokemonmenu', component: MenuPokeComponent,
    children:[
    { path: 'pokemonmate', component: PokematerialComponent },
    { path: 'pokemon', component: PokemonComponent }
    
  ] //,canActivate: [AuthGuard]
  },

  { path: '**', component: Error404Component}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
