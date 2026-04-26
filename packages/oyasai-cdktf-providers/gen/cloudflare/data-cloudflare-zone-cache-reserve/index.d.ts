import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZoneCacheReserveConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_cache_reserve#zone_id DataCloudflareZoneCacheReserve#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_cache_reserve cloudflare_zone_cache_reserve}
*/
export declare class DataCloudflareZoneCacheReserve extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zone_cache_reserve";
    /**
    * Generates CDKTF code for importing a DataCloudflareZoneCacheReserve resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZoneCacheReserve to import
    * @param importFromId The id of the existing DataCloudflareZoneCacheReserve that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_cache_reserve#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZoneCacheReserve to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_cache_reserve cloudflare_zone_cache_reserve} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZoneCacheReserveConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZoneCacheReserveConfig);
    get editable(): any;
    get id(): any;
    get modifiedOn(): any;
    get value(): any;
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
