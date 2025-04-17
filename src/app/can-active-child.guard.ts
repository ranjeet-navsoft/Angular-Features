import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const canActiveChildGuard: CanActivateChildFn = () => {
  const authService = inject(AuthService);
    const router = inject(Router);
  
    if (authService.isAuthenticated()) {
      return true;
    } else {
      router.navigate(['/login']);
      return false;
    }
};
