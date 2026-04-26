import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareR2BucketLockConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_lock#account_id DataCloudflareR2BucketLock#account_id}
    */
    readonly accountId?: string;
    /**
    * Name of the bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_lock#bucket_name DataCloudflareR2BucketLock#bucket_name}
    */
    readonly bucketName: string;
}
export interface DataCloudflareR2BucketLockRulesCondition {
}
export declare function dataCloudflareR2BucketLockRulesConditionToTerraform(struct?: DataCloudflareR2BucketLockRulesCondition): any;
export declare function dataCloudflareR2BucketLockRulesConditionToHclTerraform(struct?: DataCloudflareR2BucketLockRulesCondition): any;
export declare class DataCloudflareR2BucketLockRulesConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareR2BucketLockRulesCondition | undefined;
    set internalValue(value: DataCloudflareR2BucketLockRulesCondition | undefined);
    get date(): any;
    get maxAgeSeconds(): any;
    get type(): any;
}
export interface DataCloudflareR2BucketLockRules {
}
export declare function dataCloudflareR2BucketLockRulesToTerraform(struct?: DataCloudflareR2BucketLockRules): any;
export declare function dataCloudflareR2BucketLockRulesToHclTerraform(struct?: DataCloudflareR2BucketLockRules): any;
export declare class DataCloudflareR2BucketLockRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareR2BucketLockRules | undefined;
    set internalValue(value: DataCloudflareR2BucketLockRules | undefined);
    private _condition;
    get condition(): DataCloudflareR2BucketLockRulesConditionOutputReference;
    get enabled(): any;
    get id(): any;
    get prefix(): any;
}
export declare class DataCloudflareR2BucketLockRulesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareR2BucketLockRulesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_lock cloudflare_r2_bucket_lock}
*/
export declare class DataCloudflareR2BucketLock extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_r2_bucket_lock";
    /**
    * Generates CDKTF code for importing a DataCloudflareR2BucketLock resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareR2BucketLock to import
    * @param importFromId The id of the existing DataCloudflareR2BucketLock that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_lock#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareR2BucketLock to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_lock cloudflare_r2_bucket_lock} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareR2BucketLockConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareR2BucketLockConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string;
    private _rules;
    get rules(): DataCloudflareR2BucketLockRulesList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
