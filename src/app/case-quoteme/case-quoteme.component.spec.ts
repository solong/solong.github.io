import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseQuotemeComponent } from './case-quoteme.component';

describe('CaseQuotemeComponent', () => {
  let component: CaseQuotemeComponent;
  let fixture: ComponentFixture<CaseQuotemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseQuotemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseQuotemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
