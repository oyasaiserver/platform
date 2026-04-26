import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareCallsSfuAppConfig extends cdktf.TerraformMetaArguments {
    /**
    * The account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/calls_sfu_app#account_id DataCloudflareCallsSfuApp#account_id}
    */
    readonly accountId?: string;
    /**
    * A Cloudflare-generated unique identifier for a item.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/calls_sfu_app#app_id DataCloudflareCallsSfuApp#app_id}
    */
    readonly appId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/calls_sfu_app cloudflare_calls_sfu_app}
*/
export declare class DataCloudflareCallsSfuApp extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_calls_sfu_app";
    /**
    * Generates CDKTF code for importing a DataCloudflareCallsSfuApp resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCallsSfuApp to import
    * @param importFromId The id of the existing DataCloudflareCallsSfuApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/calls_sfu_app#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCallsSfuApp to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/calls_sfu_app cloudflare_calls_sfu_app} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCallsSfuAppConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareCallsSfuAppConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _appId?;
    get appId(): string;
    set appId(value: string);
    get appIdInput(): string;
    get created(): any;
    get modified(): any;
    get name(): any;
    get uid(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
