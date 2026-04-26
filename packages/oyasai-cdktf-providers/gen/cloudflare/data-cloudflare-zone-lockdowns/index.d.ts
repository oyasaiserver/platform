import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZoneLockdownsConfig extends cdktf.TerraformMetaArguments {
    /**
    * The timestamp of when the rule was created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdowns#created_on DataCloudflareZoneLockdowns#created_on}
    */
    readonly createdOn?: string;
    /**
    * A string to search for in the description of existing rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdowns#description DataCloudflareZoneLockdowns#description}
    */
    readonly description?: string;
    /**
    * A string to search for in the description of existing rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdowns#description_search DataCloudflareZoneLockdowns#description_search}
    */
    readonly descriptionSearch?: string;
    /**
    * A single IP address to search for in existing rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdowns#ip DataCloudflareZoneLockdowns#ip}
    */
    readonly ip?: string;
    /**
    * A single IP address range to search for in existing rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdowns#ip_range_search DataCloudflareZoneLockdowns#ip_range_search}
    */
    readonly ipRangeSearch?: string;
    /**
    * A single IP address to search for in existing rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdowns#ip_search DataCloudflareZoneLockdowns#ip_search}
    */
    readonly ipSearch?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdowns#max_items DataCloudflareZoneLockdowns#max_items}
    */
    readonly maxItems?: number;
    /**
    * The timestamp of when the rule was last modified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdowns#modified_on DataCloudflareZoneLockdowns#modified_on}
    */
    readonly modifiedOn?: string;
    /**
    * The priority of the rule to control the processing order. A lower number indicates higher priority. If not provided, any rules with a configured priority will be processed before rules without a priority.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdowns#priority DataCloudflareZoneLockdowns#priority}
    */
    readonly priority?: number;
    /**
    * A single URI to search for in the list of URLs of existing rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdowns#uri_search DataCloudflareZoneLockdowns#uri_search}
    */
    readonly uriSearch?: string;
    /**
    * Defines an identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdowns#zone_id DataCloudflareZoneLockdowns#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareZoneLockdownsResultConfigurations {
}
export declare function dataCloudflareZoneLockdownsResultConfigurationsToTerraform(struct?: DataCloudflareZoneLockdownsResultConfigurations): any;
export declare function dataCloudflareZoneLockdownsResultConfigurationsToHclTerraform(struct?: DataCloudflareZoneLockdownsResultConfigurations): any;
export declare class DataCloudflareZoneLockdownsResultConfigurationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZoneLockdownsResultConfigurations | undefined;
    set internalValue(value: DataCloudflareZoneLockdownsResultConfigurations | undefined);
    get target(): any;
    get value(): any;
}
export declare class DataCloudflareZoneLockdownsResultConfigurationsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZoneLockdownsResultConfigurationsOutputReference;
}
export interface DataCloudflareZoneLockdownsResult {
}
export declare function dataCloudflareZoneLockdownsResultToTerraform(struct?: DataCloudflareZoneLockdownsResult): any;
export declare function dataCloudflareZoneLockdownsResultToHclTerraform(struct?: DataCloudflareZoneLockdownsResult): any;
export declare class DataCloudflareZoneLockdownsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZoneLockdownsResult | undefined;
    set internalValue(value: DataCloudflareZoneLockdownsResult | undefined);
    private _configurations;
    get configurations(): DataCloudflareZoneLockdownsResultConfigurationsList;
    get createdOn(): any;
    get description(): any;
    get id(): any;
    get modifiedOn(): any;
    get paused(): any;
    get urls(): any;
}
export declare class DataCloudflareZoneLockdownsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZoneLockdownsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdowns cloudflare_zone_lockdowns}
*/
export declare class DataCloudflareZoneLockdowns extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zone_lockdowns";
    /**
    * Generates CDKTF code for importing a DataCloudflareZoneLockdowns resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZoneLockdowns to import
    * @param importFromId The id of the existing DataCloudflareZoneLockdowns that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdowns#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZoneLockdowns to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_lockdowns cloudflare_zone_lockdowns} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZoneLockdownsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZoneLockdownsConfig);
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
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
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
    private _result;
    get result(): DataCloudflareZoneLockdownsResultList;
    private _uriSearch?;
    get uriSearch(): string;
    set uriSearch(value: string);
    resetUriSearch(): void;
    get uriSearchInput(): string;
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
