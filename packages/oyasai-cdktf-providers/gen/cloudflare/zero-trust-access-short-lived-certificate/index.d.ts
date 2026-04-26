import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustAccessShortLivedCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_short_lived_certificate#account_id ZeroTrustAccessShortLivedCertificate#account_id}
    */
    readonly accountId?: string;
    /**
    * UUID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_short_lived_certificate#app_id ZeroTrustAccessShortLivedCertificate#app_id}
    */
    readonly appId: string;
    /**
    * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_short_lived_certificate#zone_id ZeroTrustAccessShortLivedCertificate#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_short_lived_certificate cloudflare_zero_trust_access_short_lived_certificate}
*/
export declare class ZeroTrustAccessShortLivedCertificate extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_access_short_lived_certificate";
    /**
    * Generates CDKTF code for importing a ZeroTrustAccessShortLivedCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustAccessShortLivedCertificate to import
    * @param importFromId The id of the existing ZeroTrustAccessShortLivedCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_short_lived_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustAccessShortLivedCertificate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_short_lived_certificate cloudflare_zero_trust_access_short_lived_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustAccessShortLivedCertificateConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustAccessShortLivedCertificateConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _appId?;
    get appId(): string;
    set appId(value: string);
    get appIdInput(): string;
    get aud(): any;
    get id(): any;
    get publicKey(): any;
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
