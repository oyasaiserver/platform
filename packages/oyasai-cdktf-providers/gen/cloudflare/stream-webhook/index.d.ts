import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface StreamWebhookConfig extends cdktf.TerraformMetaArguments {
    /**
    * The account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_webhook#account_id StreamWebhook#account_id}
    */
    readonly accountId?: string;
    /**
    * The URL where webhooks will be sent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_webhook#notification_url StreamWebhook#notification_url}
    */
    readonly notificationUrl?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_webhook cloudflare_stream_webhook}
*/
export declare class StreamWebhook extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_stream_webhook";
    /**
    * Generates CDKTF code for importing a StreamWebhook resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the StreamWebhook to import
    * @param importFromId The id of the existing StreamWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_webhook#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the StreamWebhook to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_webhook cloudflare_stream_webhook} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StreamWebhookConfig = {}
    */
    constructor(scope: Construct, id: string, config?: StreamWebhookConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get modified(): any;
    private _notificationUrl?;
    get notificationUrl(): string;
    set notificationUrl(value: string);
    resetNotificationUrl(): void;
    get notificationUrlInput(): string;
    get secret(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
