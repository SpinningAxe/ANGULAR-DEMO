import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ITEMCARDComponent } from './itemcard.component';

describe('ITEMCARDComponent', () => {
  let component: ITEMCARDComponent;
  let fixture: ComponentFixture<ITEMCARDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ITEMCARDComponent]
    });
    fixture = TestBed.createComponent(ITEMCARDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
