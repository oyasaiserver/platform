import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LoadBalancerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Controls features that modify the routing of requests to pools and origins in response to dynamic conditions, such as during the interval between active health monitoring requests. For example, zero-downtime failover occurs immediately when an origin becomes unavailable due to HTTP 521, 522, or 523 response codes. If there is another healthy origin in the same pool, the request is retried once against this alternate origin.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#adaptive_routing LoadBalancer#adaptive_routing}
    */
    readonly adaptiveRouting?: LoadBalancerAdaptiveRouting;
    /**
    * A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country. Any country not explicitly defined will fall back to using the corresponding region_pool mapping if it exists else to default_pools.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#country_pools LoadBalancer#country_pools}
    */
    readonly countryPools?: {
        [key: string]: string[];
    } | cdktf.IResolvable;
    /**
    * A list of pool IDs ordered by their failover priority. Pools defined here are used by default, or when region_pools are not configured for a given region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#default_pools LoadBalancer#default_pools}
    */
    readonly defaultPools: string[];
    /**
    * Object description.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#description LoadBalancer#description}
    */
    readonly description?: string;
    /**
    * Whether to enable (the default) this load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#enabled LoadBalancer#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * The pool ID to use when all other pools are detected as unhealthy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#fallback_pool LoadBalancer#fallback_pool}
    */
    readonly fallbackPool: string;
    /**
    * Controls location-based steering for non-proxied requests. See `steering_policy` to learn how steering is affected.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#location_strategy LoadBalancer#location_strategy}
    */
    readonly locationStrategy?: LoadBalancerLocationStrategy;
    /**
    * The DNS hostname to associate with your Load Balancer. If this hostname already exists as a DNS record in Cloudflare's DNS, the Load Balancer will take precedence and the DNS record will not be used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#name LoadBalancer#name}
    */
    readonly name: string;
    /**
    * List of networks where Load Balancer or Pool is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#networks LoadBalancer#networks}
    */
    readonly networks?: string[];
    /**
    * Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). Any PoPs not explicitly defined will fall back to using the corresponding country_pool, then region_pool mapping if it exists else to default_pools.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#pop_pools LoadBalancer#pop_pools}
    */
    readonly popPools?: {
        [key: string]: string[];
    } | cdktf.IResolvable;
    /**
    * Whether the hostname should be gray clouded (false) or orange clouded (true).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#proxied LoadBalancer#proxied}
    */
    readonly proxied?: boolean | cdktf.IResolvable;
    /**
    * Configures pool weights.
    * - `steering_policy="random"`: A random pool is selected with probability proportional to pool weights.
    * - `steering_policy="least_outstanding_requests"`: Use pool weights to scale each pool's outstanding requests.
    * - `steering_policy="least_connections"`: Use pool weights to scale each pool's open connections.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#random_steering LoadBalancer#random_steering}
    */
    readonly randomSteering?: LoadBalancerRandomSteering;
    /**
    * A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region. Any regions not explicitly defined will fall back to using default_pools.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#region_pools LoadBalancer#region_pools}
    */
    readonly regionPools?: {
        [key: string]: string[];
    } | cdktf.IResolvable;
    /**
    * BETA Field Not General Access: A list of rules for this load balancer to execute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#rules LoadBalancer#rules}
    */
    readonly rules?: LoadBalancerRules[] | cdktf.IResolvable;
    /**
    * Specifies the type of session affinity the load balancer should use unless specified as `"none"`. The supported types are: - `"cookie"`: On the first request to a proxied load balancer, a cookie is generated, encoding information of which origin the request will be forwarded to. Subsequent requests, by the same client to the same load balancer, will be sent to the origin server the cookie encodes, for the duration of the cookie and as long as the origin server remains healthy. If the cookie has expired or the origin server is unhealthy, then a new origin server is calculated and used. - `"ip_cookie"`: Behaves the same as `"cookie"` except the initial origin selection is stable and based on the client's ip address. - `"header"`: On the first request to a proxied load balancer, a session key based on the configured HTTP headers (see `session_affinity_attributes.headers`) is generated, encoding the request headers used for storing in the load balancer session state which origin the request will be forwarded to. Subsequent requests to the load balancer with the same headers will be sent to the same origin server, for the duration of the session and as long as the origin server remains healthy. If the session has been idle for the duration of `session_affinity_ttl` seconds or the origin server is unhealthy, then a new origin server is calculated and used. See `headers` in `session_affinity_attributes` for additional required configuration.
    * Available values: "none", "cookie", "ip_cookie", "header".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#session_affinity LoadBalancer#session_affinity}
    */
    readonly sessionAffinity?: string;
    /**
    * Configures attributes for session affinity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#session_affinity_attributes LoadBalancer#session_affinity_attributes}
    */
    readonly sessionAffinityAttributes?: LoadBalancerSessionAffinityAttributes;
    /**
    * Time, in seconds, until a client's session expires after being created. Once the expiry time has been reached, subsequent requests may get sent to a different origin server. The accepted ranges per `session_affinity` policy are: - `"cookie"` / `"ip_cookie"`: The current default of 23 hours will be used unless explicitly set. The accepted range of values is between [1800, 604800]. - `"header"`: The current default of 1800 seconds will be used unless explicitly set. The accepted range of values is between [30, 3600]. Note: With session affinity by header, sessions only expire after they haven't been used for the number of seconds specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#session_affinity_ttl LoadBalancer#session_affinity_ttl}
    */
    readonly sessionAffinityTtl?: number;
    /**
    * Steering Policy for this load balancer.
    * - `"off"`: Use `default_pools`.
    * - `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied requests, the country for `country_pools` is determined by `location_strategy`.
    * - `"random"`: Select a pool randomly.
    * - `"dynamic_latency"`: Use round trip time to select the closest pool in default_pools (requires pool health checks).
    * - `"proximity"`: Use the pools' latitude and longitude to select the closest pool using the Cloudflare PoP location for proxied requests or the location determined by `location_strategy` for non-proxied requests.
    * - `"least_outstanding_requests"`: Select a pool by taking into consideration `random_steering` weights, as well as each pool's number of outstanding requests. Pools with more pending requests are weighted proportionately less relative to others.
    * - `"least_connections"`: Select a pool by taking into consideration `random_steering` weights, as well as each pool's number of open connections. Pools with more open connections are weighted proportionately less relative to others. Supported for HTTP/1 and HTTP/2 connections.
    * - `""`: Will map to `"geo"` if you use `region_pools`/`country_pools`/`pop_pools` otherwise `"off"`.
    * Available values: "off", "geo", "random", "dynamic_latency", "proximity", "least_outstanding_requests", "least_connections", "".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#steering_policy LoadBalancer#steering_policy}
    */
    readonly steeringPolicy?: string;
    /**
    * Time to live (TTL) of the DNS entry for the IP address returned by this load balancer. This only applies to gray-clouded (unproxied) load balancers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#ttl LoadBalancer#ttl}
    */
    readonly ttl?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#zone_id LoadBalancer#zone_id}
    */
    readonly zoneId?: string;
}
export interface LoadBalancerAdaptiveRouting {
    /**
    * Extends zero-downtime failover of requests to healthy origins from alternate pools, when no healthy alternate exists in the same pool, according to the failover order defined by traffic and origin steering. When set false (the default) zero-downtime failover will only occur between origins within the same pool. See `session_affinity_attributes` for control over when sessions are broken or reassigned.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#failover_across_pools LoadBalancer#failover_across_pools}
    */
    readonly failoverAcrossPools?: boolean | cdktf.IResolvable;
}
export declare function loadBalancerAdaptiveRoutingToTerraform(struct?: LoadBalancerAdaptiveRouting | cdktf.IResolvable): any;
export declare function loadBalancerAdaptiveRoutingToHclTerraform(struct?: LoadBalancerAdaptiveRouting | cdktf.IResolvable): any;
export declare class LoadBalancerAdaptiveRoutingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LoadBalancerAdaptiveRouting | cdktf.IResolvable | undefined;
    set internalValue(value: LoadBalancerAdaptiveRouting | cdktf.IResolvable | undefined);
    private _failoverAcrossPools?;
    get failoverAcrossPools(): boolean | cdktf.IResolvable;
    set failoverAcrossPools(value: boolean | cdktf.IResolvable);
    resetFailoverAcrossPools(): void;
    get failoverAcrossPoolsInput(): any;
}
export interface LoadBalancerLocationStrategy {
    /**
    * Determines the authoritative location when ECS is not preferred, does not exist in the request, or its GeoIP lookup is unsuccessful.
    * - `"pop"`: Use the Cloudflare PoP location.
    * - `"resolver_ip"`: Use the DNS resolver GeoIP location. If the GeoIP lookup is unsuccessful, use the Cloudflare PoP location.
    * Available values: "pop", "resolver_ip".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#mode LoadBalancer#mode}
    */
    readonly mode?: string;
    /**
    * Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the authoritative location.
    * - `"always"`: Always prefer ECS.
    * - `"never"`: Never prefer ECS.
    * - `"proximity"`: Prefer ECS only when `steering_policy="proximity"`.
    * - `"geo"`: Prefer ECS only when `steering_policy="geo"`.
    * Available values: "always", "never", "proximity", "geo".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#prefer_ecs LoadBalancer#prefer_ecs}
    */
    readonly preferEcs?: string;
}
export declare function loadBalancerLocationStrategyToTerraform(struct?: LoadBalancerLocationStrategy | cdktf.IResolvable): any;
export declare function loadBalancerLocationStrategyToHclTerraform(struct?: LoadBalancerLocationStrategy | cdktf.IResolvable): any;
export declare class LoadBalancerLocationStrategyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LoadBalancerLocationStrategy | cdktf.IResolvable | undefined;
    set internalValue(value: LoadBalancerLocationStrategy | cdktf.IResolvable | undefined);
    private _mode?;
    get mode(): string;
    set mode(value: string);
    resetMode(): void;
    get modeInput(): string;
    private _preferEcs?;
    get preferEcs(): string;
    set preferEcs(value: string);
    resetPreferEcs(): void;
    get preferEcsInput(): string;
}
export interface LoadBalancerRandomSteering {
    /**
    * The default weight for pools in the load balancer that are not specified in the pool_weights map.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#default_weight LoadBalancer#default_weight}
    */
    readonly defaultWeight?: number;
    /**
    * A mapping of pool IDs to custom weights. The weight is relative to other pools in the load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#pool_weights LoadBalancer#pool_weights}
    */
    readonly poolWeights?: {
        [key: string]: number;
    };
}
export declare function loadBalancerRandomSteeringToTerraform(struct?: LoadBalancerRandomSteering | cdktf.IResolvable): any;
export declare function loadBalancerRandomSteeringToHclTerraform(struct?: LoadBalancerRandomSteering | cdktf.IResolvable): any;
export declare class LoadBalancerRandomSteeringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LoadBalancerRandomSteering | cdktf.IResolvable | undefined;
    set internalValue(value: LoadBalancerRandomSteering | cdktf.IResolvable | undefined);
    private _defaultWeight?;
    get defaultWeight(): number;
    set defaultWeight(value: number);
    resetDefaultWeight(): void;
    get defaultWeightInput(): number;
    private _poolWeights?;
    get poolWeights(): {
        [key: string]: number;
    };
    set poolWeights(value: {
        [key: string]: number;
    });
    resetPoolWeights(): void;
    get poolWeightsInput(): {
        [key: string]: number;
    };
}
export interface LoadBalancerRulesFixedResponse {
    /**
    * The http 'Content-Type' header to include in the response.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#content_type LoadBalancer#content_type}
    */
    readonly contentType?: string;
    /**
    * The http 'Location' header to include in the response.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#location LoadBalancer#location}
    */
    readonly location?: string;
    /**
    * Text to include as the http body.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#message_body LoadBalancer#message_body}
    */
    readonly messageBody?: string;
    /**
    * The http status code to respond with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#status_code LoadBalancer#status_code}
    */
    readonly statusCode?: number;
}
export declare function loadBalancerRulesFixedResponseToTerraform(struct?: LoadBalancerRulesFixedResponse | cdktf.IResolvable): any;
export declare function loadBalancerRulesFixedResponseToHclTerraform(struct?: LoadBalancerRulesFixedResponse | cdktf.IResolvable): any;
export declare class LoadBalancerRulesFixedResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LoadBalancerRulesFixedResponse | cdktf.IResolvable | undefined;
    set internalValue(value: LoadBalancerRulesFixedResponse | cdktf.IResolvable | undefined);
    private _contentType?;
    get contentType(): string;
    set contentType(value: string);
    resetContentType(): void;
    get contentTypeInput(): string;
    private _location?;
    get location(): string;
    set location(value: string);
    resetLocation(): void;
    get locationInput(): string;
    private _messageBody?;
    get messageBody(): string;
    set messageBody(value: string);
    resetMessageBody(): void;
    get messageBodyInput(): string;
    private _statusCode?;
    get statusCode(): number;
    set statusCode(value: number);
    resetStatusCode(): void;
    get statusCodeInput(): number;
}
export interface LoadBalancerRulesOverridesAdaptiveRouting {
    /**
    * Extends zero-downtime failover of requests to healthy origins from alternate pools, when no healthy alternate exists in the same pool, according to the failover order defined by traffic and origin steering. When set false (the default) zero-downtime failover will only occur between origins within the same pool. See `session_affinity_attributes` for control over when sessions are broken or reassigned.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#failover_across_pools LoadBalancer#failover_across_pools}
    */
    readonly failoverAcrossPools?: boolean | cdktf.IResolvable;
}
export declare function loadBalancerRulesOverridesAdaptiveRoutingToTerraform(struct?: LoadBalancerRulesOverridesAdaptiveRouting | cdktf.IResolvable): any;
export declare function loadBalancerRulesOverridesAdaptiveRoutingToHclTerraform(struct?: LoadBalancerRulesOverridesAdaptiveRouting | cdktf.IResolvable): any;
export declare class LoadBalancerRulesOverridesAdaptiveRoutingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LoadBalancerRulesOverridesAdaptiveRouting | cdktf.IResolvable | undefined;
    set internalValue(value: LoadBalancerRulesOverridesAdaptiveRouting | cdktf.IResolvable | undefined);
    private _failoverAcrossPools?;
    get failoverAcrossPools(): boolean | cdktf.IResolvable;
    set failoverAcrossPools(value: boolean | cdktf.IResolvable);
    resetFailoverAcrossPools(): void;
    get failoverAcrossPoolsInput(): any;
}
export interface LoadBalancerRulesOverridesLocationStrategy {
    /**
    * Determines the authoritative location when ECS is not preferred, does not exist in the request, or its GeoIP lookup is unsuccessful.
    * - `"pop"`: Use the Cloudflare PoP location.
    * - `"resolver_ip"`: Use the DNS resolver GeoIP location. If the GeoIP lookup is unsuccessful, use the Cloudflare PoP location.
    * Available values: "pop", "resolver_ip".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#mode LoadBalancer#mode}
    */
    readonly mode?: string;
    /**
    * Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the authoritative location.
    * - `"always"`: Always prefer ECS.
    * - `"never"`: Never prefer ECS.
    * - `"proximity"`: Prefer ECS only when `steering_policy="proximity"`.
    * - `"geo"`: Prefer ECS only when `steering_policy="geo"`.
    * Available values: "always", "never", "proximity", "geo".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#prefer_ecs LoadBalancer#prefer_ecs}
    */
    readonly preferEcs?: string;
}
export declare function loadBalancerRulesOverridesLocationStrategyToTerraform(struct?: LoadBalancerRulesOverridesLocationStrategy | cdktf.IResolvable): any;
export declare function loadBalancerRulesOverridesLocationStrategyToHclTerraform(struct?: LoadBalancerRulesOverridesLocationStrategy | cdktf.IResolvable): any;
export declare class LoadBalancerRulesOverridesLocationStrategyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LoadBalancerRulesOverridesLocationStrategy | cdktf.IResolvable | undefined;
    set internalValue(value: LoadBalancerRulesOverridesLocationStrategy | cdktf.IResolvable | undefined);
    private _mode?;
    get mode(): string;
    set mode(value: string);
    resetMode(): void;
    get modeInput(): string;
    private _preferEcs?;
    get preferEcs(): string;
    set preferEcs(value: string);
    resetPreferEcs(): void;
    get preferEcsInput(): string;
}
export interface LoadBalancerRulesOverridesRandomSteering {
    /**
    * The default weight for pools in the load balancer that are not specified in the pool_weights map.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#default_weight LoadBalancer#default_weight}
    */
    readonly defaultWeight?: number;
    /**
    * A mapping of pool IDs to custom weights. The weight is relative to other pools in the load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#pool_weights LoadBalancer#pool_weights}
    */
    readonly poolWeights?: {
        [key: string]: number;
    };
}
export declare function loadBalancerRulesOverridesRandomSteeringToTerraform(struct?: LoadBalancerRulesOverridesRandomSteering | cdktf.IResolvable): any;
export declare function loadBalancerRulesOverridesRandomSteeringToHclTerraform(struct?: LoadBalancerRulesOverridesRandomSteering | cdktf.IResolvable): any;
export declare class LoadBalancerRulesOverridesRandomSteeringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LoadBalancerRulesOverridesRandomSteering | cdktf.IResolvable | undefined;
    set internalValue(value: LoadBalancerRulesOverridesRandomSteering | cdktf.IResolvable | undefined);
    private _defaultWeight?;
    get defaultWeight(): number;
    set defaultWeight(value: number);
    resetDefaultWeight(): void;
    get defaultWeightInput(): number;
    private _poolWeights?;
    get poolWeights(): {
        [key: string]: number;
    };
    set poolWeights(value: {
        [key: string]: number;
    });
    resetPoolWeights(): void;
    get poolWeightsInput(): {
        [key: string]: number;
    };
}
export interface LoadBalancerRulesOverridesSessionAffinityAttributes {
    /**
    * Configures the drain duration in seconds. This field is only used when session affinity is enabled on the load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#drain_duration LoadBalancer#drain_duration}
    */
    readonly drainDuration?: number;
    /**
    * Configures the names of HTTP headers to base session affinity on when header `session_affinity` is enabled. At least one HTTP header name must be provided. To specify the exact cookies to be used, include an item in the following format: `"cookie:<cookie-name-1>,<cookie-name-2>"` (example) where everything after the colon is a comma-separated list of cookie names. Providing only `"cookie"` will result in all cookies being used. The default max number of HTTP header names that can be provided depends on your plan: 5 for Enterprise, 1 for all other plans.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#headers LoadBalancer#headers}
    */
    readonly headers?: string[];
    /**
    * When header `session_affinity` is enabled, this option can be used to specify how HTTP headers on load balancing requests will be used. The supported values are: - `"true"`: Load balancing requests must contain *all* of the HTTP headers specified by the `headers` session affinity attribute, otherwise sessions aren't created. - `"false"`: Load balancing requests must contain *at least one* of the HTTP headers specified by the `headers` session affinity attribute, otherwise sessions aren't created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#require_all_headers LoadBalancer#require_all_headers}
    */
    readonly requireAllHeaders?: boolean | cdktf.IResolvable;
    /**
    * Configures the SameSite attribute on session affinity cookie. Value "Auto" will be translated to "Lax" or "None" depending if Always Use HTTPS is enabled. Note: when using value "None", the secure attribute can not be set to "Never".
    * Available values: "Auto", "Lax", "None", "Strict".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#samesite LoadBalancer#samesite}
    */
    readonly samesite?: string;
    /**
    * Configures the Secure attribute on session affinity cookie. Value "Always" indicates the Secure attribute will be set in the Set-Cookie header, "Never" indicates the Secure attribute will not be set, and "Auto" will set the Secure attribute depending if Always Use HTTPS is enabled.
    * Available values: "Auto", "Always", "Never".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#secure LoadBalancer#secure}
    */
    readonly secure?: string;
    /**
    * Configures the zero-downtime failover between origins within a pool when session affinity is enabled. This feature is currently incompatible with Argo, Tiered Cache, and Bandwidth Alliance. The supported values are: - `"none"`: No failover takes place for sessions pinned to the origin (default). - `"temporary"`: Traffic will be sent to another other healthy origin until the originally pinned origin is available; note that this can potentially result in heavy origin flapping. - `"sticky"`: The session affinity cookie is updated and subsequent requests are sent to the new origin. Note: Zero-downtime failover with sticky sessions is currently not supported for session affinity by header.
    * Available values: "none", "temporary", "sticky".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#zero_downtime_failover LoadBalancer#zero_downtime_failover}
    */
    readonly zeroDowntimeFailover?: string;
}
export declare function loadBalancerRulesOverridesSessionAffinityAttributesToTerraform(struct?: LoadBalancerRulesOverridesSessionAffinityAttributes | cdktf.IResolvable): any;
export declare function loadBalancerRulesOverridesSessionAffinityAttributesToHclTerraform(struct?: LoadBalancerRulesOverridesSessionAffinityAttributes | cdktf.IResolvable): any;
export declare class LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LoadBalancerRulesOverridesSessionAffinityAttributes | cdktf.IResolvable | undefined;
    set internalValue(value: LoadBalancerRulesOverridesSessionAffinityAttributes | cdktf.IResolvable | undefined);
    private _drainDuration?;
    get drainDuration(): number;
    set drainDuration(value: number);
    resetDrainDuration(): void;
    get drainDurationInput(): number;
    private _headers?;
    get headers(): string[];
    set headers(value: string[]);
    resetHeaders(): void;
    get headersInput(): string[];
    private _requireAllHeaders?;
    get requireAllHeaders(): boolean | cdktf.IResolvable;
    set requireAllHeaders(value: boolean | cdktf.IResolvable);
    resetRequireAllHeaders(): void;
    get requireAllHeadersInput(): any;
    private _samesite?;
    get samesite(): string;
    set samesite(value: string);
    resetSamesite(): void;
    get samesiteInput(): string;
    private _secure?;
    get secure(): string;
    set secure(value: string);
    resetSecure(): void;
    get secureInput(): string;
    private _zeroDowntimeFailover?;
    get zeroDowntimeFailover(): string;
    set zeroDowntimeFailover(value: string);
    resetZeroDowntimeFailover(): void;
    get zeroDowntimeFailoverInput(): string;
}
export interface LoadBalancerRulesOverrides {
    /**
    * Controls features that modify the routing of requests to pools and origins in response to dynamic conditions, such as during the interval between active health monitoring requests. For example, zero-downtime failover occurs immediately when an origin becomes unavailable due to HTTP 521, 522, or 523 response codes. If there is another healthy origin in the same pool, the request is retried once against this alternate origin.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#adaptive_routing LoadBalancer#adaptive_routing}
    */
    readonly adaptiveRouting?: LoadBalancerRulesOverridesAdaptiveRouting;
    /**
    * A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country. Any country not explicitly defined will fall back to using the corresponding region_pool mapping if it exists else to default_pools.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#country_pools LoadBalancer#country_pools}
    */
    readonly countryPools?: {
        [key: string]: string[];
    } | cdktf.IResolvable;
    /**
    * A list of pool IDs ordered by their failover priority. Pools defined here are used by default, or when region_pools are not configured for a given region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#default_pools LoadBalancer#default_pools}
    */
    readonly defaultPools?: string[];
    /**
    * The pool ID to use when all other pools are detected as unhealthy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#fallback_pool LoadBalancer#fallback_pool}
    */
    readonly fallbackPool?: string;
    /**
    * Controls location-based steering for non-proxied requests. See `steering_policy` to learn how steering is affected.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#location_strategy LoadBalancer#location_strategy}
    */
    readonly locationStrategy?: LoadBalancerRulesOverridesLocationStrategy;
    /**
    * Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). Any PoPs not explicitly defined will fall back to using the corresponding country_pool, then region_pool mapping if it exists else to default_pools.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#pop_pools LoadBalancer#pop_pools}
    */
    readonly popPools?: {
        [key: string]: string[];
    } | cdktf.IResolvable;
    /**
    * Configures pool weights.
    * - `steering_policy="random"`: A random pool is selected with probability proportional to pool weights.
    * - `steering_policy="least_outstanding_requests"`: Use pool weights to scale each pool's outstanding requests.
    * - `steering_policy="least_connections"`: Use pool weights to scale each pool's open connections.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#random_steering LoadBalancer#random_steering}
    */
    readonly randomSteering?: LoadBalancerRulesOverridesRandomSteering;
    /**
    * A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region. Any regions not explicitly defined will fall back to using default_pools.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#region_pools LoadBalancer#region_pools}
    */
    readonly regionPools?: {
        [key: string]: string[];
    } | cdktf.IResolvable;
    /**
    * Specifies the type of session affinity the load balancer should use unless specified as `"none"`. The supported types are: - `"cookie"`: On the first request to a proxied load balancer, a cookie is generated, encoding information of which origin the request will be forwarded to. Subsequent requests, by the same client to the same load balancer, will be sent to the origin server the cookie encodes, for the duration of the cookie and as long as the origin server remains healthy. If the cookie has expired or the origin server is unhealthy, then a new origin server is calculated and used. - `"ip_cookie"`: Behaves the same as `"cookie"` except the initial origin selection is stable and based on the client's ip address. - `"header"`: On the first request to a proxied load balancer, a session key based on the configured HTTP headers (see `session_affinity_attributes.headers`) is generated, encoding the request headers used for storing in the load balancer session state which origin the request will be forwarded to. Subsequent requests to the load balancer with the same headers will be sent to the same origin server, for the duration of the session and as long as the origin server remains healthy. If the session has been idle for the duration of `session_affinity_ttl` seconds or the origin server is unhealthy, then a new origin server is calculated and used. See `headers` in `session_affinity_attributes` for additional required configuration.
    * Available values: "none", "cookie", "ip_cookie", "header".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#session_affinity LoadBalancer#session_affinity}
    */
    readonly sessionAffinity?: string;
    /**
    * Configures attributes for session affinity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#session_affinity_attributes LoadBalancer#session_affinity_attributes}
    */
    readonly sessionAffinityAttributes?: LoadBalancerRulesOverridesSessionAffinityAttributes;
    /**
    * Time, in seconds, until a client's session expires after being created. Once the expiry time has been reached, subsequent requests may get sent to a different origin server. The accepted ranges per `session_affinity` policy are: - `"cookie"` / `"ip_cookie"`: The current default of 23 hours will be used unless explicitly set. The accepted range of values is between [1800, 604800]. - `"header"`: The current default of 1800 seconds will be used unless explicitly set. The accepted range of values is between [30, 3600]. Note: With session affinity by header, sessions only expire after they haven't been used for the number of seconds specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#session_affinity_ttl LoadBalancer#session_affinity_ttl}
    */
    readonly sessionAffinityTtl?: number;
    /**
    * Steering Policy for this load balancer.
    * - `"off"`: Use `default_pools`.
    * - `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied requests, the country for `country_pools` is determined by `location_strategy`.
    * - `"random"`: Select a pool randomly.
    * - `"dynamic_latency"`: Use round trip time to select the closest pool in default_pools (requires pool health checks).
    * - `"proximity"`: Use the pools' latitude and longitude to select the closest pool using the Cloudflare PoP location for proxied requests or the location determined by `location_strategy` for non-proxied requests.
    * - `"least_outstanding_requests"`: Select a pool by taking into consideration `random_steering` weights, as well as each pool's number of outstanding requests. Pools with more pending requests are weighted proportionately less relative to others.
    * - `"least_connections"`: Select a pool by taking into consideration `random_steering` weights, as well as each pool's number of open connections. Pools with more open connections are weighted proportionately less relative to others. Supported for HTTP/1 and HTTP/2 connections.
    * - `""`: Will map to `"geo"` if you use `region_pools`/`country_pools`/`pop_pools` otherwise `"off"`.
    * Available values: "off", "geo", "random", "dynamic_latency", "proximity", "least_outstanding_requests", "least_connections", "".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#steering_policy LoadBalancer#steering_policy}
    */
    readonly steeringPolicy?: string;
    /**
    * Time to live (TTL) of the DNS entry for the IP address returned by this load balancer. This only applies to gray-clouded (unproxied) load balancers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#ttl LoadBalancer#ttl}
    */
    readonly ttl?: number;
}
export declare function loadBalancerRulesOverridesToTerraform(struct?: LoadBalancerRulesOverrides | cdktf.IResolvable): any;
export declare function loadBalancerRulesOverridesToHclTerraform(struct?: LoadBalancerRulesOverrides | cdktf.IResolvable): any;
export declare class LoadBalancerRulesOverridesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LoadBalancerRulesOverrides | cdktf.IResolvable | undefined;
    set internalValue(value: LoadBalancerRulesOverrides | cdktf.IResolvable | undefined);
    private _adaptiveRouting;
    get adaptiveRouting(): LoadBalancerRulesOverridesAdaptiveRoutingOutputReference;
    putAdaptiveRouting(value: LoadBalancerRulesOverridesAdaptiveRouting): void;
    resetAdaptiveRouting(): void;
    get adaptiveRoutingInput(): any;
    private _countryPools?;
    get countryPools(): {
        [key: string]: string[];
    } | cdktf.IResolvable;
    set countryPools(value: {
        [key: string]: string[];
    } | cdktf.IResolvable);
    resetCountryPools(): void;
    get countryPoolsInput(): any;
    private _defaultPools?;
    get defaultPools(): string[];
    set defaultPools(value: string[]);
    resetDefaultPools(): void;
    get defaultPoolsInput(): string[];
    private _fallbackPool?;
    get fallbackPool(): string;
    set fallbackPool(value: string);
    resetFallbackPool(): void;
    get fallbackPoolInput(): string;
    private _locationStrategy;
    get locationStrategy(): LoadBalancerRulesOverridesLocationStrategyOutputReference;
    putLocationStrategy(value: LoadBalancerRulesOverridesLocationStrategy): void;
    resetLocationStrategy(): void;
    get locationStrategyInput(): any;
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
    get randomSteering(): LoadBalancerRulesOverridesRandomSteeringOutputReference;
    putRandomSteering(value: LoadBalancerRulesOverridesRandomSteering): void;
    resetRandomSteering(): void;
    get randomSteeringInput(): any;
    private _regionPools?;
    get regionPools(): {
        [key: string]: string[];
    } | cdktf.IResolvable;
    set regionPools(value: {
        [key: string]: string[];
    } | cdktf.IResolvable);
    resetRegionPools(): void;
    get regionPoolsInput(): any;
    private _sessionAffinity?;
    get sessionAffinity(): string;
    set sessionAffinity(value: string);
    resetSessionAffinity(): void;
    get sessionAffinityInput(): string;
    private _sessionAffinityAttributes;
    get sessionAffinityAttributes(): LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference;
    putSessionAffinityAttributes(value: LoadBalancerRulesOverridesSessionAffinityAttributes): void;
    resetSessionAffinityAttributes(): void;
    get sessionAffinityAttributesInput(): any;
    private _sessionAffinityTtl?;
    get sessionAffinityTtl(): number;
    set sessionAffinityTtl(value: number);
    resetSessionAffinityTtl(): void;
    get sessionAffinityTtlInput(): number;
    private _steeringPolicy?;
    get steeringPolicy(): string;
    set steeringPolicy(value: string);
    resetSteeringPolicy(): void;
    get steeringPolicyInput(): string;
    private _ttl?;
    get ttl(): number;
    set ttl(value: number);
    resetTtl(): void;
    get ttlInput(): number;
}
export interface LoadBalancerRules {
    /**
    * The condition expressions to evaluate. If the condition evaluates to true, the overrides or fixed_response in this rule will be applied. An empty condition is always true. For more details on condition expressions, please see https://developers.cloudflare.com/load-balancing/understand-basics/load-balancing-rules/expressions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#condition LoadBalancer#condition}
    */
    readonly condition?: string;
    /**
    * Disable this specific rule. It will no longer be evaluated by this load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#disabled LoadBalancer#disabled}
    */
    readonly disabled?: boolean | cdktf.IResolvable;
    /**
    * A collection of fields used to directly respond to the eyeball instead of routing to a pool. If a fixed_response is supplied the rule will be marked as terminates.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#fixed_response LoadBalancer#fixed_response}
    */
    readonly fixedResponse?: LoadBalancerRulesFixedResponse;
    /**
    * Name of this rule. Only used for human readability.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#name LoadBalancer#name}
    */
    readonly name?: string;
    /**
    * A collection of overrides to apply to the load balancer when this rule's condition is true. All fields are optional.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#overrides LoadBalancer#overrides}
    */
    readonly overrides?: LoadBalancerRulesOverrides;
    /**
    * The order in which rules should be executed in relation to each other. Lower values are executed first. Values do not need to be sequential. If no value is provided for any rule the array order of the rules field will be used to assign a priority.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#priority LoadBalancer#priority}
    */
    readonly priority?: number;
    /**
    * If this rule's condition is true, this causes rule evaluation to stop after processing this rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#terminates LoadBalancer#terminates}
    */
    readonly terminates?: boolean | cdktf.IResolvable;
}
export declare function loadBalancerRulesToTerraform(struct?: LoadBalancerRules | cdktf.IResolvable): any;
export declare function loadBalancerRulesToHclTerraform(struct?: LoadBalancerRules | cdktf.IResolvable): any;
export declare class LoadBalancerRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LoadBalancerRules | cdktf.IResolvable | undefined;
    set internalValue(value: LoadBalancerRules | cdktf.IResolvable | undefined);
    private _condition?;
    get condition(): string;
    set condition(value: string);
    resetCondition(): void;
    get conditionInput(): string;
    private _disabled?;
    get disabled(): boolean | cdktf.IResolvable;
    set disabled(value: boolean | cdktf.IResolvable);
    resetDisabled(): void;
    get disabledInput(): any;
    private _fixedResponse;
    get fixedResponse(): LoadBalancerRulesFixedResponseOutputReference;
    putFixedResponse(value: LoadBalancerRulesFixedResponse): void;
    resetFixedResponse(): void;
    get fixedResponseInput(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _overrides;
    get overrides(): LoadBalancerRulesOverridesOutputReference;
    putOverrides(value: LoadBalancerRulesOverrides): void;
    resetOverrides(): void;
    get overridesInput(): any;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    resetPriority(): void;
    get priorityInput(): number;
    private _terminates?;
    get terminates(): boolean | cdktf.IResolvable;
    set terminates(value: boolean | cdktf.IResolvable);
    resetTerminates(): void;
    get terminatesInput(): any;
}
export declare class LoadBalancerRulesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LoadBalancerRules[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LoadBalancerRulesOutputReference;
}
export interface LoadBalancerSessionAffinityAttributes {
    /**
    * Configures the drain duration in seconds. This field is only used when session affinity is enabled on the load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#drain_duration LoadBalancer#drain_duration}
    */
    readonly drainDuration?: number;
    /**
    * Configures the names of HTTP headers to base session affinity on when header `session_affinity` is enabled. At least one HTTP header name must be provided. To specify the exact cookies to be used, include an item in the following format: `"cookie:<cookie-name-1>,<cookie-name-2>"` (example) where everything after the colon is a comma-separated list of cookie names. Providing only `"cookie"` will result in all cookies being used. The default max number of HTTP header names that can be provided depends on your plan: 5 for Enterprise, 1 for all other plans.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#headers LoadBalancer#headers}
    */
    readonly headers?: string[];
    /**
    * When header `session_affinity` is enabled, this option can be used to specify how HTTP headers on load balancing requests will be used. The supported values are: - `"true"`: Load balancing requests must contain *all* of the HTTP headers specified by the `headers` session affinity attribute, otherwise sessions aren't created. - `"false"`: Load balancing requests must contain *at least one* of the HTTP headers specified by the `headers` session affinity attribute, otherwise sessions aren't created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#require_all_headers LoadBalancer#require_all_headers}
    */
    readonly requireAllHeaders?: boolean | cdktf.IResolvable;
    /**
    * Configures the SameSite attribute on session affinity cookie. Value "Auto" will be translated to "Lax" or "None" depending if Always Use HTTPS is enabled. Note: when using value "None", the secure attribute can not be set to "Never".
    * Available values: "Auto", "Lax", "None", "Strict".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#samesite LoadBalancer#samesite}
    */
    readonly samesite?: string;
    /**
    * Configures the Secure attribute on session affinity cookie. Value "Always" indicates the Secure attribute will be set in the Set-Cookie header, "Never" indicates the Secure attribute will not be set, and "Auto" will set the Secure attribute depending if Always Use HTTPS is enabled.
    * Available values: "Auto", "Always", "Never".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#secure LoadBalancer#secure}
    */
    readonly secure?: string;
    /**
    * Configures the zero-downtime failover between origins within a pool when session affinity is enabled. This feature is currently incompatible with Argo, Tiered Cache, and Bandwidth Alliance. The supported values are: - `"none"`: No failover takes place for sessions pinned to the origin (default). - `"temporary"`: Traffic will be sent to another other healthy origin until the originally pinned origin is available; note that this can potentially result in heavy origin flapping. - `"sticky"`: The session affinity cookie is updated and subsequent requests are sent to the new origin. Note: Zero-downtime failover with sticky sessions is currently not supported for session affinity by header.
    * Available values: "none", "temporary", "sticky".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#zero_downtime_failover LoadBalancer#zero_downtime_failover}
    */
    readonly zeroDowntimeFailover?: string;
}
export declare function loadBalancerSessionAffinityAttributesToTerraform(struct?: LoadBalancerSessionAffinityAttributes | cdktf.IResolvable): any;
export declare function loadBalancerSessionAffinityAttributesToHclTerraform(struct?: LoadBalancerSessionAffinityAttributes | cdktf.IResolvable): any;
export declare class LoadBalancerSessionAffinityAttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LoadBalancerSessionAffinityAttributes | cdktf.IResolvable | undefined;
    set internalValue(value: LoadBalancerSessionAffinityAttributes | cdktf.IResolvable | undefined);
    private _drainDuration?;
    get drainDuration(): number;
    set drainDuration(value: number);
    resetDrainDuration(): void;
    get drainDurationInput(): number;
    private _headers?;
    get headers(): string[];
    set headers(value: string[]);
    resetHeaders(): void;
    get headersInput(): string[];
    private _requireAllHeaders?;
    get requireAllHeaders(): boolean | cdktf.IResolvable;
    set requireAllHeaders(value: boolean | cdktf.IResolvable);
    resetRequireAllHeaders(): void;
    get requireAllHeadersInput(): any;
    private _samesite?;
    get samesite(): string;
    set samesite(value: string);
    resetSamesite(): void;
    get samesiteInput(): string;
    private _secure?;
    get secure(): string;
    set secure(value: string);
    resetSecure(): void;
    get secureInput(): string;
    private _zeroDowntimeFailover?;
    get zeroDowntimeFailover(): string;
    set zeroDowntimeFailover(value: string);
    resetZeroDowntimeFailover(): void;
    get zeroDowntimeFailoverInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer cloudflare_load_balancer}
