import { Controller, Get, Param } from '@nestjs/common';
import { OcpiService } from './ocpi.service';

@Controller('ocpi')
export class OcpiController {
    constructor(private ocpiService: OcpiService) {}

    @Get('versions')
    async getVersions() {
        return this.ocpiService.getVersions();
    }

    @Get('versions/:id')
    async getVersionDetails(@Param('id') id: string) {
        return this.ocpiService.getVersionDetail(id);
    }
}
