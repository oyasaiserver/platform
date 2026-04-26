import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareLoadBalancersConfig extends cdktf.TerraformMetaArguments {
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancers#max_items DataCloudflareLoadBalancers#max_items}
    */
    readonly maxItems?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancers#zone_id DataCloudflareLoadBalancers#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareLoadBalancersResultAdaptiveRouting {
}
export declare function dataCloudflareLoadBalancersResultAdaptiveRoutingToTerraform(struct?: DataCloudflareLoadBalancersResultAdaptiveRouting): any;
export declare function dataCloudflareLoadBalancersResultAdaptiveRoutingToHclTerraform(struct?: DataCloudflareLoadBalancersResultAdaptiveRouting): any;
export declare class DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareLoadBalancersResultAdaptiveRouting | undefined;
    set internalValue(value: DataCloudflareLoadBalancersResultAdaptiveRouting | undefined);
    get failoverAcrossPools(): any;
}
export interface DataCloudflareLoadBalancersResultLocationStrategy {
}
export declare function dataCloudflareLoadBalancersResultLocationStrategyToTerraform(struct?: DataCloudflareLoadBalancersResultLocationStrategy): any;
export declare function dataCloudflareLoadBalancersResultLocationStrategyToHclTerraform(struct?: DataCloudflareLoadBalancersResultLocationStrategy): any;
export declare class DataCloudflareLoadBalancersResultLocationStrategyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareLoadBalancersResultLocationStrategy | undefined;
    set internalValue(value: DataCloudflareLoadBalancersResultLocationStrategy | undefined);
    get mode(): any;
    get preferEcs(): any;
}
export interface DataCloudflareLoadBalancersResultRandomSteering {
}
export declare function dataCloudflareLoadBalancersResultRandomSteeringToTerraform(struct?: DataCloudflareLoadBalancersResultRandomSteering): any;
export declare function dataCloudflareLoadBalancersResultRandomSteeringToHclTerraform(struct?: DataCloudflareLoadBalancersResultRandomSteering): any;
export declare class DataCloudflareLoadBalancersResultRandomSteeringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareLoadBalancersResultRandomSteering | undefined;
    set internalValue(value: DataCloudflareLoadBalancersResultRandomSteering | undefined);
    get defaultWeight(): any;
    private _poolWeights;
    get poolWeights(): any;
}
export interface DataCloudflareLoadBalancersResultRulesFixedResponse {
}
export declare function dataCloudflareLoadBalancersResultRulesFixedResponseToTerraform(struct?: DataCloudflareLoadBalancersResultRulesFixedResponse): any;
export declare function dataCloudflareLoadBalancersResultRulesFixedResponseToHclTerraform(struct?: DataCloudflareLoadBalancersResultRulesFixedResponse): any;
export declare class DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareLoadBalancersResultRulesFixedResponse | undefined;
    set internalValue(value: DataCloudflareLoadBalancersResultRulesFixedResponse | undefined);
    get contentType(): any;
    get location(): any;
    get messageBody(): any;
    get statusCode(): any;
}
export interface DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting {
}
export declare function dataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingToTerraform(struct?: DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting): any;
export declare function dataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingToHclTerraform(struct?: DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting): any;
export declare class DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting | undefined;
    set internalValue(value: DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting | undefined);
    get failoverAcrossPools(): any;
}
export interface DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy {
}
export declare function dataCloudflareLoadBalancersResultRulesOverridesLocationStrategyToTerraform(struct?: DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy): any;
export declare function dataCloudflareLoadBalancersResultRulesOverridesLocationStrategyToHclTerraform(struct?: DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy): any;
export declare class DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy | undefined;
    set internalValue(value: DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy | undefined);
    get mode(): any;
    get preferEcs(): any;
}
export interface DataCloudflareLoadBalancersResultRulesOverridesRandomSteering {
}
export declare function dataCloudflareLoadBalancersResultRulesOverridesRandomSteeringToTerraform(struct?: DataCloudflareLoadBalancersResultRulesOverridesRandomSteering): any;
export declare function dataCloudflareLoadBalancersResultRulesOverridesRandomSteeringToHclTerraform(struct?: DataCloudflareLoadBalancersResultRulesOverridesRandomSteering): any;
export declare class DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareLoadBalancersResultRulesOverridesRandomSteering | undefined;
    set internalValue(value: DataCloudflareLoadBalancersResultRulesOverridesRandomSteering | undefined);
    get defaultWeight(): any;
    private _poolWeights;
    get poolWeights(): any;
}
export interface DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes {
    /**
    * Configures the drain duration in seconds. This field is only used when session affinity is enabled on the load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancers#drain_duration DataCloudflareLoadBalancers#drain_duration}
    */
    readonly drainDuration?: number;
}
export declare function dataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesToTerraform(struct?: DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes): any;
export declare function dataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesToHclTerraform(struct?: DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes): any;
export declare class DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes | undefined;
    set internalValue(value: DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes | undefined);
    private _drainDuration?;
    get drainDuration(): number;
    set drainDuration(value: number);
    resetDrainDuration(): void;
    get drainDurationInput(): number;
    get headers(): any;
    get requireAllHeaders(): any;
    get samesite(): any;
    get secure(): any;
    get zeroDowntimeFailover(): any;
}
export interface DataCloudflareLoadBalancersResultRulesOverrides {
    /**
    * A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country. Any country not explicitly defined will fall back to using the corresponding region_pool mapping if it exists else to default_pools.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancers#country_pools DataCloudflareLoadBalancers#country_pools}
    */
    readonly countryPools?: {
        [key: string]: string[];
    } | cdktf.IResolvable;
    /**
    * Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). Any PoPs not explicitly defined will fall back to using the corresponding country_pool, then region_pool mapping if it exists else to default_pools.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancers#pop_pools DataCloudflareLoadBalancers#pop_pools}
    */
    readonly popPools?: {
        [key: string]: string[];
    } | cdktf.IResolvable;
    /**
    * A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region. Any regions not explicitly defined will fall back to using default_pools.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancers#region_pools DataCloudflareLoadBalancers#region_pools}
    */
    readonly regionPools?: {
        [key: string]: string[];
    } | cdktf.IResolvable;
}
export declare function dataCloudflareLoadBalancersResultRulesOverridesToTerraform(struct?: DataCloudflareLoadBalancersResultRulesOverrides): any;
export declare function dataCloudflareLoadBalancersResultRulesOverridesToHclTerraform(struct?: DataCloudflareLoadBalancersResultRulesOverrides): any;
export declare class DataCloudflareLoadBalancersResultRulesOverridesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareLoadBalancersResultRulesOverrides | undefined;
    set internalValue(value: DataCloudflareLoadBalancersResultRulesOverrides | undefined);
    private _adaptiveRouting;
    get adaptiveRouting(): DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference;
    private _countryPools?;
    get countryPools(): {
        [key: string]: string[];
    } | cdktf.IResolvable;
    set countryPools(value: {
        [key: string]: string[];
    } | cdktf.IResolvable);
    resetCountryPools(): void;
    get countryPoolsInput(): any;
    get defaultPools(): any;
    get fallbackPool(): any;
    private _locationStrategy;
    get locationStrategy(): DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference;
    private _popPools?;
    get popPools(): {
        [key: string]: string[];
    } | cdktf.IResolvable;
    set popPools(value: {
        [key: string]: string[];
    } | cdktf.IResolvable);
    resetPopPools(): void;
    get popPoolsInput(): any;
    private _randomSteering;
    get randomSteering(): DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference;
    private _regionPools?;
    get regionPools(): {
        [key: string]: string[];
    } | cdktf.IResolvable;
    set regionPools(value: {
        [key: string]: string[];
    } | cdktf.IResolvable);
    resetRegionPools(): void;
    get regionPoolsInput(): any;
    get sessionAffinity(): any;
    private _sessionAffinityAttributes;
    get sessionAffinityAttributes(): DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference;
    get sessionAffinityTtl(): any;
    get steeringPolicy(): any;
    get ttl(): any;
}
export interface DataCloudflareLoadBalancersResultRules {
}
export declare function dataCloudflareLoadBalancersResultRulesToTerraform(struct?: DataCloudflareLoadBalancersResultRules): any;
export declare function dataCloudflareLoadBalancersResultRulesToHclTerraform(struct?: DataCloudflareLoadBalancersResultRules): any;
export declare class DataCloudflareLoadBalancersResultRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareLoadBalancersResultRules | undefined;
    set internalValue(value: DataCloudflareLoadBalancersResultRules | undefined);
    get condition(): any;
    get disabled(): any;
    private _fixedResponse;
    get fixedResponse(): DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference;
    get name(): any;
    private _overrides;
    get overrides(): DataCloudflareLoadBalancersResultRulesOverridesOutputReference;
    get priority(): any;
    get terminates(): any;
}
export declare class DataCloudflareLoadBalancersResultRulesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareLoadBalancersResultRulesOutputReference;
}
export interface DataCloudflareLoadBalancersResultSessionAffinityAttributes {
    /**
    * Configures the drain duration in seconds. This field is only used when session affinity is enabled on the load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancers#drain_duration DataCloudflareLoadBalancers#drain_duration}
    */
    readonly drainDuration?: number;
}
export declare function dataCloudflareLoadBalancersResultSessionAffinityAttributesToTerraform(struct?: DataCloudflareLoadBalancersResultSessionAffinityAttributes): any;
export declare function dataCloudflareLoadBalancersResultSessionAffinityAttributesToHclTerraform(struct?: DataCloudflareLoadBalancersResultSessionAffinityAttributes): any;
export declare class DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareLoadBalancersResultSessionAffinityAttributes | undefined;
    set internalValue(value: DataCloudflareLoadBalancersResultSessionAffinityAttributes | undefined);
    private _drainDuration?;
    get drainDuration(): number;
    set drainDuration(value: number);
    resetDrainDuration(): void;
    get drainDurationInput(): number;
    get headers(): any;
    get requireAllHeaders(): any;
    get samesite(): any;
    get secure(): any;
    get zeroDowntimeFailover(): any;
}
export interface DataCloudflareLoadBalancersResult {
    /**
    * A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country. Any country not explicitly defined will fall back to using the corresponding region_pool mapping if it exists else to default_pools.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancers#country_pools DataCloudflareLoadBalancers#country_pools}
    */
    readonly countryPools?: {
        [key: string]: string[];
    } | cdktf.IResolvable;
    /**
    * Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). Any PoPs not explicitly defined will fall back to using the corresponding country_pool, then region_pool mapping if it exists else to default_pools.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancers#pop_pools DataCloudflareLoadBalancers#pop_pools}
    */
    readonly popPools?: {
        [key: string]: string[];
    } | cdktf.IResolvable;
    /**
    * A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region. Any regions not explicitly defined will fall back to using default_pools.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancers#region_pools DataCloudflareLoadBalancers#region_pools}
    */
    readonly regionPools?: {
        [key: string]: string[];
    } | cdktf.IResolvable;
}
export declare function dataCloudflareLoadBalancersResultToTerraform(struct?: DataCloudflareLoadBalancersResult): any;
export declare function dataCloudflareLoadBalancersResultToHclTerraform(struct?: DataCloudflareLoadBalancersResult): any;
export declare class DataCloudflareLoadBalancersResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareLoadBalancersResult | undefined;
    set internalValue(value: DataCloudflareLoadBalancersResult | undefined);
    private _adaptiveRouting;
    get adaptiveRouting(): DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference;
    private _countryPools?;
    get countryPools(): {
        [key: string]: string[];
    } | cdktf.IResolvable;
    set countryPools(value: {
        [key: string]: string[];
    } | cdktf.IResolvable);
    resetCountryPools(): void;
    get countryPoolsInput(): any;
    get createdOn(): any;
    get defaultPools(): any;
    get description(): any;
    get enabled(): any;
    get fallbackPool(): any;
    get id(): any;
    private _locationStrategy;
    get locationStrategy(): DataCloudflareLoadBalancersResultLocationStrategyOutputReference;
    get modifiedOn(): any;
    get name(): any;
    get networks(): any;
    private _popPools?;
    get popPools(): {
        [key: string]: string[];
    } | cdktf.IResolvable;
    set popPools(value: {
        [key: string]: string[];
    } | cdktf.IResolvable);
    resetPopPools(): void;
    get popPoolsInput(): any;
    get proxied(): any;
    private _randomSteering;
    get randomSteering(): DataCloudflareLoadBalancersResultRandomSteeringOutputReference;
    private _regionPools?;
    get regionPools(): {
        [key: string]: string[];
    } | cdktf.IResolvable;
    set regionPools(value: {
        [key: string]: string[];
    } | cdktf.IResolvable);
    resetRegionPools(): void;
    get regionPoolsInput(): any;
    private _rules;
    get rules(): DataCloudflareLoadBalancersResultRulesList;
    get sessionAffinity(): any;
    private _sessionAffinityAttributes;
    get sessionAffinityAttributes(): DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference;
    get sessionAffinityTtl(): any;
    get steeringPolicy(): any;
    get ttl(): any;
    get zoneName(): any;
}
export declare class DataCloudflareLoadBalancersResultList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataCloudflareLoadBalancersResult[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataCloudflareLoadBalancersResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancers cloudflare_load_balancers}
*/
export declare class DataCloudflareLoadBalancers extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_load_balancers";
    /**
    * Generates CDKTF code for importing a DataCloudflareLoadBalancers resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareLoadBalancers to import
    * @param importFromId The id of the existing DataCloudflareLoadBalancers that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancers#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareLoadBalancers to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancers cloudflare_load_balancers} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareLoadBalancersConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareLoadBalancersConfig);
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareLoadBalancersResultList;
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
