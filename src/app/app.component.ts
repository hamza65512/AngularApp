import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MaterialModule } from './Material/material/material.module';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PageHaderComponent } from './Component/page-hader/page-hader.component';
import { SideNaveComponent } from './Component/side-nave/side-nave.component';
import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    PageHaderComponent,
    SideNaveComponent,
    RouterLink,
    RouterOutlet,
    RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  menuClicked : boolean = true;
}
