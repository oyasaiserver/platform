import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareApiTokenConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_token#filter DataCloudflareApiToken#filter}
    */
    readonly filter?: DataCloudflareApiTokenFilter;
    /**
    * Token identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_token#token_id DataCloudflareApiToken#token_id}
    */
    readonly tokenId?: string;
}
export interface DataCloudflareApiTokenConditionRequestIp {
}
export declare function dataCloudflareApiTokenConditionRequestIpToTerraform(struct?: DataCloudflareApiTokenConditionRequestIp): any;
export declare function dataCloudflareApiTokenConditionRequestIpToHclTerraform(struct?: DataCloudflareApiTokenConditionRequestIp): any;
export declare class DataCloudflareApiTokenConditionRequestIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareApiTokenConditionRequestIp | undefined;
    set internalValue(value: DataCloudflareApiTokenConditionRequestIp | undefined);
    get in(): any;
    get notIn(): any;
}
export interface DataCloudflareApiTokenCondition {
}
export declare function dataCloudflareApiTokenConditionToTerraform(struct?: DataCloudflareApiTokenCondition): any;
export declare function dataCloudflareApiTokenConditionToHclTerraform(struct?: DataCloudflareApiTokenCondition): any;
export declare class DataCloudflareApiTokenConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareApiTokenCondition | undefined;
    set internalValue(value: DataCloudflareApiTokenCondition | undefined);
    private _requestIp;
    get requestIp(): DataCloudflareApiTokenConditionRequestIpOutputReference;
}
export interface DataCloudflareApiTokenFilter {
    /**
    * Direction to order results.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_token#direction DataCloudflareApiToken#direction}
    */
    readonly direction?: string;
}
export declare function dataCloudflareApiTokenFilterToTerraform(struct?: DataCloudflareApiTokenFilter | cdktf.IResolvable): any;
export declare function dataCloudflareApiTokenFilterToHclTerraform(struct?: DataCloudflareApiTokenFilter | cdktf.IResolvable): any;
export declare class DataCloudflareApiTokenFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareApiTokenFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareApiTokenFilter | cdktf.IResolvable | undefined);
    private _direction?;
    get direction(): string;
    set direction(value: string);
    resetDirection(): void;
    get directionInput(): string;
}
export interface DataCloudflareApiTokenPoliciesPermissionGroupsMeta {
}
export declare function dataCloudflareApiTokenPoliciesPermissionGroupsMetaToTerraform(struct?: DataCloudflareApiTokenPoliciesPermissionGroupsMeta): any;
export declare function dataCloudflareApiTokenPoliciesPermissionGroupsMetaToHclTerraform(struct?: DataCloudflareApiTokenPoliciesPermissionGroupsMeta): any;
export declare class DataCloudflareApiTokenPoliciesPermissionGroupsMetaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareApiTokenPoliciesPermissionGroupsMeta | undefined;
    set internalValue(value: DataCloudflareApiTokenPoliciesPermissionGroupsMeta | undefined);
    get key(): any;
    get value(): any;
}
export interface DataCloudflareApiTokenPoliciesPermissionGroups {
}
export declare function dataCloudflareApiTokenPoliciesPermissionGroupsToTerraform(struct?: DataCloudflareApiTokenPoliciesPermissionGroups): any;
export declare function dataCloudflareApiTokenPoliciesPermissionGroupsToHclTerraform(struct?: DataCloudflareApiTokenPoliciesPermissionGroups): any;
export declare class DataCloudflareApiTokenPoliciesPermissionGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareApiTokenPoliciesPermissionGroups | undefined;
    set internalValue(value: DataCloudflareApiTokenPoliciesPermissionGroups | undefined);
    get id(): any;
    private _meta;
    get meta(): DataCloudflareApiTokenPoliciesPermissionGroupsMetaOutputReference;
    get name(): any;
}
export declare class DataCloudflareApiTokenPoliciesPermissionGroupsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareApiTokenPoliciesPermissionGroupsOutputReference;
}
export interface DataCloudflareApiTokenPolicies {
}
export declare function dataCloudflareApiTokenPoliciesToTerraform(struct?: DataCloudflareApiTokenPolicies): any;
export declare function dataCloudflareApiTokenPoliciesToHclTerraform(struct?: DataCloudflareApiTokenPolicies): any;
export declare class DataCloudflareApiTokenPoliciesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareApiTokenPolicies | undefined;
    set internalValue(value: DataCloudflareApiTokenPolicies | undefined);
    get effect(): any;
    get id(): any;
    private _permissionGroups;
    get permissionGroups(): DataCloudflareApiTokenPoliciesPermissionGroupsList;
    private _resources;
    get resources(): any;
}
export declare class DataCloudflareApiTokenPoliciesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareApiTokenPoliciesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_token cloudflare_api_token}
*/
export declare class DataCloudflareApiToken extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_api_token";
    /**
    * Generates CDKTF code for importing a DataCloudflareApiToken resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareApiToken to import
    * @param importFromId The id of the existing DataCloudflareApiToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_token#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareApiToken to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_token cloudflare_api_token} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareApiTokenConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareApiTokenConfig);
    private _condition;
    get condition(): DataCloudflareApiTokenConditionOutputReference;
    get expiresOn(): any;
    private _filter;
    get filter(): DataCloudflareApiTokenFilterOutputReference;
    putFilter(value: DataCloudflareApiTokenFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get id(): any;
    get issuedOn(): any;
    get lastUsedOn(): any;
    get modifiedOn(): any;
    get name(): any;
    get notBefore(): any;
    private _policies;
    get policies(): DataCloudflareApiTokenPoliciesList;
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
