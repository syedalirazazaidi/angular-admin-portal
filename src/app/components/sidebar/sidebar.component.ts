import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroChevronDown, heroUsers } from '@ng-icons/heroicons/outline';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../services/menulist.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterModule, NgIcon, CommonModule],
  viewProviders: [provideIcons({ heroChevronDown, heroUsers })],

  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  menuData: any[] = [];
  // constructor(private apiService: MenuService) {}
  // ngOnInit(): void {
  //   const claim_id = '12345';
  //   const organisation_id = '67890';

  //   this.apiService.getMenuList(claim_id, organisation_id).subscribe(
  //     (data) => {
  //       console.log('Menu List:', data);
  //       this.menuData = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching menu list:', error);
  //     }
  //   );
  // }

  isDropdownOpen: boolean = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  // toggleDropdown(event: MouseEvent): void {
  //   event.stopPropagation();
  //   this.isDropdownOpen = !this.isDropdownOpen;
  // }
}
