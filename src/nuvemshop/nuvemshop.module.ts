import { Module } from '@nestjs/common';
import { NuvemshopController } from './nuvemshop.controller';
import { NuvemshopService } from './nuvemshop.service';
import { HttpService } from 'src/http-service/http-service.service';

@Module({
  controllers: [NuvemshopController],
  providers: [NuvemshopService, HttpService]
})
export class NuvemshopModule {}
