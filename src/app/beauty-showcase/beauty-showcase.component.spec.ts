import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyShowcaseComponent } from './beauty-showcase.component';

describe('BeautyShowcaseComponent', () => {
  let component: BeautyShowcaseComponent;
  let fixture: ComponentFixture<BeautyShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeautyShowcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeautyShowcaseComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
