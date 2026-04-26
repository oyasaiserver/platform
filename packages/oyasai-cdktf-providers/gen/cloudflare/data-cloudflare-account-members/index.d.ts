import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareAccountMembersConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_members#account_id DataCloudflareAccountMembers#account_id}
    */
    readonly accountId?: string;
    /**
    * Direction to order results.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_members#direction DataCloudflareAccountMembers#direction}
    */
    readonly direction?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_members#max_items DataCloudflareAccountMembers#max_items}
    */
    readonly maxItems?: number;
    /**
    * Field to order results by.
    * Available values: "user.first_name", "user.last_name", "user.email", "status".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_members#order DataCloudflareAccountMembers#order}
    */
    readonly order?: string;
    /**
    * A member's status in the account.
    * Available values: "accepted", "pending", "rejected".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_members#status DataCloudflareAccountMembers#status}
    */
    readonly status?: string;
}
export interface DataCloudflareAccountMembersResultPoliciesPermissionGroupsMeta {
}
export declare function dataCloudflareAccountMembersResultPoliciesPermissionGroupsMetaToTerraform(struct?: DataCloudflareAccountMembersResultPoliciesPermissionGroupsMeta): any;
export declare function dataCloudflareAccountMembersResultPoliciesPermissionGroupsMetaToHclTerraform(struct?: DataCloudflareAccountMembersResultPoliciesPermissionGroupsMeta): any;
export declare class DataCloudflareAccountMembersResultPoliciesPermissionGroupsMetaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountMembersResultPoliciesPermissionGroupsMeta | undefined;
    set internalValue(value: DataCloudflareAccountMembersResultPoliciesPermissionGroupsMeta | undefined);
    get key(): any;
    get value(): any;
}
export interface DataCloudflareAccountMembersResultPoliciesPermissionGroups {
}
export declare function dataCloudflareAccountMembersResultPoliciesPermissionGroupsToTerraform(struct?: DataCloudflareAccountMembersResultPoliciesPermissionGroups): any;
export declare function dataCloudflareAccountMembersResultPoliciesPermissionGroupsToHclTerraform(struct?: DataCloudflareAccountMembersResultPoliciesPermissionGroups): any;
export declare class DataCloudflareAccountMembersResultPoliciesPermissionGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAccountMembersResultPoliciesPermissionGroups | undefined;
    set internalValue(value: DataCloudflareAccountMembersResultPoliciesPermissionGroups | undefined);
    get id(): any;
    private _meta;
    get meta(): DataCloudflareAccountMembersResultPoliciesPermissionGroupsMetaOutputReference;
    get name(): any;
}
export declare class DataCloudflareAccountMembersResultPoliciesPermissionGroupsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAccountMembersResultPoliciesPermissionGroupsOutputReference;
}
export interface DataCloudflareAccountMembersResultPoliciesResourceGroupsMeta {
}
export declare function dataCloudflareAccountMembersResultPoliciesResourceGroupsMetaToTerraform(struct?: DataCloudflareAccountMembersResultPoliciesResourceGroupsMeta): any;
export declare function dataCloudflareAccountMembersResultPoliciesResourceGroupsMetaToHclTerraform(struct?: DataCloudflareAccountMembersResultPoliciesResourceGroupsMeta): any;
export declare class DataCloudflareAccountMembersResultPoliciesResourceGroupsMetaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountMembersResultPoliciesResourceGroupsMeta | undefined;
    set internalValue(value: DataCloudflareAccountMembersResultPoliciesResourceGroupsMeta | undefined);
    get key(): any;
    get value(): any;
}
export interface DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeObjects {
}
export declare function dataCloudflareAccountMembersResultPoliciesResourceGroupsScopeObjectsToTerraform(struct?: DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeObjects): any;
export declare function dataCloudflareAccountMembersResultPoliciesResourceGroupsScopeObjectsToHclTerraform(struct?: DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeObjects): any;
export declare class DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeObjectsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeObjects | undefined;
    set internalValue(value: DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeObjects | undefined);
    get key(): any;
}
export declare class DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeObjectsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeObjectsOutputReference;
}
export interface DataCloudflareAccountMembersResultPoliciesResourceGroupsScope {
}
export declare function dataCloudflareAccountMembersResultPoliciesResourceGroupsScopeToTerraform(struct?: DataCloudflareAccountMembersResultPoliciesResourceGroupsScope): any;
export declare function dataCloudflareAccountMembersResultPoliciesResourceGroupsScopeToHclTerraform(struct?: DataCloudflareAccountMembersResultPoliciesResourceGroupsScope): any;
export declare class DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAccountMembersResultPoliciesResourceGroupsScope | undefined;
    set internalValue(value: DataCloudflareAccountMembersResultPoliciesResourceGroupsScope | undefined);
    get key(): any;
    private _objects;
    get objects(): DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeObjectsList;
}
export declare class DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeOutputReference;
}
export interface DataCloudflareAccountMembersResultPoliciesResourceGroups {
}
export declare function dataCloudflareAccountMembersResultPoliciesResourceGroupsToTerraform(struct?: DataCloudflareAccountMembersResultPoliciesResourceGroups): any;
export declare function dataCloudflareAccountMembersResultPoliciesResourceGroupsToHclTerraform(struct?: DataCloudflareAccountMembersResultPoliciesResourceGroups): any;
export declare class DataCloudflareAccountMembersResultPoliciesResourceGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAccountMembersResultPoliciesResourceGroups | undefined;
    set internalValue(value: DataCloudflareAccountMembersResultPoliciesResourceGroups | undefined);
    get id(): any;
    private _meta;
    get meta(): DataCloudflareAccountMembersResultPoliciesResourceGroupsMetaOutputReference;
    get name(): any;
    private _scope;
    get scope(): DataCloudflareAccountMembersResultPoliciesResourceGroupsScopeList;
}
export declare class DataCloudflareAccountMembersResultPoliciesResourceGroupsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAccountMembersResultPoliciesResourceGroupsOutputReference;
}
export interface DataCloudflareAccountMembersResultPolicies {
}
export declare function dataCloudflareAccountMembersResultPoliciesToTerraform(struct?: DataCloudflareAccountMembersResultPolicies): any;
export declare function dataCloudflareAccountMembersResultPoliciesToHclTerraform(struct?: DataCloudflareAccountMembersResultPolicies): any;
export declare class DataCloudflareAccountMembersResultPoliciesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAccountMembersResultPolicies | undefined;
    set internalValue(value: DataCloudflareAccountMembersResultPolicies | undefined);
    get access(): any;
    get id(): any;
    private _permissionGroups;
    get permissionGroups(): DataCloudflareAccountMembersResultPoliciesPermissionGroupsList;
    private _resourceGroups;
    get resourceGroups(): DataCloudflareAccountMembersResultPoliciesResourceGroupsList;
}
export declare class DataCloudflareAccountMembersResultPoliciesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAccountMembersResultPoliciesOutputReference;
}
export interface DataCloudflareAccountMembersResultRolesPermissionsAnalytics {
}
export declare function dataCloudflareAccountMembersResultRolesPermissionsAnalyticsToTerraform(struct?: DataCloudflareAccountMembersResultRolesPermissionsAnalytics): any;
export declare function dataCloudflareAccountMembersResultRolesPermissionsAnalyticsToHclTerraform(struct?: DataCloudflareAccountMembersResultRolesPermissionsAnalytics): any;
export declare class DataCloudflareAccountMembersResultRolesPermissionsAnalyticsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountMembersResultRolesPermissionsAnalytics | undefined;
    set internalValue(value: DataCloudflareAccountMembersResultRolesPermissionsAnalytics | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountMembersResultRolesPermissionsBilling {
}
export declare function dataCloudflareAccountMembersResultRolesPermissionsBillingToTerraform(struct?: DataCloudflareAccountMembersResultRolesPermissionsBilling): any;
export declare function dataCloudflareAccountMembersResultRolesPermissionsBillingToHclTerraform(struct?: DataCloudflareAccountMembersResultRolesPermissionsBilling): any;
export declare class DataCloudflareAccountMembersResultRolesPermissionsBillingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountMembersResultRolesPermissionsBilling | undefined;
    set internalValue(value: DataCloudflareAccountMembersResultRolesPermissionsBilling | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountMembersResultRolesPermissionsCachePurge {
}
export declare function dataCloudflareAccountMembersResultRolesPermissionsCachePurgeToTerraform(struct?: DataCloudflareAccountMembersResultRolesPermissionsCachePurge): any;
export declare function dataCloudflareAccountMembersResultRolesPermissionsCachePurgeToHclTerraform(struct?: DataCloudflareAccountMembersResultRolesPermissionsCachePurge): any;
export declare class DataCloudflareAccountMembersResultRolesPermissionsCachePurgeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountMembersResultRolesPermissionsCachePurge | undefined;
    set internalValue(value: DataCloudflareAccountMembersResultRolesPermissionsCachePurge | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountMembersResultRolesPermissionsDns {
}
export declare function dataCloudflareAccountMembersResultRolesPermissionsDnsToTerraform(struct?: DataCloudflareAccountMembersResultRolesPermissionsDns): any;
export declare function dataCloudflareAccountMembersResultRolesPermissionsDnsToHclTerraform(struct?: DataCloudflareAccountMembersResultRolesPermissionsDns): any;
export declare class DataCloudflareAccountMembersResultRolesPermissionsDnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountMembersResultRolesPermissionsDns | undefined;
    set internalValue(value: DataCloudflareAccountMembersResultRolesPermissionsDns | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountMembersResultRolesPermissionsDnsRecords {
}
export declare function dataCloudflareAccountMembersResultRolesPermissionsDnsRecordsToTerraform(struct?: DataCloudflareAccountMembersResultRolesPermissionsDnsRecords): any;
export declare function dataCloudflareAccountMembersResultRolesPermissionsDnsRecordsToHclTerraform(struct?: DataCloudflareAccountMembersResultRolesPermissionsDnsRecords): any;
export declare class DataCloudflareAccountMembersResultRolesPermissionsDnsRecordsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountMembersResultRolesPermissionsDnsRecords | undefined;
    set internalValue(value: DataCloudflareAccountMembersResultRolesPermissionsDnsRecords | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountMembersResultRolesPermissionsLb {
}
export declare function dataCloudflareAccountMembersResultRolesPermissionsLbToTerraform(struct?: DataCloudflareAccountMembersResultRolesPermissionsLb): any;
export declare function dataCloudflareAccountMembersResultRolesPermissionsLbToHclTerraform(struct?: DataCloudflareAccountMembersResultRolesPermissionsLb): any;
export declare class DataCloudflareAccountMembersResultRolesPermissionsLbOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountMembersResultRolesPermissionsLb | undefined;
    set internalValue(value: DataCloudflareAccountMembersResultRolesPermissionsLb | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountMembersResultRolesPermissionsLogs {
}
export declare function dataCloudflareAccountMembersResultRolesPermissionsLogsToTerraform(struct?: DataCloudflareAccountMembersResultRolesPermissionsLogs): any;
export declare function dataCloudflareAccountMembersResultRolesPermissionsLogsToHclTerraform(struct?: DataCloudflareAccountMembersResultRolesPermissionsLogs): any;
export declare class DataCloudflareAccountMembersResultRolesPermissionsLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountMembersResultRolesPermissionsLogs | undefined;
    set internalValue(value: DataCloudflareAccountMembersResultRolesPermissionsLogs | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountMembersResultRolesPermissionsOrganization {
}
export declare function dataCloudflareAccountMembersResultRolesPermissionsOrganizationToTerraform(struct?: DataCloudflareAccountMembersResultRolesPermissionsOrganization): any;
export declare function dataCloudflareAccountMembersResultRolesPermissionsOrganizationToHclTerraform(struct?: DataCloudflareAccountMembersResultRolesPermissionsOrganization): any;
export declare class DataCloudflareAccountMembersResultRolesPermissionsOrganizationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountMembersResultRolesPermissionsOrganization | undefined;
    set internalValue(value: DataCloudflareAccountMembersResultRolesPermissionsOrganization | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountMembersResultRolesPermissionsSsl {
}
export declare function dataCloudflareAccountMembersResultRolesPermissionsSslToTerraform(struct?: DataCloudflareAccountMembersResultRolesPermissionsSsl): any;
export declare function dataCloudflareAccountMembersResultRolesPermissionsSslToHclTerraform(struct?: DataCloudflareAccountMembersResultRolesPermissionsSsl): any;
export declare class DataCloudflareAccountMembersResultRolesPermissionsSslOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountMembersResultRolesPermissionsSsl | undefined;
    set internalValue(value: DataCloudflareAccountMembersResultRolesPermissionsSsl | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountMembersResultRolesPermissionsWaf {
}
export declare function dataCloudflareAccountMembersResultRolesPermissionsWafToTerraform(struct?: DataCloudflareAccountMembersResultRolesPermissionsWaf): any;
export declare function dataCloudflareAccountMembersResultRolesPermissionsWafToHclTerraform(struct?: DataCloudflareAccountMembersResultRolesPermissionsWaf): any;
export declare class DataCloudflareAccountMembersResultRolesPermissionsWafOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountMembersResultRolesPermissionsWaf | undefined;
    set internalValue(value: DataCloudflareAccountMembersResultRolesPermissionsWaf | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountMembersResultRolesPermissionsZoneSettings {
}
export declare function dataCloudflareAccountMembersResultRolesPermissionsZoneSettingsToTerraform(struct?: DataCloudflareAccountMembersResultRolesPermissionsZoneSettings): any;
export declare function dataCloudflareAccountMembersResultRolesPermissionsZoneSettingsToHclTerraform(struct?: DataCloudflareAccountMembersResultRolesPermissionsZoneSettings): any;
export declare class DataCloudflareAccountMembersResultRolesPermissionsZoneSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountMembersResultRolesPermissionsZoneSettings | undefined;
    set internalValue(value: DataCloudflareAccountMembersResultRolesPermissionsZoneSettings | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountMembersResultRolesPermissionsZones {
}
export declare function dataCloudflareAccountMembersResultRolesPermissionsZonesToTerraform(struct?: DataCloudflareAccountMembersResultRolesPermissionsZones): any;
export declare function dataCloudflareAccountMembersResultRolesPermissionsZonesToHclTerraform(struct?: DataCloudflareAccountMembersResultRolesPermissionsZones): any;
export declare class DataCloudflareAccountMembersResultRolesPermissionsZonesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountMembersResultRolesPermissionsZones | undefined;
    set internalValue(value: DataCloudflareAccountMembersResultRolesPermissionsZones | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountMembersResultRolesPermissions {
}
export declare function dataCloudflareAccountMembersResultRolesPermissionsToTerraform(struct?: DataCloudflareAccountMembersResultRolesPermissions): any;
export declare function dataCloudflareAccountMembersResultRolesPermissionsToHclTerraform(struct?: DataCloudflareAccountMembersResultRolesPermissions): any;
export declare class DataCloudflareAccountMembersResultRolesPermissionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountMembersResultRolesPermissions | undefined;
    set internalValue(value: DataCloudflareAccountMembersResultRolesPermissions | undefined);
    private _analytics;
    get analytics(): DataCloudflareAccountMembersResultRolesPermissionsAnalyticsOutputReference;
    private _billing;
    get billing(): DataCloudflareAccountMembersResultRolesPermissionsBillingOutputReference;
    private _cachePurge;
    get cachePurge(): DataCloudflareAccountMembersResultRolesPermissionsCachePurgeOutputReference;
    private _dns;
    get dns(): DataCloudflareAccountMembersResultRolesPermissionsDnsOutputReference;
    private _dnsRecords;
    get dnsRecords(): DataCloudflareAccountMembersResultRolesPermissionsDnsRecordsOutputReference;
    private _lb;
    get lb(): DataCloudflareAccountMembersResultRolesPermissionsLbOutputReference;
    private _logs;
    get logs(): DataCloudflareAccountMembersResultRolesPermissionsLogsOutputReference;
    private _organization;
    get organization(): DataCloudflareAccountMembersResultRolesPermissionsOrganizationOutputReference;
    private _ssl;
    get ssl(): DataCloudflareAccountMembersResultRolesPermissionsSslOutputReference;
    private _waf;
    get waf(): DataCloudflareAccountMembersResultRolesPermissionsWafOutputReference;
    private _zoneSettings;
    get zoneSettings(): DataCloudflareAccountMembersResultRolesPermissionsZoneSettingsOutputReference;
    private _zones;
    get zones(): DataCloudflareAccountMembersResultRolesPermissionsZonesOutputReference;
}
export interface DataCloudflareAccountMembersResultRoles {
}
export declare function dataCloudflareAccountMembersResultRolesToTerraform(struct?: DataCloudflareAccountMembersResultRoles): any;
export declare function dataCloudflareAccountMembersResultRolesToHclTerraform(struct?: DataCloudflareAccountMembersResultRoles): any;
export declare class DataCloudflareAccountMembersResultRolesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAccountMembersResultRoles | undefined;
    set internalValue(value: DataCloudflareAccountMembersResultRoles | undefined);
    get description(): any;
    get id(): any;
    get name(): any;
    private _permissions;
    get permissions(): DataCloudflareAccountMembersResultRolesPermissionsOutputReference;
}
export declare class DataCloudflareAccountMembersResultRolesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAccountMembersResultRolesOutputReference;
}
export interface DataCloudflareAccountMembersResultUser {
}
export declare function dataCloudflareAccountMembersResultUserToTerraform(struct?: DataCloudflareAccountMembersResultUser): any;
export declare function dataCloudflareAccountMembersResultUserToHclTerraform(struct?: DataCloudflareAccountMembersResultUser): any;
export declare class DataCloudflareAccountMembersResultUserOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountMembersResultUser | undefined;
    set internalValue(value: DataCloudflareAccountMembersResultUser | undefined);
    get email(): any;
    get firstName(): any;
    get id(): any;
    get lastName(): any;
    get twoFactorAuthenticationEnabled(): any;
}
export interface DataCloudflareAccountMembersResult {
}
export declare function dataCloudflareAccountMembersResultToTerraform(struct?: DataCloudflareAccountMembersResult): any;
export declare function dataCloudflareAccountMembersResultToHclTerraform(struct?: DataCloudflareAccountMembersResult): any;
export declare class DataCloudflareAccountMembersResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAccountMembersResult | undefined;
    set internalValue(value: DataCloudflareAccountMembersResult | undefined);
    get email(): any;
    get id(): any;
    private _policies;
    get policies(): DataCloudflareAccountMembersResultPoliciesList;
    private _roles;
    get roles(): DataCloudflareAccountMembersResultRolesList;
    get status(): any;
    private _user;
    get user(): DataCloudflareAccountMembersResultUserOutputReference;
}
export declare class DataCloudflareAccountMembersResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAccountMembersResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_members cloudflare_account_members}
*/
export declare class DataCloudflareAccountMembers extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_account_members";
    /**
    * Generates CDKTF code for importing a DataCloudflareAccountMembers resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAccountMembers to import
    * @param importFromId The id of the existing DataCloudflareAccountMembers that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_members#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAccountMembers to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_members cloudflare_account_members} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAccountMembersConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareAccountMembersConfig);
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
    private _order?;
    get order(): string;
    set order(value: string);
    resetOrder(): void;
    get orderInput(): string;
    private _result;
    get result(): DataCloudflareAccountMembersResultList;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
