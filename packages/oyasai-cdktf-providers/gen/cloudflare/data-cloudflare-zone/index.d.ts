import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZoneConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone#filter DataCloudflareZone#filter}
    */
    readonly filter?: DataCloudflareZoneFilter;
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone#zone_id DataCloudflareZone#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareZoneAccount {
}
export declare function dataCloudflareZoneAccountToTerraform(struct?: DataCloudflareZoneAccount): any;
export declare function dataCloudflareZoneAccountToHclTerraform(struct?: DataCloudflareZoneAccount): any;
export declare class DataCloudflareZoneAccountOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZoneAccount | undefined;
    set internalValue(value: DataCloudflareZoneAccount | undefined);
    get id(): any;
    get name(): any;
}
export interface DataCloudflareZoneFilterAccount {
    /**
    * Filter by an account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone#id DataCloudflareZone#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * An account Name. Optional filter operators can be provided to extend refine the search:
    *   * `equal` (default)
    *   * `not_equal`
    *   * `starts_with`
    *   * `ends_with`
    *   * `contains`
    *   * `starts_with_case_sensitive`
    *   * `ends_with_case_sensitive`
    *   * `contains_case_sensitive`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone#name DataCloudflareZone#name}
    */
    readonly name?: string;
}
export declare function dataCloudflareZoneFilterAccountToTerraform(struct?: DataCloudflareZoneFilterAccount | cdktf.IResolvable): any;
export declare function dataCloudflareZoneFilterAccountToHclTerraform(struct?: DataCloudflareZoneFilterAccount | cdktf.IResolvable): any;
export declare class DataCloudflareZoneFilterAccountOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZoneFilterAccount | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareZoneFilterAccount | cdktf.IResolvable | undefined);
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
export interface DataCloudflareZoneFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone#account DataCloudflareZone#account}
    */
    readonly account?: DataCloudflareZoneFilterAccount;
    /**
    * Direction to order zones.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone#direction DataCloudflareZone#direction}
    */
    readonly direction?: string;
    /**
    * Whether to match all search requirements or at least one (any).
    * Available values: "any", "all".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone#match DataCloudflareZone#match}
    */
    readonly match?: string;
    /**
    * A domain name. Optional filter operators can be provided to extend refine the search:
    *   * `equal` (default)
    *   * `not_equal`
    *   * `starts_with`
    *   * `ends_with`
    *   * `contains`
    *   * `starts_with_case_sensitive`
    *   * `ends_with_case_sensitive`
    *   * `contains_case_sensitive`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone#name DataCloudflareZone#name}
    */
    readonly name?: string;
    /**
    * Field to order zones by.
    * Available values: "name", "status", "account.id", "account.name", "plan.id".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone#order DataCloudflareZone#order}
    */
    readonly order?: string;
    /**
    * Specify a zone status to filter by.
    * Available values: "initializing", "pending", "active", "moved".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone#status DataCloudflareZone#status}
    */
    readonly status?: string;
}
export declare function dataCloudflareZoneFilterToTerraform(struct?: DataCloudflareZoneFilter | cdktf.IResolvable): any;
export declare function dataCloudflareZoneFilterToHclTerraform(struct?: DataCloudflareZoneFilter | cdktf.IResolvable): any;
export declare class DataCloudflareZoneFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZoneFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareZoneFilter | cdktf.IResolvable | undefined);
    private _account;
    get account(): DataCloudflareZoneFilterAccountOutputReference;
    putAccount(value: DataCloudflareZoneFilterAccount): void;
    resetAccount(): void;
    get accountInput(): any;
    private _direction?;
    get direction(): string;
    set direction(value: string);
    resetDirection(): void;
    get directionInput(): string;
    private _match?;
    get match(): string;
    set match(value: string);
    resetMatch(): void;
    get matchInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
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
export interface DataCloudflareZoneMeta {
}
export declare function dataCloudflareZoneMetaToTerraform(struct?: DataCloudflareZoneMeta): any;
export declare function dataCloudflareZoneMetaToHclTerraform(struct?: DataCloudflareZoneMeta): any;
export declare class DataCloudflareZoneMetaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZoneMeta | undefined;
    set internalValue(value: DataCloudflareZoneMeta | undefined);
    get cdnOnly(): any;
    get customCertificateQuota(): any;
    get dnsOnly(): any;
    get foundationDns(): any;
    get pageRuleQuota(): any;
    get phishingDetected(): any;
    get step(): any;
}
export interface DataCloudflareZoneOwner {
}
export declare function dataCloudflareZoneOwnerToTerraform(struct?: DataCloudflareZoneOwner): any;
export declare function dataCloudflareZoneOwnerToHclTerraform(struct?: DataCloudflareZoneOwner): any;
export declare class DataCloudflareZoneOwnerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZoneOwner | undefined;
    set internalValue(value: DataCloudflareZoneOwner | undefined);
    get id(): any;
    get name(): any;
    get type(): any;
}
export interface DataCloudflareZonePlan {
}
export declare function dataCloudflareZonePlanToTerraform(struct?: DataCloudflareZonePlan): any;
export declare function dataCloudflareZonePlanToHclTerraform(struct?: DataCloudflareZonePlan): any;
export declare class DataCloudflareZonePlanOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZonePlan | undefined;
    set internalValue(value: DataCloudflareZonePlan | undefined);
    get canSubscribe(): any;
    get currency(): any;
    get externallyManaged(): any;
    get frequency(): any;
    get id(): any;
    get isSubscribed(): any;
    get legacyDiscount(): any;
    get legacyId(): any;
    get name(): any;
    get price(): any;
}
export interface DataCloudflareZoneTenant {
}
export declare function dataCloudflareZoneTenantToTerraform(struct?: DataCloudflareZoneTenant): any;
export declare function dataCloudflareZoneTenantToHclTerraform(struct?: DataCloudflareZoneTenant): any;
export declare class DataCloudflareZoneTenantOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZoneTenant | undefined;
    set internalValue(value: DataCloudflareZoneTenant | undefined);
    get id(): any;
    get name(): any;
}
export interface DataCloudflareZoneTenantUnit {
}
export declare function dataCloudflareZoneTenantUnitToTerraform(struct?: DataCloudflareZoneTenantUnit): any;
export declare function dataCloudflareZoneTenantUnitToHclTerraform(struct?: DataCloudflareZoneTenantUnit): any;
export declare class DataCloudflareZoneTenantUnitOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZoneTenantUnit | undefined;
    set internalValue(value: DataCloudflareZoneTenantUnit | undefined);
    get id(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone cloudflare_zone}
