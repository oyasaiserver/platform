import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareR2BucketLifecycleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_lifecycle#account_id DataCloudflareR2BucketLifecycle#account_id}
    */
    readonly accountId?: string;
    /**
    * Name of the bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_lifecycle#bucket_name DataCloudflareR2BucketLifecycle#bucket_name}
    */
    readonly bucketName: string;
}
export interface DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition {
}
export declare function dataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionToTerraform(struct?: DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition): any;
export declare function dataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionToHclTerraform(struct?: DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition): any;
export declare class DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition | undefined;
    set internalValue(value: DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition | undefined);
    get maxAge(): any;
    get type(): any;
}
export interface DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransition {
}
export declare function dataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionToTerraform(struct?: DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransition): any;
export declare function dataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionToHclTerraform(struct?: DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransition): any;
export declare class DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransition | undefined;
    set internalValue(value: DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransition | undefined);
    private _condition;
    get condition(): DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference;
}
export interface DataCloudflareR2BucketLifecycleRulesConditions {
}
export declare function dataCloudflareR2BucketLifecycleRulesConditionsToTerraform(struct?: DataCloudflareR2BucketLifecycleRulesConditions): any;
export declare function dataCloudflareR2BucketLifecycleRulesConditionsToHclTerraform(struct?: DataCloudflareR2BucketLifecycleRulesConditions): any;
export declare class DataCloudflareR2BucketLifecycleRulesConditionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareR2BucketLifecycleRulesConditions | undefined;
    set internalValue(value: DataCloudflareR2BucketLifecycleRulesConditions | undefined);
    get prefix(): any;
}
export interface DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionCondition {
}
export declare function dataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionToTerraform(struct?: DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionCondition): any;
export declare function dataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionToHclTerraform(struct?: DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionCondition): any;
export declare class DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionCondition | undefined;
    set internalValue(value: DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionCondition | undefined);
    get date(): any;
    get maxAge(): any;
    get type(): any;
}
export interface DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransition {
}
export declare function dataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionToTerraform(struct?: DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransition): any;
export declare function dataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionToHclTerraform(struct?: DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransition): any;
export declare class DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransition | undefined;
    set internalValue(value: DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransition | undefined);
    private _condition;
    get condition(): DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference;
}
export interface DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsCondition {
}
export declare function dataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionToTerraform(struct?: DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsCondition): any;
export declare function dataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionToHclTerraform(struct?: DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsCondition): any;
export declare class DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsCondition | undefined;
    set internalValue(value: DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsCondition | undefined);
    get date(): any;
    get maxAge(): any;
    get type(): any;
}
export interface DataCloudflareR2BucketLifecycleRulesStorageClassTransitions {
}
export declare function dataCloudflareR2BucketLifecycleRulesStorageClassTransitionsToTerraform(struct?: DataCloudflareR2BucketLifecycleRulesStorageClassTransitions): any;
export declare function dataCloudflareR2BucketLifecycleRulesStorageClassTransitionsToHclTerraform(struct?: DataCloudflareR2BucketLifecycleRulesStorageClassTransitions): any;
export declare class DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareR2BucketLifecycleRulesStorageClassTransitions | undefined;
    set internalValue(value: DataCloudflareR2BucketLifecycleRulesStorageClassTransitions | undefined);
    private _condition;
    get condition(): DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference;
    get storageClass(): any;
}
export declare class DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference;
}
export interface DataCloudflareR2BucketLifecycleRules {
}
export declare function dataCloudflareR2BucketLifecycleRulesToTerraform(struct?: DataCloudflareR2BucketLifecycleRules): any;
export declare function dataCloudflareR2BucketLifecycleRulesToHclTerraform(struct?: DataCloudflareR2BucketLifecycleRules): any;
export declare class DataCloudflareR2BucketLifecycleRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareR2BucketLifecycleRules | undefined;
    set internalValue(value: DataCloudflareR2BucketLifecycleRules | undefined);
    private _abortMultipartUploadsTransition;
    get abortMultipartUploadsTransition(): DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference;
    private _conditions;
    get conditions(): DataCloudflareR2BucketLifecycleRulesConditionsOutputReference;
    private _deleteObjectsTransition;
    get deleteObjectsTransition(): DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference;
    get enabled(): any;
    get id(): any;
    private _storageClassTransitions;
    get storageClassTransitions(): DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList;
}
export declare class DataCloudflareR2BucketLifecycleRulesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareR2BucketLifecycleRulesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_lifecycle cloudflare_r2_bucket_lifecycle}
*/
export declare class DataCloudflareR2BucketLifecycle extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_r2_bucket_lifecycle";
    /**
    * Generates CDKTF code for importing a DataCloudflareR2BucketLifecycle resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareR2BucketLifecycle to import
    * @param importFromId The id of the existing DataCloudflareR2BucketLifecycle that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_lifecycle#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareR2BucketLifecycle to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_lifecycle cloudflare_r2_bucket_lifecycle} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareR2BucketLifecycleConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareR2BucketLifecycleConfig);
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
    get rules(): DataCloudflareR2BucketLifecycleRulesList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
