import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface R2BucketEventNotificationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_event_notification#account_id R2BucketEventNotification#account_id}
    */
    readonly accountId?: string;
    /**
    * Name of the bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_event_notification#bucket_name R2BucketEventNotification#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Jurisdiction of the bucket
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_event_notification#jurisdiction R2BucketEventNotification#jurisdiction}
    */
    readonly jurisdiction?: string;
    /**
    * Queue ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_event_notification#queue_id R2BucketEventNotification#queue_id}
    */
    readonly queueId: string;
    /**
    * Array of rules to drive notifications.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_event_notification#rules R2BucketEventNotification#rules}
    */
    readonly rules: R2BucketEventNotificationRules[] | cdktf.IResolvable;
}
export interface R2BucketEventNotificationRules {
    /**
    * Array of R2 object actions that will trigger notifications.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_event_notification#actions R2BucketEventNotification#actions}
    */
    readonly actions: string[];
    /**
    * A description that can be used to identify the event notification rule after creation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_event_notification#description R2BucketEventNotification#description}
    */
    readonly description?: string;
    /**
    * Notifications will be sent only for objects with this prefix.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_event_notification#prefix R2BucketEventNotification#prefix}
    */
    readonly prefix?: string;
    /**
    * Notifications will be sent only for objects with this suffix.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_event_notification#suffix R2BucketEventNotification#suffix}
    */
    readonly suffix?: string;
}
export declare function r2BucketEventNotificationRulesToTerraform(struct?: R2BucketEventNotificationRules | cdktf.IResolvable): any;
export declare function r2BucketEventNotificationRulesToHclTerraform(struct?: R2BucketEventNotificationRules | cdktf.IResolvable): any;
export declare class R2BucketEventNotificationRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): R2BucketEventNotificationRules | cdktf.IResolvable | undefined;
    set internalValue(value: R2BucketEventNotificationRules | cdktf.IResolvable | undefined);
    private _actions?;
    get actions(): string[];
    set actions(value: string[]);
    get actionsInput(): string[];
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string;
    private _suffix?;
    get suffix(): string;
    set suffix(value: string);
    resetSuffix(): void;
    get suffixInput(): string;
}
export declare class R2BucketEventNotificationRulesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: R2BucketEventNotificationRules[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): R2BucketEventNotificationRulesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_event_notification cloudflare_r2_bucket_event_notification}
*/
export declare class R2BucketEventNotification extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_r2_bucket_event_notification";
    /**
    * Generates CDKTF code for importing a R2BucketEventNotification resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the R2BucketEventNotification to import
    * @param importFromId The id of the existing R2BucketEventNotification that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_event_notification#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the R2BucketEventNotification to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_event_notification cloudflare_r2_bucket_event_notification} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options R2BucketEventNotificationConfig
    */
    constructor(scope: Construct, id: string, config: R2BucketEventNotificationConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string;
    private _jurisdiction?;
    get jurisdiction(): string;
    set jurisdiction(value: string);
    resetJurisdiction(): void;
    get jurisdictionInput(): string;
    private _queueId?;
    get queueId(): string;
    set queueId(value: string);
    get queueIdInput(): string;
    get queueName(): any;
    private _rules;
    get rules(): R2BucketEventNotificationRulesList;
    putRules(value: R2BucketEventNotificationRules[] | cdktf.IResolvable): void;
    get rulesInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
