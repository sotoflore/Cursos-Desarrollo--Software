import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from "../../components/side-menu/side-menu.component";

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  //imports: [],
  templateUrl: './dashboard-page.component.html',
  imports: [RouterOutlet, SideMenuComponent],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardPageComponent { }
