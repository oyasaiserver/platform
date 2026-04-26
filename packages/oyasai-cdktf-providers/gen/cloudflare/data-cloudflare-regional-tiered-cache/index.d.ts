import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareRegionalTieredCacheConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/regional_tiered_cache#zone_id DataCloudflareRegionalTieredCache#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/regional_tiered_cache cloudflare_regional_tiered_cache}
*/
export declare class DataCloudflareRegionalTieredCache extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_regional_tiered_cache";
    /**
    * Generates CDKTF code for importing a DataCloudflareRegionalTieredCache resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareRegionalTieredCache to import
    * @param importFromId The id of the existing DataCloudflareRegionalTieredCache that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/regional_tiered_cache#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareRegionalTieredCache to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/regional_tiered_cache cloudflare_regional_tiered_cache} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareRegionalTieredCacheConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareRegionalTieredCacheConfig);
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
