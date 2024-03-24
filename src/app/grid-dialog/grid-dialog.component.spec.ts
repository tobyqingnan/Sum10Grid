import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { GridDialogComponent } from './grid-dialog.component';
import { By } from '@angular/platform-browser';

describe('GridDialogComponent', () => {
  let component: GridDialogComponent;
  let fixture: ComponentFixture<GridDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridDialogComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GridDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render grid dialog grid size input', () => {
    const fixture = TestBed.createComponent(GridDialogComponent);
    fixture.detectChanges();

    const compiled = fixture.debugElement;
    expect(compiled.query(By.css('.gridSizeInput'))?.nativeElement.value).toBe('4');

  });

  it('should render grid dialog go button', () => {
    const fixture = TestBed.createComponent(GridDialogComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')?.textContent).toContain('Go');
  });

  it('should call displayGrid when clicked Go button', fakeAsync(() => {
    spyOn(component, 'displayGrid');

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    tick();

    expect(component.displayGrid).toHaveBeenCalled();
  }));

  it('should be able to click grid dialog go button and update displaySum value', () => {
    const fixture = TestBed.createComponent(GridDialogComponent);
    component = fixture.componentInstance;

    component.totalSum = 10;
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;

    let button = compiled.querySelector('button');
    button.click();

    expect(component.displaySum).toEqual(component.totalSum);
  });
});
