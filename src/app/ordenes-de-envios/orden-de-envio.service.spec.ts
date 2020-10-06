import { TestBed } from '@angular/core/testing';

import { OrdenDeEnvioService } from './orden-de-envio.service';

describe('OrdenDeEnvioService', () => {
  let service: OrdenDeEnvioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdenDeEnvioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
