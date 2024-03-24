import { Component, Input } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common'
import { max } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-grid-result',
  standalone: true,
  imports: [MatGridListModule, CommonModule, MatButtonModule],
  templateUrl: './grid-result.component.html',
  styleUrl: './grid-result.component.css'
})
export class GridResultComponent {
  @Input() gridSize: number = 0;
  gridItems: number[][] = [];
  checkGridSumMessage!: string;
  isValidGridSum!: boolean;

  readonly MaxRamdomNumber = 20;

  @Input()
  get displaySum(): number { return this._displaySum; }
  set displaySum(displaySum: number) {
    this._displaySum = displaySum || 0;

    this.fillGrid();
  }
  private _displaySum = 0;

  getRamdomInt(maxInt: number): number {
    return Math.floor(Math.random() * maxInt);
  }

  fillGrid() {
    if (this._displaySum > 0) {
      this.gridItems = [[], [], [], []];
      this.gridItems[0][0] = this.gridItems[1][1] = this.getRamdomInt(this.MaxRamdomNumber);
      this.gridItems[0][1] = this.gridItems[1][0] = this._displaySum - this.gridItems[0][0];

      for (let matrixRoundIndex = 2; matrixRoundIndex < this.gridSize; matrixRoundIndex++) {
        for (let i = 0; i < matrixRoundIndex; i++) {
          this.gridItems[i][matrixRoundIndex] = this.getRamdomInt(this.MaxRamdomNumber);
          this.gridItems[i][matrixRoundIndex - 1 - i] -= this.gridItems[i][matrixRoundIndex];
        }

        // last row is the revert of last column
        for (let j = 0; j < matrixRoundIndex; j++) {
          this.gridItems[matrixRoundIndex][j] = this.gridItems[matrixRoundIndex - 1 - j][matrixRoundIndex];
        }

        // the last cell
        this.gridItems[matrixRoundIndex][matrixRoundIndex] = this._displaySum - this.gridItems[matrixRoundIndex].reduce((a, b) => a + b, 0);
      }
    }

    this.checkGrid();
  }

  checkGrid() {
    this.isValidGridSum = true;

    if (this.gridItems.length == 0) {
      this.hideCheckGrid();
      return;
    }

    this.gridItems.forEach(gridRow => {
      if (gridRow.reduce((a, b) => a + b, 0) != this._displaySum) {
        this.isValidGridSum = false;
      }
    });

    if (this.isValidGridSum) {
      this.checkGridSumMessage = "Number grid has been successfully generated!";
    }
    else {
      this.checkGridSumMessage = "Sorry, something worng with this number gird!";
    }
  }

  hideCheckGrid() {
    this.checkGridSumMessage = '';
  }
}
