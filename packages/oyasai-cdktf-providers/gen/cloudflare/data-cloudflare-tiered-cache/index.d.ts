import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareTieredCacheConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/tiered_cache#zone_id DataCloudflareTieredCache#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/tiered_cache cloudflare_tiered_cache}
*/
export declare class DataCloudflareTieredCache extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_tiered_cache";
    /**
    * Generates CDKTF code for importing a DataCloudflareTieredCache resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareTieredCache to import
    * @param importFromId The id of the existing DataCloudflareTieredCache that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/tiered_cache#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareTieredCache to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/tiered_cache cloudflare_tiered_cache} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareTieredCacheConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareTieredCacheConfig);
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
