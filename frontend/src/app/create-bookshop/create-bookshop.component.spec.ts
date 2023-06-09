import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBookshopComponent } from './create-bookshop.component';

describe('CreateBookshopComponent', () => {
  let component: CreateBookshopComponent;
  let fixture: ComponentFixture<CreateBookshopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBookshopComponent]
    });
    fixture = TestBed.createComponent(CreateBookshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
