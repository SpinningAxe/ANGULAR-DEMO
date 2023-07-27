import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FORMComponent } from './form.component';

describe('FORMComponent', () => {
  let component: FORMComponent;
  let fixture: ComponentFixture<FORMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FORMComponent]
    });
    fixture = TestBed.createComponent(FORMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
