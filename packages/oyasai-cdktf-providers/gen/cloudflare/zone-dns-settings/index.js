"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dns_settings
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
exports.ZoneDnsSettings = exports.ZoneDnsSettingsSoaOutputReference = exports.ZoneDnsSettingsNameserversOutputReference = exports.ZoneDnsSettingsInternalDnsOutputReference = void 0;
exports.zoneDnsSettingsInternalDnsToTerraform = zoneDnsSettingsInternalDnsToTerraform;
exports.zoneDnsSettingsInternalDnsToHclTerraform = zoneDnsSettingsInternalDnsToHclTerraform;
exports.zoneDnsSettingsNameserversToTerraform = zoneDnsSettingsNameserversToTerraform;
exports.zoneDnsSettingsNameserversToHclTerraform = zoneDnsSettingsNameserversToHclTerraform;
exports.zoneDnsSettingsSoaToTerraform = zoneDnsSettingsSoaToTerraform;
exports.zoneDnsSettingsSoaToHclTerraform = zoneDnsSettingsSoaToHclTerraform;
var cdktf = require("cdktf");
function zoneDnsSettingsInternalDnsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        reference_zone_id: cdktf.stringToTerraform(struct.referenceZoneId),
    };
}
function zoneDnsSettingsInternalDnsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        reference_zone_id: {
            value: cdktf.stringToHclTerraform(struct.referenceZoneId),
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
}
var ZoneDnsSettingsInternalDnsOutputReference = /** @class */ (function (_super) {
    __extends(ZoneDnsSettingsInternalDnsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZoneDnsSettingsInternalDnsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZoneDnsSettingsInternalDnsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._referenceZoneId !== undefined) {
                hasAnyValues = true;
                internalValueResult.referenceZoneId = this._referenceZoneId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._referenceZoneId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._referenceZoneId = value.referenceZoneId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneDnsSettingsInternalDnsOutputReference.prototype, "referenceZoneId", {
        get: function () {
            return this.getStringAttribute('reference_zone_id');
        },
        set: function (value) {
            this._referenceZoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneDnsSettingsInternalDnsOutputReference.prototype.resetReferenceZoneId = function () {
        this._referenceZoneId = undefined;
    };
    Object.defineProperty(ZoneDnsSettingsInternalDnsOutputReference.prototype, "referenceZoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._referenceZoneId;
        },
        enumerable: false,
        configurable: true
    });
    return ZoneDnsSettingsInternalDnsOutputReference;
}(cdktf.ComplexObject));
exports.ZoneDnsSettingsInternalDnsOutputReference = ZoneDnsSettingsInternalDnsOutputReference;
function zoneDnsSettingsNameserversToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ns_set: cdktf.numberToTerraform(struct.nsSet),
        type: cdktf.stringToTerraform(struct.type),
    };
}
function zoneDnsSettingsNameserversToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        ns_set: {
            value: cdktf.numberToHclTerraform(struct.nsSet),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
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
}
var ZoneDnsSettingsNameserversOutputReference = /** @class */ (function (_super) {
    __extends(ZoneDnsSettingsNameserversOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZoneDnsSettingsNameserversOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZoneDnsSettingsNameserversOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._nsSet !== undefined) {
                hasAnyValues = true;
                internalValueResult.nsSet = this._nsSet;
            }
            if (this._type !== undefined) {
                hasAnyValues = true;
                internalValueResult.type = this._type;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._nsSet = undefined;
                this._type = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._nsSet = value.nsSet;
                this._type = value.type;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneDnsSettingsNameserversOutputReference.prototype, "nsSet", {
        get: function () {
            return this.getNumberAttribute('ns_set');
        },
        set: function (value) {
            this._nsSet = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneDnsSettingsNameserversOutputReference.prototype.resetNsSet = function () {
        this._nsSet = undefined;
    };
    Object.defineProperty(ZoneDnsSettingsNameserversOutputReference.prototype, "nsSetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._nsSet;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneDnsSettingsNameserversOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneDnsSettingsNameserversOutputReference.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(ZoneDnsSettingsNameserversOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    return ZoneDnsSettingsNameserversOutputReference;
}(cdktf.ComplexObject));
exports.ZoneDnsSettingsNameserversOutputReference = ZoneDnsSettingsNameserversOutputReference;
function zoneDnsSettingsSoaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        expire: cdktf.numberToTerraform(struct.expire),
        min_ttl: cdktf.numberToTerraform(struct.minTtl),
        mname: cdktf.stringToTerraform(struct.mname),
        refresh: cdktf.numberToTerraform(struct.refresh),
        retry: cdktf.numberToTerraform(struct.retry),
        rname: cdktf.stringToTerraform(struct.rname),
        ttl: cdktf.numberToTerraform(struct.ttl),
    };
}
function zoneDnsSettingsSoaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        expire: {
            value: cdktf.numberToHclTerraform(struct.expire),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_ttl: {
            value: cdktf.numberToHclTerraform(struct.minTtl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        mname: {
            value: cdktf.stringToHclTerraform(struct.mname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        refresh: {
            value: cdktf.numberToHclTerraform(struct.refresh),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        retry: {
            value: cdktf.numberToHclTerraform(struct.retry),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        rname: {
            value: cdktf.stringToHclTerraform(struct.rname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ttl: {
            value: cdktf.numberToHclTerraform(struct.ttl),
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
}
var ZoneDnsSettingsSoaOutputReference = /** @class */ (function (_super) {
    __extends(ZoneDnsSettingsSoaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZoneDnsSettingsSoaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZoneDnsSettingsSoaOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._expire !== undefined) {
                hasAnyValues = true;
                internalValueResult.expire = this._expire;
            }
            if (this._minTtl !== undefined) {
                hasAnyValues = true;
                internalValueResult.minTtl = this._minTtl;
            }
            if (this._mname !== undefined) {
                hasAnyValues = true;
                internalValueResult.mname = this._mname;
            }
            if (this._refresh !== undefined) {
                hasAnyValues = true;
                internalValueResult.refresh = this._refresh;
            }
            if (this._retry !== undefined) {
                hasAnyValues = true;
                internalValueResult.retry = this._retry;
            }
            if (this._rname !== undefined) {
                hasAnyValues = true;
                internalValueResult.rname = this._rname;
            }
            if (this._ttl !== undefined) {
                hasAnyValues = true;
                internalValueResult.ttl = this._ttl;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._expire = undefined;
                this._minTtl = undefined;
                this._mname = undefined;
                this._refresh = undefined;
                this._retry = undefined;
                this._rname = undefined;
                this._ttl = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._expire = value.expire;
                this._minTtl = value.minTtl;
                this._mname = value.mname;
                this._refresh = value.refresh;
                this._retry = value.retry;
                this._rname = value.rname;
                this._ttl = value.ttl;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneDnsSettingsSoaOutputReference.prototype, "expire", {
        get: function () {
            return this.getNumberAttribute('expire');
        },
        set: function (value) {
            this._expire = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneDnsSettingsSoaOutputReference.prototype.resetExpire = function () {
        this._expire = undefined;
    };
    Object.defineProperty(ZoneDnsSettingsSoaOutputReference.prototype, "expireInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._expire;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneDnsSettingsSoaOutputReference.prototype, "minTtl", {
        get: function () {
            return this.getNumberAttribute('min_ttl');
        },
        set: function (value) {
            this._minTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneDnsSettingsSoaOutputReference.prototype.resetMinTtl = function () {
        this._minTtl = undefined;
    };
    Object.defineProperty(ZoneDnsSettingsSoaOutputReference.prototype, "minTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._minTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneDnsSettingsSoaOutputReference.prototype, "mname", {
        get: function () {
            return this.getStringAttribute('mname');
        },
        set: function (value) {
            this._mname = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneDnsSettingsSoaOutputReference.prototype.resetMname = function () {
        this._mname = undefined;
    };
    Object.defineProperty(ZoneDnsSettingsSoaOutputReference.prototype, "mnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneDnsSettingsSoaOutputReference.prototype, "refresh", {
        get: function () {
            return this.getNumberAttribute('refresh');
        },
        set: function (value) {
            this._refresh = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneDnsSettingsSoaOutputReference.prototype.resetRefresh = function () {
        this._refresh = undefined;
    };
    Object.defineProperty(ZoneDnsSettingsSoaOutputReference.prototype, "refreshInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._refresh;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneDnsSettingsSoaOutputReference.prototype, "retry", {
        get: function () {
            return this.getNumberAttribute('retry');
        },
        set: function (value) {
            this._retry = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneDnsSettingsSoaOutputReference.prototype.resetRetry = function () {
        this._retry = undefined;
    };
    Object.defineProperty(ZoneDnsSettingsSoaOutputReference.prototype, "retryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._retry;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneDnsSettingsSoaOutputReference.prototype, "rname", {
        get: function () {
            return this.getStringAttribute('rname');
        },
        set: function (value) {
            this._rname = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneDnsSettingsSoaOutputReference.prototype.resetRname = function () {
        this._rname = undefined;
    };
    Object.defineProperty(ZoneDnsSettingsSoaOutputReference.prototype, "rnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneDnsSettingsSoaOutputReference.prototype, "ttl", {
        get: function () {
            return this.getNumberAttribute('ttl');
        },
        set: function (value) {
            this._ttl = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneDnsSettingsSoaOutputReference.prototype.resetTtl = function () {
        this._ttl = undefined;
    };
    Object.defineProperty(ZoneDnsSettingsSoaOutputReference.prototype, "ttlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ttl;
        },
        enumerable: false,
        configurable: true
    });
    return ZoneDnsSettingsSoaOutputReference;
}(cdktf.ComplexObject));
exports.ZoneDnsSettingsSoaOutputReference = ZoneDnsSettingsSoaOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dns_settings cloudflare_zone_dns_settings}
*/
var ZoneDnsSettings = /** @class */ (function (_super) {
    __extends(ZoneDnsSettings, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dns_settings cloudflare_zone_dns_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZoneDnsSettingsConfig = {}
    */
    function ZoneDnsSettings(scope, id, config) {
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
        // internal_dns - computed: false, optional: true, required: false
        _this._internalDns = new ZoneDnsSettingsInternalDnsOutputReference(_this, "internal_dns");
        // nameservers - computed: false, optional: true, required: false
        _this._nameservers = new ZoneDnsSettingsNameserversOutputReference(_this, "nameservers");
        // soa - computed: false, optional: true, required: false
        _this._soa = new ZoneDnsSettingsSoaOutputReference(_this, "soa");
        _this._flattenAllCnames = config.flattenAllCnames;
        _this._foundationDns = config.foundationDns;
        _this._internalDns.internalValue = config.internalDns;
        _this._multiProvider = config.multiProvider;
        _this._nameservers.internalValue = config.nameservers;
        _this._nsTtl = config.nsTtl;
        _this._secondaryOverrides = config.secondaryOverrides;
        _this._soa.internalValue = config.soa;
        _this._zoneId = config.zoneId;
        _this._zoneMode = config.zoneMode;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZoneDnsSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZoneDnsSettings to import
    * @param importFromId The id of the existing ZoneDnsSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dns_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZoneDnsSettings to import is found
    */
    ZoneDnsSettings.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zone_dns_settings", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZoneDnsSettings.prototype, "flattenAllCnames", {
        get: function () {
            return this.getBooleanAttribute('flatten_all_cnames');
        },
        set: function (value) {
            this._flattenAllCnames = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneDnsSettings.prototype.resetFlattenAllCnames = function () {
        this._flattenAllCnames = undefined;
    };
    Object.defineProperty(ZoneDnsSettings.prototype, "flattenAllCnamesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._flattenAllCnames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneDnsSettings.prototype, "foundationDns", {
        get: function () {
            return this.getBooleanAttribute('foundation_dns');
        },
        set: function (value) {
            this._foundationDns = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneDnsSettings.prototype.resetFoundationDns = function () {
        this._foundationDns = undefined;
    };
    Object.defineProperty(ZoneDnsSettings.prototype, "foundationDnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._foundationDns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneDnsSettings.prototype, "internalDns", {
        get: function () {
            return this._internalDns;
        },
        enumerable: false,
        configurable: true
    });
    ZoneDnsSettings.prototype.putInternalDns = function (value) {
        this._internalDns.internalValue = value;
    };
    ZoneDnsSettings.prototype.resetInternalDns = function () {
        this._internalDns.internalValue = undefined;
    };
    Object.defineProperty(ZoneDnsSettings.prototype, "internalDnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._internalDns.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneDnsSettings.prototype, "multiProvider", {
        get: function () {
            return this.getBooleanAttribute('multi_provider');
        },
        set: function (value) {
            this._multiProvider = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneDnsSettings.prototype.resetMultiProvider = function () {
        this._multiProvider = undefined;
    };
    Object.defineProperty(ZoneDnsSettings.prototype, "multiProviderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._multiProvider;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneDnsSettings.prototype, "nameservers", {
        get: function () {
            return this._nameservers;
        },
        enumerable: false,
        configurable: true
    });
    ZoneDnsSettings.prototype.putNameservers = function (value) {
        this._nameservers.internalValue = value;
    };
    ZoneDnsSettings.prototype.resetNameservers = function () {
        this._nameservers.internalValue = undefined;
    };
    Object.defineProperty(ZoneDnsSettings.prototype, "nameserversInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._nameservers.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneDnsSettings.prototype, "nsTtl", {
        get: function () {
            return this.getNumberAttribute('ns_ttl');
        },
        set: function (value) {
            this._nsTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneDnsSettings.prototype.resetNsTtl = function () {
        this._nsTtl = undefined;
    };
    Object.defineProperty(ZoneDnsSettings.prototype, "nsTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._nsTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneDnsSettings.prototype, "secondaryOverrides", {
        get: function () {
            return this.getBooleanAttribute('secondary_overrides');
        },
        set: function (value) {
            this._secondaryOverrides = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneDnsSettings.prototype.resetSecondaryOverrides = function () {
        this._secondaryOverrides = undefined;
    };
    Object.defineProperty(ZoneDnsSettings.prototype, "secondaryOverridesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secondaryOverrides;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneDnsSettings.prototype, "soa", {
        get: function () {
            return this._soa;
        },
        enumerable: false,
        configurable: true
    });
    ZoneDnsSettings.prototype.putSoa = function (value) {
        this._soa.internalValue = value;
    };
    ZoneDnsSettings.prototype.resetSoa = function () {
        this._soa.internalValue = undefined;
    };
    Object.defineProperty(ZoneDnsSettings.prototype, "soaInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._soa.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneDnsSettings.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneDnsSettings.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(ZoneDnsSettings.prototype, "zoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneDnsSettings.prototype, "zoneMode", {
        get: function () {
            return this.getStringAttribute('zone_mode');
        },
        set: function (value) {
            this._zoneMode = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneDnsSettings.prototype.resetZoneMode = function () {
        this._zoneMode = undefined;
    };
    Object.defineProperty(ZoneDnsSettings.prototype, "zoneModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneMode;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ZoneDnsSettings.prototype.synthesizeAttributes = function () {
        return {
            flatten_all_cnames: cdktf.booleanToTerraform(this._flattenAllCnames),
            foundation_dns: cdktf.booleanToTerraform(this._foundationDns),
            internal_dns: zoneDnsSettingsInternalDnsToTerraform(this._internalDns.internalValue),
            multi_provider: cdktf.booleanToTerraform(this._multiProvider),
            nameservers: zoneDnsSettingsNameserversToTerraform(this._nameservers.internalValue),
            ns_ttl: cdktf.numberToTerraform(this._nsTtl),
            secondary_overrides: cdktf.booleanToTerraform(this._secondaryOverrides),
            soa: zoneDnsSettingsSoaToTerraform(this._soa.internalValue),
            zone_id: cdktf.stringToTerraform(this._zoneId),
            zone_mode: cdktf.stringToTerraform(this._zoneMode),
        };
    };
    ZoneDnsSettings.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            flatten_all_cnames: {
                value: cdktf.booleanToHclTerraform(this._flattenAllCnames),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            foundation_dns: {
                value: cdktf.booleanToHclTerraform(this._foundationDns),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            internal_dns: {
                value: zoneDnsSettingsInternalDnsToHclTerraform(this._internalDns.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZoneDnsSettingsInternalDns",
            },
            multi_provider: {
                value: cdktf.booleanToHclTerraform(this._multiProvider),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            nameservers: {
                value: zoneDnsSettingsNameserversToHclTerraform(this._nameservers.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZoneDnsSettingsNameservers",
            },
            ns_ttl: {
                value: cdktf.numberToHclTerraform(this._nsTtl),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            secondary_overrides: {
                value: cdktf.booleanToHclTerraform(this._secondaryOverrides),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            soa: {
                value: zoneDnsSettingsSoaToHclTerraform(this._soa.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZoneDnsSettingsSoa",
            },
            zone_id: {
                value: cdktf.stringToHclTerraform(this._zoneId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            zone_mode: {
                value: cdktf.stringToHclTerraform(this._zoneMode),
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
    ZoneDnsSettings.tfResourceType = "cloudflare_zone_dns_settings";
    return ZoneDnsSettings;
}(cdktf.TerraformResource));
exports.ZoneDnsSettings = ZoneDnsSettings;
