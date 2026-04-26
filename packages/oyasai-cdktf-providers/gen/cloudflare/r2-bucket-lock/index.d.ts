import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface R2BucketLockConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lock#account_id R2BucketLock#account_id}
    */
    readonly accountId?: string;
    /**
    * Name of the bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lock#bucket_name R2BucketLock#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Jurisdiction of the bucket
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lock#jurisdiction R2BucketLock#jurisdiction}
    */
    readonly jurisdiction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lock#rules R2BucketLock#rules}
    */
    readonly rules?: R2BucketLockRules[] | cdktf.IResolvable;
}
export interface R2BucketLockRulesCondition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lock#date R2BucketLock#date}
    */
    readonly date?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lock#max_age_seconds R2BucketLock#max_age_seconds}
    */
    readonly maxAgeSeconds?: number;
    /**
    * Available values: "Age", "Date", "Indefinite".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lock#type R2BucketLock#type}
    */
    readonly type: string;
}
export declare function r2BucketLockRulesConditionToTerraform(struct?: R2BucketLockRulesCondition | cdktf.IResolvable): any;
export declare function r2BucketLockRulesConditionToHclTerraform(struct?: R2BucketLockRulesCondition | cdktf.IResolvable): any;
export declare class R2BucketLockRulesConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): R2BucketLockRulesCondition | cdktf.IResolvable | undefined;
    set internalValue(value: R2BucketLockRulesCondition | cdktf.IResolvable | undefined);
    private _date?;
    get date(): string;
    set date(value: string);
    resetDate(): void;
    get dateInput(): string;
    private _maxAgeSeconds?;
    get maxAgeSeconds(): number;
    set maxAgeSeconds(value: number);
    resetMaxAgeSeconds(): void;
    get maxAgeSecondsInput(): number;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
}
export interface R2BucketLockRules {
    /**
    * Condition to apply a lock rule to an object for how long in seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lock#condition R2BucketLock#condition}
    */
    readonly condition: R2BucketLockRulesCondition;
    /**
    * Whether or not this rule is in effect.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lock#enabled R2BucketLock#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Unique identifier for this rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lock#id R2BucketLock#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * Rule will only apply to objects/uploads in the bucket that start with the given prefix, an empty prefix can be provided to scope rule to all objects/uploads.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lock#prefix R2BucketLock#prefix}
    */
    readonly prefix?: string;
}
export declare function r2BucketLockRulesToTerraform(struct?: R2BucketLockRules | cdktf.IResolvable): any;
export declare function r2BucketLockRulesToHclTerraform(struct?: R2BucketLockRules | cdktf.IResolvable): any;
export declare class R2BucketLockRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): R2BucketLockRules | cdktf.IResolvable | undefined;
    set internalValue(value: R2BucketLockRules | cdktf.IResolvable | undefined);
    private _condition;
    get condition(): R2BucketLockRulesConditionOutputReference;
    putCondition(value: R2BucketLockRulesCondition): void;
    get conditionInput(): any;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string;
}
export declare class R2BucketLockRulesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: R2BucketLockRules[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): R2BucketLockRulesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lock cloudflare_r2_bucket_lock}
*/
export declare class R2BucketLock extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_r2_bucket_lock";
    /**
    * Generates CDKTF code for importing a R2BucketLock resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the R2BucketLock to import
    * @param importFromId The id of the existing R2BucketLock that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lock#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the R2BucketLock to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lock cloudflare_r2_bucket_lock} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options R2BucketLockConfig
    */
    constructor(scope: Construct, id: string, config: R2BucketLockConfig);
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
    get rules(): R2BucketLockRulesList;
    putRules(value: R2BucketLockRules[] | cdktf.IResolvable): void;
    resetRules(): void;
    get rulesInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
