import { TestBed, inject } from '@angular/core/testing';

import { DatausersService } from './datausers.service';

describe('DatausersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatausersService]
    });
  });

  it('should be created', inject([DatausersService], (service: DatausersService) => {
    expect(service).toBeTruthy();
  }));
});
