import { TestBed } from '@angular/core/testing';

import { NovaConsultaService } from './nova-consulta.service';

describe('NovaConsultaService', () => {
  let service: NovaConsultaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovaConsultaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
