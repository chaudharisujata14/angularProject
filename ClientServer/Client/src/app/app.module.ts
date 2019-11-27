import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NgModule} from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
    DeleteComponent,
    RegisterComponent,
    AboutusComponent,
    ContactusComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
{path : 'home', component : HomeComponent},
{path : 'edit/:No', component : EditComponent},
{path : 'delete/:No', component : DeleteComponent},
{path : 'register', component : RegisterComponent},
{path : 'about', component : AboutusComponent},
{path : 'contact', component : ContactusComponent},
{path : '', component : HomeComponent},
{path : '**', component : NotfoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { constructor() {
      console.log('App Module Created');
    }
}
