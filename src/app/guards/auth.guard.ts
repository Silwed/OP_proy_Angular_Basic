import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  let token = sessionStorage.getItem('token') ;

  if (token) {
    // Allow navigation
    return true;
  } else {
    router.navigate(['/login']);
    return false;
     // Redirect to login page

  }

};
