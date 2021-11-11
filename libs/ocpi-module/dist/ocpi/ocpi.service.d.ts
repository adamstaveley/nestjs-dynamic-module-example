import { OcpiModuleConfig } from './types';
export declare class OcpiService {
    private config;
    constructor(config: OcpiModuleConfig);
    getVersions(): Promise<{
        status_code: number;
        data: {
            version: string;
            url: string;
        }[];
        timestamp: Date;
    }>;
    getVersionDetail(version: string): Promise<{
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
