import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBookshopComponent } from './update-bookshop.component';

describe('UpdateBookshopComponent', () => {
  let component: UpdateBookshopComponent;
  let fixture: ComponentFixture<UpdateBookshopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateBookshopComponent]
    });
    fixture = TestBed.createComponent(UpdateBookshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
