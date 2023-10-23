import { TestBed } from '@angular/core/testing';

import { ProfissionalReviewService } from './profissional-review.service';

describe('ProfissionalReviewService', () => {
  let service: ProfissionalReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfissionalReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
