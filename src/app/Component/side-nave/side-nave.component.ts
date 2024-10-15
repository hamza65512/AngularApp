import { Component } from '@angular/core';
import { MaterialModule } from '../../Material/material/material.module';
import { RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'side-nave',
  standalone: true,
  imports: [MaterialModule,RouterModule,RouterLinkActive],
  templateUrl: './side-nave.component.html',
  styleUrl: './side-nave.component.css'
})
export class SideNaveComponent {
  navItems : { name : string; link : string; }[] = [
    { name : 'maintenance' , link : 'maintenance'},
    { name : 'view data' , link : 'view'}
  ];
}
