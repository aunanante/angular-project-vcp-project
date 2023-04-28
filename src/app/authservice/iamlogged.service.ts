import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IamloggedService {
  isLoggedIn = false;

  constructor() { }
}
