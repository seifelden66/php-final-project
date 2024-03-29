import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgnizationComponent } from './orgnization.component';

describe('OrgnizationComponent', () => {
  let component: OrgnizationComponent;
  let fixture: ComponentFixture<OrgnizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrgnizationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrgnizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
