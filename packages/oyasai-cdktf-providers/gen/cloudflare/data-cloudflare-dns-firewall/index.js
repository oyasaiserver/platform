"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_firewall
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
exports.DataCloudflareDnsFirewall = exports.DataCloudflareDnsFirewallAttackMitigationOutputReference = void 0;
exports.dataCloudflareDnsFirewallAttackMitigationToTerraform = dataCloudflareDnsFirewallAttackMitigationToTerraform;
exports.dataCloudflareDnsFirewallAttackMitigationToHclTerraform = dataCloudflareDnsFirewallAttackMitigationToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareDnsFirewallAttackMitigationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareDnsFirewallAttackMitigationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareDnsFirewallAttackMitigationOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareDnsFirewallAttackMitigationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareDnsFirewallAttackMitigationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareDnsFirewallAttackMitigationOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsFirewallAttackMitigationOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsFirewallAttackMitigationOutputReference.prototype, "onlyWhenUpstreamUnhealthy", {
        // only_when_upstream_unhealthy - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('only_when_upstream_unhealthy');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareDnsFirewallAttackMitigationOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareDnsFirewallAttackMitigationOutputReference = DataCloudflareDnsFirewallAttackMitigationOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_firewall cloudflare_dns_firewall}
*/
var DataCloudflareDnsFirewall = /** @class */ (function (_super) {
    __extends(DataCloudflareDnsFirewall, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_firewall cloudflare_dns_firewall} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareDnsFirewallConfig
    */
    function DataCloudflareDnsFirewall(scope, id, config) {
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
        // attack_mitigation - computed: true, optional: false, required: false
        _this._attackMitigation = new DataCloudflareDnsFirewallAttackMitigationOutputReference(_this, "attack_mitigation");
        _this._accountId = config.accountId;
        _this._dnsFirewallId = config.dnsFirewallId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareDnsFirewall resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareDnsFirewall to import
    * @param importFromId The id of the existing DataCloudflareDnsFirewall that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_firewall#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareDnsFirewall to import is found
    */
    DataCloudflareDnsFirewall.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_dns_firewall", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareDnsFirewall.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsFirewall.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareDnsFirewall.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsFirewall.prototype, "attackMitigation", {
        get: function () {
            return this._attackMitigation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsFirewall.prototype, "deprecateAnyRequests", {
        // deprecate_any_requests - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('deprecate_any_requests');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsFirewall.prototype, "dnsFirewallId", {
        get: function () {
            return this.getStringAttribute('dns_firewall_id');
        },
        set: function (value) {
            this._dnsFirewallId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsFirewall.prototype, "dnsFirewallIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dnsFirewallId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsFirewall.prototype, "dnsFirewallIps", {
        // dns_firewall_ips - computed: true, optional: false, required: false
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('dns_firewall_ips'));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsFirewall.prototype, "ecsFallback", {
        // ecs_fallback - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ecs_fallback');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsFirewall.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsFirewall.prototype, "maximumCacheTtl", {
        // maximum_cache_ttl - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('maximum_cache_ttl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsFirewall.prototype, "minimumCacheTtl", {
        // minimum_cache_ttl - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('minimum_cache_ttl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsFirewall.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsFirewall.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsFirewall.prototype, "negativeCacheTtl", {
        // negative_cache_ttl - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('negative_cache_ttl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsFirewall.prototype, "ratelimit", {
        // ratelimit - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('ratelimit');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsFirewall.prototype, "retries", {
        // retries - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('retries');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsFirewall.prototype, "upstreamIps", {
        // upstream_ips - computed: true, optional: false, required: false
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('upstream_ips'));
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareDnsFirewall.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            dns_firewall_id: cdktf.stringToTerraform(this._dnsFirewallId),
        };
    };
    DataCloudflareDnsFirewall.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            dns_firewall_id: {
                value: cdktf.stringToHclTerraform(this._dnsFirewallId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
    DataCloudflareDnsFirewall.tfResourceType = "cloudflare_dns_firewall";
    return DataCloudflareDnsFirewall;
}(cdktf.TerraformDataSource));
exports.DataCloudflareDnsFirewall = DataCloudflareDnsFirewall;
