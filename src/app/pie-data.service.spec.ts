/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PieDataService } from './pie-data.service';

describe('Service: PieData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PieDataService]
    });
  });

  it('should ...', inject([PieDataService], (service: PieDataService) => {
    expect(service).toBeTruthy();
  }));
});
