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
  mappedMenu: any[] = [];

  constructor(private apiService: MenuService) {}
  ngOnInit(): void {
    const claim_id = '1011';
    const organisation_id = '14';

    this.apiService.getMenuList(claim_id, organisation_id).subscribe(
      (data) => {
        this.menuData = data.result;
        this.mapMenuData();
        // console.log(this.mappedMenu[0].childMenu[0].grandChildMenu,"data structure");
        console.log(this.mappedMenu);
      },
      (error) => {
        console.error('Error fetching menu list:', error);
      }
    );
  }
  mapMenuData(): void {
    this.mappedMenu = this.menuData.map((menuItem: any) => ({
      ...menuItem,
      children: menuItem.children || [],
      isDropdownOpen: false,
    }));
  }
  isDropdownOpen: boolean = false;
  toggleDropdown(menuItem: any): void {
    menuItem.isDropdownOpen = !menuItem.isDropdownOpen;
  }

  toggleChildDropdown(child: any): void {
    child.isDropdownOpen = !child.isDropdownOpen;
  }
}
