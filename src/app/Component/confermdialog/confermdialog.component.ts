import { Component ,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialModule } from '../../Material/material/material.module';

@Component({
  selector: 'confermdialog',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './confermdialog.component.html',
  styleUrl: './confermdialog.component.css'
})
export class ConfermdialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public confirmDialogData: { title: string; message: string }
  ) {}
}
