import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppInitService } from './app-init.service';
import { LandingPortalComponent } from './landing-portal/landing-portal.component';
import { InMemoryDataService } from './in-memory-data.service';

export function Appinit(Appinitservice : AppInitService){
  return (): Promise<any> => { 
    return Appinitservice.init();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    WelcomeComponent,
    LandingPortalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService , { dataEncapsulation: false}
    )
  ],
  providers: [
    AppInitService,
    {provide:   APP_INITIALIZER , useFactory: Appinit , deps: [AppInitService] , multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
