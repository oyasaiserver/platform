import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareAccountTokensConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_tokens#account_id DataCloudflareAccountTokens#account_id}
    */
    readonly accountId?: string;
    /**
    * Direction to order results.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_tokens#direction DataCloudflareAccountTokens#direction}
    */
    readonly direction?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_tokens#max_items DataCloudflareAccountTokens#max_items}
    */
    readonly maxItems?: number;
}
export interface DataCloudflareAccountTokensResultConditionRequestIp {
}
export declare function dataCloudflareAccountTokensResultConditionRequestIpToTerraform(struct?: DataCloudflareAccountTokensResultConditionRequestIp): any;
export declare function dataCloudflareAccountTokensResultConditionRequestIpToHclTerraform(struct?: DataCloudflareAccountTokensResultConditionRequestIp): any;
export declare class DataCloudflareAccountTokensResultConditionRequestIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountTokensResultConditionRequestIp | undefined;
    set internalValue(value: DataCloudflareAccountTokensResultConditionRequestIp | undefined);
    get in(): any;
    get notIn(): any;
}
export interface DataCloudflareAccountTokensResultCondition {
}
export declare function dataCloudflareAccountTokensResultConditionToTerraform(struct?: DataCloudflareAccountTokensResultCondition): any;
export declare function dataCloudflareAccountTokensResultConditionToHclTerraform(struct?: DataCloudflareAccountTokensResultCondition): any;
export declare class DataCloudflareAccountTokensResultConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountTokensResultCondition | undefined;
    set internalValue(value: DataCloudflareAccountTokensResultCondition | undefined);
    private _requestIp;
    get requestIp(): DataCloudflareAccountTokensResultConditionRequestIpOutputReference;
}
export interface DataCloudflareAccountTokensResultPoliciesPermissionGroupsMeta {
}
export declare function dataCloudflareAccountTokensResultPoliciesPermissionGroupsMetaToTerraform(struct?: DataCloudflareAccountTokensResultPoliciesPermissionGroupsMeta): any;
export declare function dataCloudflareAccountTokensResultPoliciesPermissionGroupsMetaToHclTerraform(struct?: DataCloudflareAccountTokensResultPoliciesPermissionGroupsMeta): any;
export declare class DataCloudflareAccountTokensResultPoliciesPermissionGroupsMetaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountTokensResultPoliciesPermissionGroupsMeta | undefined;
    set internalValue(value: DataCloudflareAccountTokensResultPoliciesPermissionGroupsMeta | undefined);
    get key(): any;
    get value(): any;
}
export interface DataCloudflareAccountTokensResultPoliciesPermissionGroups {
}
export declare function dataCloudflareAccountTokensResultPoliciesPermissionGroupsToTerraform(struct?: DataCloudflareAccountTokensResultPoliciesPermissionGroups): any;
export declare function dataCloudflareAccountTokensResultPoliciesPermissionGroupsToHclTerraform(struct?: DataCloudflareAccountTokensResultPoliciesPermissionGroups): any;
export declare class DataCloudflareAccountTokensResultPoliciesPermissionGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAccountTokensResultPoliciesPermissionGroups | undefined;
    set internalValue(value: DataCloudflareAccountTokensResultPoliciesPermissionGroups | undefined);
    get id(): any;
    private _meta;
    get meta(): DataCloudflareAccountTokensResultPoliciesPermissionGroupsMetaOutputReference;
    get name(): any;
}
export declare class DataCloudflareAccountTokensResultPoliciesPermissionGroupsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAccountTokensResultPoliciesPermissionGroupsOutputReference;
}
export interface DataCloudflareAccountTokensResultPolicies {
}
export declare function dataCloudflareAccountTokensResultPoliciesToTerraform(struct?: DataCloudflareAccountTokensResultPolicies): any;
export declare function dataCloudflareAccountTokensResultPoliciesToHclTerraform(struct?: DataCloudflareAccountTokensResultPolicies): any;
export declare class DataCloudflareAccountTokensResultPoliciesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAccountTokensResultPolicies | undefined;
    set internalValue(value: DataCloudflareAccountTokensResultPolicies | undefined);
    get effect(): any;
    get id(): any;
    private _permissionGroups;
    get permissionGroups(): DataCloudflareAccountTokensResultPoliciesPermissionGroupsList;
    private _resources;
    get resources(): any;
}
export declare class DataCloudflareAccountTokensResultPoliciesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAccountTokensResultPoliciesOutputReference;
}
export interface DataCloudflareAccountTokensResult {
}
export declare function dataCloudflareAccountTokensResultToTerraform(struct?: DataCloudflareAccountTokensResult): any;
export declare function dataCloudflareAccountTokensResultToHclTerraform(struct?: DataCloudflareAccountTokensResult): any;
export declare class DataCloudflareAccountTokensResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAccountTokensResult | undefined;
    set internalValue(value: DataCloudflareAccountTokensResult | undefined);
    private _condition;
    get condition(): DataCloudflareAccountTokensResultConditionOutputReference;
    get expiresOn(): any;
    get id(): any;
    get issuedOn(): any;
    get lastUsedOn(): any;
    get modifiedOn(): any;
    get name(): any;
    get notBefore(): any;
    private _policies;
    get policies(): DataCloudflareAccountTokensResultPoliciesList;
    get status(): any;
}
export declare class DataCloudflareAccountTokensResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAccountTokensResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_tokens cloudflare_account_tokens}
*/
export declare class DataCloudflareAccountTokens extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_account_tokens";
    /**
    * Generates CDKTF code for importing a DataCloudflareAccountTokens resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAccountTokens to import
    * @param importFromId The id of the existing DataCloudflareAccountTokens that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_tokens#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAccountTokens to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_tokens cloudflare_account_tokens} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAccountTokensConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareAccountTokensConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _direction?;
    get direction(): string;
    set direction(value: string);
    resetDirection(): void;
    get directionInput(): string;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareAccountTokensResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
