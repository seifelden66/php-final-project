import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgnizationregesterComponent } from './orgnizationregester.component';

describe('OrgnizationregesterComponent', () => {
  let component: OrgnizationregesterComponent;
  let fixture: ComponentFixture<OrgnizationregesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrgnizationregesterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrgnizationregesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
