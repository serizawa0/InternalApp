import { Inject, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const token = localStorage.getItem('internalAppToken')
  if(token){
    return true
  }
  router.navigate([''])
  return false
};
