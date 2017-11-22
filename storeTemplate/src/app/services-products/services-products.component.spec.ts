import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesProductsComponent } from './services-products.component';

describe('ServicesProductsComponent', () => {
  let component: ServicesProductsComponent;
  let fixture: ComponentFixture<ServicesProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
