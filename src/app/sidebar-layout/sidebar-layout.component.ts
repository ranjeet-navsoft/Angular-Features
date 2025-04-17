import { NgClass, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '@app/auth.service';
import { SidebarComponent } from '@app/sidebar/sidebar.component';

@Component({
  selector: 'app-sidebar-layout',
   imports: [RouterOutlet, SidebarComponent,NgClass,NgIf],
  templateUrl: './sidebar-layout.component.html',
  styleUrl: './sidebar-layout.component.scss'
})
export class SidebarLayoutComponent {
  authService = inject(AuthService);
  isSidebarCollapsed = false;
  isAuthenticated = false;
  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
