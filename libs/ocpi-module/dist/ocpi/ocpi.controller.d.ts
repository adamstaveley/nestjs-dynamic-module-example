import { OcpiService } from './ocpi.service';
export declare class OcpiController {
    private ocpiService;
    constructor(ocpiService: OcpiService);
    getVersions(): Promise<{
        status_code: number;
        data: {
            version: string;
            url: string;
        }[];
        timestamp: Date;
    }>;
    getVersionDetails(id: string): Promise<{
        status_code: number;
        status_message: string;
        timestamp: Date;
        data?: undefined;
    } | {
        status_code: number;
        data: {
            version: string;
            endpoints: {
                identifier: string;
                url: string;
                role: string;
            }[];
        };
        timestamp: Date;
        status_message?: undefined;
    }>;
}
