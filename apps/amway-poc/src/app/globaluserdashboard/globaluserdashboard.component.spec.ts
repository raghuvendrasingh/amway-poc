import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobaluserdashboardComponent } from './globaluserdashboard.component';

describe('GlobaluserdashboardComponent', () => {
  let component: GlobaluserdashboardComponent;
  let fixture: ComponentFixture<GlobaluserdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobaluserdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobaluserdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
