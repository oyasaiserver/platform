import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareStreamWebhookConfig extends cdktf.TerraformMetaArguments {
    /**
    * The account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_webhook#account_id DataCloudflareStreamWebhook#account_id}
    */
    readonly accountId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_webhook cloudflare_stream_webhook}
*/
export declare class DataCloudflareStreamWebhook extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_stream_webhook";
    /**
    * Generates CDKTF code for importing a DataCloudflareStreamWebhook resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareStreamWebhook to import
    * @param importFromId The id of the existing DataCloudflareStreamWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_webhook#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareStreamWebhook to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_webhook cloudflare_stream_webhook} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareStreamWebhookConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareStreamWebhookConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get modified(): any;
    get notificationUrl(): any;
    get secret(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
