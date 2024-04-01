import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { NuvemShopEntity } from './entity/nuvemshop.entity';
import { NuvemshopService } from './nuvemshop.service';
import { ApiQuery } from '@nestjs/swagger';
import { SaveNuvemShopDTO } from './dtos/saveNuvemShop.dto';
import { AuthenticationIntegration, CreatePayment, PaymentIntegration, Store } from './interface/nuvemshop.interface';

@Controller('nuvemshop')
export class NuvemshopController {

    constructor(private readonly nuvemShopService: NuvemshopService){}

    @Get()
    async getSingleStoreNuvemShop(): Promise<Store>{
        return await this.nuvemShopService.getSingleStoreNuvemShop();
    }

    @Post()
    async paymentProviderNuvemShop(@Body() bodyParams: PaymentIntegration): Promise<CreatePayment>{
        return await this.nuvemShopService.paymentProviderNuvemShop(bodyParams);
    }

    @Post('authenticate')
    async authenticationNuvemShop(@Body() authentication: AuthenticationIntegration): Promise<any>{
        return this.nuvemShopService.authenticationNuvemShop(authentication);
    }

}
