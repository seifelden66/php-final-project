import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersApplayOnJobComponent } from './users-applay-on-job.component';

describe('UsersApplayOnJobComponent', () => {
  let component: UsersApplayOnJobComponent;
  let fixture: ComponentFixture<UsersApplayOnJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersApplayOnJobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersApplayOnJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
