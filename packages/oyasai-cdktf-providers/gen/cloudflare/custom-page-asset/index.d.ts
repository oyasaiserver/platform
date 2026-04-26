import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CustomPageAssetConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_page_asset#account_id CustomPageAsset#account_id}
    */
    readonly accountId?: string;
    /**
    * A short description of the custom asset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_page_asset#description CustomPageAsset#description}
    */
    readonly description: string;
    /**
    * The unique name of the custom asset. Can only contain letters (A-Z, a-z), numbers (0-9), and underscores (_).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_page_asset#name CustomPageAsset#name}
    */
    readonly name: string;
    /**
    * The URL where the asset content is fetched from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_page_asset#url CustomPageAsset#url}
    */
    readonly url: string;
    /**
    * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_page_asset#zone_id CustomPageAsset#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_page_asset cloudflare_custom_page_asset}
*/
export declare class CustomPageAsset extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_custom_page_asset";
    /**
    * Generates CDKTF code for importing a CustomPageAsset resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CustomPageAsset to import
    * @param importFromId The id of the existing CustomPageAsset that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_page_asset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CustomPageAsset to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_page_asset cloudflare_custom_page_asset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CustomPageAssetConfig
    */
    constructor(scope: Construct, id: string, config: CustomPageAssetConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    get descriptionInput(): string;
    get id(): any;
    get lastUpdated(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get sizeBytes(): any;
    private _url?;
    get url(): string;
    set url(value: string);
    get urlInput(): string;
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
