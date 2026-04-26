import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareApiShieldDiscoveryOperationsConfig extends cdktf.TerraformMetaArguments {
    /**
    * When `true`, only return API Discovery results that are not saved into API Shield Endpoint Management
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_discovery_operations#diff DataCloudflareApiShieldDiscoveryOperations#diff}
    */
    readonly diff?: boolean | cdktf.IResolvable;
    /**
    * Direction to order results.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_discovery_operations#direction DataCloudflareApiShieldDiscoveryOperations#direction}
    */
    readonly direction?: string;
    /**
    * Filter results to only include endpoints containing this pattern.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_discovery_operations#endpoint DataCloudflareApiShieldDiscoveryOperations#endpoint}
    */
    readonly endpoint?: string;
    /**
    * Filter results to only include the specified hosts.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_discovery_operations#host DataCloudflareApiShieldDiscoveryOperations#host}
    */
    readonly host?: string[];
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_discovery_operations#max_items DataCloudflareApiShieldDiscoveryOperations#max_items}
    */
    readonly maxItems?: number;
    /**
    * Filter results to only include the specified HTTP methods.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_discovery_operations#method DataCloudflareApiShieldDiscoveryOperations#method}
    */
    readonly method?: string[];
    /**
    * Field to order by
    * Available values: "host", "method", "endpoint", "traffic_stats.requests", "traffic_stats.last_updated".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_discovery_operations#order DataCloudflareApiShieldDiscoveryOperations#order}
    */
    readonly order?: string;
    /**
    * Filter results to only include discovery results sourced from a particular discovery engine
    *   * `ML` - Discovered operations that were sourced using ML API Discovery
    *   * `SessionIdentifier` - Discovered operations that were sourced using Session Identifier API Discovery
    * Available values: "ML", "SessionIdentifier", "LabelDiscovery".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_discovery_operations#origin DataCloudflareApiShieldDiscoveryOperations#origin}
    */
    readonly origin?: string;
    /**
    * Filter results to only include discovery results in a particular state. States are as follows
    *   * `review` - Discovered operations that are not saved into API Shield Endpoint Management
    *   * `saved` - Discovered operations that are already saved into API Shield Endpoint Management
    *   * `ignored` - Discovered operations that have been marked as ignored
    * Available values: "review", "saved", "ignored".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_discovery_operations#state DataCloudflareApiShieldDiscoveryOperations#state}
    */
    readonly state?: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_discovery_operations#zone_id DataCloudflareApiShieldDiscoveryOperations#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats {
}
export declare function dataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsToTerraform(struct?: DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats): any;
export declare function dataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsToHclTerraform(struct?: DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats): any;
export declare class DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats | undefined;
    set internalValue(value: DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats | undefined);
    get lastUpdated(): any;
    get periodSeconds(): any;
    get requests(): any;
}
export interface DataCloudflareApiShieldDiscoveryOperationsResultFeatures {
}
export declare function dataCloudflareApiShieldDiscoveryOperationsResultFeaturesToTerraform(struct?: DataCloudflareApiShieldDiscoveryOperationsResultFeatures): any;
export declare function dataCloudflareApiShieldDiscoveryOperationsResultFeaturesToHclTerraform(struct?: DataCloudflareApiShieldDiscoveryOperationsResultFeatures): any;
export declare class DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareApiShieldDiscoveryOperationsResultFeatures | undefined;
    set internalValue(value: DataCloudflareApiShieldDiscoveryOperationsResultFeatures | undefined);
    private _trafficStats;
    get trafficStats(): DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference;
}
export interface DataCloudflareApiShieldDiscoveryOperationsResult {
}
export declare function dataCloudflareApiShieldDiscoveryOperationsResultToTerraform(struct?: DataCloudflareApiShieldDiscoveryOperationsResult): any;
export declare function dataCloudflareApiShieldDiscoveryOperationsResultToHclTerraform(struct?: DataCloudflareApiShieldDiscoveryOperationsResult): any;
export declare class DataCloudflareApiShieldDiscoveryOperationsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareApiShieldDiscoveryOperationsResult | undefined;
    set internalValue(value: DataCloudflareApiShieldDiscoveryOperationsResult | undefined);
    get endpoint(): any;
    private _features;
    get features(): DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference;
    get host(): any;
    get id(): any;
    get lastUpdated(): any;
    get method(): any;
    get origin(): any;
    get state(): any;
}
export declare class DataCloudflareApiShieldDiscoveryOperationsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareApiShieldDiscoveryOperationsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_discovery_operations cloudflare_api_shield_discovery_operations}
*/
export declare class DataCloudflareApiShieldDiscoveryOperations extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_api_shield_discovery_operations";
    /**
    * Generates CDKTF code for importing a DataCloudflareApiShieldDiscoveryOperations resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareApiShieldDiscoveryOperations to import
    * @param importFromId The id of the existing DataCloudflareApiShieldDiscoveryOperations that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_discovery_operations#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareApiShieldDiscoveryOperations to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_discovery_operations cloudflare_api_shield_discovery_operations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareApiShieldDiscoveryOperationsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareApiShieldDiscoveryOperationsConfig);
    private _diff?;
    get diff(): boolean | cdktf.IResolvable;
    set diff(value: boolean | cdktf.IResolvable);
    resetDiff(): void;
    get diffInput(): any;
    private _direction?;
    get direction(): string;
    set direction(value: string);
    resetDirection(): void;
    get directionInput(): string;
    private _endpoint?;
    get endpoint(): string;
    set endpoint(value: string);
    resetEndpoint(): void;
    get endpointInput(): string;
    private _host?;
    get host(): string[];
    set host(value: string[]);
    resetHost(): void;
    get hostInput(): string[];
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _method?;
    get method(): string[];
    set method(value: string[]);
    resetMethod(): void;
    get methodInput(): string[];
    private _order?;
    get order(): string;
    set order(value: string);
    resetOrder(): void;
    get orderInput(): string;
    private _origin?;
    get origin(): string;
    set origin(value: string);
    resetOrigin(): void;
    get originInput(): string;
    private _result;
    get result(): DataCloudflareApiShieldDiscoveryOperationsResultList;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string;
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
