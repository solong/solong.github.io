import { TestBed } from '@angular/core/testing';

import { EmailHideService } from './email-hide.service';

describe('EmailHideService', () => {
  let service: EmailHideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailHideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
