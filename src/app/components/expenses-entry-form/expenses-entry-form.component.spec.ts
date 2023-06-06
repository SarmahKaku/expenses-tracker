import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesEntryFormComponent } from './expenses-entry-form.component';

describe('ExpensesEntryFormComponent', () => {
  let component: ExpensesEntryFormComponent;
  let fixture: ComponentFixture<ExpensesEntryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensesEntryFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
