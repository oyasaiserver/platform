"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_firewalls
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
exports.DataCloudflareDnsFirewalls = exports.DataCloudflareDnsFirewallsResultList = exports.DataCloudflareDnsFirewallsResultOutputReference = exports.DataCloudflareDnsFirewallsResultAttackMitigationOutputReference = void 0;
exports.dataCloudflareDnsFirewallsResultAttackMitigationToTerraform = dataCloudflareDnsFirewallsResultAttackMitigationToTerraform;
exports.dataCloudflareDnsFirewallsResultAttackMitigationToHclTerraform = dataCloudflareDnsFirewallsResultAttackMitigationToHclTerraform;
exports.dataCloudflareDnsFirewallsResultToTerraform = dataCloudflareDnsFirewallsResultToTerraform;
exports.dataCloudflareDnsFirewallsResultToHclTerraform = dataCloudflareDnsFirewallsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareDnsFirewallsResultAttackMitigationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareDnsFirewallsResultAttackMitigationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareDnsFirewallsResultAttackMitigationOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareDnsFirewallsResultAttackMitigationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareDnsFirewallsResultAttackMitigationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareDnsFirewallsResultAttackMitigationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareDnsFirewallsResultAttackMitigationOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsFirewallsResultAttackMitigationOutputReference.prototype, "onlyWhenUpstreamUnhealthy", {
        // only_when_upstream_unhealthy - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('only_when_upstream_unhealthy');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareDnsFirewallsResultAttackMitigationOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareDnsFirewallsResultAttackMitigationOutputReference = DataCloudflareDnsFirewallsResultAttackMitigationOutputReference;
function dataCloudflareDnsFirewallsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareDnsFirewallsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareDnsFirewallsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareDnsFirewallsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareDnsFirewallsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // attack_mitigation - computed: true, optional: false, required: false
        _this._attackMitigation = new DataCloudflareDnsFirewallsResultAttackMitigationOutputReference(_this, "attack_mitigation");
        return _this;
    }
    Object.defineProperty(DataCloudflareDnsFirewallsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareDnsFirewallsResultOutputReference.prototype, "attackMitigation", {
        get: function () {
            return this._attackMitigation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsFirewallsResultOutputReference.prototype, "deprecateAnyRequests", {
        // deprecate_any_requests - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('deprecate_any_requests');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsFirewallsResultOutputReference.prototype, "dnsFirewallIps", {
        // dns_firewall_ips - computed: true, optional: false, required: false
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('dns_firewall_ips'));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsFirewallsResultOutputReference.prototype, "ecsFallback", {
        // ecs_fallback - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ecs_fallback');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsFirewallsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsFirewallsResultOutputReference.prototype, "maximumCacheTtl", {
        // maximum_cache_ttl - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('maximum_cache_ttl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsFirewallsResultOutputReference.prototype, "minimumCacheTtl", {
        // minimum_cache_ttl - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('minimum_cache_ttl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsFirewallsResultOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsFirewallsResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsFirewallsResultOutputReference.prototype, "negativeCacheTtl", {
        // negative_cache_ttl - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('negative_cache_ttl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsFirewallsResultOutputReference.prototype, "ratelimit", {
        // ratelimit - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('ratelimit');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsFirewallsResultOutputReference.prototype, "retries", {
        // retries - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('retries');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsFirewallsResultOutputReference.prototype, "upstreamIps", {
        // upstream_ips - computed: true, optional: false, required: false
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('upstream_ips'));
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareDnsFirewallsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareDnsFirewallsResultOutputReference = DataCloudflareDnsFirewallsResultOutputReference;
var DataCloudflareDnsFirewallsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareDnsFirewallsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareDnsFirewallsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareDnsFirewallsResultList.prototype.get = function (index) {
        return new DataCloudflareDnsFirewallsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareDnsFirewallsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareDnsFirewallsResultList = DataCloudflareDnsFirewallsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_firewalls cloudflare_dns_firewalls}
*/
var DataCloudflareDnsFirewalls = /** @class */ (function (_super) {
    __extends(DataCloudflareDnsFirewalls, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_firewalls cloudflare_dns_firewalls} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareDnsFirewallsConfig = {}
    */
    function DataCloudflareDnsFirewalls(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_dns_firewalls',
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
        // result - computed: true, optional: false, required: false
        _this._result = new DataCloudflareDnsFirewallsResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareDnsFirewalls resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareDnsFirewalls to import
    * @param importFromId The id of the existing DataCloudflareDnsFirewalls that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_firewalls#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareDnsFirewalls to import is found
    */
    DataCloudflareDnsFirewalls.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_dns_firewalls", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareDnsFirewalls.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsFirewalls.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareDnsFirewalls.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsFirewalls.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsFirewalls.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareDnsFirewalls.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsFirewalls.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareDnsFirewalls.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
        };
    };
    DataCloudflareDnsFirewalls.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
    DataCloudflareDnsFirewalls.tfResourceType = "cloudflare_dns_firewalls";
    return DataCloudflareDnsFirewalls;
}(cdktf.TerraformDataSource));
exports.DataCloudflareDnsFirewalls = DataCloudflareDnsFirewalls;
