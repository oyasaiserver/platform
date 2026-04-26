import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZoneCacheVariantsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_cache_variants#zone_id DataCloudflareZoneCacheVariants#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareZoneCacheVariantsValue {
}
export declare function dataCloudflareZoneCacheVariantsValueToTerraform(struct?: DataCloudflareZoneCacheVariantsValue): any;
export declare function dataCloudflareZoneCacheVariantsValueToHclTerraform(struct?: DataCloudflareZoneCacheVariantsValue): any;
export declare class DataCloudflareZoneCacheVariantsValueOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZoneCacheVariantsValue | undefined;
    set internalValue(value: DataCloudflareZoneCacheVariantsValue | undefined);
    get avif(): any;
    get bmp(): any;
    get gif(): any;
    get jp2(): any;
    get jpeg(): any;
    get jpg(): any;
    get jpg2(): any;
    get png(): any;
    get tif(): any;
    get tiff(): any;
    get webp(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_cache_variants cloudflare_zone_cache_variants}
*/
export declare class DataCloudflareZoneCacheVariants extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zone_cache_variants";
    /**
    * Generates CDKTF code for importing a DataCloudflareZoneCacheVariants resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZoneCacheVariants to import
    * @param importFromId The id of the existing DataCloudflareZoneCacheVariants that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_cache_variants#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZoneCacheVariants to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_cache_variants cloudflare_zone_cache_variants} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZoneCacheVariantsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZoneCacheVariantsConfig);
    get editable(): any;
    get id(): any;
    get modifiedOn(): any;
    private _value;
    get value(): DataCloudflareZoneCacheVariantsValueOutputReference;
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
