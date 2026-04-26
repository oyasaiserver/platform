import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflarePageShieldCookiesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies#cookie_id DataCloudflarePageShieldCookies#cookie_id}
    */
    readonly cookieId: string;
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies#zone_id DataCloudflarePageShieldCookies#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies cloudflare_page_shield_cookies}
*/
export declare class DataCloudflarePageShieldCookies extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_page_shield_cookies";
    /**
    * Generates CDKTF code for importing a DataCloudflarePageShieldCookies resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflarePageShieldCookies to import
    * @param importFromId The id of the existing DataCloudflarePageShieldCookies that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflarePageShieldCookies to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies cloudflare_page_shield_cookies} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflarePageShieldCookiesConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflarePageShieldCookiesConfig);
    private _cookieId?;
    get cookieId(): string;
    set cookieId(value: string);
    get cookieIdInput(): string;
    get domainAttribute(): any;
    get expiresAttribute(): any;
    get firstSeenAt(): any;
    get host(): any;
    get httpOnlyAttribute(): any;
    get id(): any;
    get lastSeenAt(): any;
    get maxAgeAttribute(): any;
    get name(): any;
    get pageUrls(): any;
    get pathAttribute(): any;
    get sameSiteAttribute(): any;
    get secureAttribute(): any;
    get type(): any;
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
