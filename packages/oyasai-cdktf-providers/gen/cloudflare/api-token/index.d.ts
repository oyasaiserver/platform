import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiTokenConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_token#condition ApiToken#condition}
    */
    readonly condition?: ApiTokenCondition;
    /**
    * The expiration time on or after which the JWT MUST NOT be accepted for processing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_token#expires_on ApiToken#expires_on}
    */
    readonly expiresOn?: string;
    /**
    * Token name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_token#name ApiToken#name}
    */
    readonly name: string;
    /**
    * The time before which the token MUST NOT be accepted for processing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_token#not_before ApiToken#not_before}
    */
    readonly notBefore?: string;
    /**
    * Set of access policies assigned to the token.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_token#policies ApiToken#policies}
    */
    readonly policies: ApiTokenPolicies[] | cdktf.IResolvable;
    /**
    * Status of the token.
    * Available values: "active", "disabled", "expired".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_token#status ApiToken#status}
    */
    readonly status?: string;
}
export interface ApiTokenConditionRequestIp {
    /**
    * List of IPv4/IPv6 CIDR addresses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_token#in ApiToken#in}
    */
    readonly in?: string[];
    /**
    * List of IPv4/IPv6 CIDR addresses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_token#not_in ApiToken#not_in}
    */
    readonly notIn?: string[];
}
export declare function apiTokenConditionRequestIpToTerraform(struct?: ApiTokenConditionRequestIp | cdktf.IResolvable): any;
export declare function apiTokenConditionRequestIpToHclTerraform(struct?: ApiTokenConditionRequestIp | cdktf.IResolvable): any;
export declare class ApiTokenConditionRequestIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApiTokenConditionRequestIp | cdktf.IResolvable | undefined;
    set internalValue(value: ApiTokenConditionRequestIp | cdktf.IResolvable | undefined);
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
export interface ApiTokenCondition {
    /**
    * Client IP restrictions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_token#request_ip ApiToken#request_ip}
    */
    readonly requestIp?: ApiTokenConditionRequestIp;
}
export declare function apiTokenConditionToTerraform(struct?: ApiTokenCondition | cdktf.IResolvable): any;
export declare function apiTokenConditionToHclTerraform(struct?: ApiTokenCondition | cdktf.IResolvable): any;
export declare class ApiTokenConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApiTokenCondition | cdktf.IResolvable | undefined;
    set internalValue(value: ApiTokenCondition | cdktf.IResolvable | undefined);
    private _requestIp;
    get requestIp(): ApiTokenConditionRequestIpOutputReference;
    putRequestIp(value: ApiTokenConditionRequestIp): void;
    resetRequestIp(): void;
    get requestIpInput(): any;
}
export interface ApiTokenPoliciesPermissionGroups {
    /**
    * Identifier of the permission group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_token#id ApiToken#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function apiTokenPoliciesPermissionGroupsToTerraform(struct?: ApiTokenPoliciesPermissionGroups | cdktf.IResolvable): any;
export declare function apiTokenPoliciesPermissionGroupsToHclTerraform(struct?: ApiTokenPoliciesPermissionGroups | cdktf.IResolvable): any;
export declare class ApiTokenPoliciesPermissionGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ApiTokenPoliciesPermissionGroups | cdktf.IResolvable | undefined;
    set internalValue(value: ApiTokenPoliciesPermissionGroups | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export declare class ApiTokenPoliciesPermissionGroupsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ApiTokenPoliciesPermissionGroups[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ApiTokenPoliciesPermissionGroupsOutputReference;
}
export interface ApiTokenPolicies {
    /**
    * Allow or deny operations against the resources.
    * Available values: "allow", "deny".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_token#effect ApiToken#effect}
    */
    readonly effect: string;
    /**
    * A set of permission groups that are specified to the policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_token#permission_groups ApiToken#permission_groups}
    */
    readonly permissionGroups: ApiTokenPoliciesPermissionGroups[] | cdktf.IResolvable;
    /**
    * A json object representing the resources that are specified to the policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_token#resources ApiToken#resources}
    */
    readonly resources: string;
}
export declare function apiTokenPoliciesToTerraform(struct?: ApiTokenPolicies | cdktf.IResolvable): any;
export declare function apiTokenPoliciesToHclTerraform(struct?: ApiTokenPolicies | cdktf.IResolvable): any;
export declare class ApiTokenPoliciesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ApiTokenPolicies | cdktf.IResolvable | undefined;
    set internalValue(value: ApiTokenPolicies | cdktf.IResolvable | undefined);
    private _effect?;
    get effect(): string;
    set effect(value: string);
    get effectInput(): string;
    private _permissionGroups;
    get permissionGroups(): ApiTokenPoliciesPermissionGroupsList;
    putPermissionGroups(value: ApiTokenPoliciesPermissionGroups[] | cdktf.IResolvable): void;
    get permissionGroupsInput(): any;
    private _resources?;
    get resources(): string;
    set resources(value: string);
    get resourcesInput(): string;
}
export declare class ApiTokenPoliciesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ApiTokenPolicies[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ApiTokenPoliciesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_token cloudflare_api_token}
*/
export declare class ApiToken extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_api_token";
    /**
    * Generates CDKTF code for importing a ApiToken resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiToken to import
    * @param importFromId The id of the existing ApiToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_token#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiToken to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_token cloudflare_api_token} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiTokenConfig
    */
    constructor(scope: Construct, id: string, config: ApiTokenConfig);
    private _condition;
    get condition(): ApiTokenConditionOutputReference;
    putCondition(value: ApiTokenCondition): void;
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
    get policies(): ApiTokenPoliciesList;
    putPolicies(value: ApiTokenPolicies[] | cdktf.IResolvable): void;
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
