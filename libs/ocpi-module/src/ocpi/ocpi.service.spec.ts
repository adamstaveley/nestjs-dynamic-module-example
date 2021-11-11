import { Test, TestingModule } from '@nestjs/testing';
import { OcpiService } from './ocpi.service';

describe('OcpiService', () => {
  let service: OcpiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OcpiService],
    }).compile();

    service = module.get<OcpiService>(OcpiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
