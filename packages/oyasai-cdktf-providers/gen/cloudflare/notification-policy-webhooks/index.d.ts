import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NotificationPolicyWebhooksConfig extends cdktf.TerraformMetaArguments {
    /**
    * The account id
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy_webhooks#account_id NotificationPolicyWebhooks#account_id}
    */
    readonly accountId?: string;
    /**
    * The name of the webhook destination. This will be included in the request body when you receive a webhook notification.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy_webhooks#name NotificationPolicyWebhooks#name}
    */
    readonly name: string;
    /**
    * Optional secret that will be passed in the `cf-webhook-auth` header when dispatching generic webhook notifications or formatted for supported destinations. Secrets are not returned in any API response body.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy_webhooks#secret NotificationPolicyWebhooks#secret}
    */
    readonly secret?: string;
    /**
    * The POST endpoint to call when dispatching a notification.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy_webhooks#url NotificationPolicyWebhooks#url}
    */
    readonly url: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy_webhooks cloudflare_notification_policy_webhooks}
*/
export declare class NotificationPolicyWebhooks extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_notification_policy_webhooks";
    /**
    * Generates CDKTF code for importing a NotificationPolicyWebhooks resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NotificationPolicyWebhooks to import
    * @param importFromId The id of the existing NotificationPolicyWebhooks that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy_webhooks#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NotificationPolicyWebhooks to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy_webhooks cloudflare_notification_policy_webhooks} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NotificationPolicyWebhooksConfig
    */
    constructor(scope: Construct, id: string, config: NotificationPolicyWebhooksConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get createdAt(): any;
    get id(): any;
    get lastFailure(): any;
    get lastSuccess(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _secret?;
    get secret(): string;
    set secret(value: string);
    resetSecret(): void;
    get secretInput(): string;
    get type(): any;
    private _url?;
    get url(): string;
    set url(value: string);
    get urlInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
