import { Test, TestingModule } from '@nestjs/testing';
import { OcpiController } from './ocpi.controller';

describe('OcpiController', () => {
  let controller: OcpiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OcpiController],
    }).compile();

    controller = module.get<OcpiController>(OcpiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
