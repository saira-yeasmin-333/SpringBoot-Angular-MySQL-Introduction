import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookshopsListComponent } from './bookshops-list.component';

describe('BookshopsListComponent', () => {
  let component: BookshopsListComponent;
  let fixture: ComponentFixture<BookshopsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookshopsListComponent]
    });
    fixture = TestBed.createComponent(BookshopsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
