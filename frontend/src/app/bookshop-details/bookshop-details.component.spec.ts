import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookshopDetailsComponent } from './bookshop-details.component';

describe('BookshopDetailsComponent', () => {
  let component: BookshopDetailsComponent;
  let fixture: ComponentFixture<BookshopDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookshopDetailsComponent]
    });
    fixture = TestBed.createComponent(BookshopDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
