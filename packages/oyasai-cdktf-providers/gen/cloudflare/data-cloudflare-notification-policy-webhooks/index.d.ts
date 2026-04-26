import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareNotificationPolicyWebhooksConfig extends cdktf.TerraformMetaArguments {
    /**
    * The account id
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/notification_policy_webhooks#account_id DataCloudflareNotificationPolicyWebhooks#account_id}
    */
    readonly accountId?: string;
    /**
    * The unique identifier of a webhook
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/notification_policy_webhooks#webhook_id DataCloudflareNotificationPolicyWebhooks#webhook_id}
    */
    readonly webhookId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/notification_policy_webhooks cloudflare_notification_policy_webhooks}
*/
export declare class DataCloudflareNotificationPolicyWebhooks extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_notification_policy_webhooks";
    /**
    * Generates CDKTF code for importing a DataCloudflareNotificationPolicyWebhooks resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareNotificationPolicyWebhooks to import
    * @param importFromId The id of the existing DataCloudflareNotificationPolicyWebhooks that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/notification_policy_webhooks#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareNotificationPolicyWebhooks to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/notification_policy_webhooks cloudflare_notification_policy_webhooks} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareNotificationPolicyWebhooksConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareNotificationPolicyWebhooksConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get createdAt(): any;
    get id(): any;
    get lastFailure(): any;
    get lastSuccess(): any;
    get name(): any;
    get secret(): any;
    get type(): any;
    get url(): any;
    private _webhookId?;
    get webhookId(): string;
    set webhookId(value: string);
    get webhookIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
