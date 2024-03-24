import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridDialogComponent } from './grid-dialog/grid-dialog.component';
import { MatGridListModule } from '@angular/material/grid-list';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GridDialogComponent, MatGridListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sum-ten-grid';
}
