import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridResultComponent } from './grid-result.component';
import { By } from '@angular/platform-browser';

describe('GridResultComponent', () => {
  let component: GridResultComponent;
  let fixture: ComponentFixture<GridResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridResultComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GridResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to display sum grid success message', () => {
    const fixture = TestBed.createComponent(GridResultComponent);
    component = fixture.componentInstance;

    component.gridSize = 4;
    component.displaySum = 10;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')?.textContent).toContain('successfully');

    const allTiles = compiled.querySelectorAll('.mat-grid-tile-content .gridCell');
    let totalGrid = 0;

    allTiles.forEach(element => {
      totalGrid += Number(element.textContent)
    });

    expect(totalGrid).toBe(component.gridSize * component.displaySum);

  });

});
