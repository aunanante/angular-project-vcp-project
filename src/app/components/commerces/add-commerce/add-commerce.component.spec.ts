import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommerceComponent } from './add-commerce.component';

describe('AddCommerceComponent', () => {
  let component: AddCommerceComponent;
  let fixture: ComponentFixture<AddCommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCommerceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
