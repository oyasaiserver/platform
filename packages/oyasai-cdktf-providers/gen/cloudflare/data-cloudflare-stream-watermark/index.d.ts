import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareStreamWatermarkAConfig extends cdktf.TerraformMetaArguments {
    /**
    * The account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_watermark#account_id DataCloudflareStreamWatermarkA#account_id}
    */
    readonly accountId?: string;
    /**
    * The unique identifier for a watermark profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_watermark#identifier DataCloudflareStreamWatermarkA#identifier}
    */
    readonly identifier: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_watermark cloudflare_stream_watermark}
*/
export declare class DataCloudflareStreamWatermarkA extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_stream_watermark";
    /**
    * Generates CDKTF code for importing a DataCloudflareStreamWatermarkA resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareStreamWatermarkA to import
    * @param importFromId The id of the existing DataCloudflareStreamWatermarkA that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_watermark#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareStreamWatermarkA to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_watermark cloudflare_stream_watermark} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareStreamWatermarkAConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareStreamWatermarkAConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get created(): any;
    get downloadedFrom(): any;
    get height(): any;
    private _identifier?;
    get identifier(): string;
    set identifier(value: string);
    get identifierInput(): string;
    get name(): any;
    get opacity(): any;
    get padding(): any;
    get position(): any;
    get scale(): any;
    get size(): any;
    get uid(): any;
    get width(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
