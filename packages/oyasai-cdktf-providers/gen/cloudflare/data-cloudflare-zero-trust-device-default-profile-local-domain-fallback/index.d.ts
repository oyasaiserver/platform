import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_default_profile_local_domain_fallback#account_id DataCloudflareZeroTrustDeviceDefaultProfileLocalDomainFallback#account_id}
    */
    readonly accountId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_default_profile_local_domain_fallback cloudflare_zero_trust_device_default_profile_local_domain_fallback}
*/
export declare class DataCloudflareZeroTrustDeviceDefaultProfileLocalDomainFallback extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_device_default_profile_local_domain_fallback";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDeviceDefaultProfileLocalDomainFallback resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDeviceDefaultProfileLocalDomainFallback to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDeviceDefaultProfileLocalDomainFallback that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_default_profile_local_domain_fallback#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDeviceDefaultProfileLocalDomainFallback to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_default_profile_local_domain_fallback cloudflare_zero_trust_device_default_profile_local_domain_fallback} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get description(): any;
    get dnsServer(): any;
    get id(): any;
    get suffix(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
