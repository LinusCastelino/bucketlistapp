import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOthersListComponent } from './view-others-list.component';

describe('ViewOthersListComponent', () => {
  let component: ViewOthersListComponent;
  let fixture: ComponentFixture<ViewOthersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOthersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOthersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
