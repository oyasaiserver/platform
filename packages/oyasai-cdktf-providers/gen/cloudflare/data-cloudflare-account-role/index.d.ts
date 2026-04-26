import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareAccountRoleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_role#account_id DataCloudflareAccountRole#account_id}
    */
    readonly accountId?: string;
    /**
    * Role identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_role#role_id DataCloudflareAccountRole#role_id}
    */
    readonly roleId: string;
}
export interface DataCloudflareAccountRolePermissionsAnalytics {
}
export declare function dataCloudflareAccountRolePermissionsAnalyticsToTerraform(struct?: DataCloudflareAccountRolePermissionsAnalytics): any;
export declare function dataCloudflareAccountRolePermissionsAnalyticsToHclTerraform(struct?: DataCloudflareAccountRolePermissionsAnalytics): any;
export declare class DataCloudflareAccountRolePermissionsAnalyticsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountRolePermissionsAnalytics | undefined;
    set internalValue(value: DataCloudflareAccountRolePermissionsAnalytics | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountRolePermissionsBilling {
}
export declare function dataCloudflareAccountRolePermissionsBillingToTerraform(struct?: DataCloudflareAccountRolePermissionsBilling): any;
export declare function dataCloudflareAccountRolePermissionsBillingToHclTerraform(struct?: DataCloudflareAccountRolePermissionsBilling): any;
export declare class DataCloudflareAccountRolePermissionsBillingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountRolePermissionsBilling | undefined;
    set internalValue(value: DataCloudflareAccountRolePermissionsBilling | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountRolePermissionsCachePurge {
}
export declare function dataCloudflareAccountRolePermissionsCachePurgeToTerraform(struct?: DataCloudflareAccountRolePermissionsCachePurge): any;
export declare function dataCloudflareAccountRolePermissionsCachePurgeToHclTerraform(struct?: DataCloudflareAccountRolePermissionsCachePurge): any;
export declare class DataCloudflareAccountRolePermissionsCachePurgeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountRolePermissionsCachePurge | undefined;
    set internalValue(value: DataCloudflareAccountRolePermissionsCachePurge | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountRolePermissionsDns {
}
export declare function dataCloudflareAccountRolePermissionsDnsToTerraform(struct?: DataCloudflareAccountRolePermissionsDns): any;
export declare function dataCloudflareAccountRolePermissionsDnsToHclTerraform(struct?: DataCloudflareAccountRolePermissionsDns): any;
export declare class DataCloudflareAccountRolePermissionsDnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountRolePermissionsDns | undefined;
    set internalValue(value: DataCloudflareAccountRolePermissionsDns | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountRolePermissionsDnsRecords {
}
export declare function dataCloudflareAccountRolePermissionsDnsRecordsToTerraform(struct?: DataCloudflareAccountRolePermissionsDnsRecords): any;
export declare function dataCloudflareAccountRolePermissionsDnsRecordsToHclTerraform(struct?: DataCloudflareAccountRolePermissionsDnsRecords): any;
export declare class DataCloudflareAccountRolePermissionsDnsRecordsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountRolePermissionsDnsRecords | undefined;
    set internalValue(value: DataCloudflareAccountRolePermissionsDnsRecords | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountRolePermissionsLb {
}
export declare function dataCloudflareAccountRolePermissionsLbToTerraform(struct?: DataCloudflareAccountRolePermissionsLb): any;
export declare function dataCloudflareAccountRolePermissionsLbToHclTerraform(struct?: DataCloudflareAccountRolePermissionsLb): any;
export declare class DataCloudflareAccountRolePermissionsLbOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountRolePermissionsLb | undefined;
    set internalValue(value: DataCloudflareAccountRolePermissionsLb | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountRolePermissionsLogs {
}
export declare function dataCloudflareAccountRolePermissionsLogsToTerraform(struct?: DataCloudflareAccountRolePermissionsLogs): any;
export declare function dataCloudflareAccountRolePermissionsLogsToHclTerraform(struct?: DataCloudflareAccountRolePermissionsLogs): any;
export declare class DataCloudflareAccountRolePermissionsLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountRolePermissionsLogs | undefined;
    set internalValue(value: DataCloudflareAccountRolePermissionsLogs | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountRolePermissionsOrganization {
}
export declare function dataCloudflareAccountRolePermissionsOrganizationToTerraform(struct?: DataCloudflareAccountRolePermissionsOrganization): any;
export declare function dataCloudflareAccountRolePermissionsOrganizationToHclTerraform(struct?: DataCloudflareAccountRolePermissionsOrganization): any;
export declare class DataCloudflareAccountRolePermissionsOrganizationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountRolePermissionsOrganization | undefined;
    set internalValue(value: DataCloudflareAccountRolePermissionsOrganization | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountRolePermissionsSsl {
}
export declare function dataCloudflareAccountRolePermissionsSslToTerraform(struct?: DataCloudflareAccountRolePermissionsSsl): any;
export declare function dataCloudflareAccountRolePermissionsSslToHclTerraform(struct?: DataCloudflareAccountRolePermissionsSsl): any;
export declare class DataCloudflareAccountRolePermissionsSslOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountRolePermissionsSsl | undefined;
    set internalValue(value: DataCloudflareAccountRolePermissionsSsl | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountRolePermissionsWaf {
}
export declare function dataCloudflareAccountRolePermissionsWafToTerraform(struct?: DataCloudflareAccountRolePermissionsWaf): any;
export declare function dataCloudflareAccountRolePermissionsWafToHclTerraform(struct?: DataCloudflareAccountRolePermissionsWaf): any;
export declare class DataCloudflareAccountRolePermissionsWafOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountRolePermissionsWaf | undefined;
    set internalValue(value: DataCloudflareAccountRolePermissionsWaf | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountRolePermissionsZoneSettings {
}
export declare function dataCloudflareAccountRolePermissionsZoneSettingsToTerraform(struct?: DataCloudflareAccountRolePermissionsZoneSettings): any;
export declare function dataCloudflareAccountRolePermissionsZoneSettingsToHclTerraform(struct?: DataCloudflareAccountRolePermissionsZoneSettings): any;
export declare class DataCloudflareAccountRolePermissionsZoneSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountRolePermissionsZoneSettings | undefined;
    set internalValue(value: DataCloudflareAccountRolePermissionsZoneSettings | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountRolePermissionsZones {
}
export declare function dataCloudflareAccountRolePermissionsZonesToTerraform(struct?: DataCloudflareAccountRolePermissionsZones): any;
export declare function dataCloudflareAccountRolePermissionsZonesToHclTerraform(struct?: DataCloudflareAccountRolePermissionsZones): any;
export declare class DataCloudflareAccountRolePermissionsZonesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountRolePermissionsZones | undefined;
    set internalValue(value: DataCloudflareAccountRolePermissionsZones | undefined);
    get read(): any;
    get write(): any;
}
export interface DataCloudflareAccountRolePermissions {
}
export declare function dataCloudflareAccountRolePermissionsToTerraform(struct?: DataCloudflareAccountRolePermissions): any;
export declare function dataCloudflareAccountRolePermissionsToHclTerraform(struct?: DataCloudflareAccountRolePermissions): any;
export declare class DataCloudflareAccountRolePermissionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountRolePermissions | undefined;
    set internalValue(value: DataCloudflareAccountRolePermissions | undefined);
    private _analytics;
    get analytics(): DataCloudflareAccountRolePermissionsAnalyticsOutputReference;
    private _billing;
    get billing(): DataCloudflareAccountRolePermissionsBillingOutputReference;
    private _cachePurge;
    get cachePurge(): DataCloudflareAccountRolePermissionsCachePurgeOutputReference;
    private _dns;
    get dns(): DataCloudflareAccountRolePermissionsDnsOutputReference;
    private _dnsRecords;
    get dnsRecords(): DataCloudflareAccountRolePermissionsDnsRecordsOutputReference;
    private _lb;
    get lb(): DataCloudflareAccountRolePermissionsLbOutputReference;
    private _logs;
    get logs(): DataCloudflareAccountRolePermissionsLogsOutputReference;
    private _organization;
    get organization(): DataCloudflareAccountRolePermissionsOrganizationOutputReference;
    private _ssl;
    get ssl(): DataCloudflareAccountRolePermissionsSslOutputReference;
    private _waf;
    get waf(): DataCloudflareAccountRolePermissionsWafOutputReference;
    private _zoneSettings;
    get zoneSettings(): DataCloudflareAccountRolePermissionsZoneSettingsOutputReference;
    private _zones;
    get zones(): DataCloudflareAccountRolePermissionsZonesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_role cloudflare_account_role}
*/
export declare class DataCloudflareAccountRole extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_account_role";
    /**
    * Generates CDKTF code for importing a DataCloudflareAccountRole resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAccountRole to import
    * @param importFromId The id of the existing DataCloudflareAccountRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_role#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAccountRole to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_role cloudflare_account_role} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAccountRoleConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareAccountRoleConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get description(): any;
    get id(): any;
    get name(): any;
    private _permissions;
    get permissions(): DataCloudflareAccountRolePermissionsOutputReference;
    private _roleId?;
    get roleId(): string;
    set roleId(value: string);
    get roleIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
