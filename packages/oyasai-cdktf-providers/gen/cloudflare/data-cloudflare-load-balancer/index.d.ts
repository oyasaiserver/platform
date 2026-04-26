import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareLoadBalancerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer#load_balancer_id DataCloudflareLoadBalancer#load_balancer_id}
    */
    readonly loadBalancerId: string;
    /**
    * Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). Any PoPs not explicitly defined will fall back to using the corresponding country_pool, then region_pool mapping if it exists else to default_pools.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer#pop_pools DataCloudflareLoadBalancer#pop_pools}
    */
    readonly popPools?: {
        [key: string]: string[];
    } | cdktf.IResolvable;
    /**
    * A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region. Any regions not explicitly defined will fall back to using default_pools.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer#region_pools DataCloudflareLoadBalancer#region_pools}
    */
    readonly regionPools?: {
        [key: string]: string[];
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer#zone_id DataCloudflareLoadBalancer#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareLoadBalancerAdaptiveRouting {
}
export declare function dataCloudflareLoadBalancerAdaptiveRoutingToTerraform(struct?: DataCloudflareLoadBalancerAdaptiveRouting): any;
export declare function dataCloudflareLoadBalancerAdaptiveRoutingToHclTerraform(struct?: DataCloudflareLoadBalancerAdaptiveRouting): any;
export declare class DataCloudflareLoadBalancerAdaptiveRoutingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareLoadBalancerAdaptiveRouting | undefined;
    set internalValue(value: DataCloudflareLoadBalancerAdaptiveRouting | undefined);
    get failoverAcrossPools(): any;
}
export interface DataCloudflareLoadBalancerLocationStrategy {
}
export declare function dataCloudflareLoadBalancerLocationStrategyToTerraform(struct?: DataCloudflareLoadBalancerLocationStrategy): any;
export declare function dataCloudflareLoadBalancerLocationStrategyToHclTerraform(struct?: DataCloudflareLoadBalancerLocationStrategy): any;
export declare class DataCloudflareLoadBalancerLocationStrategyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareLoadBalancerLocationStrategy | undefined;
    set internalValue(value: DataCloudflareLoadBalancerLocationStrategy | undefined);
    get mode(): any;
    get preferEcs(): any;
}
export interface DataCloudflareLoadBalancerRandomSteering {
}
export declare function dataCloudflareLoadBalancerRandomSteeringToTerraform(struct?: DataCloudflareLoadBalancerRandomSteering): any;
export declare function dataCloudflareLoadBalancerRandomSteeringToHclTerraform(struct?: DataCloudflareLoadBalancerRandomSteering): any;
export declare class DataCloudflareLoadBalancerRandomSteeringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareLoadBalancerRandomSteering | undefined;
    set internalValue(value: DataCloudflareLoadBalancerRandomSteering | undefined);
    get defaultWeight(): any;
    private _poolWeights;
    get poolWeights(): any;
}
export interface DataCloudflareLoadBalancerRulesFixedResponse {
}
export declare function dataCloudflareLoadBalancerRulesFixedResponseToTerraform(struct?: DataCloudflareLoadBalancerRulesFixedResponse): any;
export declare function dataCloudflareLoadBalancerRulesFixedResponseToHclTerraform(struct?: DataCloudflareLoadBalancerRulesFixedResponse): any;
export declare class DataCloudflareLoadBalancerRulesFixedResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareLoadBalancerRulesFixedResponse | undefined;
    set internalValue(value: DataCloudflareLoadBalancerRulesFixedResponse | undefined);
    get contentType(): any;
    get location(): any;
    get messageBody(): any;
    get statusCode(): any;
}
export interface DataCloudflareLoadBalancerRulesOverridesAdaptiveRouting {
}
export declare function dataCloudflareLoadBalancerRulesOverridesAdaptiveRoutingToTerraform(struct?: DataCloudflareLoadBalancerRulesOverridesAdaptiveRouting): any;
export declare function dataCloudflareLoadBalancerRulesOverridesAdaptiveRoutingToHclTerraform(struct?: DataCloudflareLoadBalancerRulesOverridesAdaptiveRouting): any;
export declare class DataCloudflareLoadBalancerRulesOverridesAdaptiveRoutingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareLoadBalancerRulesOverridesAdaptiveRouting | undefined;
    set internalValue(value: DataCloudflareLoadBalancerRulesOverridesAdaptiveRouting | undefined);
    get failoverAcrossPools(): any;
}
export interface DataCloudflareLoadBalancerRulesOverridesLocationStrategy {
}
export declare function dataCloudflareLoadBalancerRulesOverridesLocationStrategyToTerraform(struct?: DataCloudflareLoadBalancerRulesOverridesLocationStrategy): any;
export declare function dataCloudflareLoadBalancerRulesOverridesLocationStrategyToHclTerraform(struct?: DataCloudflareLoadBalancerRulesOverridesLocationStrategy): any;
export declare class DataCloudflareLoadBalancerRulesOverridesLocationStrategyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareLoadBalancerRulesOverridesLocationStrategy | undefined;
    set internalValue(value: DataCloudflareLoadBalancerRulesOverridesLocationStrategy | undefined);
    get mode(): any;
    get preferEcs(): any;
}
export interface DataCloudflareLoadBalancerRulesOverridesRandomSteering {
}
export declare function dataCloudflareLoadBalancerRulesOverridesRandomSteeringToTerraform(struct?: DataCloudflareLoadBalancerRulesOverridesRandomSteering): any;
export declare function dataCloudflareLoadBalancerRulesOverridesRandomSteeringToHclTerraform(struct?: DataCloudflareLoadBalancerRulesOverridesRandomSteering): any;
export declare class DataCloudflareLoadBalancerRulesOverridesRandomSteeringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareLoadBalancerRulesOverridesRandomSteering | undefined;
    set internalValue(value: DataCloudflareLoadBalancerRulesOverridesRandomSteering | undefined);
    get defaultWeight(): any;
    private _poolWeights;
    get poolWeights(): any;
}
export interface DataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributes {
    /**
    * Configures the drain duration in seconds. This field is only used when session affinity is enabled on the load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer#drain_duration DataCloudflareLoadBalancer#drain_duration}
    */
    readonly drainDuration?: number;
}
export declare function dataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributesToTerraform(struct?: DataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributes): any;
export declare function dataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributesToHclTerraform(struct?: DataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributes): any;
export declare class DataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributes | undefined;
    set internalValue(value: DataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributes | undefined);
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
export interface DataCloudflareLoadBalancerRulesOverrides {
    /**
    * Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). Any PoPs not explicitly defined will fall back to using the corresponding country_pool, then region_pool mapping if it exists else to default_pools.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer#pop_pools DataCloudflareLoadBalancer#pop_pools}
    */
    readonly popPools?: {
        [key: string]: string[];
    } | cdktf.IResolvable;
}
export declare function dataCloudflareLoadBalancerRulesOverridesToTerraform(struct?: DataCloudflareLoadBalancerRulesOverrides): any;
export declare function dataCloudflareLoadBalancerRulesOverridesToHclTerraform(struct?: DataCloudflareLoadBalancerRulesOverrides): any;
export declare class DataCloudflareLoadBalancerRulesOverridesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareLoadBalancerRulesOverrides | undefined;
    set internalValue(value: DataCloudflareLoadBalancerRulesOverrides | undefined);
    private _adaptiveRouting;
    get adaptiveRouting(): DataCloudflareLoadBalancerRulesOverridesAdaptiveRoutingOutputReference;
    private _countryPools;
    get countryPools(): any;
    get defaultPools(): any;
    get fallbackPool(): any;
    private _locationStrategy;
    get locationStrategy(): DataCloudflareLoadBalancerRulesOverridesLocationStrategyOutputReference;
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
    get randomSteering(): DataCloudflareLoadBalancerRulesOverridesRandomSteeringOutputReference;
    private _regionPools;
    get regionPools(): any;
    get sessionAffinity(): any;
    private _sessionAffinityAttributes;
    get sessionAffinityAttributes(): DataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributesOutputReference;
    get sessionAffinityTtl(): any;
    get steeringPolicy(): any;
    get ttl(): any;
}
export interface DataCloudflareLoadBalancerRules {
}
export declare function dataCloudflareLoadBalancerRulesToTerraform(struct?: DataCloudflareLoadBalancerRules): any;
export declare function dataCloudflareLoadBalancerRulesToHclTerraform(struct?: DataCloudflareLoadBalancerRules): any;
export declare class DataCloudflareLoadBalancerRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareLoadBalancerRules | undefined;
    set internalValue(value: DataCloudflareLoadBalancerRules | undefined);
    get condition(): any;
    get disabled(): any;
    private _fixedResponse;
    get fixedResponse(): DataCloudflareLoadBalancerRulesFixedResponseOutputReference;
    get name(): any;
    private _overrides;
    get overrides(): DataCloudflareLoadBalancerRulesOverridesOutputReference;
    get priority(): any;
    get terminates(): any;
}
export declare class DataCloudflareLoadBalancerRulesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareLoadBalancerRulesOutputReference;
}
export interface DataCloudflareLoadBalancerSessionAffinityAttributes {
    /**
    * Configures the drain duration in seconds. This field is only used when session affinity is enabled on the load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer#drain_duration DataCloudflareLoadBalancer#drain_duration}
    */
    readonly drainDuration?: number;
}
export declare function dataCloudflareLoadBalancerSessionAffinityAttributesToTerraform(struct?: DataCloudflareLoadBalancerSessionAffinityAttributes): any;
export declare function dataCloudflareLoadBalancerSessionAffinityAttributesToHclTerraform(struct?: DataCloudflareLoadBalancerSessionAffinityAttributes): any;
export declare class DataCloudflareLoadBalancerSessionAffinityAttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareLoadBalancerSessionAffinityAttributes | undefined;
    set internalValue(value: DataCloudflareLoadBalancerSessionAffinityAttributes | undefined);
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
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer cloudflare_load_balancer}
*/
export declare class DataCloudflareLoadBalancer extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_load_balancer";
    /**
    * Generates CDKTF code for importing a DataCloudflareLoadBalancer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareLoadBalancer to import
    * @param importFromId The id of the existing DataCloudflareLoadBalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareLoadBalancer to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer cloudflare_load_balancer} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareLoadBalancerConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareLoadBalancerConfig);
    private _adaptiveRouting;
    get adaptiveRouting(): DataCloudflareLoadBalancerAdaptiveRoutingOutputReference;
    private _countryPools;
    get countryPools(): any;
    get createdOn(): any;
    get defaultPools(): any;
    get description(): any;
    get enabled(): any;
    get fallbackPool(): any;
    get id(): any;
    private _loadBalancerId?;
    get loadBalancerId(): string;
    set loadBalancerId(value: string);
    get loadBalancerIdInput(): string;
    private _locationStrategy;
    get locationStrategy(): DataCloudflareLoadBalancerLocationStrategyOutputReference;
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
    get randomSteering(): DataCloudflareLoadBalancerRandomSteeringOutputReference;
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
    get rules(): DataCloudflareLoadBalancerRulesList;
    get sessionAffinity(): any;
    private _sessionAffinityAttributes;
    get sessionAffinityAttributes(): DataCloudflareLoadBalancerSessionAffinityAttributesOutputReference;
    get sessionAffinityTtl(): any;
    get steeringPolicy(): any;
    get ttl(): any;
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
