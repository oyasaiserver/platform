import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface R2BucketLifecycleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lifecycle#account_id R2BucketLifecycle#account_id}
    */
    readonly accountId?: string;
    /**
    * Name of the bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lifecycle#bucket_name R2BucketLifecycle#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Jurisdiction of the bucket
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lifecycle#jurisdiction R2BucketLifecycle#jurisdiction}
    */
    readonly jurisdiction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lifecycle#rules R2BucketLifecycle#rules}
    */
    readonly rules?: R2BucketLifecycleRules[] | cdktf.IResolvable;
}
export interface R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lifecycle#max_age R2BucketLifecycle#max_age}
    */
    readonly maxAge: number;
    /**
    * Available values: "Age".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lifecycle#type R2BucketLifecycle#type}
    */
    readonly type: string;
}
export declare function r2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionToTerraform(struct?: R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition | cdktf.IResolvable): any;
export declare function r2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionToHclTerraform(struct?: R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition | cdktf.IResolvable): any;
export declare class R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition | cdktf.IResolvable | undefined;
    set internalValue(value: R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition | cdktf.IResolvable | undefined);
    private _maxAge?;
    get maxAge(): number;
    set maxAge(value: number);
    get maxAgeInput(): number;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
}
export interface R2BucketLifecycleRulesAbortMultipartUploadsTransition {
    /**
    * Condition for lifecycle transitions to apply after an object reaches an age in seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lifecycle#condition R2BucketLifecycle#condition}
    */
    readonly condition?: R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition;
}
export declare function r2BucketLifecycleRulesAbortMultipartUploadsTransitionToTerraform(struct?: R2BucketLifecycleRulesAbortMultipartUploadsTransition | cdktf.IResolvable): any;
export declare function r2BucketLifecycleRulesAbortMultipartUploadsTransitionToHclTerraform(struct?: R2BucketLifecycleRulesAbortMultipartUploadsTransition | cdktf.IResolvable): any;
export declare class R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): R2BucketLifecycleRulesAbortMultipartUploadsTransition | cdktf.IResolvable | undefined;
    set internalValue(value: R2BucketLifecycleRulesAbortMultipartUploadsTransition | cdktf.IResolvable | undefined);
    private _condition;
    get condition(): R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference;
    putCondition(value: R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition): void;
    resetCondition(): void;
    get conditionInput(): any;
}
export interface R2BucketLifecycleRulesConditions {
    /**
    * Transitions will only apply to objects/uploads in the bucket that start with the given prefix, an empty prefix can be provided to scope rule to all objects/uploads.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lifecycle#prefix R2BucketLifecycle#prefix}
    */
    readonly prefix: string;
}
export declare function r2BucketLifecycleRulesConditionsToTerraform(struct?: R2BucketLifecycleRulesConditions | cdktf.IResolvable): any;
export declare function r2BucketLifecycleRulesConditionsToHclTerraform(struct?: R2BucketLifecycleRulesConditions | cdktf.IResolvable): any;
export declare class R2BucketLifecycleRulesConditionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): R2BucketLifecycleRulesConditions | cdktf.IResolvable | undefined;
    set internalValue(value: R2BucketLifecycleRulesConditions | cdktf.IResolvable | undefined);
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    get prefixInput(): string;
}
export interface R2BucketLifecycleRulesDeleteObjectsTransitionCondition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lifecycle#date R2BucketLifecycle#date}
    */
    readonly date?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lifecycle#max_age R2BucketLifecycle#max_age}
    */
    readonly maxAge?: number;
    /**
    * Available values: "Age", "Date".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lifecycle#type R2BucketLifecycle#type}
    */
    readonly type: string;
}
export declare function r2BucketLifecycleRulesDeleteObjectsTransitionConditionToTerraform(struct?: R2BucketLifecycleRulesDeleteObjectsTransitionCondition | cdktf.IResolvable): any;
export declare function r2BucketLifecycleRulesDeleteObjectsTransitionConditionToHclTerraform(struct?: R2BucketLifecycleRulesDeleteObjectsTransitionCondition | cdktf.IResolvable): any;
export declare class R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): R2BucketLifecycleRulesDeleteObjectsTransitionCondition | cdktf.IResolvable | undefined;
    set internalValue(value: R2BucketLifecycleRulesDeleteObjectsTransitionCondition | cdktf.IResolvable | undefined);
    private _date?;
    get date(): string;
    set date(value: string);
    resetDate(): void;
    get dateInput(): string;
    private _maxAge?;
    get maxAge(): number;
    set maxAge(value: number);
    resetMaxAge(): void;
    get maxAgeInput(): number;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
}
export interface R2BucketLifecycleRulesDeleteObjectsTransition {
    /**
    * Condition for lifecycle transitions to apply after an object reaches an age in seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lifecycle#condition R2BucketLifecycle#condition}
    */
    readonly condition?: R2BucketLifecycleRulesDeleteObjectsTransitionCondition;
}
export declare function r2BucketLifecycleRulesDeleteObjectsTransitionToTerraform(struct?: R2BucketLifecycleRulesDeleteObjectsTransition | cdktf.IResolvable): any;
export declare function r2BucketLifecycleRulesDeleteObjectsTransitionToHclTerraform(struct?: R2BucketLifecycleRulesDeleteObjectsTransition | cdktf.IResolvable): any;
export declare class R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): R2BucketLifecycleRulesDeleteObjectsTransition | cdktf.IResolvable | undefined;
    set internalValue(value: R2BucketLifecycleRulesDeleteObjectsTransition | cdktf.IResolvable | undefined);
    private _condition;
    get condition(): R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference;
    putCondition(value: R2BucketLifecycleRulesDeleteObjectsTransitionCondition): void;
    resetCondition(): void;
    get conditionInput(): any;
}
export interface R2BucketLifecycleRulesStorageClassTransitionsCondition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lifecycle#date R2BucketLifecycle#date}
    */
    readonly date?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lifecycle#max_age R2BucketLifecycle#max_age}
    */
    readonly maxAge?: number;
    /**
    * Available values: "Age", "Date".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lifecycle#type R2BucketLifecycle#type}
    */
    readonly type: string;
}
export declare function r2BucketLifecycleRulesStorageClassTransitionsConditionToTerraform(struct?: R2BucketLifecycleRulesStorageClassTransitionsCondition | cdktf.IResolvable): any;
export declare function r2BucketLifecycleRulesStorageClassTransitionsConditionToHclTerraform(struct?: R2BucketLifecycleRulesStorageClassTransitionsCondition | cdktf.IResolvable): any;
export declare class R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): R2BucketLifecycleRulesStorageClassTransitionsCondition | cdktf.IResolvable | undefined;
    set internalValue(value: R2BucketLifecycleRulesStorageClassTransitionsCondition | cdktf.IResolvable | undefined);
    private _date?;
    get date(): string;
    set date(value: string);
    resetDate(): void;
    get dateInput(): string;
    private _maxAge?;
    get maxAge(): number;
    set maxAge(value: number);
    resetMaxAge(): void;
    get maxAgeInput(): number;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
}
export interface R2BucketLifecycleRulesStorageClassTransitions {
    /**
    * Condition for lifecycle transitions to apply after an object reaches an age in seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lifecycle#condition R2BucketLifecycle#condition}
    */
    readonly condition: R2BucketLifecycleRulesStorageClassTransitionsCondition;
    /**
    * Available values: "InfrequentAccess".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lifecycle#storage_class R2BucketLifecycle#storage_class}
    */
    readonly storageClass: string;
}
export declare function r2BucketLifecycleRulesStorageClassTransitionsToTerraform(struct?: R2BucketLifecycleRulesStorageClassTransitions | cdktf.IResolvable): any;
export declare function r2BucketLifecycleRulesStorageClassTransitionsToHclTerraform(struct?: R2BucketLifecycleRulesStorageClassTransitions | cdktf.IResolvable): any;
export declare class R2BucketLifecycleRulesStorageClassTransitionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): R2BucketLifecycleRulesStorageClassTransitions | cdktf.IResolvable | undefined;
    set internalValue(value: R2BucketLifecycleRulesStorageClassTransitions | cdktf.IResolvable | undefined);
    private _condition;
    get condition(): R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference;
    putCondition(value: R2BucketLifecycleRulesStorageClassTransitionsCondition): void;
    get conditionInput(): any;
    private _storageClass?;
    get storageClass(): string;
    set storageClass(value: string);
    get storageClassInput(): string;
}
export declare class R2BucketLifecycleRulesStorageClassTransitionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: R2BucketLifecycleRulesStorageClassTransitions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): R2BucketLifecycleRulesStorageClassTransitionsOutputReference;
}
export interface R2BucketLifecycleRules {
    /**
    * Transition to abort ongoing multipart uploads.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lifecycle#abort_multipart_uploads_transition R2BucketLifecycle#abort_multipart_uploads_transition}
    */
    readonly abortMultipartUploadsTransition?: R2BucketLifecycleRulesAbortMultipartUploadsTransition;
    /**
    * Conditions that apply to all transitions of this rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lifecycle#conditions R2BucketLifecycle#conditions}
    */
    readonly conditions: R2BucketLifecycleRulesConditions;
    /**
    * Transition to delete objects.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lifecycle#delete_objects_transition R2BucketLifecycle#delete_objects_transition}
    */
    readonly deleteObjectsTransition?: R2BucketLifecycleRulesDeleteObjectsTransition;
    /**
    * Whether or not this rule is in effect.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lifecycle#enabled R2BucketLifecycle#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Unique identifier for this rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lifecycle#id R2BucketLifecycle#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * Transitions to change the storage class of objects.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lifecycle#storage_class_transitions R2BucketLifecycle#storage_class_transitions}
    */
    readonly storageClassTransitions?: R2BucketLifecycleRulesStorageClassTransitions[] | cdktf.IResolvable;
}
export declare function r2BucketLifecycleRulesToTerraform(struct?: R2BucketLifecycleRules | cdktf.IResolvable): any;
export declare function r2BucketLifecycleRulesToHclTerraform(struct?: R2BucketLifecycleRules | cdktf.IResolvable): any;
export declare class R2BucketLifecycleRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): R2BucketLifecycleRules | cdktf.IResolvable | undefined;
    set internalValue(value: R2BucketLifecycleRules | cdktf.IResolvable | undefined);
    private _abortMultipartUploadsTransition;
    get abortMultipartUploadsTransition(): R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference;
    putAbortMultipartUploadsTransition(value: R2BucketLifecycleRulesAbortMultipartUploadsTransition): void;
    resetAbortMultipartUploadsTransition(): void;
    get abortMultipartUploadsTransitionInput(): any;
    private _conditions;
    get conditions(): R2BucketLifecycleRulesConditionsOutputReference;
    putConditions(value: R2BucketLifecycleRulesConditions): void;
    get conditionsInput(): any;
    private _deleteObjectsTransition;
    get deleteObjectsTransition(): R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference;
    putDeleteObjectsTransition(value: R2BucketLifecycleRulesDeleteObjectsTransition): void;
    resetDeleteObjectsTransition(): void;
    get deleteObjectsTransitionInput(): any;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    private _storageClassTransitions;
    get storageClassTransitions(): R2BucketLifecycleRulesStorageClassTransitionsList;
    putStorageClassTransitions(value: R2BucketLifecycleRulesStorageClassTransitions[] | cdktf.IResolvable): void;
    resetStorageClassTransitions(): void;
    get storageClassTransitionsInput(): any;
}
export declare class R2BucketLifecycleRulesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: R2BucketLifecycleRules[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): R2BucketLifecycleRulesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lifecycle cloudflare_r2_bucket_lifecycle}
*/
export declare class R2BucketLifecycle extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_r2_bucket_lifecycle";
    /**
    * Generates CDKTF code for importing a R2BucketLifecycle resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the R2BucketLifecycle to import
    * @param importFromId The id of the existing R2BucketLifecycle that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lifecycle#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the R2BucketLifecycle to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lifecycle cloudflare_r2_bucket_lifecycle} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options R2BucketLifecycleConfig
    */
    constructor(scope: Construct, id: string, config: R2BucketLifecycleConfig);
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
    private _rules;
    get rules(): R2BucketLifecycleRulesList;
    putRules(value: R2BucketLifecycleRules[] | cdktf.IResolvable): void;
    resetRules(): void;
    get rulesInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
