import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RegionalTieredCacheConfig extends cdktf.TerraformMetaArguments {
    /**
    * Value of the Regional Tiered Cache zone setting.
    * Available values: "on", "off".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/regional_tiered_cache#value RegionalTieredCache#value}
    */
    readonly value?: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/regional_tiered_cache#zone_id RegionalTieredCache#zone_id}
    */
    readonly zoneId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/regional_tiered_cache cloudflare_regional_tiered_cache}
*/
export declare class RegionalTieredCache extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_regional_tiered_cache";
    /**
    * Generates CDKTF code for importing a RegionalTieredCache resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RegionalTieredCache to import
    * @param importFromId The id of the existing RegionalTieredCache that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/regional_tiered_cache#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RegionalTieredCache to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/regional_tiered_cache cloudflare_regional_tiered_cache} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RegionalTieredCacheConfig
    */
    constructor(scope: Construct, id: string, config: RegionalTieredCacheConfig);
    get editable(): any;
    get id(): any;
    get modifiedOn(): any;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
