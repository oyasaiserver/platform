"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings
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
exports.DataCloudflareAccountDnsSettings = exports.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference = exports.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference = exports.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference = exports.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference = void 0;
exports.dataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsToTerraform = dataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsToTerraform;
exports.dataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsToHclTerraform = dataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsToHclTerraform;
exports.dataCloudflareAccountDnsSettingsZoneDefaultsNameserversToTerraform = dataCloudflareAccountDnsSettingsZoneDefaultsNameserversToTerraform;
exports.dataCloudflareAccountDnsSettingsZoneDefaultsNameserversToHclTerraform = dataCloudflareAccountDnsSettingsZoneDefaultsNameserversToHclTerraform;
exports.dataCloudflareAccountDnsSettingsZoneDefaultsSoaToTerraform = dataCloudflareAccountDnsSettingsZoneDefaultsSoaToTerraform;
exports.dataCloudflareAccountDnsSettingsZoneDefaultsSoaToHclTerraform = dataCloudflareAccountDnsSettingsZoneDefaultsSoaToHclTerraform;
exports.dataCloudflareAccountDnsSettingsZoneDefaultsToTerraform = dataCloudflareAccountDnsSettingsZoneDefaultsToTerraform;
exports.dataCloudflareAccountDnsSettingsZoneDefaultsToHclTerraform = dataCloudflareAccountDnsSettingsZoneDefaultsToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference.prototype, "referenceZoneId", {
        // reference_zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('reference_zone_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference = DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference;
function dataCloudflareAccountDnsSettingsZoneDefaultsNameserversToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountDnsSettingsZoneDefaultsNameserversToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference = DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference;
function dataCloudflareAccountDnsSettingsZoneDefaultsSoaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountDnsSettingsZoneDefaultsSoaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.prototype, "expire", {
        // expire - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('expire');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.prototype, "minTtl", {
        // min_ttl - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('min_ttl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.prototype, "mname", {
        // mname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.prototype, "refresh", {
        // refresh - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('refresh');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.prototype, "retry", {
        // retry - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('retry');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.prototype, "rname", {
        // rname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('rname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference.prototype, "ttl", {
        // ttl - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('ttl');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference = DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference;
function dataCloudflareAccountDnsSettingsZoneDefaultsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountDnsSettingsZoneDefaultsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // internal_dns - computed: true, optional: false, required: false
        _this._internalDns = new DataCloudflareAccountDnsSettingsZoneDefaultsInternalDnsOutputReference(_this, "internal_dns");
        // nameservers - computed: true, optional: false, required: false
        _this._nameservers = new DataCloudflareAccountDnsSettingsZoneDefaultsNameserversOutputReference(_this, "nameservers");
        // soa - computed: true, optional: false, required: false
        _this._soa = new DataCloudflareAccountDnsSettingsZoneDefaultsSoaOutputReference(_this, "soa");
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.prototype, "flattenAllCnames", {
        // flatten_all_cnames - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('flatten_all_cnames');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.prototype, "foundationDns", {
        // foundation_dns - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('foundation_dns');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.prototype, "internalDns", {
        get: function () {
            return this._internalDns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.prototype, "multiProvider", {
        // multi_provider - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('multi_provider');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.prototype, "nameservers", {
        get: function () {
            return this._nameservers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.prototype, "nsTtl", {
        // ns_ttl - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('ns_ttl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.prototype, "secondaryOverrides", {
        // secondary_overrides - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('secondary_overrides');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.prototype, "soa", {
        get: function () {
            return this._soa;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference.prototype, "zoneMode", {
        // zone_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_mode');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference = DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings cloudflare_account_dns_settings}
*/
var DataCloudflareAccountDnsSettings = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountDnsSettings, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings cloudflare_account_dns_settings} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAccountDnsSettingsConfig = {}
    */
    function DataCloudflareAccountDnsSettings(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_account_dns_settings',
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
        // zone_defaults - computed: true, optional: false, required: false
        _this._zoneDefaults = new DataCloudflareAccountDnsSettingsZoneDefaultsOutputReference(_this, "zone_defaults");
        _this._accountId = config.accountId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareAccountDnsSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAccountDnsSettings to import
    * @param importFromId The id of the existing DataCloudflareAccountDnsSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAccountDnsSettings to import is found
    */
    DataCloudflareAccountDnsSettings.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_account_dns_settings", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareAccountDnsSettings.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountDnsSettings.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareAccountDnsSettings.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettings.prototype, "enforceDnsOnly", {
        // enforce_dns_only - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enforce_dns_only');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettings.prototype, "zoneDefaults", {
        get: function () {
            return this._zoneDefaults;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareAccountDnsSettings.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
        };
    };
    DataCloudflareAccountDnsSettings.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
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
    DataCloudflareAccountDnsSettings.tfResourceType = "cloudflare_account_dns_settings";
    return DataCloudflareAccountDnsSettings;
}(cdktf.TerraformDataSource));
exports.DataCloudflareAccountDnsSettings = DataCloudflareAccountDnsSettings;
