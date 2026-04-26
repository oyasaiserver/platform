import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareCustomPageAssetConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_page_asset#account_id DataCloudflareCustomPageAsset#account_id}
    */
    readonly accountId?: string;
    /**
    * The unique name of the custom asset. Can only contain letters (A-Z, a-z), numbers (0-9), and underscores (_).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_page_asset#asset_name DataCloudflareCustomPageAsset#asset_name}
    */
    readonly assetName: string;
    /**
    * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_page_asset#zone_id DataCloudflareCustomPageAsset#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_page_asset cloudflare_custom_page_asset}
*/
export declare class DataCloudflareCustomPageAsset extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_custom_page_asset";
    /**
    * Generates CDKTF code for importing a DataCloudflareCustomPageAsset resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCustomPageAsset to import
    * @param importFromId The id of the existing DataCloudflareCustomPageAsset that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_page_asset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCustomPageAsset to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_page_asset cloudflare_custom_page_asset} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCustomPageAssetConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareCustomPageAssetConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _assetName?;
    get assetName(): string;
    set assetName(value: string);
    get assetNameInput(): string;
    get description(): any;
    get id(): any;
    get lastUpdated(): any;
    get name(): any;
    get sizeBytes(): any;
    get url(): any;
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
