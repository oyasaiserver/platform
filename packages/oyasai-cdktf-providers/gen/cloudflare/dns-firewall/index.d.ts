import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DnsFirewallConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_firewall#account_id DnsFirewall#account_id}
    */
    readonly accountId?: string;
    /**
    * Attack mitigation settings
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_firewall#attack_mitigation DnsFirewall#attack_mitigation}
    */
    readonly attackMitigation?: DnsFirewallAttackMitigation;
    /**
    * Whether to refuse to answer queries for the ANY type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_firewall#deprecate_any_requests DnsFirewall#deprecate_any_requests}
    */
    readonly deprecateAnyRequests?: boolean | cdktf.IResolvable;
    /**
    * Whether to forward client IP (resolver) subnet if no EDNS Client Subnet is sent
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_firewall#ecs_fallback DnsFirewall#ecs_fallback}
    */
    readonly ecsFallback?: boolean | cdktf.IResolvable;
    /**
    * By default, Cloudflare attempts to cache responses for as long as
    * indicated by the TTL received from upstream nameservers. This setting
    * sets an upper bound on this duration. For caching purposes, higher TTLs
    * will be decreased to the maximum value defined by this setting.
    *
    * This setting does not affect the TTL value in the DNS response
    * Cloudflare returns to clients. Cloudflare will always forward the TTL
    * value received from upstream nameservers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_firewall#maximum_cache_ttl DnsFirewall#maximum_cache_ttl}
    */
    readonly maximumCacheTtl?: number;
    /**
    * By default, Cloudflare attempts to cache responses for as long as
    * indicated by the TTL received from upstream nameservers. This setting
    * sets a lower bound on this duration. For caching purposes, lower TTLs
    * will be increased to the minimum value defined by this setting.
    *
    * This setting does not affect the TTL value in the DNS response
    * Cloudflare returns to clients. Cloudflare will always forward the TTL
    * value received from upstream nameservers.
    *
    * Note that, even with this setting, there is no guarantee that a
    * response will be cached for at least the specified duration. Cached
    * responses may be removed earlier for capacity or other operational
    * reasons.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_firewall#minimum_cache_ttl DnsFirewall#minimum_cache_ttl}
    */
    readonly minimumCacheTtl?: number;
    /**
    * DNS Firewall cluster name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_firewall#name DnsFirewall#name}
    */
    readonly name: string;
    /**
    * This setting controls how long DNS Firewall should cache negative
    * responses (e.g., NXDOMAIN) from the upstream servers.
    *
    * This setting does not affect the TTL value in the DNS response
    * Cloudflare returns to clients. Cloudflare will always forward the TTL
    * value received from upstream nameservers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_firewall#negative_cache_ttl DnsFirewall#negative_cache_ttl}
    */
    readonly negativeCacheTtl?: number;
    /**
    * Ratelimit in queries per second per datacenter (applies to DNS queries sent to the upstream nameservers configured on the cluster)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_firewall#ratelimit DnsFirewall#ratelimit}
    */
    readonly ratelimit?: number;
    /**
    * Number of retries for fetching DNS responses from upstream nameservers (not counting the initial attempt)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_firewall#retries DnsFirewall#retries}
    */
    readonly retries?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_firewall#upstream_ips DnsFirewall#upstream_ips}
    */
    readonly upstreamIps: string[];
}
export interface DnsFirewallAttackMitigation {
    /**
    * When enabled, automatically mitigate random-prefix attacks to protect upstream DNS servers
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_firewall#enabled DnsFirewall#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Only mitigate attacks when upstream servers seem unhealthy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_firewall#only_when_upstream_unhealthy DnsFirewall#only_when_upstream_unhealthy}
    */
    readonly onlyWhenUpstreamUnhealthy?: boolean | cdktf.IResolvable;
}
export declare function dnsFirewallAttackMitigationToTerraform(struct?: DnsFirewallAttackMitigation | cdktf.IResolvable): any;
export declare function dnsFirewallAttackMitigationToHclTerraform(struct?: DnsFirewallAttackMitigation | cdktf.IResolvable): any;
export declare class DnsFirewallAttackMitigationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DnsFirewallAttackMitigation | cdktf.IResolvable | undefined;
    set internalValue(value: DnsFirewallAttackMitigation | cdktf.IResolvable | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _onlyWhenUpstreamUnhealthy?;
    get onlyWhenUpstreamUnhealthy(): boolean | cdktf.IResolvable;
    set onlyWhenUpstreamUnhealthy(value: boolean | cdktf.IResolvable);
    resetOnlyWhenUpstreamUnhealthy(): void;
    get onlyWhenUpstreamUnhealthyInput(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_firewall cloudflare_dns_firewall}
*/
export declare class DnsFirewall extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_dns_firewall";
    /**
    * Generates CDKTF code for importing a DnsFirewall resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DnsFirewall to import
    * @param importFromId The id of the existing DnsFirewall that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_firewall#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DnsFirewall to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_firewall cloudflare_dns_firewall} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DnsFirewallConfig
    */
    constructor(scope: Construct, id: string, config: DnsFirewallConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _attackMitigation;
    get attackMitigation(): DnsFirewallAttackMitigationOutputReference;
    putAttackMitigation(value: DnsFirewallAttackMitigation): void;
    resetAttackMitigation(): void;
    get attackMitigationInput(): any;
    private _deprecateAnyRequests?;
    get deprecateAnyRequests(): boolean | cdktf.IResolvable;
    set deprecateAnyRequests(value: boolean | cdktf.IResolvable);
    resetDeprecateAnyRequests(): void;
    get deprecateAnyRequestsInput(): any;
    get dnsFirewallIps(): any;
    private _ecsFallback?;
    get ecsFallback(): boolean | cdktf.IResolvable;
    set ecsFallback(value: boolean | cdktf.IResolvable);
    resetEcsFallback(): void;
    get ecsFallbackInput(): any;
    get id(): any;
    private _maximumCacheTtl?;
    get maximumCacheTtl(): number;
    set maximumCacheTtl(value: number);
    resetMaximumCacheTtl(): void;
    get maximumCacheTtlInput(): number;
    private _minimumCacheTtl?;
    get minimumCacheTtl(): number;
    set minimumCacheTtl(value: number);
    resetMinimumCacheTtl(): void;
    get minimumCacheTtlInput(): number;
    get modifiedOn(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _negativeCacheTtl?;
    get negativeCacheTtl(): number;
    set negativeCacheTtl(value: number);
    resetNegativeCacheTtl(): void;
    get negativeCacheTtlInput(): number;
    private _ratelimit?;
    get ratelimit(): number;
    set ratelimit(value: number);
    resetRatelimit(): void;
    get ratelimitInput(): number;
    private _retries?;
    get retries(): number;
    set retries(value: number);
    resetRetries(): void;
    get retriesInput(): number;
    private _upstreamIps?;
    get upstreamIps(): string[];
    set upstreamIps(value: string[]);
    get upstreamIpsInput(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
