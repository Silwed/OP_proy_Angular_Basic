import { inject } from '@angular/core';
import { CanActivateFn, Router} from '@angular/router';
import { AuthService } from '../services/auth.service';



export const loginGuard: CanActivateFn = (route, state) => {

    //Forma de injectar un servicio en un guard
   //   const authService = inject(AuthService);
   const router = inject(Router);

  let token = sessionStorage.getItem('token') ;

  if (token) {
    router.navigate(['/dashboard']);
    return false; // Allow navigation
  } else {

     // Redirect to login page
    return true;
  }


};
