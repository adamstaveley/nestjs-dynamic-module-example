import { DynamicModule } from '@nestjs/common';
import { OcpiModuleConfig } from './types';
export declare class OcpiModule {
    static register(options: OcpiModuleConfig): DynamicModule;
}
