import { Component, HostListener, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { IamloggedService } from './authservice/iamlogged.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ville Commerce Produit';
  opened = true;
  

  constructor(
    private iamloggedService: IamloggedService
    
  ) { }

  @ViewChild('sidenav') sidenav!: MatSidenav

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    if (event.target.innerWidth < 768) {
      this.sidenav.fixedTopGap = 55;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 55
      this.opened = true;
    }
  }

  isBiggerScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 768) {
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    //this.tokenStorage.signOut();
  }

  get isLoggedIn() {
    return this.iamloggedService.isLoggedIn;
  }

}