*/
export declare class DataCloudflareZone extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zone";
    /**
    * Generates CDKTF code for importing a DataCloudflareZone resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZone to import
    * @param importFromId The id of the existing DataCloudflareZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZone to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone cloudflare_zone} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZoneConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZoneConfig);
    private _account;
    get account(): DataCloudflareZoneAccountOutputReference;
    get activatedOn(): any;
    get cnameSuffix(): any;
    get createdOn(): any;
    get developmentMode(): any;
    private _filter;
    get filter(): DataCloudflareZoneFilterOutputReference;
    putFilter(value: DataCloudflareZoneFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get id(): any;
    private _meta;
    get meta(): DataCloudflareZoneMetaOutputReference;
    get modifiedOn(): any;
    get name(): any;
    get nameServers(): any;
    get originalDnshost(): any;
    get originalNameServers(): any;
    get originalRegistrar(): any;
    private _owner;
    get owner(): DataCloudflareZoneOwnerOutputReference;
    get paused(): any;
    get permissions(): any;
    private _plan;
    get plan(): DataCloudflareZonePlanOutputReference;
    get status(): any;
    private _tenant;
    get tenant(): DataCloudflareZoneTenantOutputReference;
    private _tenantUnit;
    get tenantUnit(): DataCloudflareZoneTenantUnitOutputReference;
    get type(): any;
    get vanityNameServers(): any;
    get verificationKey(): any;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    resetZoneId(): void;
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
