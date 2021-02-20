import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseHatf2Component } from './case-hatf2.component';

describe('CaseHatf2Component', () => {
  let component: CaseHatf2Component;
  let fixture: ComponentFixture<CaseHatf2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseHatf2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseHatf2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
