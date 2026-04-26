import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareRegistrarDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/registrar_domain#account_id DataCloudflareRegistrarDomain#account_id}
    */
    readonly accountId?: string;
    /**
    * Fully qualified domain name (FQDN) including the extension
    * (e.g., `example.com`, `mybrand.app`). The domain name uniquely
    * identifies a registration — the same domain cannot be registered
    * twice, making it a natural idempotency key for registration requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/registrar_domain#domain_name DataCloudflareRegistrarDomain#domain_name}
    */
    readonly domainName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/registrar_domain cloudflare_registrar_domain}
*/
export declare class DataCloudflareRegistrarDomain extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_registrar_domain";
    /**
    * Generates CDKTF code for importing a DataCloudflareRegistrarDomain resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareRegistrarDomain to import
    * @param importFromId The id of the existing DataCloudflareRegistrarDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/registrar_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareRegistrarDomain to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/registrar_domain cloudflare_registrar_domain} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareRegistrarDomainConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareRegistrarDomainConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
