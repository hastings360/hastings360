import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelaxWorkspaceComponent } from './relax-workspace.component';

describe('RelaxWorkspaceComponent', () => {
  let component: RelaxWorkspaceComponent;
  let fixture: ComponentFixture<RelaxWorkspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelaxWorkspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelaxWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
