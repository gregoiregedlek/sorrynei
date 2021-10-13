import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AusredeComponent } from './ausrede.component';

describe('AusredeComponent', () => {
  let component: AusredeComponent;
  let fixture: ComponentFixture<AusredeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AusredeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AusredeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
