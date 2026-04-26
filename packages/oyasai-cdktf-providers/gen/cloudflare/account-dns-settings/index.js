"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings
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
exports.AccountDnsSettings = exports.AccountDnsSettingsZoneDefaultsOutputReference = exports.AccountDnsSettingsZoneDefaultsSoaOutputReference = exports.AccountDnsSettingsZoneDefaultsNameserversOutputReference = exports.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference = void 0;
exports.accountDnsSettingsZoneDefaultsInternalDnsToTerraform = accountDnsSettingsZoneDefaultsInternalDnsToTerraform;
exports.accountDnsSettingsZoneDefaultsInternalDnsToHclTerraform = accountDnsSettingsZoneDefaultsInternalDnsToHclTerraform;
exports.accountDnsSettingsZoneDefaultsNameserversToTerraform = accountDnsSettingsZoneDefaultsNameserversToTerraform;
exports.accountDnsSettingsZoneDefaultsNameserversToHclTerraform = accountDnsSettingsZoneDefaultsNameserversToHclTerraform;
exports.accountDnsSettingsZoneDefaultsSoaToTerraform = accountDnsSettingsZoneDefaultsSoaToTerraform;
exports.accountDnsSettingsZoneDefaultsSoaToHclTerraform = accountDnsSettingsZoneDefaultsSoaToHclTerraform;
exports.accountDnsSettingsZoneDefaultsToTerraform = accountDnsSettingsZoneDefaultsToTerraform;
exports.accountDnsSettingsZoneDefaultsToHclTerraform = accountDnsSettingsZoneDefaultsToHclTerraform;
var cdktf = require("cdktf");
function accountDnsSettingsZoneDefaultsInternalDnsToTerraform(struct) {
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
function accountDnsSettingsZoneDefaultsInternalDnsToHclTerraform(struct) {
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
var AccountDnsSettingsZoneDefaultsInternalDnsOutputReference = /** @class */ (function (_super) {
    __extends(AccountDnsSettingsZoneDefaultsInternalDnsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AccountDnsSettingsZoneDefaultsInternalDnsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.prototype, "referenceZoneId", {
        get: function () {
            return this.getStringAttribute('reference_zone_id');
        },
        set: function (value) {
            this._referenceZoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.prototype.resetReferenceZoneId = function () {
        this._referenceZoneId = undefined;
    };
    Object.defineProperty(AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.prototype, "referenceZoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._referenceZoneId;
        },
        enumerable: false,
        configurable: true
    });
    return AccountDnsSettingsZoneDefaultsInternalDnsOutputReference;
}(cdktf.ComplexObject));
exports.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference = AccountDnsSettingsZoneDefaultsInternalDnsOutputReference;
function accountDnsSettingsZoneDefaultsNameserversToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
    };
}
function accountDnsSettingsZoneDefaultsNameserversToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
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
var AccountDnsSettingsZoneDefaultsNameserversOutputReference = /** @class */ (function (_super) {
    __extends(AccountDnsSettingsZoneDefaultsNameserversOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AccountDnsSettingsZoneDefaultsNameserversOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AccountDnsSettingsZoneDefaultsNameserversOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
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
                this._type = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._type = value.type;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountDnsSettingsZoneDefaultsNameserversOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    AccountDnsSettingsZoneDefaultsNameserversOutputReference.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(AccountDnsSettingsZoneDefaultsNameserversOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    return AccountDnsSettingsZoneDefaultsNameserversOutputReference;
}(cdktf.ComplexObject));
exports.AccountDnsSettingsZoneDefaultsNameserversOutputReference = AccountDnsSettingsZoneDefaultsNameserversOutputReference;
function accountDnsSettingsZoneDefaultsSoaToTerraform(struct) {
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
function accountDnsSettingsZoneDefaultsSoaToHclTerraform(struct) {
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
var AccountDnsSettingsZoneDefaultsSoaOutputReference = /** @class */ (function (_super) {
    __extends(AccountDnsSettingsZoneDefaultsSoaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AccountDnsSettingsZoneDefaultsSoaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AccountDnsSettingsZoneDefaultsSoaOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(AccountDnsSettingsZoneDefaultsSoaOutputReference.prototype, "expire", {
        get: function () {
            return this.getNumberAttribute('expire');
        },
        set: function (value) {
            this._expire = value;
        },
        enumerable: false,
        configurable: true
    });
    AccountDnsSettingsZoneDefaultsSoaOutputReference.prototype.resetExpire = function () {
        this._expire = undefined;
    };
    Object.defineProperty(AccountDnsSettingsZoneDefaultsSoaOutputReference.prototype, "expireInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._expire;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountDnsSettingsZoneDefaultsSoaOutputReference.prototype, "minTtl", {
        get: function () {
            return this.getNumberAttribute('min_ttl');
        },
        set: function (value) {
            this._minTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    AccountDnsSettingsZoneDefaultsSoaOutputReference.prototype.resetMinTtl = function () {
        this._minTtl = undefined;
    };
    Object.defineProperty(AccountDnsSettingsZoneDefaultsSoaOutputReference.prototype, "minTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._minTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountDnsSettingsZoneDefaultsSoaOutputReference.prototype, "mname", {
        get: function () {
            return this.getStringAttribute('mname');
        },
        set: function (value) {
            this._mname = value;
        },
        enumerable: false,
        configurable: true
    });
    AccountDnsSettingsZoneDefaultsSoaOutputReference.prototype.resetMname = function () {
        this._mname = undefined;
    };
    Object.defineProperty(AccountDnsSettingsZoneDefaultsSoaOutputReference.prototype, "mnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountDnsSettingsZoneDefaultsSoaOutputReference.prototype, "refresh", {
        get: function () {
            return this.getNumberAttribute('refresh');
        },
        set: function (value) {
            this._refresh = value;
        },
        enumerable: false,
        configurable: true
    });
    AccountDnsSettingsZoneDefaultsSoaOutputReference.prototype.resetRefresh = function () {
        this._refresh = undefined;
    };
    Object.defineProperty(AccountDnsSettingsZoneDefaultsSoaOutputReference.prototype, "refreshInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._refresh;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountDnsSettingsZoneDefaultsSoaOutputReference.prototype, "retry", {
        get: function () {
            return this.getNumberAttribute('retry');
        },
        set: function (value) {
            this._retry = value;
        },
        enumerable: false,
        configurable: true
    });
    AccountDnsSettingsZoneDefaultsSoaOutputReference.prototype.resetRetry = function () {
        this._retry = undefined;
    };
    Object.defineProperty(AccountDnsSettingsZoneDefaultsSoaOutputReference.prototype, "retryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._retry;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountDnsSettingsZoneDefaultsSoaOutputReference.prototype, "rname", {
        get: function () {
            return this.getStringAttribute('rname');
        },
        set: function (value) {
            this._rname = value;
        },
        enumerable: false,
        configurable: true
    });
    AccountDnsSettingsZoneDefaultsSoaOutputReference.prototype.resetRname = function () {
        this._rname = undefined;
    };
    Object.defineProperty(AccountDnsSettingsZoneDefaultsSoaOutputReference.prototype, "rnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountDnsSettingsZoneDefaultsSoaOutputReference.prototype, "ttl", {
        get: function () {
            return this.getNumberAttribute('ttl');
        },
        set: function (value) {
            this._ttl = value;
        },
        enumerable: false,
        configurable: true
    });
    AccountDnsSettingsZoneDefaultsSoaOutputReference.prototype.resetTtl = function () {
        this._ttl = undefined;
    };
    Object.defineProperty(AccountDnsSettingsZoneDefaultsSoaOutputReference.prototype, "ttlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ttl;
        },
        enumerable: false,
        configurable: true
    });
    return AccountDnsSettingsZoneDefaultsSoaOutputReference;
}(cdktf.ComplexObject));
exports.AccountDnsSettingsZoneDefaultsSoaOutputReference = AccountDnsSettingsZoneDefaultsSoaOutputReference;
function accountDnsSettingsZoneDefaultsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        flatten_all_cnames: cdktf.booleanToTerraform(struct.flattenAllCnames),
        foundation_dns: cdktf.booleanToTerraform(struct.foundationDns),
        internal_dns: accountDnsSettingsZoneDefaultsInternalDnsToTerraform(struct.internalDns),
        multi_provider: cdktf.booleanToTerraform(struct.multiProvider),
        nameservers: accountDnsSettingsZoneDefaultsNameserversToTerraform(struct.nameservers),
        ns_ttl: cdktf.numberToTerraform(struct.nsTtl),
        secondary_overrides: cdktf.booleanToTerraform(struct.secondaryOverrides),
        soa: accountDnsSettingsZoneDefaultsSoaToTerraform(struct.soa),
        zone_mode: cdktf.stringToTerraform(struct.zoneMode),
    };
}
function accountDnsSettingsZoneDefaultsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        flatten_all_cnames: {
            value: cdktf.booleanToHclTerraform(struct.flattenAllCnames),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        foundation_dns: {
            value: cdktf.booleanToHclTerraform(struct.foundationDns),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        internal_dns: {
            value: accountDnsSettingsZoneDefaultsInternalDnsToHclTerraform(struct.internalDns),
            isBlock: true,
            type: "struct",
            storageClassType: "AccountDnsSettingsZoneDefaultsInternalDns",
        },
        multi_provider: {
            value: cdktf.booleanToHclTerraform(struct.multiProvider),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        nameservers: {
            value: accountDnsSettingsZoneDefaultsNameserversToHclTerraform(struct.nameservers),
            isBlock: true,
            type: "struct",
            storageClassType: "AccountDnsSettingsZoneDefaultsNameservers",
        },
        ns_ttl: {
            value: cdktf.numberToHclTerraform(struct.nsTtl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        secondary_overrides: {
            value: cdktf.booleanToHclTerraform(struct.secondaryOverrides),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        soa: {
            value: accountDnsSettingsZoneDefaultsSoaToHclTerraform(struct.soa),
            isBlock: true,
            type: "struct",
            storageClassType: "AccountDnsSettingsZoneDefaultsSoa",
        },
        zone_mode: {
            value: cdktf.stringToHclTerraform(struct.zoneMode),
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
var AccountDnsSettingsZoneDefaultsOutputReference = /** @class */ (function (_super) {
    __extends(AccountDnsSettingsZoneDefaultsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AccountDnsSettingsZoneDefaultsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // internal_dns - computed: false, optional: true, required: false
        _this._internalDns = new AccountDnsSettingsZoneDefaultsInternalDnsOutputReference(_this, "internal_dns");
        // nameservers - computed: false, optional: true, required: false
        _this._nameservers = new AccountDnsSettingsZoneDefaultsNameserversOutputReference(_this, "nameservers");
        // soa - computed: false, optional: true, required: false
        _this._soa = new AccountDnsSettingsZoneDefaultsSoaOutputReference(_this, "soa");
        return _this;
    }
    Object.defineProperty(AccountDnsSettingsZoneDefaultsOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d, _e, _f;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._flattenAllCnames !== undefined) {
                hasAnyValues = true;
                internalValueResult.flattenAllCnames = this._flattenAllCnames;
            }
            if (this._foundationDns !== undefined) {
                hasAnyValues = true;
                internalValueResult.foundationDns = this._foundationDns;
            }
            if (((_a = this._internalDns) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.internalDns = (_b = this._internalDns) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._multiProvider !== undefined) {
                hasAnyValues = true;
                internalValueResult.multiProvider = this._multiProvider;
            }
            if (((_c = this._nameservers) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.nameservers = (_d = this._nameservers) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (this._nsTtl !== undefined) {
                hasAnyValues = true;
                internalValueResult.nsTtl = this._nsTtl;
            }
            if (this._secondaryOverrides !== undefined) {
                hasAnyValues = true;
                internalValueResult.secondaryOverrides = this._secondaryOverrides;
            }
            if (((_e = this._soa) === null || _e === void 0 ? void 0 : _e.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.soa = (_f = this._soa) === null || _f === void 0 ? void 0 : _f.internalValue;
            }
            if (this._zoneMode !== undefined) {
                hasAnyValues = true;
                internalValueResult.zoneMode = this._zoneMode;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._flattenAllCnames = undefined;
                this._foundationDns = undefined;
                this._internalDns.internalValue = undefined;
                this._multiProvider = undefined;
                this._nameservers.internalValue = undefined;
                this._nsTtl = undefined;
                this._secondaryOverrides = undefined;
                this._soa.internalValue = undefined;
                this._zoneMode = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._flattenAllCnames = value.flattenAllCnames;
                this._foundationDns = value.foundationDns;
                this._internalDns.internalValue = value.internalDns;
                this._multiProvider = value.multiProvider;
                this._nameservers.internalValue = value.nameservers;
                this._nsTtl = value.nsTtl;
                this._secondaryOverrides = value.secondaryOverrides;
                this._soa.internalValue = value.soa;
                this._zoneMode = value.zoneMode;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountDnsSettingsZoneDefaultsOutputReference.prototype, "flattenAllCnames", {
        get: function () {
            return this.getBooleanAttribute('flatten_all_cnames');
        },
        set: function (value) {
            this._flattenAllCnames = value;
        },
        enumerable: false,
        configurable: true
    });
    AccountDnsSettingsZoneDefaultsOutputReference.prototype.resetFlattenAllCnames = function () {
        this._flattenAllCnames = undefined;
    };
    Object.defineProperty(AccountDnsSettingsZoneDefaultsOutputReference.prototype, "flattenAllCnamesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._flattenAllCnames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountDnsSettingsZoneDefaultsOutputReference.prototype, "foundationDns", {
        get: function () {
            return this.getBooleanAttribute('foundation_dns');
        },
        set: function (value) {
            this._foundationDns = value;
        },
        enumerable: false,
        configurable: true
    });
    AccountDnsSettingsZoneDefaultsOutputReference.prototype.resetFoundationDns = function () {
        this._foundationDns = undefined;
    };
    Object.defineProperty(AccountDnsSettingsZoneDefaultsOutputReference.prototype, "foundationDnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._foundationDns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountDnsSettingsZoneDefaultsOutputReference.prototype, "internalDns", {
        get: function () {
            return this._internalDns;
        },
        enumerable: false,
        configurable: true
    });
    AccountDnsSettingsZoneDefaultsOutputReference.prototype.putInternalDns = function (value) {
        this._internalDns.internalValue = value;
    };
    AccountDnsSettingsZoneDefaultsOutputReference.prototype.resetInternalDns = function () {
        this._internalDns.internalValue = undefined;
    };
    Object.defineProperty(AccountDnsSettingsZoneDefaultsOutputReference.prototype, "internalDnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._internalDns.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountDnsSettingsZoneDefaultsOutputReference.prototype, "multiProvider", {
        get: function () {
            return this.getBooleanAttribute('multi_provider');
        },
        set: function (value) {
            this._multiProvider = value;
        },
        enumerable: false,
        configurable: true
    });
    AccountDnsSettingsZoneDefaultsOutputReference.prototype.resetMultiProvider = function () {
        this._multiProvider = undefined;
    };
    Object.defineProperty(AccountDnsSettingsZoneDefaultsOutputReference.prototype, "multiProviderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._multiProvider;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountDnsSettingsZoneDefaultsOutputReference.prototype, "nameservers", {
        get: function () {
            return this._nameservers;
        },
        enumerable: false,
        configurable: true
    });
    AccountDnsSettingsZoneDefaultsOutputReference.prototype.putNameservers = function (value) {
        this._nameservers.internalValue = value;
    };
    AccountDnsSettingsZoneDefaultsOutputReference.prototype.resetNameservers = function () {
        this._nameservers.internalValue = undefined;
    };
    Object.defineProperty(AccountDnsSettingsZoneDefaultsOutputReference.prototype, "nameserversInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._nameservers.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountDnsSettingsZoneDefaultsOutputReference.prototype, "nsTtl", {
        get: function () {
            return this.getNumberAttribute('ns_ttl');
        },
        set: function (value) {
            this._nsTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    AccountDnsSettingsZoneDefaultsOutputReference.prototype.resetNsTtl = function () {
        this._nsTtl = undefined;
    };
    Object.defineProperty(AccountDnsSettingsZoneDefaultsOutputReference.prototype, "nsTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._nsTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountDnsSettingsZoneDefaultsOutputReference.prototype, "secondaryOverrides", {
        get: function () {
            return this.getBooleanAttribute('secondary_overrides');
        },
        set: function (value) {
            this._secondaryOverrides = value;
        },
        enumerable: false,
        configurable: true
    });
    AccountDnsSettingsZoneDefaultsOutputReference.prototype.resetSecondaryOverrides = function () {
        this._secondaryOverrides = undefined;
    };
    Object.defineProperty(AccountDnsSettingsZoneDefaultsOutputReference.prototype, "secondaryOverridesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secondaryOverrides;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountDnsSettingsZoneDefaultsOutputReference.prototype, "soa", {
        get: function () {
            return this._soa;
        },
        enumerable: false,
        configurable: true
    });
    AccountDnsSettingsZoneDefaultsOutputReference.prototype.putSoa = function (value) {
        this._soa.internalValue = value;
    };
    AccountDnsSettingsZoneDefaultsOutputReference.prototype.resetSoa = function () {
        this._soa.internalValue = undefined;
    };
    Object.defineProperty(AccountDnsSettingsZoneDefaultsOutputReference.prototype, "soaInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._soa.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountDnsSettingsZoneDefaultsOutputReference.prototype, "zoneMode", {
        get: function () {
            return this.getStringAttribute('zone_mode');
        },
        set: function (value) {
            this._zoneMode = value;
        },
        enumerable: false,
        configurable: true
    });
    AccountDnsSettingsZoneDefaultsOutputReference.prototype.resetZoneMode = function () {
        this._zoneMode = undefined;
    };
    Object.defineProperty(AccountDnsSettingsZoneDefaultsOutputReference.prototype, "zoneModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneMode;
        },
        enumerable: false,
        configurable: true
    });
    return AccountDnsSettingsZoneDefaultsOutputReference;
}(cdktf.ComplexObject));
exports.AccountDnsSettingsZoneDefaultsOutputReference = AccountDnsSettingsZoneDefaultsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings cloudflare_account_dns_settings}
*/
var AccountDnsSettings = /** @class */ (function (_super) {
    __extends(AccountDnsSettings, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings cloudflare_account_dns_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AccountDnsSettingsConfig = {}
    */
    function AccountDnsSettings(scope, id, config) {
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
        // zone_defaults - computed: false, optional: true, required: false
        _this._zoneDefaults = new AccountDnsSettingsZoneDefaultsOutputReference(_this, "zone_defaults");
        _this._accountId = config.accountId;
        _this._enforceDnsOnly = config.enforceDnsOnly;
        _this._zoneDefaults.internalValue = config.zoneDefaults;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a AccountDnsSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AccountDnsSettings to import
    * @param importFromId The id of the existing AccountDnsSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AccountDnsSettings to import is found
    */
    AccountDnsSettings.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_account_dns_settings", importId: importFromId, provider: provider });
    };
    Object.defineProperty(AccountDnsSettings.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    AccountDnsSettings.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(AccountDnsSettings.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountDnsSettings.prototype, "enforceDnsOnly", {
        get: function () {
            return this.getBooleanAttribute('enforce_dns_only');
        },
        set: function (value) {
            this._enforceDnsOnly = value;
        },
        enumerable: false,
        configurable: true
    });
    AccountDnsSettings.prototype.resetEnforceDnsOnly = function () {
        this._enforceDnsOnly = undefined;
    };
    Object.defineProperty(AccountDnsSettings.prototype, "enforceDnsOnlyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enforceDnsOnly;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountDnsSettings.prototype, "zoneDefaults", {
        get: function () {
            return this._zoneDefaults;
        },
        enumerable: false,
        configurable: true
    });
    AccountDnsSettings.prototype.putZoneDefaults = function (value) {
        this._zoneDefaults.internalValue = value;
    };
    AccountDnsSettings.prototype.resetZoneDefaults = function () {
        this._zoneDefaults.internalValue = undefined;
    };
    Object.defineProperty(AccountDnsSettings.prototype, "zoneDefaultsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneDefaults.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AccountDnsSettings.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            enforce_dns_only: cdktf.booleanToTerraform(this._enforceDnsOnly),
            zone_defaults: accountDnsSettingsZoneDefaultsToTerraform(this._zoneDefaults.internalValue),
        };
    };
    AccountDnsSettings.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enforce_dns_only: {
                value: cdktf.booleanToHclTerraform(this._enforceDnsOnly),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            zone_defaults: {
                value: accountDnsSettingsZoneDefaultsToHclTerraform(this._zoneDefaults.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AccountDnsSettingsZoneDefaults",
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
    AccountDnsSettings.tfResourceType = "cloudflare_account_dns_settings";
    return AccountDnsSettings;
}(cdktf.TerraformResource));
exports.AccountDnsSettings = AccountDnsSettings;
