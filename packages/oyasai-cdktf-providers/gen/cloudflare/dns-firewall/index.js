// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_firewall
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dnsFirewallAttackMitigationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        only_when_upstream_unhealthy: cdktf.booleanToTerraform(struct.onlyWhenUpstreamUnhealthy),
    };
}
export function dnsFirewallAttackMitigationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        only_when_upstream_unhealthy: {
            value: cdktf.booleanToHclTerraform(struct.onlyWhenUpstreamUnhealthy),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DnsFirewallAttackMitigationOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._onlyWhenUpstreamUnhealthy !== undefined) {
            hasAnyValues = true;
            internalValueResult.onlyWhenUpstreamUnhealthy = this._onlyWhenUpstreamUnhealthy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._onlyWhenUpstreamUnhealthy = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._onlyWhenUpstreamUnhealthy = value.onlyWhenUpstreamUnhealthy;
        }
    }
    // enabled - computed: true, optional: true, required: false
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    // only_when_upstream_unhealthy - computed: true, optional: true, required: false
    _onlyWhenUpstreamUnhealthy;
    get onlyWhenUpstreamUnhealthy() {
        return this.getBooleanAttribute('only_when_upstream_unhealthy');
    }
    set onlyWhenUpstreamUnhealthy(value) {
        this._onlyWhenUpstreamUnhealthy = value;
    }
    resetOnlyWhenUpstreamUnhealthy() {
        this._onlyWhenUpstreamUnhealthy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get onlyWhenUpstreamUnhealthyInput() {
        return this._onlyWhenUpstreamUnhealthy;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_firewall cloudflare_dns_firewall}
*/
export class DnsFirewall extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_dns_firewall";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DnsFirewall resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DnsFirewall to import
    * @param importFromId The id of the existing DnsFirewall that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_firewall#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DnsFirewall to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_dns_firewall", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_firewall cloudflare_dns_firewall} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DnsFirewallConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_dns_firewall',
            terraformGeneratorMetadata: {
                providerName: 'cloudflare',
                providerVersion: '5.19.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._accountId = config.accountId;
        this._attackMitigation.internalValue = config.attackMitigation;
        this._deprecateAnyRequests = config.deprecateAnyRequests;
        this._ecsFallback = config.ecsFallback;
        this._maximumCacheTtl = config.maximumCacheTtl;
        this._minimumCacheTtl = config.minimumCacheTtl;
        this._name = config.name;
        this._negativeCacheTtl = config.negativeCacheTtl;
        this._ratelimit = config.ratelimit;
        this._retries = config.retries;
        this._upstreamIps = config.upstreamIps;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // account_id - computed: false, optional: true, required: false
    _accountId;
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    set accountId(value) {
        this._accountId = value;
    }
    resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accountIdInput() {
        return this._accountId;
    }
    // attack_mitigation - computed: true, optional: true, required: false
    _attackMitigation = new DnsFirewallAttackMitigationOutputReference(this, "attack_mitigation");
    get attackMitigation() {
        return this._attackMitigation;
    }
    putAttackMitigation(value) {
        this._attackMitigation.internalValue = value;
    }
    resetAttackMitigation() {
        this._attackMitigation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get attackMitigationInput() {
        return this._attackMitigation.internalValue;
    }
    // deprecate_any_requests - computed: false, optional: true, required: false
    _deprecateAnyRequests;
    get deprecateAnyRequests() {
        return this.getBooleanAttribute('deprecate_any_requests');
    }
    set deprecateAnyRequests(value) {
        this._deprecateAnyRequests = value;
    }
    resetDeprecateAnyRequests() {
        this._deprecateAnyRequests = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deprecateAnyRequestsInput() {
        return this._deprecateAnyRequests;
    }
    // dns_firewall_ips - computed: true, optional: false, required: false
    get dnsFirewallIps() {
        return cdktf.Fn.tolist(this.getListAttribute('dns_firewall_ips'));
    }
    // ecs_fallback - computed: false, optional: true, required: false
    _ecsFallback;
    get ecsFallback() {
        return this.getBooleanAttribute('ecs_fallback');
    }
    set ecsFallback(value) {
        this._ecsFallback = value;
    }
    resetEcsFallback() {
        this._ecsFallback = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ecsFallbackInput() {
        return this._ecsFallback;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // maximum_cache_ttl - computed: true, optional: true, required: false
    _maximumCacheTtl;
    get maximumCacheTtl() {
        return this.getNumberAttribute('maximum_cache_ttl');
    }
    set maximumCacheTtl(value) {
        this._maximumCacheTtl = value;
    }
    resetMaximumCacheTtl() {
        this._maximumCacheTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maximumCacheTtlInput() {
        return this._maximumCacheTtl;
    }
    // minimum_cache_ttl - computed: true, optional: true, required: false
    _minimumCacheTtl;
    get minimumCacheTtl() {
        return this.getNumberAttribute('minimum_cache_ttl');
    }
    set minimumCacheTtl(value) {
        this._minimumCacheTtl = value;
    }
    resetMinimumCacheTtl() {
        this._minimumCacheTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get minimumCacheTtlInput() {
        return this._minimumCacheTtl;
    }
    // modified_on - computed: true, optional: false, required: false
    get modifiedOn() {
        return this.getStringAttribute('modified_on');
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // negative_cache_ttl - computed: false, optional: true, required: false
    _negativeCacheTtl;
    get negativeCacheTtl() {
        return this.getNumberAttribute('negative_cache_ttl');
    }
    set negativeCacheTtl(value) {
        this._negativeCacheTtl = value;
    }
    resetNegativeCacheTtl() {
        this._negativeCacheTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get negativeCacheTtlInput() {
        return this._negativeCacheTtl;
    }
    // ratelimit - computed: false, optional: true, required: false
    _ratelimit;
    get ratelimit() {
        return this.getNumberAttribute('ratelimit');
    }
    set ratelimit(value) {
        this._ratelimit = value;
    }
    resetRatelimit() {
        this._ratelimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ratelimitInput() {
        return this._ratelimit;
    }
    // retries - computed: true, optional: true, required: false
    _retries;
    get retries() {
        return this.getNumberAttribute('retries');
    }
    set retries(value) {
        this._retries = value;
    }
    resetRetries() {
        this._retries = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get retriesInput() {
        return this._retries;
    }
    // upstream_ips - computed: false, optional: false, required: true
    _upstreamIps;
    get upstreamIps() {
        return cdktf.Fn.tolist(this.getListAttribute('upstream_ips'));
    }
    set upstreamIps(value) {
        this._upstreamIps = value;
    }
    // Temporarily expose input value. Use with caution.
    get upstreamIpsInput() {
        return this._upstreamIps;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            attack_mitigation: dnsFirewallAttackMitigationToTerraform(this._attackMitigation.internalValue),
            deprecate_any_requests: cdktf.booleanToTerraform(this._deprecateAnyRequests),
            ecs_fallback: cdktf.booleanToTerraform(this._ecsFallback),
            maximum_cache_ttl: cdktf.numberToTerraform(this._maximumCacheTtl),
            minimum_cache_ttl: cdktf.numberToTerraform(this._minimumCacheTtl),
            name: cdktf.stringToTerraform(this._name),
            negative_cache_ttl: cdktf.numberToTerraform(this._negativeCacheTtl),
            ratelimit: cdktf.numberToTerraform(this._ratelimit),
            retries: cdktf.numberToTerraform(this._retries),
            upstream_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._upstreamIps),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            attack_mitigation: {
                value: dnsFirewallAttackMitigationToHclTerraform(this._attackMitigation.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DnsFirewallAttackMitigation",
            },
            deprecate_any_requests: {
                value: cdktf.booleanToHclTerraform(this._deprecateAnyRequests),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            ecs_fallback: {
                value: cdktf.booleanToHclTerraform(this._ecsFallback),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            maximum_cache_ttl: {
                value: cdktf.numberToHclTerraform(this._maximumCacheTtl),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            minimum_cache_ttl: {
                value: cdktf.numberToHclTerraform(this._minimumCacheTtl),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            negative_cache_ttl: {
                value: cdktf.numberToHclTerraform(this._negativeCacheTtl),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            ratelimit: {
                value: cdktf.numberToHclTerraform(this._ratelimit),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            retries: {
                value: cdktf.numberToHclTerraform(this._retries),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            upstream_ips: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._upstreamIps),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
