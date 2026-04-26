"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_dns_settings
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
exports.DataCloudflareZoneDnsSettings = exports.DataCloudflareZoneDnsSettingsSoaOutputReference = exports.DataCloudflareZoneDnsSettingsNameserversOutputReference = exports.DataCloudflareZoneDnsSettingsInternalDnsOutputReference = void 0;
exports.dataCloudflareZoneDnsSettingsInternalDnsToTerraform = dataCloudflareZoneDnsSettingsInternalDnsToTerraform;
exports.dataCloudflareZoneDnsSettingsInternalDnsToHclTerraform = dataCloudflareZoneDnsSettingsInternalDnsToHclTerraform;
exports.dataCloudflareZoneDnsSettingsNameserversToTerraform = dataCloudflareZoneDnsSettingsNameserversToTerraform;
exports.dataCloudflareZoneDnsSettingsNameserversToHclTerraform = dataCloudflareZoneDnsSettingsNameserversToHclTerraform;
exports.dataCloudflareZoneDnsSettingsSoaToTerraform = dataCloudflareZoneDnsSettingsSoaToTerraform;
exports.dataCloudflareZoneDnsSettingsSoaToHclTerraform = dataCloudflareZoneDnsSettingsSoaToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZoneDnsSettingsInternalDnsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZoneDnsSettingsInternalDnsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZoneDnsSettingsInternalDnsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZoneDnsSettingsInternalDnsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZoneDnsSettingsInternalDnsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZoneDnsSettingsInternalDnsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZoneDnsSettingsInternalDnsOutputReference.prototype, "referenceZoneId", {
        // reference_zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('reference_zone_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZoneDnsSettingsInternalDnsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZoneDnsSettingsInternalDnsOutputReference = DataCloudflareZoneDnsSettingsInternalDnsOutputReference;
function dataCloudflareZoneDnsSettingsNameserversToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZoneDnsSettingsNameserversToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZoneDnsSettingsNameserversOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZoneDnsSettingsNameserversOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZoneDnsSettingsNameserversOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZoneDnsSettingsNameserversOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZoneDnsSettingsNameserversOutputReference.prototype, "nsSet", {
        // ns_set - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('ns_set');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneDnsSettingsNameserversOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZoneDnsSettingsNameserversOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZoneDnsSettingsNameserversOutputReference = DataCloudflareZoneDnsSettingsNameserversOutputReference;
function dataCloudflareZoneDnsSettingsSoaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZoneDnsSettingsSoaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZoneDnsSettingsSoaOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZoneDnsSettingsSoaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZoneDnsSettingsSoaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZoneDnsSettingsSoaOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZoneDnsSettingsSoaOutputReference.prototype, "expire", {
        // expire - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('expire');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneDnsSettingsSoaOutputReference.prototype, "minTtl", {
        // min_ttl - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('min_ttl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneDnsSettingsSoaOutputReference.prototype, "mname", {
        // mname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneDnsSettingsSoaOutputReference.prototype, "refresh", {
        // refresh - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('refresh');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneDnsSettingsSoaOutputReference.prototype, "retry", {
        // retry - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('retry');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneDnsSettingsSoaOutputReference.prototype, "rname", {
        // rname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('rname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneDnsSettingsSoaOutputReference.prototype, "ttl", {
        // ttl - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('ttl');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZoneDnsSettingsSoaOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZoneDnsSettingsSoaOutputReference = DataCloudflareZoneDnsSettingsSoaOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_dns_settings cloudflare_zone_dns_settings}
*/
var DataCloudflareZoneDnsSettings = /** @class */ (function (_super) {
    __extends(DataCloudflareZoneDnsSettings, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_dns_settings cloudflare_zone_dns_settings} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZoneDnsSettingsConfig = {}
    */
    function DataCloudflareZoneDnsSettings(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zone_dns_settings',
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
        // internal_dns - computed: true, optional: false, required: false
        _this._internalDns = new DataCloudflareZoneDnsSettingsInternalDnsOutputReference(_this, "internal_dns");
        // nameservers - computed: true, optional: false, required: false
        _this._nameservers = new DataCloudflareZoneDnsSettingsNameserversOutputReference(_this, "nameservers");
        // soa - computed: true, optional: false, required: false
        _this._soa = new DataCloudflareZoneDnsSettingsSoaOutputReference(_this, "soa");
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZoneDnsSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZoneDnsSettings to import
    * @param importFromId The id of the existing DataCloudflareZoneDnsSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_dns_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZoneDnsSettings to import is found
    */
    DataCloudflareZoneDnsSettings.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zone_dns_settings", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZoneDnsSettings.prototype, "flattenAllCnames", {
        // ==========
        // ATTRIBUTES
        // ==========
        // flatten_all_cnames - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('flatten_all_cnames');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneDnsSettings.prototype, "foundationDns", {
        // foundation_dns - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('foundation_dns');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneDnsSettings.prototype, "internalDns", {
        get: function () {
            return this._internalDns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneDnsSettings.prototype, "multiProvider", {
        // multi_provider - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('multi_provider');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneDnsSettings.prototype, "nameservers", {
        get: function () {
            return this._nameservers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneDnsSettings.prototype, "nsTtl", {
        // ns_ttl - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('ns_ttl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneDnsSettings.prototype, "secondaryOverrides", {
        // secondary_overrides - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('secondary_overrides');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneDnsSettings.prototype, "soa", {
        get: function () {
            return this._soa;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneDnsSettings.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZoneDnsSettings.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareZoneDnsSettings.prototype, "zoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneDnsSettings.prototype, "zoneMode", {
        // zone_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_mode');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZoneDnsSettings.prototype.synthesizeAttributes = function () {
        return {
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareZoneDnsSettings.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            zone_id: {
                value: cdktf.stringToHclTerraform(this._zoneId),
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
    DataCloudflareZoneDnsSettings.tfResourceType = "cloudflare_zone_dns_settings";
    return DataCloudflareZoneDnsSettings;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZoneDnsSettings = DataCloudflareZoneDnsSettings;
