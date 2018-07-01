import { TestBed, inject } from '@angular/core/testing';

import { GetTrackerDataService } from './get-tracker-data.service';

describe('GetTrackerDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetTrackerDataService]
    });
  });

  it('should be created', inject([GetTrackerDataService], (service: GetTrackerDataService) => {
    expect(service).toBeTruthy();
  }));
});
