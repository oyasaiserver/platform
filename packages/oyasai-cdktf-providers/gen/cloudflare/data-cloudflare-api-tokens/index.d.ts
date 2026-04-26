import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareApiTokensConfig extends cdktf.TerraformMetaArguments {
    /**
    * Direction to order results.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_tokens#direction DataCloudflareApiTokens#direction}
    */
    readonly direction?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_tokens#max_items DataCloudflareApiTokens#max_items}
    */
    readonly maxItems?: number;
}
export interface DataCloudflareApiTokensResultConditionRequestIp {
}
export declare function dataCloudflareApiTokensResultConditionRequestIpToTerraform(struct?: DataCloudflareApiTokensResultConditionRequestIp): any;
export declare function dataCloudflareApiTokensResultConditionRequestIpToHclTerraform(struct?: DataCloudflareApiTokensResultConditionRequestIp): any;
export declare class DataCloudflareApiTokensResultConditionRequestIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareApiTokensResultConditionRequestIp | undefined;
    set internalValue(value: DataCloudflareApiTokensResultConditionRequestIp | undefined);
    get in(): any;
    get notIn(): any;
}
export interface DataCloudflareApiTokensResultCondition {
}
export declare function dataCloudflareApiTokensResultConditionToTerraform(struct?: DataCloudflareApiTokensResultCondition): any;
export declare function dataCloudflareApiTokensResultConditionToHclTerraform(struct?: DataCloudflareApiTokensResultCondition): any;
export declare class DataCloudflareApiTokensResultConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareApiTokensResultCondition | undefined;
    set internalValue(value: DataCloudflareApiTokensResultCondition | undefined);
    private _requestIp;
    get requestIp(): DataCloudflareApiTokensResultConditionRequestIpOutputReference;
}
export interface DataCloudflareApiTokensResultPoliciesPermissionGroupsMeta {
}
export declare function dataCloudflareApiTokensResultPoliciesPermissionGroupsMetaToTerraform(struct?: DataCloudflareApiTokensResultPoliciesPermissionGroupsMeta): any;
export declare function dataCloudflareApiTokensResultPoliciesPermissionGroupsMetaToHclTerraform(struct?: DataCloudflareApiTokensResultPoliciesPermissionGroupsMeta): any;
export declare class DataCloudflareApiTokensResultPoliciesPermissionGroupsMetaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareApiTokensResultPoliciesPermissionGroupsMeta | undefined;
    set internalValue(value: DataCloudflareApiTokensResultPoliciesPermissionGroupsMeta | undefined);
    get key(): any;
    get value(): any;
}
export interface DataCloudflareApiTokensResultPoliciesPermissionGroups {
}
export declare function dataCloudflareApiTokensResultPoliciesPermissionGroupsToTerraform(struct?: DataCloudflareApiTokensResultPoliciesPermissionGroups): any;
export declare function dataCloudflareApiTokensResultPoliciesPermissionGroupsToHclTerraform(struct?: DataCloudflareApiTokensResultPoliciesPermissionGroups): any;
export declare class DataCloudflareApiTokensResultPoliciesPermissionGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareApiTokensResultPoliciesPermissionGroups | undefined;
    set internalValue(value: DataCloudflareApiTokensResultPoliciesPermissionGroups | undefined);
    get id(): any;
    private _meta;
    get meta(): DataCloudflareApiTokensResultPoliciesPermissionGroupsMetaOutputReference;
    get name(): any;
}
export declare class DataCloudflareApiTokensResultPoliciesPermissionGroupsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareApiTokensResultPoliciesPermissionGroupsOutputReference;
}
export interface DataCloudflareApiTokensResultPolicies {
}
export declare function dataCloudflareApiTokensResultPoliciesToTerraform(struct?: DataCloudflareApiTokensResultPolicies): any;
export declare function dataCloudflareApiTokensResultPoliciesToHclTerraform(struct?: DataCloudflareApiTokensResultPolicies): any;
export declare class DataCloudflareApiTokensResultPoliciesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareApiTokensResultPolicies | undefined;
    set internalValue(value: DataCloudflareApiTokensResultPolicies | undefined);
    get effect(): any;
    get id(): any;
    private _permissionGroups;
    get permissionGroups(): DataCloudflareApiTokensResultPoliciesPermissionGroupsList;
    private _resources;
    get resources(): any;
}
export declare class DataCloudflareApiTokensResultPoliciesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareApiTokensResultPoliciesOutputReference;
}
export interface DataCloudflareApiTokensResult {
}
export declare function dataCloudflareApiTokensResultToTerraform(struct?: DataCloudflareApiTokensResult): any;
export declare function dataCloudflareApiTokensResultToHclTerraform(struct?: DataCloudflareApiTokensResult): any;
export declare class DataCloudflareApiTokensResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareApiTokensResult | undefined;
    set internalValue(value: DataCloudflareApiTokensResult | undefined);
    private _condition;
    get condition(): DataCloudflareApiTokensResultConditionOutputReference;
    get expiresOn(): any;
    get id(): any;
    get issuedOn(): any;
    get lastUsedOn(): any;
    get modifiedOn(): any;
    get name(): any;
    get notBefore(): any;
    private _policies;
    get policies(): DataCloudflareApiTokensResultPoliciesList;
    get status(): any;
}
export declare class DataCloudflareApiTokensResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareApiTokensResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_tokens cloudflare_api_tokens}
*/
export declare class DataCloudflareApiTokens extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_api_tokens";
    /**
    * Generates CDKTF code for importing a DataCloudflareApiTokens resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareApiTokens to import
    * @param importFromId The id of the existing DataCloudflareApiTokens that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_tokens#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareApiTokens to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_tokens cloudflare_api_tokens} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareApiTokensConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareApiTokensConfig);
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
    get result(): DataCloudflareApiTokensResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
