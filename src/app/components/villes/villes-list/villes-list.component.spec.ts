import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillesListComponent } from './villes-list.component';

describe('VillesListComponent', () => {
  let component: VillesListComponent;
  let fixture: ComponentFixture<VillesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
