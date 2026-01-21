import { Component, OnInit, signal } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './auth/auth.config';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('angular-oidc-flow-demo');

  constructor(private oidc: OidcSecurityService){
   
  }
  ngOnInit() {
    // this.oidc.authorize();
  }

  login() {
    this.oidc.authorize();
  }


}
