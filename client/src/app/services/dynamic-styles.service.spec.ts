import { TestBed } from '@angular/core/testing';

import { DynamicStylesService } from './dynamic-styles.service';

describe('DynamicStylesService', () => {
  let service: DynamicStylesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicStylesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
