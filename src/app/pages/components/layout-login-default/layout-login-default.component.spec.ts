import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutLoginDefaultComponent } from './layout-login-default.component';

describe('LayoutLoginDefaultComponent', () => {
  let component: LayoutLoginDefaultComponent;
  let fixture: ComponentFixture<LayoutLoginDefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutLoginDefaultComponent]
    });
    fixture = TestBed.createComponent(LayoutLoginDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
