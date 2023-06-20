import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolledCoursesPageComponent } from './enrolled-courses-page.component';

describe('EnrolledCoursesPageComponent', () => {
  let component: EnrolledCoursesPageComponent;
  let fixture: ComponentFixture<EnrolledCoursesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrolledCoursesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrolledCoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
