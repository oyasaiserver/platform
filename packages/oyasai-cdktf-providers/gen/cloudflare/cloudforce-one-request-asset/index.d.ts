import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudforceOneRequestAssetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_asset#account_id CloudforceOneRequestAsset#account_id}
    */
    readonly accountId?: string;
    /**
    * Page number of results.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_asset#page CloudforceOneRequestAsset#page}
    */
    readonly page: number;
    /**
    * Number of results per page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_asset#per_page CloudforceOneRequestAsset#per_page}
    */
    readonly perPage: number;
    /**
    * UUID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_asset#request_id CloudforceOneRequestAsset#request_id}
    */
    readonly requestId: string;
    /**
    * Asset file to upload.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_asset#source CloudforceOneRequestAsset#source}
    */
    readonly source?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_asset cloudflare_cloudforce_one_request_asset}
*/
export declare class CloudforceOneRequestAsset extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_cloudforce_one_request_asset";
    /**
    * Generates CDKTF code for importing a CloudforceOneRequestAsset resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudforceOneRequestAsset to import
    * @param importFromId The id of the existing CloudforceOneRequestAsset that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_asset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudforceOneRequestAsset to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_asset cloudflare_cloudforce_one_request_asset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudforceOneRequestAssetConfig
    */
    constructor(scope: Construct, id: string, config: CloudforceOneRequestAssetConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get created(): any;
    get description(): any;
    get fileType(): any;
    get id(): any;
    get name(): any;
    private _page?;
    get page(): number;
    set page(value: number);
    get pageInput(): number;
    private _perPage?;
    get perPage(): number;
    set perPage(value: number);
    get perPageInput(): number;
    private _requestId?;
    get requestId(): string;
    set requestId(value: string);
    get requestIdInput(): string;
    private _source?;
    get source(): string;
    set source(value: string);
    resetSource(): void;
    get sourceInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
