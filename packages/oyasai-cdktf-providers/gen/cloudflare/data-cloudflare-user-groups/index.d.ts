import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareUserGroupsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_groups#account_id DataCloudflareUserGroups#account_id}
    */
    readonly accountId: string;
    /**
    * The sort order of returned user groups by name (ascending or descending).
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_groups#direction DataCloudflareUserGroups#direction}
    */
    readonly direction?: string;
    /**
    * A string used for searching for user groups containing that substring.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_groups#fuzzy_name DataCloudflareUserGroups#fuzzy_name}
    */
    readonly fuzzyName?: string;
    /**
    * ID of the user group to be fetched.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_groups#id DataCloudflareUserGroups#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_groups#max_items DataCloudflareUserGroups#max_items}
    */
    readonly maxItems?: number;
    /**
    * Name of the user group to be fetched.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_groups#name DataCloudflareUserGroups#name}
    */
    readonly name?: string;
}
export interface DataCloudflareUserGroupsResultPoliciesPermissionGroupsMeta {
}
export declare function dataCloudflareUserGroupsResultPoliciesPermissionGroupsMetaToTerraform(struct?: DataCloudflareUserGroupsResultPoliciesPermissionGroupsMeta): any;
export declare function dataCloudflareUserGroupsResultPoliciesPermissionGroupsMetaToHclTerraform(struct?: DataCloudflareUserGroupsResultPoliciesPermissionGroupsMeta): any;
export declare class DataCloudflareUserGroupsResultPoliciesPermissionGroupsMetaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareUserGroupsResultPoliciesPermissionGroupsMeta | undefined;
    set internalValue(value: DataCloudflareUserGroupsResultPoliciesPermissionGroupsMeta | undefined);
    get key(): any;
    get value(): any;
}
export interface DataCloudflareUserGroupsResultPoliciesPermissionGroups {
}
export declare function dataCloudflareUserGroupsResultPoliciesPermissionGroupsToTerraform(struct?: DataCloudflareUserGroupsResultPoliciesPermissionGroups): any;
export declare function dataCloudflareUserGroupsResultPoliciesPermissionGroupsToHclTerraform(struct?: DataCloudflareUserGroupsResultPoliciesPermissionGroups): any;
export declare class DataCloudflareUserGroupsResultPoliciesPermissionGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareUserGroupsResultPoliciesPermissionGroups | undefined;
    set internalValue(value: DataCloudflareUserGroupsResultPoliciesPermissionGroups | undefined);
    get id(): any;
    private _meta;
    get meta(): DataCloudflareUserGroupsResultPoliciesPermissionGroupsMetaOutputReference;
    get name(): any;
}
export declare class DataCloudflareUserGroupsResultPoliciesPermissionGroupsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareUserGroupsResultPoliciesPermissionGroupsOutputReference;
}
export interface DataCloudflareUserGroupsResultPoliciesResourceGroupsMeta {
}
export declare function dataCloudflareUserGroupsResultPoliciesResourceGroupsMetaToTerraform(struct?: DataCloudflareUserGroupsResultPoliciesResourceGroupsMeta): any;
export declare function dataCloudflareUserGroupsResultPoliciesResourceGroupsMetaToHclTerraform(struct?: DataCloudflareUserGroupsResultPoliciesResourceGroupsMeta): any;
export declare class DataCloudflareUserGroupsResultPoliciesResourceGroupsMetaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareUserGroupsResultPoliciesResourceGroupsMeta | undefined;
    set internalValue(value: DataCloudflareUserGroupsResultPoliciesResourceGroupsMeta | undefined);
    get key(): any;
    get value(): any;
}
export interface DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeObjects {
}
export declare function dataCloudflareUserGroupsResultPoliciesResourceGroupsScopeObjectsToTerraform(struct?: DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeObjects): any;
export declare function dataCloudflareUserGroupsResultPoliciesResourceGroupsScopeObjectsToHclTerraform(struct?: DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeObjects): any;
export declare class DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeObjectsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeObjects | undefined;
    set internalValue(value: DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeObjects | undefined);
    get key(): any;
}
export declare class DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeObjectsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeObjectsOutputReference;
}
export interface DataCloudflareUserGroupsResultPoliciesResourceGroupsScope {
}
export declare function dataCloudflareUserGroupsResultPoliciesResourceGroupsScopeToTerraform(struct?: DataCloudflareUserGroupsResultPoliciesResourceGroupsScope): any;
export declare function dataCloudflareUserGroupsResultPoliciesResourceGroupsScopeToHclTerraform(struct?: DataCloudflareUserGroupsResultPoliciesResourceGroupsScope): any;
export declare class DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareUserGroupsResultPoliciesResourceGroupsScope | undefined;
    set internalValue(value: DataCloudflareUserGroupsResultPoliciesResourceGroupsScope | undefined);
    get key(): any;
    private _objects;
    get objects(): DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeObjectsList;
}
export declare class DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeOutputReference;
}
export interface DataCloudflareUserGroupsResultPoliciesResourceGroups {
}
export declare function dataCloudflareUserGroupsResultPoliciesResourceGroupsToTerraform(struct?: DataCloudflareUserGroupsResultPoliciesResourceGroups): any;
export declare function dataCloudflareUserGroupsResultPoliciesResourceGroupsToHclTerraform(struct?: DataCloudflareUserGroupsResultPoliciesResourceGroups): any;
export declare class DataCloudflareUserGroupsResultPoliciesResourceGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareUserGroupsResultPoliciesResourceGroups | undefined;
    set internalValue(value: DataCloudflareUserGroupsResultPoliciesResourceGroups | undefined);
    get id(): any;
    private _meta;
    get meta(): DataCloudflareUserGroupsResultPoliciesResourceGroupsMetaOutputReference;
    get name(): any;
    private _scope;
    get scope(): DataCloudflareUserGroupsResultPoliciesResourceGroupsScopeList;
}
export declare class DataCloudflareUserGroupsResultPoliciesResourceGroupsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareUserGroupsResultPoliciesResourceGroupsOutputReference;
}
export interface DataCloudflareUserGroupsResultPolicies {
}
export declare function dataCloudflareUserGroupsResultPoliciesToTerraform(struct?: DataCloudflareUserGroupsResultPolicies): any;
export declare function dataCloudflareUserGroupsResultPoliciesToHclTerraform(struct?: DataCloudflareUserGroupsResultPolicies): any;
export declare class DataCloudflareUserGroupsResultPoliciesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareUserGroupsResultPolicies | undefined;
    set internalValue(value: DataCloudflareUserGroupsResultPolicies | undefined);
    get access(): any;
    get id(): any;
    private _permissionGroups;
    get permissionGroups(): DataCloudflareUserGroupsResultPoliciesPermissionGroupsList;
    private _resourceGroups;
    get resourceGroups(): DataCloudflareUserGroupsResultPoliciesResourceGroupsList;
}
export declare class DataCloudflareUserGroupsResultPoliciesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareUserGroupsResultPoliciesOutputReference;
}
export interface DataCloudflareUserGroupsResult {
}
export declare function dataCloudflareUserGroupsResultToTerraform(struct?: DataCloudflareUserGroupsResult): any;
export declare function dataCloudflareUserGroupsResultToHclTerraform(struct?: DataCloudflareUserGroupsResult): any;
export declare class DataCloudflareUserGroupsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareUserGroupsResult | undefined;
    set internalValue(value: DataCloudflareUserGroupsResult | undefined);
    get createdOn(): any;
    get id(): any;
    get modifiedOn(): any;
    get name(): any;
    private _policies;
    get policies(): DataCloudflareUserGroupsResultPoliciesList;
}
export declare class DataCloudflareUserGroupsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareUserGroupsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_groups cloudflare_user_groups}
*/
export declare class DataCloudflareUserGroups extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_user_groups";
    /**
    * Generates CDKTF code for importing a DataCloudflareUserGroups resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareUserGroups to import
    * @param importFromId The id of the existing DataCloudflareUserGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_groups#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareUserGroups to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_groups cloudflare_user_groups} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareUserGroupsConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareUserGroupsConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string;
    private _direction?;
    get direction(): string;
    set direction(value: string);
    resetDirection(): void;
    get directionInput(): string;
    private _fuzzyName?;
    get fuzzyName(): string;
    set fuzzyName(value: string);
    resetFuzzyName(): void;
    get fuzzyNameInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _result;
    get result(): DataCloudflareUserGroupsResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
