import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildregistrationComponent } from './childregistration.component';

describe('ChildregistrationComponent', () => {
  let component: ChildregistrationComponent;
  let fixture: ComponentFixture<ChildregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildregistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
