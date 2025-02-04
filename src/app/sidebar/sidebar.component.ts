import { isPlatformBrowser, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Inject, Input, Output, PLATFORM_ID } from '@angular/core';
interface MenuItem {
  icon: string;
  label: string;
  children?: MenuItem[];
  isOpen?: boolean;
  link: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [NgClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  standalone: true
})
export class SidebarComponent {
  isBrowser: boolean = false;
  constructor(@Inject(PLATFORM_ID) private platformId: object){
    this.isBrowser = isPlatformBrowser(platformId);
  }
  @Input() isSidebarCollapsed = false;
  @Output() sidebarToggle = new EventEmitter<void>();

  menuItems: MenuItem[] = [
    {
      icon: 'fas fa-home',
      label: 'Angular 19',
      isOpen: false,
      link: '' ,
      children: [
        { icon: 'fas fa-tasks', label: 'Incremental Hydration',link: ''},
        { icon: 'fas fa-tasks', label: 'Route-level Render Mode',link: '' },
        { icon: 'fas fa-tasks', label: 'Linked Signals',link: '' },
        { icon: 'fas fa-tasks', label: 'Event Replay',link: '' },
        { icon: 'fas fa-tasks', label: 'Modernizing Code with Language Service',link: '' },
        { icon: 'fas fa-tasks', label: 'Hot Module Replacement',link: '' },
        { icon: 'fas fa-tasks', label: 'Standalone Defaults',link: '' },
        { icon: 'fas fa-tasks', label: 'State of Zoneless',link: '' },
        { icon: 'fas fa-tasks', label: 'Resource',link: '' },
      ]
    },
    {
      icon: 'fas fa-certificate',
      label: 'Angular 18',
      isOpen: false,
      link: '' ,
      children: [
        { icon: 'fas fa-user', label: 'Profile' ,link: ''  },
        { icon: 'fas fa-lock', label: 'Security' ,link: ''  },
      ]
    },
    {
      icon: 'fas fa-certificate',
      label: 'Angular 17',
      isOpen: false,
      link: '' ,
      children: [
        { icon: 'fas fa-paper-plane', label: 'Messages' ,link: '' },
        { icon: 'fas fa-bell', label: 'Notifications' ,link: '' },
      ]
    },
    {
      icon: 'fas fa-certificate',
      label: 'Angular 16',
      isOpen: false,
      link: '' ,
      children: [
        { icon: 'fas fa-book', label: 'Documentation' ,link: '' },
        { icon: 'fas fa-code', label: 'Code Snippets' ,link: '' },
      ]
    }
  ];

  toggleSidebar() {
    this.sidebarToggle.emit();
  }

  toggleMenuItem(item: MenuItem) {
    // Only toggle if sidebar is not collapsed and item has children
    if (!this.isSidebarCollapsed && item.children) {
      item.isOpen = !item.isOpen;
    }
  }

}