*/
export declare class LoadBalancer extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_load_balancer";
    /**
    * Generates CDKTF code for importing a LoadBalancer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LoadBalancer to import
    * @param importFromId The id of the existing LoadBalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LoadBalancer to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer cloudflare_load_balancer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LoadBalancerConfig
    */
    constructor(scope: Construct, id: string, config: LoadBalancerConfig);
    private _adaptiveRouting;
    get adaptiveRouting(): LoadBalancerAdaptiveRoutingOutputReference;
    putAdaptiveRouting(value: LoadBalancerAdaptiveRouting): void;
    resetAdaptiveRouting(): void;
    get adaptiveRoutingInput(): any;
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
    private _defaultPools?;
    get defaultPools(): string[];
    set defaultPools(value: string[]);
    get defaultPoolsInput(): string[];
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _fallbackPool?;
    get fallbackPool(): string;
    set fallbackPool(value: string);
    get fallbackPoolInput(): string;
    get id(): any;
    private _locationStrategy;
    get locationStrategy(): LoadBalancerLocationStrategyOutputReference;
    putLocationStrategy(value: LoadBalancerLocationStrategy): void;
    resetLocationStrategy(): void;
    get locationStrategyInput(): any;
    get modifiedOn(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _networks?;
    get networks(): string[];
    set networks(value: string[]);
    resetNetworks(): void;
    get networksInput(): string[];
    private _popPools?;
    get popPools(): {
        [key: string]: string[];
    } | cdktf.IResolvable;
    set popPools(value: {
        [key: string]: string[];
    } | cdktf.IResolvable);
    resetPopPools(): void;
    get popPoolsInput(): any;
    private _proxied?;
    get proxied(): boolean | cdktf.IResolvable;
    set proxied(value: boolean | cdktf.IResolvable);
    resetProxied(): void;
    get proxiedInput(): any;
    private _randomSteering;
    get randomSteering(): LoadBalancerRandomSteeringOutputReference;
    putRandomSteering(value: LoadBalancerRandomSteering): void;
    resetRandomSteering(): void;
    get randomSteeringInput(): any;
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
    get rules(): LoadBalancerRulesList;
    putRules(value: LoadBalancerRules[] | cdktf.IResolvable): void;
    resetRules(): void;
    get rulesInput(): any;
    private _sessionAffinity?;
    get sessionAffinity(): string;
    set sessionAffinity(value: string);
    resetSessionAffinity(): void;
    get sessionAffinityInput(): string;
    private _sessionAffinityAttributes;
    get sessionAffinityAttributes(): LoadBalancerSessionAffinityAttributesOutputReference;
    putSessionAffinityAttributes(value: LoadBalancerSessionAffinityAttributes): void;
    resetSessionAffinityAttributes(): void;
    get sessionAffinityAttributesInput(): any;
    private _sessionAffinityTtl?;
    get sessionAffinityTtl(): number;
    set sessionAffinityTtl(value: number);
    resetSessionAffinityTtl(): void;
    get sessionAffinityTtlInput(): number;
    private _steeringPolicy?;
    get steeringPolicy(): string;
    set steeringPolicy(value: string);
    resetSteeringPolicy(): void;
    get steeringPolicyInput(): string;
    private _ttl?;
    get ttl(): number;
    set ttl(value: number);
    resetTtl(): void;
    get ttlInput(): number;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    resetZoneId(): void;
    get zoneIdInput(): string;
    get zoneName(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
