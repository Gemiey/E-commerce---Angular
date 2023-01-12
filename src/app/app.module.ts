import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { TokenInterceptorService } from './token-interceptor.service';
import {AuthService} from './auth.service';import {MatIconModule} from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    LandingComponent,
    LoginComponent
  ],
  imports: [FormsModule , 
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,MatButtonModule,
    MatIconModule,
  ],
  providers: [AuthService, {
    provide:HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi:true
  }],  
  bootstrap: [AppComponent]
})
export class AppModule { }
