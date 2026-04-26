import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZonesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zones#account DataCloudflareZones#account}
    */
    readonly account?: DataCloudflareZonesAccount;
    /**
    * Direction to order zones.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zones#direction DataCloudflareZones#direction}
    */
    readonly direction?: string;
    /**
    * Whether to match all search requirements or at least one (any).
    * Available values: "any", "all".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zones#match DataCloudflareZones#match}
    */
    readonly match?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zones#max_items DataCloudflareZones#max_items}
    */
    readonly maxItems?: number;
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zones#name DataCloudflareZones#name}
    */
    readonly name?: string;
    /**
    * Field to order zones by.
    * Available values: "name", "status", "account.id", "account.name", "plan.id".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zones#order DataCloudflareZones#order}
    */
    readonly order?: string;
    /**
    * Specify a zone status to filter by.
    * Available values: "initializing", "pending", "active", "moved".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zones#status DataCloudflareZones#status}
    */
    readonly status?: string;
}
export interface DataCloudflareZonesAccount {
    /**
    * Filter by an account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zones#id DataCloudflareZones#id}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zones#name DataCloudflareZones#name}
    */
    readonly name?: string;
}
export declare function dataCloudflareZonesAccountToTerraform(struct?: DataCloudflareZonesAccount | cdktf.IResolvable): any;
export declare function dataCloudflareZonesAccountToHclTerraform(struct?: DataCloudflareZonesAccount | cdktf.IResolvable): any;
export declare class DataCloudflareZonesAccountOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZonesAccount | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareZonesAccount | cdktf.IResolvable | undefined);
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
export interface DataCloudflareZonesResultAccount {
}
export declare function dataCloudflareZonesResultAccountToTerraform(struct?: DataCloudflareZonesResultAccount): any;
export declare function dataCloudflareZonesResultAccountToHclTerraform(struct?: DataCloudflareZonesResultAccount): any;
export declare class DataCloudflareZonesResultAccountOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZonesResultAccount | undefined;
    set internalValue(value: DataCloudflareZonesResultAccount | undefined);
    get id(): any;
    get name(): any;
}
export interface DataCloudflareZonesResultMeta {
}
export declare function dataCloudflareZonesResultMetaToTerraform(struct?: DataCloudflareZonesResultMeta): any;
export declare function dataCloudflareZonesResultMetaToHclTerraform(struct?: DataCloudflareZonesResultMeta): any;
export declare class DataCloudflareZonesResultMetaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZonesResultMeta | undefined;
    set internalValue(value: DataCloudflareZonesResultMeta | undefined);
    get cdnOnly(): any;
    get customCertificateQuota(): any;
    get dnsOnly(): any;
    get foundationDns(): any;
    get pageRuleQuota(): any;
    get phishingDetected(): any;
    get step(): any;
}
export interface DataCloudflareZonesResultOwner {
}
export declare function dataCloudflareZonesResultOwnerToTerraform(struct?: DataCloudflareZonesResultOwner): any;
export declare function dataCloudflareZonesResultOwnerToHclTerraform(struct?: DataCloudflareZonesResultOwner): any;
export declare class DataCloudflareZonesResultOwnerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZonesResultOwner | undefined;
    set internalValue(value: DataCloudflareZonesResultOwner | undefined);
    get id(): any;
    get name(): any;
    get type(): any;
}
export interface DataCloudflareZonesResultPlan {
}
export declare function dataCloudflareZonesResultPlanToTerraform(struct?: DataCloudflareZonesResultPlan): any;
export declare function dataCloudflareZonesResultPlanToHclTerraform(struct?: DataCloudflareZonesResultPlan): any;
export declare class DataCloudflareZonesResultPlanOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZonesResultPlan | undefined;
    set internalValue(value: DataCloudflareZonesResultPlan | undefined);
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
export interface DataCloudflareZonesResultTenant {
}
export declare function dataCloudflareZonesResultTenantToTerraform(struct?: DataCloudflareZonesResultTenant): any;
export declare function dataCloudflareZonesResultTenantToHclTerraform(struct?: DataCloudflareZonesResultTenant): any;
export declare class DataCloudflareZonesResultTenantOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZonesResultTenant | undefined;
    set internalValue(value: DataCloudflareZonesResultTenant | undefined);
    get id(): any;
    get name(): any;
}
export interface DataCloudflareZonesResultTenantUnit {
}
export declare function dataCloudflareZonesResultTenantUnitToTerraform(struct?: DataCloudflareZonesResultTenantUnit): any;
export declare function dataCloudflareZonesResultTenantUnitToHclTerraform(struct?: DataCloudflareZonesResultTenantUnit): any;
export declare class DataCloudflareZonesResultTenantUnitOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZonesResultTenantUnit | undefined;
    set internalValue(value: DataCloudflareZonesResultTenantUnit | undefined);
    get id(): any;
}
export interface DataCloudflareZonesResult {
}
export declare function dataCloudflareZonesResultToTerraform(struct?: DataCloudflareZonesResult): any;
export declare function dataCloudflareZonesResultToHclTerraform(struct?: DataCloudflareZonesResult): any;
export declare class DataCloudflareZonesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZonesResult | undefined;
    set internalValue(value: DataCloudflareZonesResult | undefined);
    private _account;
    get account(): DataCloudflareZonesResultAccountOutputReference;
    get activatedOn(): any;
    get cnameSuffix(): any;
    get createdOn(): any;
    get developmentMode(): any;
    get id(): any;
    private _meta;
    get meta(): DataCloudflareZonesResultMetaOutputReference;
    get modifiedOn(): any;
    get name(): any;
    get nameServers(): any;
    get originalDnshost(): any;
    get originalNameServers(): any;
    get originalRegistrar(): any;
    private _owner;
    get owner(): DataCloudflareZonesResultOwnerOutputReference;
    get paused(): any;
    get permissions(): any;
    private _plan;
    get plan(): DataCloudflareZonesResultPlanOutputReference;
    get status(): any;
    private _tenant;
    get tenant(): DataCloudflareZonesResultTenantOutputReference;
    private _tenantUnit;
    get tenantUnit(): DataCloudflareZonesResultTenantUnitOutputReference;
    get type(): any;
    get vanityNameServers(): any;
    get verificationKey(): any;
}
export declare class DataCloudflareZonesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZonesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zones cloudflare_zones}
*/
export declare class DataCloudflareZones extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zones";
    /**
    * Generates CDKTF code for importing a DataCloudflareZones resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZones to import
    * @param importFromId The id of the existing DataCloudflareZones that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zones#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZones to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zones cloudflare_zones} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZonesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZonesConfig);
    private _account;
    get account(): DataCloudflareZonesAccountOutputReference;
    putAccount(value: DataCloudflareZonesAccount): void;
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
    private _order?;
    get order(): string;
    set order(value: string);
    resetOrder(): void;
    get orderInput(): string;
    private _result;
    get result(): DataCloudflareZonesResultList;
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
