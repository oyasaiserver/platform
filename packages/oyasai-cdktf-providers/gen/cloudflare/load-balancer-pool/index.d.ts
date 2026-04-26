import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LoadBalancerPoolConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#account_id LoadBalancerPool#account_id}
    */
    readonly accountId?: string;
    /**
    * A list of regions from which to run health checks. Null means every Cloudflare data center.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#check_regions LoadBalancerPool#check_regions}
    */
    readonly checkRegions?: string[];
    /**
    * A human-readable description of the pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#description LoadBalancerPool#description}
    */
    readonly description?: string;
    /**
    * Whether to enable (the default) or disable this pool. Disabled pools will not receive traffic and are excluded from health checks. Disabling a pool will cause any load balancers using it to failover to the next pool (if any).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#enabled LoadBalancerPool#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * The latitude of the data center containing the origins used in this pool in decimal degrees. If this is set, longitude must also be set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#latitude LoadBalancerPool#latitude}
    */
    readonly latitude?: number;
    /**
    * Configures load shedding policies and percentages for the pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#load_shedding LoadBalancerPool#load_shedding}
    */
    readonly loadShedding?: LoadBalancerPoolLoadShedding;
    /**
    * The longitude of the data center containing the origins used in this pool in decimal degrees. If this is set, latitude must also be set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#longitude LoadBalancerPool#longitude}
    */
    readonly longitude?: number;
    /**
    * The minimum number of origins that must be healthy for this pool to serve traffic. If the number of healthy origins falls below this number, the pool will be marked unhealthy and will failover to the next available pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#minimum_origins LoadBalancerPool#minimum_origins}
    */
    readonly minimumOrigins?: number;
    /**
    * The ID of the Monitor to use for checking the health of origins within this pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#monitor LoadBalancerPool#monitor}
    */
    readonly monitor?: string;
    /**
    * The ID of the Monitor Group to use for checking the health of origins within this pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#monitor_group LoadBalancerPool#monitor_group}
    */
    readonly monitorGroup?: string;
    /**
    * A short name (tag) for the pool. Only alphanumeric characters, hyphens, and underscores are allowed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#name LoadBalancerPool#name}
    */
    readonly name: string;
    /**
    * This field is now deprecated. It has been moved to Cloudflare's Centralized Notification service https://developers.cloudflare.com/fundamentals/notifications/. The email address to send health status notifications to. This can be an individual mailbox or a mailing list. Multiple emails can be supplied as a comma delimited list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#notification_email LoadBalancerPool#notification_email}
    */
    readonly notificationEmail?: string;
    /**
    * Filter pool and origin health notifications by resource type or health status. Use null to reset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#notification_filter LoadBalancerPool#notification_filter}
    */
    readonly notificationFilter?: LoadBalancerPoolNotificationFilter;
    /**
    * Configures origin steering for the pool. Controls how origins are selected for new sessions and traffic without session affinity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#origin_steering LoadBalancerPool#origin_steering}
    */
    readonly originSteering?: LoadBalancerPoolOriginSteering;
    /**
    * The list of origins within this pool. Traffic directed at this pool is balanced across all currently healthy origins, provided the pool itself is healthy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#origins LoadBalancerPool#origins}
    */
    readonly origins: LoadBalancerPoolOrigins[] | cdktf.IResolvable;
}
export interface LoadBalancerPoolLoadShedding {
    /**
    * The percent of traffic to shed from the pool, according to the default policy. Applies to new sessions and traffic without session affinity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#default_percent LoadBalancerPool#default_percent}
    */
    readonly defaultPercent?: number;
    /**
    * The default policy to use when load shedding. A random policy randomly sheds a given percent of requests. A hash policy computes a hash over the CF-Connecting-IP address and sheds all requests originating from a percent of IPs.
    * Available values: "random", "hash".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#default_policy LoadBalancerPool#default_policy}
    */
    readonly defaultPolicy?: string;
    /**
    * The percent of existing sessions to shed from the pool, according to the session policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#session_percent LoadBalancerPool#session_percent}
    */
    readonly sessionPercent?: number;
    /**
    * Only the hash policy is supported for existing sessions (to avoid exponential decay).
    * Available values: "hash".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#session_policy LoadBalancerPool#session_policy}
    */
    readonly sessionPolicy?: string;
}
export declare function loadBalancerPoolLoadSheddingToTerraform(struct?: LoadBalancerPoolLoadShedding | cdktf.IResolvable): any;
export declare function loadBalancerPoolLoadSheddingToHclTerraform(struct?: LoadBalancerPoolLoadShedding | cdktf.IResolvable): any;
export declare class LoadBalancerPoolLoadSheddingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LoadBalancerPoolLoadShedding | cdktf.IResolvable | undefined;
    set internalValue(value: LoadBalancerPoolLoadShedding | cdktf.IResolvable | undefined);
    private _defaultPercent?;
    get defaultPercent(): number;
    set defaultPercent(value: number);
    resetDefaultPercent(): void;
    get defaultPercentInput(): number;
    private _defaultPolicy?;
    get defaultPolicy(): string;
    set defaultPolicy(value: string);
    resetDefaultPolicy(): void;
    get defaultPolicyInput(): string;
    private _sessionPercent?;
    get sessionPercent(): number;
    set sessionPercent(value: number);
    resetSessionPercent(): void;
    get sessionPercentInput(): number;
    private _sessionPolicy?;
    get sessionPolicy(): string;
    set sessionPolicy(value: string);
    resetSessionPolicy(): void;
    get sessionPolicyInput(): string;
}
export interface LoadBalancerPoolNotificationFilterOrigin {
    /**
    * If set true, disable notifications for this type of resource (pool or origin).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#disable LoadBalancerPool#disable}
    */
    readonly disable?: boolean | cdktf.IResolvable;
    /**
    * If present, send notifications only for this health status (e.g. false for only DOWN events). Use null to reset (all events).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#healthy LoadBalancerPool#healthy}
    */
    readonly healthy?: boolean | cdktf.IResolvable;
}
export declare function loadBalancerPoolNotificationFilterOriginToTerraform(struct?: LoadBalancerPoolNotificationFilterOrigin | cdktf.IResolvable): any;
export declare function loadBalancerPoolNotificationFilterOriginToHclTerraform(struct?: LoadBalancerPoolNotificationFilterOrigin | cdktf.IResolvable): any;
export declare class LoadBalancerPoolNotificationFilterOriginOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LoadBalancerPoolNotificationFilterOrigin | cdktf.IResolvable | undefined;
    set internalValue(value: LoadBalancerPoolNotificationFilterOrigin | cdktf.IResolvable | undefined);
    private _disable?;
    get disable(): boolean | cdktf.IResolvable;
    set disable(value: boolean | cdktf.IResolvable);
    resetDisable(): void;
    get disableInput(): any;
    private _healthy?;
    get healthy(): boolean | cdktf.IResolvable;
    set healthy(value: boolean | cdktf.IResolvable);
    resetHealthy(): void;
    get healthyInput(): any;
}
export interface LoadBalancerPoolNotificationFilterPool {
    /**
    * If set true, disable notifications for this type of resource (pool or origin).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#disable LoadBalancerPool#disable}
    */
    readonly disable?: boolean | cdktf.IResolvable;
    /**
    * If present, send notifications only for this health status (e.g. false for only DOWN events). Use null to reset (all events).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#healthy LoadBalancerPool#healthy}
    */
    readonly healthy?: boolean | cdktf.IResolvable;
}
export declare function loadBalancerPoolNotificationFilterPoolToTerraform(struct?: LoadBalancerPoolNotificationFilterPool | cdktf.IResolvable): any;
export declare function loadBalancerPoolNotificationFilterPoolToHclTerraform(struct?: LoadBalancerPoolNotificationFilterPool | cdktf.IResolvable): any;
export declare class LoadBalancerPoolNotificationFilterPoolOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LoadBalancerPoolNotificationFilterPool | cdktf.IResolvable | undefined;
    set internalValue(value: LoadBalancerPoolNotificationFilterPool | cdktf.IResolvable | undefined);
    private _disable?;
    get disable(): boolean | cdktf.IResolvable;
    set disable(value: boolean | cdktf.IResolvable);
    resetDisable(): void;
    get disableInput(): any;
    private _healthy?;
    get healthy(): boolean | cdktf.IResolvable;
    set healthy(value: boolean | cdktf.IResolvable);
    resetHealthy(): void;
    get healthyInput(): any;
}
export interface LoadBalancerPoolNotificationFilter {
    /**
    * Filter options for a particular resource type (pool or origin). Use null to reset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#origin LoadBalancerPool#origin}
    */
    readonly origin?: LoadBalancerPoolNotificationFilterOrigin;
    /**
    * Filter options for a particular resource type (pool or origin). Use null to reset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#pool LoadBalancerPool#pool}
    */
    readonly pool?: LoadBalancerPoolNotificationFilterPool;
}
export declare function loadBalancerPoolNotificationFilterToTerraform(struct?: LoadBalancerPoolNotificationFilter | cdktf.IResolvable): any;
export declare function loadBalancerPoolNotificationFilterToHclTerraform(struct?: LoadBalancerPoolNotificationFilter | cdktf.IResolvable): any;
export declare class LoadBalancerPoolNotificationFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LoadBalancerPoolNotificationFilter | cdktf.IResolvable | undefined;
    set internalValue(value: LoadBalancerPoolNotificationFilter | cdktf.IResolvable | undefined);
    private _origin;
    get origin(): LoadBalancerPoolNotificationFilterOriginOutputReference;
    putOrigin(value: LoadBalancerPoolNotificationFilterOrigin): void;
    resetOrigin(): void;
    get originInput(): any;
    private _pool;
    get pool(): LoadBalancerPoolNotificationFilterPoolOutputReference;
    putPool(value: LoadBalancerPoolNotificationFilterPool): void;
    resetPool(): void;
    get poolInput(): any;
}
export interface LoadBalancerPoolOriginSteering {
    /**
    * The type of origin steering policy to use.
    * - `"random"`: Select an origin randomly.
    * - `"hash"`: Select an origin by computing a hash over the CF-Connecting-IP address.
    * - `"least_outstanding_requests"`: Select an origin by taking into consideration origin weights, as well as each origin's number of outstanding requests. Origins with more pending requests are weighted proportionately less relative to others.
    * - `"least_connections"`: Select an origin by taking into consideration origin weights, as well as each origin's number of open connections. Origins with more open connections are weighted proportionately less relative to others. Supported for HTTP/1 and HTTP/2 connections.
    * Available values: "random", "hash", "least_outstanding_requests", "least_connections".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#policy LoadBalancerPool#policy}
    */
    readonly policy?: string;
}
export declare function loadBalancerPoolOriginSteeringToTerraform(struct?: LoadBalancerPoolOriginSteering | cdktf.IResolvable): any;
export declare function loadBalancerPoolOriginSteeringToHclTerraform(struct?: LoadBalancerPoolOriginSteering | cdktf.IResolvable): any;
export declare class LoadBalancerPoolOriginSteeringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LoadBalancerPoolOriginSteering | cdktf.IResolvable | undefined;
    set internalValue(value: LoadBalancerPoolOriginSteering | cdktf.IResolvable | undefined);
    private _policy?;
    get policy(): string;
    set policy(value: string);
    resetPolicy(): void;
    get policyInput(): string;
}
export interface LoadBalancerPoolOriginsHeader {
    /**
    * The 'Host' header allows to override the hostname set in the HTTP request. Current support is 1 'Host' header override per origin.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#host LoadBalancerPool#host}
    */
    readonly host?: string[];
}
export declare function loadBalancerPoolOriginsHeaderToTerraform(struct?: LoadBalancerPoolOriginsHeader | cdktf.IResolvable): any;
export declare function loadBalancerPoolOriginsHeaderToHclTerraform(struct?: LoadBalancerPoolOriginsHeader | cdktf.IResolvable): any;
export declare class LoadBalancerPoolOriginsHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LoadBalancerPoolOriginsHeader | cdktf.IResolvable | undefined;
    set internalValue(value: LoadBalancerPoolOriginsHeader | cdktf.IResolvable | undefined);
    private _host?;
    get host(): string[];
    set host(value: string[]);
    resetHost(): void;
    get hostInput(): string[];
}
export interface LoadBalancerPoolOrigins {
    /**
    * The IP address (IPv4 or IPv6) of the origin, or its publicly addressable hostname. Hostnames entered here should resolve directly to the origin, and not be a hostname proxied by Cloudflare. To set an internal/reserved address, virtual_network_id must also be set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#address LoadBalancerPool#address}
    */
    readonly address?: string;
    /**
    * Whether to enable (the default) this origin within the pool. Disabled origins will not receive traffic and are excluded from health checks. The origin will only be disabled for the current pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#enabled LoadBalancerPool#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Whether to flatten CNAME records for this origin, resolving them to A/AAAA records before returning to the client. When true (the default), the director resolves CNAME addresses to their underlying A/AAAA records. When false, the origin address is returned as a raw CNAME record without resolution. This setting mirrors the DNS API record flatten_cname setting.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#flatten_cname LoadBalancerPool#flatten_cname}
    */
    readonly flattenCname?: boolean | cdktf.IResolvable;
    /**
    * The request header is used to pass additional information with an HTTP request. Currently supported header is 'Host'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#header LoadBalancerPool#header}
    */
    readonly header?: LoadBalancerPoolOriginsHeader;
    /**
    * A human-identifiable name for the origin.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#name LoadBalancerPool#name}
    */
    readonly name?: string;
    /**
    * The port for upstream connections. A value of 0 means the default port for the protocol will be used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#port LoadBalancerPool#port}
    */
    readonly port?: number;
    /**
    * The virtual network subnet ID the origin belongs in. Virtual network must also belong to the account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#virtual_network_id LoadBalancerPool#virtual_network_id}
    */
    readonly virtualNetworkId?: string;
    /**
    * The weight of this origin relative to other origins in the pool. Based on the configured weight the total traffic is distributed among origins within the pool.
    * - `origin_steering.policy="least_outstanding_requests"`: Use weight to scale the origin's outstanding requests.
    * - `origin_steering.policy="least_connections"`: Use weight to scale the origin's open connections.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#weight LoadBalancerPool#weight}
    */
    readonly weight?: number;
}
export declare function loadBalancerPoolOriginsToTerraform(struct?: LoadBalancerPoolOrigins | cdktf.IResolvable): any;
export declare function loadBalancerPoolOriginsToHclTerraform(struct?: LoadBalancerPoolOrigins | cdktf.IResolvable): any;
export declare class LoadBalancerPoolOriginsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LoadBalancerPoolOrigins | cdktf.IResolvable | undefined;
    set internalValue(value: LoadBalancerPoolOrigins | cdktf.IResolvable | undefined);
    private _address?;
    get address(): string;
    set address(value: string);
    resetAddress(): void;
    get addressInput(): string;
    get disabledAt(): any;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _flattenCname?;
    get flattenCname(): boolean | cdktf.IResolvable;
    set flattenCname(value: boolean | cdktf.IResolvable);
    resetFlattenCname(): void;
    get flattenCnameInput(): any;
    private _header;
    get header(): LoadBalancerPoolOriginsHeaderOutputReference;
    putHeader(value: LoadBalancerPoolOriginsHeader): void;
    resetHeader(): void;
    get headerInput(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number;
    private _virtualNetworkId?;
    get virtualNetworkId(): string;
    set virtualNetworkId(value: string);
    resetVirtualNetworkId(): void;
    get virtualNetworkIdInput(): string;
    private _weight?;
    get weight(): number;
    set weight(value: number);
    resetWeight(): void;
    get weightInput(): number;
}
export declare class LoadBalancerPoolOriginsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LoadBalancerPoolOrigins[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LoadBalancerPoolOriginsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool cloudflare_load_balancer_pool}
*/
export declare class LoadBalancerPool extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_load_balancer_pool";
    /**
    * Generates CDKTF code for importing a LoadBalancerPool resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LoadBalancerPool to import
    * @param importFromId The id of the existing LoadBalancerPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LoadBalancerPool to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool cloudflare_load_balancer_pool} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LoadBalancerPoolConfig
    */
    constructor(scope: Construct, id: string, config: LoadBalancerPoolConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _checkRegions?;
    get checkRegions(): string[];
    set checkRegions(value: string[]);
    resetCheckRegions(): void;
    get checkRegionsInput(): string[];
    get createdOn(): any;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get disabledAt(): any;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    get id(): any;
    private _latitude?;
    get latitude(): number;
    set latitude(value: number);
    resetLatitude(): void;
    get latitudeInput(): number;
    private _loadShedding;
    get loadShedding(): LoadBalancerPoolLoadSheddingOutputReference;
    putLoadShedding(value: LoadBalancerPoolLoadShedding): void;
    resetLoadShedding(): void;
    get loadSheddingInput(): any;
    private _longitude?;
    get longitude(): number;
    set longitude(value: number);
    resetLongitude(): void;
    get longitudeInput(): number;
    private _minimumOrigins?;
    get minimumOrigins(): number;
    set minimumOrigins(value: number);
    resetMinimumOrigins(): void;
    get minimumOriginsInput(): number;
    get modifiedOn(): any;
    private _monitor?;
    get monitor(): string;
    set monitor(value: string);
    resetMonitor(): void;
    get monitorInput(): string;
    private _monitorGroup?;
    get monitorGroup(): string;
    set monitorGroup(value: string);
    resetMonitorGroup(): void;
    get monitorGroupInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get networks(): any;
    private _notificationEmail?;
    get notificationEmail(): string;
    set notificationEmail(value: string);
    resetNotificationEmail(): void;
    get notificationEmailInput(): string;
    private _notificationFilter;
    get notificationFilter(): LoadBalancerPoolNotificationFilterOutputReference;
    putNotificationFilter(value: LoadBalancerPoolNotificationFilter): void;
    resetNotificationFilter(): void;
    get notificationFilterInput(): any;
    private _originSteering;
    get originSteering(): LoadBalancerPoolOriginSteeringOutputReference;
    putOriginSteering(value: LoadBalancerPoolOriginSteering): void;
    resetOriginSteering(): void;
    get originSteeringInput(): any;
    private _origins;
    get origins(): LoadBalancerPoolOriginsList;
    putOrigins(value: LoadBalancerPoolOrigins[] | cdktf.IResolvable): void;
    get originsInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
