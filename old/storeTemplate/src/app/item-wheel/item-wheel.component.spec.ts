import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemWheelComponent } from './item-wheel.component';

describe('ItemWheelComponent', () => {
  let component: ItemWheelComponent;
  let fixture: ComponentFixture<ItemWheelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemWheelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
