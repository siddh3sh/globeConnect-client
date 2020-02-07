import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private service: LoginService) { }

  intercept(req, next)
  {
    let tokenreq = req.clone({
      setHeaders: {
        Authorization:`${localStorage.getItem('auth-token')}`
      }
    })
    //console.log(tokenreq)

    return next.handle(tokenreq)
  }
}
