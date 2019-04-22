import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundFirstComponent } from './refund-first.component';

describe('RefundFirstComponent', () => {
  let component: RefundFirstComponent;
  let fixture: ComponentFixture<RefundFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefundFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
