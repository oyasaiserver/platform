import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareAccountMemberConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_member#account_id DataCloudflareAccountMember#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_member#filter DataCloudflareAccountMember#filter}
    */
    readonly filter?: DataCloudflareAccountMemberFilter;
    /**
    * Membership identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_member#member_id DataCloudflareAccountMember#member_id}
    */
    readonly memberId?: string;
}
export interface DataCloudflareAccountMemberFilter {
    /**
    * Direction to order results.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_member#direction DataCloudflareAccountMember#direction}
    */
    readonly direction?: string;
    /**
    * Field to order results by.
    * Available values: "user.first_name", "user.last_name", "user.email", "status".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_member#order DataCloudflareAccountMember#order}
    */
    readonly order?: string;
    /**
    * A member's status in the account.
    * Available values: "accepted", "pending", "rejected".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_member#status DataCloudflareAccountMember#status}
    */
    readonly status?: string;
}
export declare function dataCloudflareAccountMemberFilterToTerraform(struct?: DataCloudflareAccountMemberFilter | cdktf.IResolvable): any;
export declare function dataCloudflareAccountMemberFilterToHclTerraform(struct?: DataCloudflareAccountMemberFilter | cdktf.IResolvable): any;
export declare class DataCloudflareAccountMemberFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountMemberFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareAccountMemberFilter | cdktf.IResolvable | undefined);
    private _direction?;
    get direction(): string;
    set direction(value: string);
    resetDirection(): void;
    get directionInput(): string;
    private _order?;
    get order(): string;
    set order(value: string);
    resetOrder(): void;
    get orderInput(): string;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string;
}
export interface DataCloudflareAccountMemberPoliciesPermissionGroupsMeta {
}
export declare function dataCloudflareAccountMemberPoliciesPermissionGroupsMetaToTerraform(struct?: DataCloudflareAccountMemberPoliciesPermissionGroupsMeta): any;
export declare function dataCloudflareAccountMemberPoliciesPermissionGroupsMetaToHclTerraform(struct?: DataCloudflareAccountMemberPoliciesPermissionGroupsMeta): any;
export declare class DataCloudflareAccountMemberPoliciesPermissionGroupsMetaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountMemberPoliciesPermissionGroupsMeta | undefined;
    set internalValue(value: DataCloudflareAccountMemberPoliciesPermissionGroupsMeta | undefined);
    get key(): any;
    get value(): any;
}
export interface DataCloudflareAccountMemberPoliciesPermissionGroups {
}
export declare function dataCloudflareAccountMemberPoliciesPermissionGroupsToTerraform(struct?: DataCloudflareAccountMemberPoliciesPermissionGroups): any;
export declare function dataCloudflareAccountMemberPoliciesPermissionGroupsToHclTerraform(struct?: DataCloudflareAccountMemberPoliciesPermissionGroups): any;
export declare class DataCloudflareAccountMemberPoliciesPermissionGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAccountMemberPoliciesPermissionGroups | undefined;
    set internalValue(value: DataCloudflareAccountMemberPoliciesPermissionGroups | undefined);
    get id(): any;
    private _meta;
    get meta(): DataCloudflareAccountMemberPoliciesPermissionGroupsMetaOutputReference;
    get name(): any;
}
export declare class DataCloudflareAccountMemberPoliciesPermissionGroupsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAccountMemberPoliciesPermissionGroupsOutputReference;
}
export interface DataCloudflareAccountMemberPoliciesResourceGroupsMeta {
}
export declare function dataCloudflareAccountMemberPoliciesResourceGroupsMetaToTerraform(struct?: DataCloudflareAccountMemberPoliciesResourceGroupsMeta): any;
export declare function dataCloudflareAccountMemberPoliciesResourceGroupsMetaToHclTerraform(struct?: DataCloudflareAccountMemberPoliciesResourceGroupsMeta): any;
export declare class DataCloudflareAccountMemberPoliciesResourceGroupsMetaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountMemberPoliciesResourceGroupsMeta | undefined;
    set internalValue(value: DataCloudflareAccountMemberPoliciesResourceGroupsMeta | undefined);
    get key(): any;
    get value(): any;
}
export interface DataCloudflareAccountMemberPoliciesResourceGroupsScopeObjects {
}
export declare function dataCloudflareAccountMemberPoliciesResourceGroupsScopeObjectsToTerraform(struct?: DataCloudflareAccountMemberPoliciesResourceGroupsScopeObjects): any;
export declare function dataCloudflareAccountMemberPoliciesResourceGroupsScopeObjectsToHclTerraform(struct?: DataCloudflareAccountMemberPoliciesResourceGroupsScopeObjects): any;
export declare class DataCloudflareAccountMemberPoliciesResourceGroupsScopeObjectsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAccountMemberPoliciesResourceGroupsScopeObjects | undefined;
    set internalValue(value: DataCloudflareAccountMemberPoliciesResourceGroupsScopeObjects | undefined);
    get key(): any;
}
export declare class DataCloudflareAccountMemberPoliciesResourceGroupsScopeObjectsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAccountMemberPoliciesResourceGroupsScopeObjectsOutputReference;
}
export interface DataCloudflareAccountMemberPoliciesResourceGroupsScope {
}
export declare function dataCloudflareAccountMemberPoliciesResourceGroupsScopeToTerraform(struct?: DataCloudflareAccountMemberPoliciesResourceGroupsScope): any;
export declare function dataCloudflareAccountMemberPoliciesResourceGroupsScopeToHclTerraform(struct?: DataCloudflareAccountMemberPoliciesResourceGroupsScope): any;
export declare class DataCloudflareAccountMemberPoliciesResourceGroupsScopeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAccountMemberPoliciesResourceGroupsScope | undefined;
    set internalValue(value: DataCloudflareAccountMemberPoliciesResourceGroupsScope | undefined);
    get key(): any;
    private _objects;
    get objects(): DataCloudflareAccountMemberPoliciesResourceGroupsScopeObjectsList;
}
export declare class DataCloudflareAccountMemberPoliciesResourceGroupsScopeList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAccountMemberPoliciesResourceGroupsScopeOutputReference;
}
export interface DataCloudflareAccountMemberPoliciesResourceGroups {
}
export declare function dataCloudflareAccountMemberPoliciesResourceGroupsToTerraform(struct?: DataCloudflareAccountMemberPoliciesResourceGroups): any;
export declare function dataCloudflareAccountMemberPoliciesResourceGroupsToHclTerraform(struct?: DataCloudflareAccountMemberPoliciesResourceGroups): any;
export declare class DataCloudflareAccountMemberPoliciesResourceGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAccountMemberPoliciesResourceGroups | undefined;
    set internalValue(value: DataCloudflareAccountMemberPoliciesResourceGroups | undefined);
    get id(): any;
    private _meta;
    get meta(): DataCloudflareAccountMemberPoliciesResourceGroupsMetaOutputReference;
    get name(): any;
    private _scope;
    get scope(): DataCloudflareAccountMemberPoliciesResourceGroupsScopeList;
}
export declare class DataCloudflareAccountMemberPoliciesResourceGroupsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAccountMemberPoliciesResourceGroupsOutputReference;
}
export interface DataCloudflareAccountMemberPolicies {
}
export declare function dataCloudflareAccountMemberPoliciesToTerraform(struct?: DataCloudflareAccountMemberPolicies): any;
export declare function dataCloudflareAccountMemberPoliciesToHclTerraform(struct?: DataCloudflareAccountMemberPolicies): any;
export declare class DataCloudflareAccountMemberPoliciesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAccountMemberPolicies | undefined;
    set internalValue(value: DataCloudflareAccountMemberPolicies | undefined);
    get access(): any;
    get id(): any;
    private _permissionGroups;
    get permissionGroups(): DataCloudflareAccountMemberPoliciesPermissionGroupsList;
    private _resourceGroups;
    get resourceGroups(): DataCloudflareAccountMemberPoliciesResourceGroupsList;
}
export declare class DataCloudflareAccountMemberPoliciesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAccountMemberPoliciesOutputReference;
}
export interface DataCloudflareAccountMemberRolesPermissionsAnalytics {
}
export declare function dataCloudflareAccountMemberRolesPermissionsAnalyticsToTerraform(struct?: DataCloudflareAccountMemberRolesPermissionsAnalytics): any;
export declare function dataCloudflareAccountMemberRolesPermissionsAnalyticsToHclTerraform(struct?: DataCloudflareAccountMemberRolesPermissionsAnalytics): any;
export declare class DataCloudflareAccountMemberRolesPermissionsAnalyticsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountMemberRolesPermissionsAnalytics | undefined;
    set internalValue(value: DataCloudflareAccountMemberRolesPermissionsAnalytics | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountMemberRolesPermissionsBilling {
}
export declare function dataCloudflareAccountMemberRolesPermissionsBillingToTerraform(struct?: DataCloudflareAccountMemberRolesPermissionsBilling): any;
export declare function dataCloudflareAccountMemberRolesPermissionsBillingToHclTerraform(struct?: DataCloudflareAccountMemberRolesPermissionsBilling): any;
export declare class DataCloudflareAccountMemberRolesPermissionsBillingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountMemberRolesPermissionsBilling | undefined;
    set internalValue(value: DataCloudflareAccountMemberRolesPermissionsBilling | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountMemberRolesPermissionsCachePurge {
}
export declare function dataCloudflareAccountMemberRolesPermissionsCachePurgeToTerraform(struct?: DataCloudflareAccountMemberRolesPermissionsCachePurge): any;
export declare function dataCloudflareAccountMemberRolesPermissionsCachePurgeToHclTerraform(struct?: DataCloudflareAccountMemberRolesPermissionsCachePurge): any;
export declare class DataCloudflareAccountMemberRolesPermissionsCachePurgeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountMemberRolesPermissionsCachePurge | undefined;
    set internalValue(value: DataCloudflareAccountMemberRolesPermissionsCachePurge | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountMemberRolesPermissionsDns {
}
export declare function dataCloudflareAccountMemberRolesPermissionsDnsToTerraform(struct?: DataCloudflareAccountMemberRolesPermissionsDns): any;
export declare function dataCloudflareAccountMemberRolesPermissionsDnsToHclTerraform(struct?: DataCloudflareAccountMemberRolesPermissionsDns): any;
export declare class DataCloudflareAccountMemberRolesPermissionsDnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountMemberRolesPermissionsDns | undefined;
    set internalValue(value: DataCloudflareAccountMemberRolesPermissionsDns | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountMemberRolesPermissionsDnsRecords {
}
export declare function dataCloudflareAccountMemberRolesPermissionsDnsRecordsToTerraform(struct?: DataCloudflareAccountMemberRolesPermissionsDnsRecords): any;
export declare function dataCloudflareAccountMemberRolesPermissionsDnsRecordsToHclTerraform(struct?: DataCloudflareAccountMemberRolesPermissionsDnsRecords): any;
export declare class DataCloudflareAccountMemberRolesPermissionsDnsRecordsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountMemberRolesPermissionsDnsRecords | undefined;
    set internalValue(value: DataCloudflareAccountMemberRolesPermissionsDnsRecords | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountMemberRolesPermissionsLb {
}
export declare function dataCloudflareAccountMemberRolesPermissionsLbToTerraform(struct?: DataCloudflareAccountMemberRolesPermissionsLb): any;
export declare function dataCloudflareAccountMemberRolesPermissionsLbToHclTerraform(struct?: DataCloudflareAccountMemberRolesPermissionsLb): any;
export declare class DataCloudflareAccountMemberRolesPermissionsLbOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountMemberRolesPermissionsLb | undefined;
    set internalValue(value: DataCloudflareAccountMemberRolesPermissionsLb | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountMemberRolesPermissionsLogs {
}
export declare function dataCloudflareAccountMemberRolesPermissionsLogsToTerraform(struct?: DataCloudflareAccountMemberRolesPermissionsLogs): any;
export declare function dataCloudflareAccountMemberRolesPermissionsLogsToHclTerraform(struct?: DataCloudflareAccountMemberRolesPermissionsLogs): any;
export declare class DataCloudflareAccountMemberRolesPermissionsLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountMemberRolesPermissionsLogs | undefined;
    set internalValue(value: DataCloudflareAccountMemberRolesPermissionsLogs | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountMemberRolesPermissionsOrganization {
}
export declare function dataCloudflareAccountMemberRolesPermissionsOrganizationToTerraform(struct?: DataCloudflareAccountMemberRolesPermissionsOrganization): any;
export declare function dataCloudflareAccountMemberRolesPermissionsOrganizationToHclTerraform(struct?: DataCloudflareAccountMemberRolesPermissionsOrganization): any;
export declare class DataCloudflareAccountMemberRolesPermissionsOrganizationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountMemberRolesPermissionsOrganization | undefined;
    set internalValue(value: DataCloudflareAccountMemberRolesPermissionsOrganization | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountMemberRolesPermissionsSsl {
}
export declare function dataCloudflareAccountMemberRolesPermissionsSslToTerraform(struct?: DataCloudflareAccountMemberRolesPermissionsSsl): any;
export declare function dataCloudflareAccountMemberRolesPermissionsSslToHclTerraform(struct?: DataCloudflareAccountMemberRolesPermissionsSsl): any;
export declare class DataCloudflareAccountMemberRolesPermissionsSslOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountMemberRolesPermissionsSsl | undefined;
    set internalValue(value: DataCloudflareAccountMemberRolesPermissionsSsl | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountMemberRolesPermissionsWaf {
}
export declare function dataCloudflareAccountMemberRolesPermissionsWafToTerraform(struct?: DataCloudflareAccountMemberRolesPermissionsWaf): any;
export declare function dataCloudflareAccountMemberRolesPermissionsWafToHclTerraform(struct?: DataCloudflareAccountMemberRolesPermissionsWaf): any;
export declare class DataCloudflareAccountMemberRolesPermissionsWafOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountMemberRolesPermissionsWaf | undefined;
    set internalValue(value: DataCloudflareAccountMemberRolesPermissionsWaf | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountMemberRolesPermissionsZoneSettings {
}
export declare function dataCloudflareAccountMemberRolesPermissionsZoneSettingsToTerraform(struct?: DataCloudflareAccountMemberRolesPermissionsZoneSettings): any;
export declare function dataCloudflareAccountMemberRolesPermissionsZoneSettingsToHclTerraform(struct?: DataCloudflareAccountMemberRolesPermissionsZoneSettings): any;
export declare class DataCloudflareAccountMemberRolesPermissionsZoneSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountMemberRolesPermissionsZoneSettings | undefined;
    set internalValue(value: DataCloudflareAccountMemberRolesPermissionsZoneSettings | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountMemberRolesPermissionsZones {
}
export declare function dataCloudflareAccountMemberRolesPermissionsZonesToTerraform(struct?: DataCloudflareAccountMemberRolesPermissionsZones): any;
export declare function dataCloudflareAccountMemberRolesPermissionsZonesToHclTerraform(struct?: DataCloudflareAccountMemberRolesPermissionsZones): any;
export declare class DataCloudflareAccountMemberRolesPermissionsZonesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountMemberRolesPermissionsZones | undefined;
    set internalValue(value: DataCloudflareAccountMemberRolesPermissionsZones | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountMemberRolesPermissions {
}
export declare function dataCloudflareAccountMemberRolesPermissionsToTerraform(struct?: DataCloudflareAccountMemberRolesPermissions): any;
export declare function dataCloudflareAccountMemberRolesPermissionsToHclTerraform(struct?: DataCloudflareAccountMemberRolesPermissions): any;
export declare class DataCloudflareAccountMemberRolesPermissionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountMemberRolesPermissions | undefined;
    set internalValue(value: DataCloudflareAccountMemberRolesPermissions | undefined);
    private _analytics;
    get analytics(): DataCloudflareAccountMemberRolesPermissionsAnalyticsOutputReference;
    private _billing;
    get billing(): DataCloudflareAccountMemberRolesPermissionsBillingOutputReference;
    private _cachePurge;
    get cachePurge(): DataCloudflareAccountMemberRolesPermissionsCachePurgeOutputReference;
    private _dns;
    get dns(): DataCloudflareAccountMemberRolesPermissionsDnsOutputReference;
    private _dnsRecords;
    get dnsRecords(): DataCloudflareAccountMemberRolesPermissionsDnsRecordsOutputReference;
    private _lb;
    get lb(): DataCloudflareAccountMemberRolesPermissionsLbOutputReference;
    private _logs;
    get logs(): DataCloudflareAccountMemberRolesPermissionsLogsOutputReference;
    private _organization;
    get organization(): DataCloudflareAccountMemberRolesPermissionsOrganizationOutputReference;
    private _ssl;
    get ssl(): DataCloudflareAccountMemberRolesPermissionsSslOutputReference;
    private _waf;
    get waf(): DataCloudflareAccountMemberRolesPermissionsWafOutputReference;
    private _zoneSettings;
    get zoneSettings(): DataCloudflareAccountMemberRolesPermissionsZoneSettingsOutputReference;
    private _zones;
    get zones(): DataCloudflareAccountMemberRolesPermissionsZonesOutputReference;
}
export interface DataCloudflareAccountMemberRoles {
}
export declare function dataCloudflareAccountMemberRolesToTerraform(struct?: DataCloudflareAccountMemberRoles): any;
export declare function dataCloudflareAccountMemberRolesToHclTerraform(struct?: DataCloudflareAccountMemberRoles): any;
export declare class DataCloudflareAccountMemberRolesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAccountMemberRoles | undefined;
    set internalValue(value: DataCloudflareAccountMemberRoles | undefined);
    get description(): any;
    get id(): any;
    get name(): any;
    private _permissions;
    get permissions(): DataCloudflareAccountMemberRolesPermissionsOutputReference;
}
export declare class DataCloudflareAccountMemberRolesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAccountMemberRolesOutputReference;
}
export interface DataCloudflareAccountMemberUser {
}
export declare function dataCloudflareAccountMemberUserToTerraform(struct?: DataCloudflareAccountMemberUser): any;
export declare function dataCloudflareAccountMemberUserToHclTerraform(struct?: DataCloudflareAccountMemberUser): any;
export declare class DataCloudflareAccountMemberUserOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountMemberUser | undefined;
    set internalValue(value: DataCloudflareAccountMemberUser | undefined);
    get email(): any;
    get firstName(): any;
    get id(): any;
    get lastName(): any;
    get twoFactorAuthenticationEnabled(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_member cloudflare_account_member}
*/
export declare class DataCloudflareAccountMember extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_account_member";
    /**
    * Generates CDKTF code for importing a DataCloudflareAccountMember resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAccountMember to import
    * @param importFromId The id of the existing DataCloudflareAccountMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_member#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAccountMember to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_member cloudflare_account_member} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAccountMemberConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareAccountMemberConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get email(): any;
    private _filter;
    get filter(): DataCloudflareAccountMemberFilterOutputReference;
    putFilter(value: DataCloudflareAccountMemberFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get id(): any;
    private _memberId?;
    get memberId(): string;
    set memberId(value: string);
    resetMemberId(): void;
    get memberIdInput(): string;
    private _policies;
    get policies(): DataCloudflareAccountMemberPoliciesList;
    private _roles;
    get roles(): DataCloudflareAccountMemberRolesList;
    get status(): any;
    private _user;
    get user(): DataCloudflareAccountMemberUserOutputReference;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
