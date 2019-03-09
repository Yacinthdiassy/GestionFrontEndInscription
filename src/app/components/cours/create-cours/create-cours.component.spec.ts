import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCoursComponent } from './create-cours.component';

describe('CreateCoursComponent', () => {
  let component: CreateCoursComponent;
  let fixture: ComponentFixture<CreateCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
