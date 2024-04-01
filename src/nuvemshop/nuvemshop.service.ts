import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NuvemShopEntity } from './entity/nuvemshop.entity';
import { Repository } from 'typeorm';
import { hash } from 'bcrypt';
import { SaveNuvemShopDTO } from './dtos/saveNuvemShop.dto';
import { HttpService } from 'src/http-service/http-service.service';
import { AuthenticationIntegration, CreatePayment, PaymentIntegration, Store } from './interface/nuvemshop.interface';

@Injectable()
export class NuvemshopService {
    
    constructor(
        private readonly httpService: HttpService
        //@InjectRepository(NuvemShopEntity)
        //private readonly nuvemShopRepository: Repository<NuvemShopEntity>
    ){  }

    url = process.env.NS_URL;
    headers = {
        headers: {
            'Authentication': process.env.NS_TYPETOKEN+' '+process.env.NS_TOKEN,
            },
    };

    async getSingleStoreNuvemShop(): Promise<Store>{
        const response = await this.httpService.get(this.url+'store', this.headers);
        return response;
    }

    async paymentProviderNuvemShop(params: PaymentIntegration): Promise<CreatePayment>{
        const response = await this.httpService.post(this.url+'/payment_providers', params, this.headers);
        return response;
    }

    async authenticationNuvemShop(authentication: AuthenticationIntegration): Promise<any>{
        //const response = await this.httpService.
        //    post(process.env.NS_URLAUTHENTICATE, authentication, this.headers);
        return 0;
    }

}
