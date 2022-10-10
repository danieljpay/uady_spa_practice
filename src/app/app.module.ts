import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BusquedaServicio } from './services/busqueda-service.service';
import { CmpBusquedaComponent } from './components/cmp-busqueda/cmp-busqueda.component';
import { FormsModule } from '@angular/forms';
import { PrincipalComponent } from './components/principal/principal.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'principal', pathMatch: 'full'},
  { path: 'principal', component: PrincipalComponent},
  { path: 'search', component: CmpBusquedaComponent,
    data: {title: 'búsqueda'}
  },
  { path: '**', component: PageNotFoundComponent } //error 404
];

@NgModule({
  declarations: [
    AppComponent,
    CmpBusquedaComponent,
    PrincipalComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [BusquedaServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
