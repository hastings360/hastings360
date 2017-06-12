import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealContainerComponent } from './meal-container.component';

describe('MealContainerComponent', () => {
  let component: MealContainerComponent;
  let fixture: ComponentFixture<MealContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
