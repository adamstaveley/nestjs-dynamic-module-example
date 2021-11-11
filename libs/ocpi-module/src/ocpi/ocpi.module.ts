import { DynamicModule, Module } from '@nestjs/common';
import { OcpiService } from './ocpi.service';
import { OcpiController } from './ocpi.controller';
import { OcpiModuleConfig } from './types';

@Module({})
export class OcpiModule {
  static register(options: OcpiModuleConfig): DynamicModule {
    return {
      module: OcpiModule,
      providers: [
        {
          provide: 'CONFIG_OPTIONS',
          useValue: options
        },
        OcpiService
      ],
      controllers: [OcpiController]
    }
  }
}
