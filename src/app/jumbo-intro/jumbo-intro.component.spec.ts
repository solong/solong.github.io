import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumboIntroComponent } from './jumbo-intro.component';

describe('JumboIntroComponent', () => {
  let component: JumboIntroComponent;
  let fixture: ComponentFixture<JumboIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumboIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JumboIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
