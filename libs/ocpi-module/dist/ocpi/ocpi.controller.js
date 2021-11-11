"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OcpiController = void 0;
const common_1 = require("@nestjs/common");
const ocpi_service_1 = require("./ocpi.service");
let OcpiController = class OcpiController {
    constructor(ocpiService) {
        this.ocpiService = ocpiService;
    }
    async getVersions() {
        return this.ocpiService.getVersions();
    }
    async getVersionDetails(id) {
        return this.ocpiService.getVersionDetail(id);
    }
};
__decorate([
    (0, common_1.Get)('versions'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OcpiController.prototype, "getVersions", null);
__decorate([
    (0, common_1.Get)('versions/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OcpiController.prototype, "getVersionDetails", null);
OcpiController = __decorate([
    (0, common_1.Controller)('ocpi'),
    __metadata("design:paramtypes", [ocpi_service_1.OcpiService])
], OcpiController);
exports.OcpiController = OcpiController;
//# sourceMappingURL=ocpi.controller.js.map