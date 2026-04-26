import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareR2BucketEventNotificationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_event_notification#account_id DataCloudflareR2BucketEventNotification#account_id}
    */
    readonly accountId?: string;
    /**
    * Name of the bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_event_notification#bucket_name DataCloudflareR2BucketEventNotification#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Queue ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_event_notification#queue_id DataCloudflareR2BucketEventNotification#queue_id}
    */
    readonly queueId: string;
}
export interface DataCloudflareR2BucketEventNotificationRules {
}
export declare function dataCloudflareR2BucketEventNotificationRulesToTerraform(struct?: DataCloudflareR2BucketEventNotificationRules): any;
export declare function dataCloudflareR2BucketEventNotificationRulesToHclTerraform(struct?: DataCloudflareR2BucketEventNotificationRules): any;
export declare class DataCloudflareR2BucketEventNotificationRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareR2BucketEventNotificationRules | undefined;
    set internalValue(value: DataCloudflareR2BucketEventNotificationRules | undefined);
    get actions(): any;
    get createdAt(): any;
    get description(): any;
    get prefix(): any;
    get ruleId(): any;
    get suffix(): any;
}
export declare class DataCloudflareR2BucketEventNotificationRulesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataCloudflareR2BucketEventNotificationRulesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_event_notification cloudflare_r2_bucket_event_notification}
*/
export declare class DataCloudflareR2BucketEventNotification extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_r2_bucket_event_notification";
    /**
    * Generates CDKTF code for importing a DataCloudflareR2BucketEventNotification resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareR2BucketEventNotification to import
    * @param importFromId The id of the existing DataCloudflareR2BucketEventNotification that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_event_notification#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareR2BucketEventNotification to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_event_notification cloudflare_r2_bucket_event_notification} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareR2BucketEventNotificationConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareR2BucketEventNotificationConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string;
    private _queueId?;
    get queueId(): string;
    set queueId(value: string);
    get queueIdInput(): string;
    get queueName(): any;
    private _rules;
    get rules(): DataCloudflareR2BucketEventNotificationRulesList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
