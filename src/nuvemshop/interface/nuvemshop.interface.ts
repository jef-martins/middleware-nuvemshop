

export interface Store {
    id: number,
    name: {
        pt: string
    },
    description: {
        pt: string | any
    },
    type: any,
    email: string,
    logo: any,
    contact_email: any,
    country: string,
    facebook: any,
    twitter: string,
    instagram: string,
    pinterest: any,
    blog: any,
    business_id: any,
    business_name: any,
    business_address: any,
    address: any,
    phone: any,
    whatsapp_phone_number: any,
    customer_accounts: any,
    plan_name: string,
    domains: any,
    languages: {
        es: {
            currency: string,
            active: boolean
        },
        pt: {
            currency: string,
            active: boolean
        },
        en: {
            currency: string,
            active: boolean
        }
    },
    original_domain: string,
    url_with_protocol: string,
    main_currency: string,
    current_theme: string,
    main_language: string,
    admin_language: string,
    created_at: Date | string,
    updated_at: Date | string
}


export interface CreatePayment {
    id: string
}


export interface PaymentIntegration {
    name: string;
    public_name: string;
    description: string;
    logo_urls: {
        '400x120': string;
        '160x100': string;
    };
    configuration_url: string;
    support_url: string;
    rates_url: string;
    checkout_js_url: string;
    supported_currencies: string[];
    supported_payment_methods: {
        payment_method_type: string;
        payment_methods: string[];
        installments: {
            min_installment_value: {
                currency: string;
                value: string;
            }[];
            specification: {
                installments: number;
                interest_rate: string;
                applies_to: string[];
            }[];
        };
    }[];
    rates: {
        payment_method_type: string;
        rates_definition: {
            percent_fee: string;
            flat_fee: {
                value: string;
                currency: string;
            };
            plus_tax: boolean;
            days_to_withdraw_money: number;
        }[];
    }[];
    checkout_payment_options: {
        id: string;
        name: string;
        description: string;
        logo_url: string;
        supported_billing_countries: string[];
        supported_payment_method_types: string[];
        integration_type: string;
    }[];
    features: string[];
    enabled: boolean;
    authentication: null;
}


export interface AuthenticationIntegration{
    client_id: string, 
    client_secret: string, 
    grant_type: string, 
    code: string 
}