import { TestBed } from '@angular/core/testing';

import { EkadeCustomizerSettingsService } from './customizer-settings.service';

describe('CustomizerSettingsService', () => {
  let service: EkadeCustomizerSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EkadeCustomizerSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
