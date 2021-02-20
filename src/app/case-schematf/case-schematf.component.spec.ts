import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseSchematfComponent } from './case-schematf.component';

describe('CaseSchematfComponent', () => {
  let component: CaseSchematfComponent;
  let fixture: ComponentFixture<CaseSchematfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseSchematfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseSchematfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
