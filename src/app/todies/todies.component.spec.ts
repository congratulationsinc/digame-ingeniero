import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodiesComponent } from './todies.component';

describe('TodiesComponent', () => {
  let component: TodiesComponent;
  let fixture: ComponentFixture<TodiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
