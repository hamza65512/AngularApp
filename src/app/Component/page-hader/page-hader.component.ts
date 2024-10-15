import { Component, Output,EventEmitter } from '@angular/core';
import { MaterialModule } from '../../Material/material/material.module';

@Component({
  selector: 'page-hader',
  standalone: true,
  imports: [MaterialModule,],
  templateUrl: './page-hader.component.html',
  styleUrl: './page-hader.component.css'
})
export class PageHaderComponent {
  @Output()
  onMenuClicked = new EventEmitter();
 
}
