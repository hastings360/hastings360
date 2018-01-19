import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniSanitizerComponent } from './mini-sanitizer.component';

describe('MiniSanitizerComponent', () => {
  let component: MiniSanitizerComponent;
  let fixture: ComponentFixture<MiniSanitizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniSanitizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniSanitizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
