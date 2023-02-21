import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidateSessionGuard implements CanActivate {

  private cookie: string | null = '123' //aqui consultaremos la cookie al navegador

  constructor(private router:Router){// se inyecta el router para poder utilizarle despues

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCookie();// indica si va a dejar continuar o no
  }

  private checkCookie(): boolean {
    // console.log(this.cookie)
    if(this.cookie !== null){
      return true
    }else{
      // cuando no se cumpla con la condicion se direccionará hacia el login
      this.router.navigate(['/', 'auth', 'login'])
      return false
    }
  }
  
}
