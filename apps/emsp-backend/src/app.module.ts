import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OcpiModule } from 'ocpi-module'

@Module({
  imports: [OcpiModule.register({ baseUrl: 'http://localhost:3000' })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
