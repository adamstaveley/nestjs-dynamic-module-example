"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const ocpi_controller_1 = require("./ocpi.controller");
describe('OcpiController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [ocpi_controller_1.OcpiController],
        }).compile();
        controller = module.get(ocpi_controller_1.OcpiController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=ocpi.controller.spec.js.map