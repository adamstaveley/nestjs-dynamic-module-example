"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var OcpiModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OcpiModule = void 0;
const common_1 = require("@nestjs/common");
const ocpi_service_1 = require("./ocpi.service");
const ocpi_controller_1 = require("./ocpi.controller");
let OcpiModule = OcpiModule_1 = class OcpiModule {
    static register(options) {
        return {
            module: OcpiModule_1,
            providers: [
                {
                    provide: 'CONFIG_OPTIONS',
                    useValue: options
                },
                ocpi_service_1.OcpiService
            ],
            controllers: [ocpi_controller_1.OcpiController]
        };
    }
};
OcpiModule = OcpiModule_1 = __decorate([
    (0, common_1.Module)({})
], OcpiModule);
exports.OcpiModule = OcpiModule;
//# sourceMappingURL=ocpi.module.js.map