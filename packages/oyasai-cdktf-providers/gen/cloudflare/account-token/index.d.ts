import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AccountTokenConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_token#account_id AccountToken#account_id}
    */
    readonly accountId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_token#condition AccountToken#condition}
    */
    readonly condition?: AccountTokenCondition;
    /**
    * The expiration time on or after which the JWT MUST NOT be accepted for processing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_token#expires_on AccountToken#expires_on}
    */
    readonly expiresOn?: string;
    /**
    * Token name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_token#name AccountToken#name}
    */
    readonly name: string;
    /**
    * The time before which the token MUST NOT be accepted for processing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_token#not_before AccountToken#not_before}
    */
    readonly notBefore?: string;
    /**
    * Set of access policies assigned to the token.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_token#policies AccountToken#policies}
    */
    readonly policies: AccountTokenPolicies[] | cdktf.IResolvable;
    /**
    * Status of the token.
    * Available values: "active", "disabled", "expired".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_token#status AccountToken#status}
    */
    readonly status?: string;
}
export interface AccountTokenConditionRequestIp {
    /**
    * List of IPv4/IPv6 CIDR addresses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_token#in AccountToken#in}
    */
    readonly in?: string[];
    /**
    * List of IPv4/IPv6 CIDR addresses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_token#not_in AccountToken#not_in}
    */
    readonly notIn?: string[];
}
export declare function accountTokenConditionRequestIpToTerraform(struct?: AccountTokenConditionRequestIp | cdktf.IResolvable): any;
export declare function accountTokenConditionRequestIpToHclTerraform(struct?: AccountTokenConditionRequestIp | cdktf.IResolvable): any;
export declare class AccountTokenConditionRequestIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AccountTokenConditionRequestIp | cdktf.IResolvable | undefined;
    set internalValue(value: AccountTokenConditionRequestIp | cdktf.IResolvable | undefined);
    private _in?;
    get in(): string[];
    set in(value: string[]);
    resetIn(): void;
    get inInput(): string[];
    private _notIn?;
    get notIn(): string[];
    set notIn(value: string[]);
    resetNotIn(): void;
    get notInInput(): string[];
}
export interface AccountTokenCondition {
    /**
    * Client IP restrictions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_token#request_ip AccountToken#request_ip}
    */
    readonly requestIp?: AccountTokenConditionRequestIp;
}
export declare function accountTokenConditionToTerraform(struct?: AccountTokenCondition | cdktf.IResolvable): any;
export declare function accountTokenConditionToHclTerraform(struct?: AccountTokenCondition | cdktf.IResolvable): any;
export declare class AccountTokenConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AccountTokenCondition | cdktf.IResolvable | undefined;
    set internalValue(value: AccountTokenCondition | cdktf.IResolvable | undefined);
    private _requestIp;
    get requestIp(): AccountTokenConditionRequestIpOutputReference;
    putRequestIp(value: AccountTokenConditionRequestIp): void;
    resetRequestIp(): void;
    get requestIpInput(): any;
}
export interface AccountTokenPoliciesPermissionGroups {
    /**
    * Identifier of the permission group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_token#id AccountToken#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function accountTokenPoliciesPermissionGroupsToTerraform(struct?: AccountTokenPoliciesPermissionGroups | cdktf.IResolvable): any;
export declare function accountTokenPoliciesPermissionGroupsToHclTerraform(struct?: AccountTokenPoliciesPermissionGroups | cdktf.IResolvable): any;
export declare class AccountTokenPoliciesPermissionGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AccountTokenPoliciesPermissionGroups | cdktf.IResolvable | undefined;
    set internalValue(value: AccountTokenPoliciesPermissionGroups | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export declare class AccountTokenPoliciesPermissionGroupsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AccountTokenPoliciesPermissionGroups[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AccountTokenPoliciesPermissionGroupsOutputReference;
}
export interface AccountTokenPolicies {
    /**
    * Allow or deny operations against the resources.
    * Available values: "allow", "deny".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_token#effect AccountToken#effect}
    */
    readonly effect: string;
    /**
    * A set of permission groups that are specified to the policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_token#permission_groups AccountToken#permission_groups}
    */
    readonly permissionGroups: AccountTokenPoliciesPermissionGroups[] | cdktf.IResolvable;
    /**
    * A json object representing the resources that are specified to the policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_token#resources AccountToken#resources}
    */
    readonly resources: string;
}
export declare function accountTokenPoliciesToTerraform(struct?: AccountTokenPolicies | cdktf.IResolvable): any;
export declare function accountTokenPoliciesToHclTerraform(struct?: AccountTokenPolicies | cdktf.IResolvable): any;
export declare class AccountTokenPoliciesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AccountTokenPolicies | cdktf.IResolvable | undefined;
    set internalValue(value: AccountTokenPolicies | cdktf.IResolvable | undefined);
    private _effect?;
    get effect(): string;
    set effect(value: string);
    get effectInput(): string;
    private _permissionGroups;
    get permissionGroups(): AccountTokenPoliciesPermissionGroupsList;
    putPermissionGroups(value: AccountTokenPoliciesPermissionGroups[] | cdktf.IResolvable): void;
    get permissionGroupsInput(): any;
    private _resources?;
    get resources(): string;
    set resources(value: string);
    get resourcesInput(): string;
}
export declare class AccountTokenPoliciesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AccountTokenPolicies[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AccountTokenPoliciesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_token cloudflare_account_token}
*/
export declare class AccountToken extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_account_token";
    /**
    * Generates CDKTF code for importing a AccountToken resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AccountToken to import
    * @param importFromId The id of the existing AccountToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_token#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AccountToken to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_token cloudflare_account_token} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AccountTokenConfig
    */
    constructor(scope: Construct, id: string, config: AccountTokenConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string;
    private _condition;
    get condition(): AccountTokenConditionOutputReference;
    putCondition(value: AccountTokenCondition): void;
    resetCondition(): void;
    get conditionInput(): any;
    private _expiresOn?;
    get expiresOn(): string;
    set expiresOn(value: string);
    resetExpiresOn(): void;
    get expiresOnInput(): string;
    get id(): any;
    get issuedOn(): any;
    get lastUsedOn(): any;
    get modifiedOn(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _notBefore?;
    get notBefore(): string;
    set notBefore(value: string);
    resetNotBefore(): void;
    get notBeforeInput(): string;
    private _policies;
    get policies(): AccountTokenPoliciesList;
    putPolicies(value: AccountTokenPolicies[] | cdktf.IResolvable): void;
    get policiesInput(): any;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string;
    get value(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
