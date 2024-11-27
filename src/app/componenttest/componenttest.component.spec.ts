import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenttestComponent } from './componenttest.component';

describe('ComponenttestComponent', () => {
  let component: ComponenttestComponent;
  let fixture: ComponentFixture<ComponenttestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenttestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
