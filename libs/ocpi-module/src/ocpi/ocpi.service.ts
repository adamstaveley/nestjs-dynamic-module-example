import { Inject, Injectable } from '@nestjs/common';
import { OcpiModuleConfig } from './types';

@Injectable()
export class OcpiService {
    constructor(@Inject('CONFIG_OPTIONS') private config: OcpiModuleConfig) {}

    async getVersions() {
        return {
            status_code: 1000,
            data: [
                {
                    version: '2.2',
                    url: `${this.config.baseUrl}/ocpi/versions/2.2`
                }
            ],
            timestamp: new Date()
        }
    }
    async getVersionDetail(version: string) {
        if (version !== '2.2') {
            return {
                status_code: 2000,
                status_message: 'Version not supported',
                timestamp: new Date()
            }
        }
        return {
            status_code: 1000,
            data: {
                version: '2.2',
                endpoints: [
                    {
                        identifier: 'credentials',
                        url: `${this.config.baseUrl}/ocpi/credentials`,
                        role: 'RECEIVER'
                    }
                ]
            },
            timestamp: new Date()
        }
    }
}
