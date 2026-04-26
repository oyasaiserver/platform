import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareAccountTokenConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_token#account_id DataCloudflareAccountToken#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_token#filter DataCloudflareAccountToken#filter}
    */
    readonly filter?: DataCloudflareAccountTokenFilter;
    /**
    * Token identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_token#token_id DataCloudflareAccountToken#token_id}
    */
    readonly tokenId?: string;
}
export interface DataCloudflareAccountTokenConditionRequestIp {
}
export declare function dataCloudflareAccountTokenConditionRequestIpToTerraform(struct?: DataCloudflareAccountTokenConditionRequestIp): any;
export declare function dataCloudflareAccountTokenConditionRequestIpToHclTerraform(struct?: DataCloudflareAccountTokenConditionRequestIp): any;
export declare class DataCloudflareAccountTokenConditionRequestIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountTokenConditionRequestIp | undefined;
    set internalValue(value: DataCloudflareAccountTokenConditionRequestIp | undefined);
    get in(): any;
    get notIn(): any;
}
export interface DataCloudflareAccountTokenCondition {
}
export declare function dataCloudflareAccountTokenConditionToTerraform(struct?: DataCloudflareAccountTokenCondition): any;
export declare function dataCloudflareAccountTokenConditionToHclTerraform(struct?: DataCloudflareAccountTokenCondition): any;
export declare class DataCloudflareAccountTokenConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountTokenCondition | undefined;
    set internalValue(value: DataCloudflareAccountTokenCondition | undefined);
    private _requestIp;
    get requestIp(): DataCloudflareAccountTokenConditionRequestIpOutputReference;
}
export interface DataCloudflareAccountTokenFilter {
    /**
    * Direction to order results.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_token#direction DataCloudflareAccountToken#direction}
    */
    readonly direction?: string;
}
export declare function dataCloudflareAccountTokenFilterToTerraform(struct?: DataCloudflareAccountTokenFilter | cdktf.IResolvable): any;
export declare function dataCloudflareAccountTokenFilterToHclTerraform(struct?: DataCloudflareAccountTokenFilter | cdktf.IResolvable): any;
export declare class DataCloudflareAccountTokenFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountTokenFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareAccountTokenFilter | cdktf.IResolvable | undefined);
    private _direction?;
    get direction(): string;
    set direction(value: string);
    resetDirection(): void;
    get directionInput(): string;
}
export interface DataCloudflareAccountTokenPoliciesPermissionGroupsMeta {
}
export declare function dataCloudflareAccountTokenPoliciesPermissionGroupsMetaToTerraform(struct?: DataCloudflareAccountTokenPoliciesPermissionGroupsMeta): any;
export declare function dataCloudflareAccountTokenPoliciesPermissionGroupsMetaToHclTerraform(struct?: DataCloudflareAccountTokenPoliciesPermissionGroupsMeta): any;
export declare class DataCloudflareAccountTokenPoliciesPermissionGroupsMetaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountTokenPoliciesPermissionGroupsMeta | undefined;
    set internalValue(value: DataCloudflareAccountTokenPoliciesPermissionGroupsMeta | undefined);
    get key(): any;
    get value(): any;
}
export interface DataCloudflareAccountTokenPoliciesPermissionGroups {
}
export declare function dataCloudflareAccountTokenPoliciesPermissionGroupsToTerraform(struct?: DataCloudflareAccountTokenPoliciesPermissionGroups): any;
export declare function dataCloudflareAccountTokenPoliciesPermissionGroupsToHclTerraform(struct?: DataCloudflareAccountTokenPoliciesPermissionGroups): any;
export declare class DataCloudflareAccountTokenPoliciesPermissionGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAccountTokenPoliciesPermissionGroups | undefined;
    set internalValue(value: DataCloudflareAccountTokenPoliciesPermissionGroups | undefined);
    get id(): any;
    private _meta;
    get meta(): DataCloudflareAccountTokenPoliciesPermissionGroupsMetaOutputReference;
    get name(): any;
}
export declare class DataCloudflareAccountTokenPoliciesPermissionGroupsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAccountTokenPoliciesPermissionGroupsOutputReference;
}
export interface DataCloudflareAccountTokenPolicies {
}
export declare function dataCloudflareAccountTokenPoliciesToTerraform(struct?: DataCloudflareAccountTokenPolicies): any;
export declare function dataCloudflareAccountTokenPoliciesToHclTerraform(struct?: DataCloudflareAccountTokenPolicies): any;
export declare class DataCloudflareAccountTokenPoliciesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAccountTokenPolicies | undefined;
    set internalValue(value: DataCloudflareAccountTokenPolicies | undefined);
    get effect(): any;
    get id(): any;
    private _permissionGroups;
    get permissionGroups(): DataCloudflareAccountTokenPoliciesPermissionGroupsList;
    private _resources;
    get resources(): any;
}
export declare class DataCloudflareAccountTokenPoliciesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAccountTokenPoliciesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_token cloudflare_account_token}
*/
export declare class DataCloudflareAccountToken extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_account_token";
    /**
    * Generates CDKTF code for importing a DataCloudflareAccountToken resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAccountToken to import
    * @param importFromId The id of the existing DataCloudflareAccountToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_token#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAccountToken to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_token cloudflare_account_token} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAccountTokenConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareAccountTokenConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _condition;
    get condition(): DataCloudflareAccountTokenConditionOutputReference;
    get expiresOn(): any;
    private _filter;
    get filter(): DataCloudflareAccountTokenFilterOutputReference;
    putFilter(value: DataCloudflareAccountTokenFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get id(): any;
    get issuedOn(): any;
    get lastUsedOn(): any;
    get modifiedOn(): any;
    get name(): any;
    get notBefore(): any;
    private _policies;
    get policies(): DataCloudflareAccountTokenPoliciesList;
    get status(): any;
    private _tokenId?;
    get tokenId(): string;
    set tokenId(value: string);
    resetTokenId(): void;
    get tokenIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
