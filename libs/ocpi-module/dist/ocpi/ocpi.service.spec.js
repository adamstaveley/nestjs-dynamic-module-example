"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const ocpi_service_1 = require("./ocpi.service");
describe('OcpiService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [ocpi_service_1.OcpiService],
        }).compile();
        service = module.get(ocpi_service_1.OcpiService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=ocpi.service.spec.js.map