import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableListComponent } from './reusable-list.component';

describe('ReusableListComponent', () => {
  let component: ReusableListComponent;
  let fixture: ComponentFixture<ReusableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReusableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
