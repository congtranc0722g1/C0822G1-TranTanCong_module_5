import { TestBed } from '@angular/core/testing';

import { DictionayService } from './dictionay.service';

describe('DictionayService', () => {
  let service: DictionayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DictionayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
