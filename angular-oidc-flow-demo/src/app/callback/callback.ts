import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-callback',
  imports: [CommonModule],
  templateUrl: './callback.html',
  styleUrl: './callback.css',
})
export class Callback implements OnInit{

  idToken: string | null = null;
  accessToken: string | null = null;
  code: string | null = null;
  isAuthiticated: boolean = false;


  constructor(private oidc: OidcSecurityService, private route: ActivatedRoute) {
    console.log('CallbackComponent CONSTRUCTOR called');
  }

  async ngOnInit() {
    console.log('CallbackComponent ngOnInit called');
    // await this.auth.loadDiscoveryDocumentAndLogin();
    // this.claims = this.auth.getIdentityClaims();

    // console.log(this.claims);
    this.code = this.route.snapshot.queryParamMap.get('code');
    const params = new URLSearchParams(window.location.search);
this.code = params.get('code');
console.log('AUTH CODE (raw):', this.code);
    
    this.oidc.checkAuth().subscribe(result => {
      this.isAuthiticated = result.isAuthenticated;
     this.idToken = result.idToken;
     this.accessToken = result.accessToken;

     console.log('ID Token:', this.idToken);
      console.log('Access Token:', this.accessToken);
    }
  );
  
}
}