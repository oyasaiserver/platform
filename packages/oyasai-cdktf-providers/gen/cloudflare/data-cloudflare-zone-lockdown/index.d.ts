import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZoneLockdownConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdown#filter DataCloudflareZoneLockdown#filter}
    */
    readonly filter?: DataCloudflareZoneLockdownFilter;
    /**
    * The unique identifier of the Zone Lockdown rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdown#lock_downs_id DataCloudflareZoneLockdown#lock_downs_id}
    */
    readonly lockDownsId?: string;
    /**
    * Defines an identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdown#zone_id DataCloudflareZoneLockdown#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareZoneLockdownConfigurations {
}
export declare function dataCloudflareZoneLockdownConfigurationsToTerraform(struct?: DataCloudflareZoneLockdownConfigurations): any;
export declare function dataCloudflareZoneLockdownConfigurationsToHclTerraform(struct?: DataCloudflareZoneLockdownConfigurations): any;
export declare class DataCloudflareZoneLockdownConfigurationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZoneLockdownConfigurations | undefined;
    set internalValue(value: DataCloudflareZoneLockdownConfigurations | undefined);
    get target(): any;
    get value(): any;
}
export declare class DataCloudflareZoneLockdownConfigurationsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZoneLockdownConfigurationsOutputReference;
}
export interface DataCloudflareZoneLockdownFilter {
    /**
    * The timestamp of when the rule was created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdown#created_on DataCloudflareZoneLockdown#created_on}
    */
    readonly createdOn?: string;
    /**
    * A string to search for in the description of existing rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdown#description DataCloudflareZoneLockdown#description}
    */
    readonly description?: string;
    /**
    * A string to search for in the description of existing rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdown#description_search DataCloudflareZoneLockdown#description_search}
    */
    readonly descriptionSearch?: string;
    /**
    * A single IP address to search for in existing rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdown#ip DataCloudflareZoneLockdown#ip}
    */
    readonly ip?: string;
    /**
    * A single IP address range to search for in existing rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdown#ip_range_search DataCloudflareZoneLockdown#ip_range_search}
    */
    readonly ipRangeSearch?: string;
    /**
    * A single IP address to search for in existing rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdown#ip_search DataCloudflareZoneLockdown#ip_search}
    */
    readonly ipSearch?: string;
    /**
    * The timestamp of when the rule was last modified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdown#modified_on DataCloudflareZoneLockdown#modified_on}
    */
    readonly modifiedOn?: string;
    /**
    * The priority of the rule to control the processing order. A lower number indicates higher priority. If not provided, any rules with a configured priority will be processed before rules without a priority.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdown#priority DataCloudflareZoneLockdown#priority}
    */
    readonly priority?: number;
    /**
    * A single URI to search for in the list of URLs of existing rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdown#uri_search DataCloudflareZoneLockdown#uri_search}
    */
    readonly uriSearch?: string;
}
export declare function dataCloudflareZoneLockdownFilterToTerraform(struct?: DataCloudflareZoneLockdownFilter | cdktf.IResolvable): any;
export declare function dataCloudflareZoneLockdownFilterToHclTerraform(struct?: DataCloudflareZoneLockdownFilter | cdktf.IResolvable): any;
export declare class DataCloudflareZoneLockdownFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZoneLockdownFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareZoneLockdownFilter | cdktf.IResolvable | undefined);
    private _createdOn?;
    get createdOn(): string;
    set createdOn(value: string);
    resetCreatedOn(): void;
    get createdOnInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _descriptionSearch?;
    get descriptionSearch(): string;
    set descriptionSearch(value: string);
    resetDescriptionSearch(): void;
    get descriptionSearchInput(): string;
    private _ip?;
    get ip(): string;
    set ip(value: string);
    resetIp(): void;
    get ipInput(): string;
    private _ipRangeSearch?;
    get ipRangeSearch(): string;
    set ipRangeSearch(value: string);
    resetIpRangeSearch(): void;
    get ipRangeSearchInput(): string;
    private _ipSearch?;
    get ipSearch(): string;
    set ipSearch(value: string);
    resetIpSearch(): void;
    get ipSearchInput(): string;
    private _modifiedOn?;
    get modifiedOn(): string;
    set modifiedOn(value: string);
    resetModifiedOn(): void;
    get modifiedOnInput(): string;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    resetPriority(): void;
    get priorityInput(): number;
    private _uriSearch?;
    get uriSearch(): string;
    set uriSearch(value: string);
    resetUriSearch(): void;
    get uriSearchInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdown cloudflare_zone_lockdown}
*/
export declare class DataCloudflareZoneLockdown extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zone_lockdown";
    /**
    * Generates CDKTF code for importing a DataCloudflareZoneLockdown resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZoneLockdown to import
    * @param importFromId The id of the existing DataCloudflareZoneLockdown that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdown#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZoneLockdown to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdown cloudflare_zone_lockdown} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZoneLockdownConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZoneLockdownConfig);
    private _configurations;
    get configurations(): DataCloudflareZoneLockdownConfigurationsList;
    get createdOn(): any;
    get description(): any;
    private _filter;
    get filter(): DataCloudflareZoneLockdownFilterOutputReference;
    putFilter(value: DataCloudflareZoneLockdownFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get id(): any;
    private _lockDownsId?;
    get lockDownsId(): string;
    set lockDownsId(value: string);
    resetLockDownsId(): void;
    get lockDownsIdInput(): string;
    get modifiedOn(): any;
    get paused(): any;
    get urls(): any;
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
