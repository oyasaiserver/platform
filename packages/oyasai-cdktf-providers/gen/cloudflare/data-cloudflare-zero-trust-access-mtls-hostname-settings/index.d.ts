import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustAccessMtlsHostnameSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_mtls_hostname_settings#account_id DataCloudflareZeroTrustAccessMtlsHostnameSettings#account_id}
    */
    readonly accountId?: string;
    /**
    * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_mtls_hostname_settings#zone_id DataCloudflareZeroTrustAccessMtlsHostnameSettings#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_mtls_hostname_settings cloudflare_zero_trust_access_mtls_hostname_settings}
*/
export declare class DataCloudflareZeroTrustAccessMtlsHostnameSettings extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_access_mtls_hostname_settings";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustAccessMtlsHostnameSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustAccessMtlsHostnameSettings to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustAccessMtlsHostnameSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_mtls_hostname_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustAccessMtlsHostnameSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_mtls_hostname_settings cloudflare_zero_trust_access_mtls_hostname_settings} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustAccessMtlsHostnameSettingsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustAccessMtlsHostnameSettingsConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get chinaNetwork(): any;
    get clientCertificateForwarding(): any;
    get hostname(): any;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    resetZoneId(): void;
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
