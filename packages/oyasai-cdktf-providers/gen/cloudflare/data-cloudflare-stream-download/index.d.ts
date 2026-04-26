import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareStreamDownloadConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_download#account_id DataCloudflareStreamDownload#account_id}
    */
    readonly accountId?: string;
    /**
    * A Cloudflare-generated unique identifier for a media item.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_download#identifier DataCloudflareStreamDownload#identifier}
    */
    readonly identifier: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_download cloudflare_stream_download}
*/
export declare class DataCloudflareStreamDownload extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_stream_download";
    /**
    * Generates CDKTF code for importing a DataCloudflareStreamDownload resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareStreamDownload to import
    * @param importFromId The id of the existing DataCloudflareStreamDownload that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_download#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareStreamDownload to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_download cloudflare_stream_download} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareStreamDownloadConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareStreamDownloadConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _identifier?;
    get identifier(): string;
    set identifier(value: string);
    get identifierInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
