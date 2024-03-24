import { Component, EventEmitter, Output } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { GridResultComponent } from '../grid-result/grid-result.component';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-grid-dialog',
  standalone: true,
  imports: [MatGridListModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, GridResultComponent, CommonModule],
  templateUrl: './grid-dialog.component.html',
  styleUrl: './grid-dialog.component.css'
})
export class GridDialogComponent {
  gridSize: number = 4;
  totalSum!: number;
  displaySum: number = 0;
  
  displayGrid() {
    if (this.totalSum != undefined) {
      if (this.totalSum > 0 && this.totalSum <= 20) {
        this.displaySum = this.totalSum;
      }
      else {
        alert("Total Sum should be an positive integer equal or less than 20.")
      }
    }
  }
}
