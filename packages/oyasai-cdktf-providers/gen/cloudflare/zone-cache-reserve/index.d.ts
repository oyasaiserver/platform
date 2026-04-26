import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZoneCacheReserveConfig extends cdktf.TerraformMetaArguments {
    /**
    * Value of the Cache Reserve zone setting.
    * Available values: "on", "off".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_cache_reserve#value ZoneCacheReserve#value}
    */
    readonly value?: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_cache_reserve#zone_id ZoneCacheReserve#zone_id}
    */
    readonly zoneId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_cache_reserve cloudflare_zone_cache_reserve}
*/
export declare class ZoneCacheReserve extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zone_cache_reserve";
    /**
    * Generates CDKTF code for importing a ZoneCacheReserve resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZoneCacheReserve to import
    * @param importFromId The id of the existing ZoneCacheReserve that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_cache_reserve#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZoneCacheReserve to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_cache_reserve cloudflare_zone_cache_reserve} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZoneCacheReserveConfig
    */
    constructor(scope: Construct, id: string, config: ZoneCacheReserveConfig);
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
