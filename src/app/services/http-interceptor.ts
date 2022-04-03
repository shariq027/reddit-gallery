import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class APIInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const imgurToken = localStorage.getItem('token');
        const authReq = req.clone({
            headers: new HttpHeaders({
                'Authorization': 'Client-ID '+ environment.clientId// '+imgurToken
            })
        });

        console.log('Intercepted HTTP call', authReq);

        return next.handle(authReq);
    }
}