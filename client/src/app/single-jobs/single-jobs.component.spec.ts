import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleJobsComponent } from './single-jobs.component';

describe('SingleJobsComponent', () => {
  let component: SingleJobsComponent;
  let fixture: ComponentFixture<SingleJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleJobsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
