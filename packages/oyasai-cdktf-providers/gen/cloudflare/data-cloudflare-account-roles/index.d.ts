import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareAccountRolesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_roles#account_id DataCloudflareAccountRoles#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_roles#max_items DataCloudflareAccountRoles#max_items}
    */
    readonly maxItems?: number;
}
export interface DataCloudflareAccountRolesResultPermissionsAnalytics {
}
export declare function dataCloudflareAccountRolesResultPermissionsAnalyticsToTerraform(struct?: DataCloudflareAccountRolesResultPermissionsAnalytics): any;
export declare function dataCloudflareAccountRolesResultPermissionsAnalyticsToHclTerraform(struct?: DataCloudflareAccountRolesResultPermissionsAnalytics): any;
export declare class DataCloudflareAccountRolesResultPermissionsAnalyticsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountRolesResultPermissionsAnalytics | undefined;
    set internalValue(value: DataCloudflareAccountRolesResultPermissionsAnalytics | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountRolesResultPermissionsBilling {
}
export declare function dataCloudflareAccountRolesResultPermissionsBillingToTerraform(struct?: DataCloudflareAccountRolesResultPermissionsBilling): any;
export declare function dataCloudflareAccountRolesResultPermissionsBillingToHclTerraform(struct?: DataCloudflareAccountRolesResultPermissionsBilling): any;
export declare class DataCloudflareAccountRolesResultPermissionsBillingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountRolesResultPermissionsBilling | undefined;
    set internalValue(value: DataCloudflareAccountRolesResultPermissionsBilling | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountRolesResultPermissionsCachePurge {
}
export declare function dataCloudflareAccountRolesResultPermissionsCachePurgeToTerraform(struct?: DataCloudflareAccountRolesResultPermissionsCachePurge): any;
export declare function dataCloudflareAccountRolesResultPermissionsCachePurgeToHclTerraform(struct?: DataCloudflareAccountRolesResultPermissionsCachePurge): any;
export declare class DataCloudflareAccountRolesResultPermissionsCachePurgeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountRolesResultPermissionsCachePurge | undefined;
    set internalValue(value: DataCloudflareAccountRolesResultPermissionsCachePurge | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountRolesResultPermissionsDns {
}
export declare function dataCloudflareAccountRolesResultPermissionsDnsToTerraform(struct?: DataCloudflareAccountRolesResultPermissionsDns): any;
export declare function dataCloudflareAccountRolesResultPermissionsDnsToHclTerraform(struct?: DataCloudflareAccountRolesResultPermissionsDns): any;
export declare class DataCloudflareAccountRolesResultPermissionsDnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountRolesResultPermissionsDns | undefined;
    set internalValue(value: DataCloudflareAccountRolesResultPermissionsDns | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountRolesResultPermissionsDnsRecords {
}
export declare function dataCloudflareAccountRolesResultPermissionsDnsRecordsToTerraform(struct?: DataCloudflareAccountRolesResultPermissionsDnsRecords): any;
export declare function dataCloudflareAccountRolesResultPermissionsDnsRecordsToHclTerraform(struct?: DataCloudflareAccountRolesResultPermissionsDnsRecords): any;
export declare class DataCloudflareAccountRolesResultPermissionsDnsRecordsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountRolesResultPermissionsDnsRecords | undefined;
    set internalValue(value: DataCloudflareAccountRolesResultPermissionsDnsRecords | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountRolesResultPermissionsLb {
}
export declare function dataCloudflareAccountRolesResultPermissionsLbToTerraform(struct?: DataCloudflareAccountRolesResultPermissionsLb): any;
export declare function dataCloudflareAccountRolesResultPermissionsLbToHclTerraform(struct?: DataCloudflareAccountRolesResultPermissionsLb): any;
export declare class DataCloudflareAccountRolesResultPermissionsLbOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountRolesResultPermissionsLb | undefined;
    set internalValue(value: DataCloudflareAccountRolesResultPermissionsLb | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountRolesResultPermissionsLogs {
}
export declare function dataCloudflareAccountRolesResultPermissionsLogsToTerraform(struct?: DataCloudflareAccountRolesResultPermissionsLogs): any;
export declare function dataCloudflareAccountRolesResultPermissionsLogsToHclTerraform(struct?: DataCloudflareAccountRolesResultPermissionsLogs): any;
export declare class DataCloudflareAccountRolesResultPermissionsLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountRolesResultPermissionsLogs | undefined;
    set internalValue(value: DataCloudflareAccountRolesResultPermissionsLogs | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountRolesResultPermissionsOrganization {
}
export declare function dataCloudflareAccountRolesResultPermissionsOrganizationToTerraform(struct?: DataCloudflareAccountRolesResultPermissionsOrganization): any;
export declare function dataCloudflareAccountRolesResultPermissionsOrganizationToHclTerraform(struct?: DataCloudflareAccountRolesResultPermissionsOrganization): any;
export declare class DataCloudflareAccountRolesResultPermissionsOrganizationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountRolesResultPermissionsOrganization | undefined;
    set internalValue(value: DataCloudflareAccountRolesResultPermissionsOrganization | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountRolesResultPermissionsSsl {
}
export declare function dataCloudflareAccountRolesResultPermissionsSslToTerraform(struct?: DataCloudflareAccountRolesResultPermissionsSsl): any;
export declare function dataCloudflareAccountRolesResultPermissionsSslToHclTerraform(struct?: DataCloudflareAccountRolesResultPermissionsSsl): any;
export declare class DataCloudflareAccountRolesResultPermissionsSslOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountRolesResultPermissionsSsl | undefined;
    set internalValue(value: DataCloudflareAccountRolesResultPermissionsSsl | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountRolesResultPermissionsWaf {
}
export declare function dataCloudflareAccountRolesResultPermissionsWafToTerraform(struct?: DataCloudflareAccountRolesResultPermissionsWaf): any;
export declare function dataCloudflareAccountRolesResultPermissionsWafToHclTerraform(struct?: DataCloudflareAccountRolesResultPermissionsWaf): any;
export declare class DataCloudflareAccountRolesResultPermissionsWafOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountRolesResultPermissionsWaf | undefined;
    set internalValue(value: DataCloudflareAccountRolesResultPermissionsWaf | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountRolesResultPermissionsZoneSettings {
}
export declare function dataCloudflareAccountRolesResultPermissionsZoneSettingsToTerraform(struct?: DataCloudflareAccountRolesResultPermissionsZoneSettings): any;
export declare function dataCloudflareAccountRolesResultPermissionsZoneSettingsToHclTerraform(struct?: DataCloudflareAccountRolesResultPermissionsZoneSettings): any;
export declare class DataCloudflareAccountRolesResultPermissionsZoneSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountRolesResultPermissionsZoneSettings | undefined;
    set internalValue(value: DataCloudflareAccountRolesResultPermissionsZoneSettings | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountRolesResultPermissionsZones {
}
export declare function dataCloudflareAccountRolesResultPermissionsZonesToTerraform(struct?: DataCloudflareAccountRolesResultPermissionsZones): any;
export declare function dataCloudflareAccountRolesResultPermissionsZonesToHclTerraform(struct?: DataCloudflareAccountRolesResultPermissionsZones): any;
export declare class DataCloudflareAccountRolesResultPermissionsZonesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountRolesResultPermissionsZones | undefined;
    set internalValue(value: DataCloudflareAccountRolesResultPermissionsZones | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountRolesResultPermissions {
}
export declare function dataCloudflareAccountRolesResultPermissionsToTerraform(struct?: DataCloudflareAccountRolesResultPermissions): any;
export declare function dataCloudflareAccountRolesResultPermissionsToHclTerraform(struct?: DataCloudflareAccountRolesResultPermissions): any;
export declare class DataCloudflareAccountRolesResultPermissionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountRolesResultPermissions | undefined;
    set internalValue(value: DataCloudflareAccountRolesResultPermissions | undefined);
    private _analytics;
    get analytics(): DataCloudflareAccountRolesResultPermissionsAnalyticsOutputReference;
    private _billing;
    get billing(): DataCloudflareAccountRolesResultPermissionsBillingOutputReference;
    private _cachePurge;
    get cachePurge(): DataCloudflareAccountRolesResultPermissionsCachePurgeOutputReference;
    private _dns;
    get dns(): DataCloudflareAccountRolesResultPermissionsDnsOutputReference;
    private _dnsRecords;
    get dnsRecords(): DataCloudflareAccountRolesResultPermissionsDnsRecordsOutputReference;
    private _lb;
    get lb(): DataCloudflareAccountRolesResultPermissionsLbOutputReference;
    private _logs;
    get logs(): DataCloudflareAccountRolesResultPermissionsLogsOutputReference;
    private _organization;
    get organization(): DataCloudflareAccountRolesResultPermissionsOrganizationOutputReference;
    private _ssl;
    get ssl(): DataCloudflareAccountRolesResultPermissionsSslOutputReference;
    private _waf;
    get waf(): DataCloudflareAccountRolesResultPermissionsWafOutputReference;
    private _zoneSettings;
    get zoneSettings(): DataCloudflareAccountRolesResultPermissionsZoneSettingsOutputReference;
    private _zones;
    get zones(): DataCloudflareAccountRolesResultPermissionsZonesOutputReference;
}
export interface DataCloudflareAccountRolesResult {
}
export declare function dataCloudflareAccountRolesResultToTerraform(struct?: DataCloudflareAccountRolesResult): any;
export declare function dataCloudflareAccountRolesResultToHclTerraform(struct?: DataCloudflareAccountRolesResult): any;
export declare class DataCloudflareAccountRolesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAccountRolesResult | undefined;
    set internalValue(value: DataCloudflareAccountRolesResult | undefined);
    get description(): any;
    get id(): any;
    get name(): any;
    private _permissions;
    get permissions(): DataCloudflareAccountRolesResultPermissionsOutputReference;
}
export declare class DataCloudflareAccountRolesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAccountRolesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_roles cloudflare_account_roles}
*/
export declare class DataCloudflareAccountRoles extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_account_roles";
    /**
    * Generates CDKTF code for importing a DataCloudflareAccountRoles resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAccountRoles to import
    * @param importFromId The id of the existing DataCloudflareAccountRoles that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_roles#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAccountRoles to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_roles cloudflare_account_roles} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAccountRolesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareAccountRolesConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareAccountRolesResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
