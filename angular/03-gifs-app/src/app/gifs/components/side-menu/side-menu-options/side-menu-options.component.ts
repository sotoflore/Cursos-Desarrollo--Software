import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuOption {
    label: string;
    subLabel: string;
    icon: string;
    router: string;
}

@Component({
  selector: 'gifs-side-menu-options',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuOptionsComponent {

    menuOptions: MenuOption[] = [
        {
            icon: 'fa-solid fa-chart-line',
            label:'Trending',
            subLabel: 'Gifs Populares',
            router:'/dashboard/trending'
        },
        {
            icon: 'fa-solid fa-magnifying-glass',
            label: 'Buscador',
            subLabel: 'Buscar gifs',
            router: '/dashboard/search'  
        }
    ]

 }
