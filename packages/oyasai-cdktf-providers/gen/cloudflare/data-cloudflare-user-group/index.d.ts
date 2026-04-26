import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareUserGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_group#account_id DataCloudflareUserGroup#account_id}
    */
    readonly accountId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_group#filter DataCloudflareUserGroup#filter}
    */
    readonly filter?: DataCloudflareUserGroupFilter;
    /**
    * User Group identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_group#user_group_id DataCloudflareUserGroup#user_group_id}
    */
    readonly userGroupId?: string;
}
export interface DataCloudflareUserGroupFilter {
    /**
    * The sort order of returned user groups by name (ascending or descending).
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_group#direction DataCloudflareUserGroup#direction}
    */
    readonly direction?: string;
    /**
    * A string used for searching for user groups containing that substring.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_group#fuzzy_name DataCloudflareUserGroup#fuzzy_name}
    */
    readonly fuzzyName?: string;
    /**
    * ID of the user group to be fetched.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_group#id DataCloudflareUserGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Name of the user group to be fetched.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_group#name DataCloudflareUserGroup#name}
    */
    readonly name?: string;
}
export declare function dataCloudflareUserGroupFilterToTerraform(struct?: DataCloudflareUserGroupFilter | cdktf.IResolvable): any;
export declare function dataCloudflareUserGroupFilterToHclTerraform(struct?: DataCloudflareUserGroupFilter | cdktf.IResolvable): any;
export declare class DataCloudflareUserGroupFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareUserGroupFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareUserGroupFilter | cdktf.IResolvable | undefined);
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
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
}
export interface DataCloudflareUserGroupPoliciesPermissionGroupsMeta {
}
export declare function dataCloudflareUserGroupPoliciesPermissionGroupsMetaToTerraform(struct?: DataCloudflareUserGroupPoliciesPermissionGroupsMeta): any;
export declare function dataCloudflareUserGroupPoliciesPermissionGroupsMetaToHclTerraform(struct?: DataCloudflareUserGroupPoliciesPermissionGroupsMeta): any;
export declare class DataCloudflareUserGroupPoliciesPermissionGroupsMetaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareUserGroupPoliciesPermissionGroupsMeta | undefined;
    set internalValue(value: DataCloudflareUserGroupPoliciesPermissionGroupsMeta | undefined);
    get key(): any;
    get value(): any;
}
export interface DataCloudflareUserGroupPoliciesPermissionGroups {
}
export declare function dataCloudflareUserGroupPoliciesPermissionGroupsToTerraform(struct?: DataCloudflareUserGroupPoliciesPermissionGroups): any;
export declare function dataCloudflareUserGroupPoliciesPermissionGroupsToHclTerraform(struct?: DataCloudflareUserGroupPoliciesPermissionGroups): any;
export declare class DataCloudflareUserGroupPoliciesPermissionGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareUserGroupPoliciesPermissionGroups | undefined;
    set internalValue(value: DataCloudflareUserGroupPoliciesPermissionGroups | undefined);
    get id(): any;
    private _meta;
    get meta(): DataCloudflareUserGroupPoliciesPermissionGroupsMetaOutputReference;
    get name(): any;
}
export declare class DataCloudflareUserGroupPoliciesPermissionGroupsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareUserGroupPoliciesPermissionGroupsOutputReference;
}
export interface DataCloudflareUserGroupPoliciesResourceGroupsMeta {
}
export declare function dataCloudflareUserGroupPoliciesResourceGroupsMetaToTerraform(struct?: DataCloudflareUserGroupPoliciesResourceGroupsMeta): any;
export declare function dataCloudflareUserGroupPoliciesResourceGroupsMetaToHclTerraform(struct?: DataCloudflareUserGroupPoliciesResourceGroupsMeta): any;
export declare class DataCloudflareUserGroupPoliciesResourceGroupsMetaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareUserGroupPoliciesResourceGroupsMeta | undefined;
    set internalValue(value: DataCloudflareUserGroupPoliciesResourceGroupsMeta | undefined);
    get key(): any;
    get value(): any;
}
export interface DataCloudflareUserGroupPoliciesResourceGroupsScopeObjects {
}
export declare function dataCloudflareUserGroupPoliciesResourceGroupsScopeObjectsToTerraform(struct?: DataCloudflareUserGroupPoliciesResourceGroupsScopeObjects): any;
export declare function dataCloudflareUserGroupPoliciesResourceGroupsScopeObjectsToHclTerraform(struct?: DataCloudflareUserGroupPoliciesResourceGroupsScopeObjects): any;
export declare class DataCloudflareUserGroupPoliciesResourceGroupsScopeObjectsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareUserGroupPoliciesResourceGroupsScopeObjects | undefined;
    set internalValue(value: DataCloudflareUserGroupPoliciesResourceGroupsScopeObjects | undefined);
    get key(): any;
}
export declare class DataCloudflareUserGroupPoliciesResourceGroupsScopeObjectsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareUserGroupPoliciesResourceGroupsScopeObjectsOutputReference;
}
export interface DataCloudflareUserGroupPoliciesResourceGroupsScope {
}
export declare function dataCloudflareUserGroupPoliciesResourceGroupsScopeToTerraform(struct?: DataCloudflareUserGroupPoliciesResourceGroupsScope): any;
export declare function dataCloudflareUserGroupPoliciesResourceGroupsScopeToHclTerraform(struct?: DataCloudflareUserGroupPoliciesResourceGroupsScope): any;
export declare class DataCloudflareUserGroupPoliciesResourceGroupsScopeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareUserGroupPoliciesResourceGroupsScope | undefined;
    set internalValue(value: DataCloudflareUserGroupPoliciesResourceGroupsScope | undefined);
    get key(): any;
    private _objects;
    get objects(): DataCloudflareUserGroupPoliciesResourceGroupsScopeObjectsList;
}
export declare class DataCloudflareUserGroupPoliciesResourceGroupsScopeList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareUserGroupPoliciesResourceGroupsScopeOutputReference;
}
export interface DataCloudflareUserGroupPoliciesResourceGroups {
}
export declare function dataCloudflareUserGroupPoliciesResourceGroupsToTerraform(struct?: DataCloudflareUserGroupPoliciesResourceGroups): any;
export declare function dataCloudflareUserGroupPoliciesResourceGroupsToHclTerraform(struct?: DataCloudflareUserGroupPoliciesResourceGroups): any;
export declare class DataCloudflareUserGroupPoliciesResourceGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareUserGroupPoliciesResourceGroups | undefined;
    set internalValue(value: DataCloudflareUserGroupPoliciesResourceGroups | undefined);
    get id(): any;
    private _meta;
    get meta(): DataCloudflareUserGroupPoliciesResourceGroupsMetaOutputReference;
    get name(): any;
    private _scope;
    get scope(): DataCloudflareUserGroupPoliciesResourceGroupsScopeList;
}
export declare class DataCloudflareUserGroupPoliciesResourceGroupsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareUserGroupPoliciesResourceGroupsOutputReference;
}
export interface DataCloudflareUserGroupPolicies {
}
export declare function dataCloudflareUserGroupPoliciesToTerraform(struct?: DataCloudflareUserGroupPolicies): any;
export declare function dataCloudflareUserGroupPoliciesToHclTerraform(struct?: DataCloudflareUserGroupPolicies): any;
export declare class DataCloudflareUserGroupPoliciesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareUserGroupPolicies | undefined;
    set internalValue(value: DataCloudflareUserGroupPolicies | undefined);
    get access(): any;
    get id(): any;
    private _permissionGroups;
    get permissionGroups(): DataCloudflareUserGroupPoliciesPermissionGroupsList;
    private _resourceGroups;
    get resourceGroups(): DataCloudflareUserGroupPoliciesResourceGroupsList;
}
export declare class DataCloudflareUserGroupPoliciesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareUserGroupPoliciesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_group cloudflare_user_group}
*/
export declare class DataCloudflareUserGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_user_group";
    /**
    * Generates CDKTF code for importing a DataCloudflareUserGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareUserGroup to import
    * @param importFromId The id of the existing DataCloudflareUserGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareUserGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_group cloudflare_user_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareUserGroupConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareUserGroupConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string;
    get createdOn(): any;
    private _filter;
    get filter(): DataCloudflareUserGroupFilterOutputReference;
    putFilter(value: DataCloudflareUserGroupFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get id(): any;
    get modifiedOn(): any;
    get name(): any;
    private _policies;
    get policies(): DataCloudflareUserGroupPoliciesList;
    private _userGroupId?;
    get userGroupId(): string;
    set userGroupId(value: string);
    resetUserGroupId(): void;
    get userGroupIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
