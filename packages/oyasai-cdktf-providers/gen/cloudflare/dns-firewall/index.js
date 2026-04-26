"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_firewall
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnsFirewall = exports.DnsFirewallAttackMitigationOutputReference = void 0;
exports.dnsFirewallAttackMitigationToTerraform = dnsFirewallAttackMitigationToTerraform;
exports.dnsFirewallAttackMitigationToHclTerraform = dnsFirewallAttackMitigationToHclTerraform;
var cdktf = require("cdktf");
function dnsFirewallAttackMitigationToTerraform(struct) {
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
function dnsFirewallAttackMitigationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var DnsFirewallAttackMitigationOutputReference = /** @class */ (function (_super) {
    __extends(DnsFirewallAttackMitigationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DnsFirewallAttackMitigationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DnsFirewallAttackMitigationOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (this._onlyWhenUpstreamUnhealthy !== undefined) {
                hasAnyValues = true;
                internalValueResult.onlyWhenUpstreamUnhealthy = this._onlyWhenUpstreamUnhealthy;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
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
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsFirewallAttackMitigationOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsFirewallAttackMitigationOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(DnsFirewallAttackMitigationOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsFirewallAttackMitigationOutputReference.prototype, "onlyWhenUpstreamUnhealthy", {
        get: function () {
            return this.getBooleanAttribute('only_when_upstream_unhealthy');
        },
        set: function (value) {
            this._onlyWhenUpstreamUnhealthy = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsFirewallAttackMitigationOutputReference.prototype.resetOnlyWhenUpstreamUnhealthy = function () {
        this._onlyWhenUpstreamUnhealthy = undefined;
    };
    Object.defineProperty(DnsFirewallAttackMitigationOutputReference.prototype, "onlyWhenUpstreamUnhealthyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._onlyWhenUpstreamUnhealthy;
        },
        enumerable: false,
        configurable: true
    });
    return DnsFirewallAttackMitigationOutputReference;
}(cdktf.ComplexObject));
exports.DnsFirewallAttackMitigationOutputReference = DnsFirewallAttackMitigationOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_firewall cloudflare_dns_firewall}
*/
var DnsFirewall = /** @class */ (function (_super) {
    __extends(DnsFirewall, _super);
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
    function DnsFirewall(scope, id, config) {
        var _this = _super.call(this, scope, id, {
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
        }) || this;
        // attack_mitigation - computed: true, optional: true, required: false
        _this._attackMitigation = new DnsFirewallAttackMitigationOutputReference(_this, "attack_mitigation");
        _this._accountId = config.accountId;
        _this._attackMitigation.internalValue = config.attackMitigation;
        _this._deprecateAnyRequests = config.deprecateAnyRequests;
        _this._ecsFallback = config.ecsFallback;
        _this._maximumCacheTtl = config.maximumCacheTtl;
        _this._minimumCacheTtl = config.minimumCacheTtl;
        _this._name = config.name;
        _this._negativeCacheTtl = config.negativeCacheTtl;
        _this._ratelimit = config.ratelimit;
        _this._retries = config.retries;
        _this._upstreamIps = config.upstreamIps;
        return _this;
    }
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
    DnsFirewall.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_dns_firewall", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DnsFirewall.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsFirewall.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DnsFirewall.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsFirewall.prototype, "attackMitigation", {
        get: function () {
            return this._attackMitigation;
        },
        enumerable: false,
        configurable: true
    });
    DnsFirewall.prototype.putAttackMitigation = function (value) {
        this._attackMitigation.internalValue = value;
    };
    DnsFirewall.prototype.resetAttackMitigation = function () {
        this._attackMitigation.internalValue = undefined;
    };
    Object.defineProperty(DnsFirewall.prototype, "attackMitigationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._attackMitigation.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsFirewall.prototype, "deprecateAnyRequests", {
        get: function () {
            return this.getBooleanAttribute('deprecate_any_requests');
        },
        set: function (value) {
            this._deprecateAnyRequests = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsFirewall.prototype.resetDeprecateAnyRequests = function () {
        this._deprecateAnyRequests = undefined;
    };
    Object.defineProperty(DnsFirewall.prototype, "deprecateAnyRequestsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deprecateAnyRequests;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsFirewall.prototype, "dnsFirewallIps", {
        // dns_firewall_ips - computed: true, optional: false, required: false
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('dns_firewall_ips'));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsFirewall.prototype, "ecsFallback", {
        get: function () {
            return this.getBooleanAttribute('ecs_fallback');
        },
        set: function (value) {
            this._ecsFallback = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsFirewall.prototype.resetEcsFallback = function () {
        this._ecsFallback = undefined;
    };
    Object.defineProperty(DnsFirewall.prototype, "ecsFallbackInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ecsFallback;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsFirewall.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsFirewall.prototype, "maximumCacheTtl", {
        get: function () {
            return this.getNumberAttribute('maximum_cache_ttl');
        },
        set: function (value) {
            this._maximumCacheTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsFirewall.prototype.resetMaximumCacheTtl = function () {
        this._maximumCacheTtl = undefined;
    };
    Object.defineProperty(DnsFirewall.prototype, "maximumCacheTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maximumCacheTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsFirewall.prototype, "minimumCacheTtl", {
        get: function () {
            return this.getNumberAttribute('minimum_cache_ttl');
        },
        set: function (value) {
            this._minimumCacheTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsFirewall.prototype.resetMinimumCacheTtl = function () {
        this._minimumCacheTtl = undefined;
    };
    Object.defineProperty(DnsFirewall.prototype, "minimumCacheTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._minimumCacheTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsFirewall.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsFirewall.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsFirewall.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsFirewall.prototype, "negativeCacheTtl", {
        get: function () {
            return this.getNumberAttribute('negative_cache_ttl');
        },
        set: function (value) {
            this._negativeCacheTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsFirewall.prototype.resetNegativeCacheTtl = function () {
        this._negativeCacheTtl = undefined;
    };
    Object.defineProperty(DnsFirewall.prototype, "negativeCacheTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._negativeCacheTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsFirewall.prototype, "ratelimit", {
        get: function () {
            return this.getNumberAttribute('ratelimit');
        },
        set: function (value) {
            this._ratelimit = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsFirewall.prototype.resetRatelimit = function () {
        this._ratelimit = undefined;
    };
    Object.defineProperty(DnsFirewall.prototype, "ratelimitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ratelimit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsFirewall.prototype, "retries", {
        get: function () {
            return this.getNumberAttribute('retries');
        },
        set: function (value) {
            this._retries = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsFirewall.prototype.resetRetries = function () {
        this._retries = undefined;
    };
    Object.defineProperty(DnsFirewall.prototype, "retriesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._retries;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsFirewall.prototype, "upstreamIps", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('upstream_ips'));
        },
        set: function (value) {
            this._upstreamIps = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsFirewall.prototype, "upstreamIpsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._upstreamIps;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DnsFirewall.prototype.synthesizeAttributes = function () {
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
    };
    DnsFirewall.prototype.synthesizeHclAttributes = function () {
        var attrs = {
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
        return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
            var _ = _a[0], value = _a[1];
            return value !== undefined && value.value !== undefined;
        }));
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DnsFirewall.tfResourceType = "cloudflare_dns_firewall";
    return DnsFirewall;
}(cdktf.TerraformResource));
exports.DnsFirewall = DnsFirewall;
