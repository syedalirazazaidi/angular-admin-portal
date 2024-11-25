import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenregistrationComponent } from './womenregistration.component';

describe('WomenregistrationComponent', () => {
  let component: WomenregistrationComponent;
  let fixture: ComponentFixture<WomenregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WomenregistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
