"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_logging
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
exports.ZeroTrustGatewayLogging = exports.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference = exports.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference = exports.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference = exports.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference = void 0;
exports.zeroTrustGatewayLoggingSettingsByRuleTypeDnsToTerraform = zeroTrustGatewayLoggingSettingsByRuleTypeDnsToTerraform;
exports.zeroTrustGatewayLoggingSettingsByRuleTypeDnsToHclTerraform = zeroTrustGatewayLoggingSettingsByRuleTypeDnsToHclTerraform;
exports.zeroTrustGatewayLoggingSettingsByRuleTypeHttpToTerraform = zeroTrustGatewayLoggingSettingsByRuleTypeHttpToTerraform;
exports.zeroTrustGatewayLoggingSettingsByRuleTypeHttpToHclTerraform = zeroTrustGatewayLoggingSettingsByRuleTypeHttpToHclTerraform;
exports.zeroTrustGatewayLoggingSettingsByRuleTypeL4ToTerraform = zeroTrustGatewayLoggingSettingsByRuleTypeL4ToTerraform;
exports.zeroTrustGatewayLoggingSettingsByRuleTypeL4ToHclTerraform = zeroTrustGatewayLoggingSettingsByRuleTypeL4ToHclTerraform;
exports.zeroTrustGatewayLoggingSettingsByRuleTypeToTerraform = zeroTrustGatewayLoggingSettingsByRuleTypeToTerraform;
exports.zeroTrustGatewayLoggingSettingsByRuleTypeToHclTerraform = zeroTrustGatewayLoggingSettingsByRuleTypeToHclTerraform;
var cdktf = require("cdktf");
function zeroTrustGatewayLoggingSettingsByRuleTypeDnsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        log_all: cdktf.booleanToTerraform(struct.logAll),
        log_blocks: cdktf.booleanToTerraform(struct.logBlocks),
    };
}
function zeroTrustGatewayLoggingSettingsByRuleTypeDnsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        log_all: {
            value: cdktf.booleanToHclTerraform(struct.logAll),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        log_blocks: {
            value: cdktf.booleanToHclTerraform(struct.logBlocks),
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
var ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._logAll !== undefined) {
                hasAnyValues = true;
                internalValueResult.logAll = this._logAll;
            }
            if (this._logBlocks !== undefined) {
                hasAnyValues = true;
                internalValueResult.logBlocks = this._logBlocks;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._logAll = undefined;
                this._logBlocks = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._logAll = value.logAll;
                this._logBlocks = value.logBlocks;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.prototype, "logAll", {
        get: function () {
            return this.getBooleanAttribute('log_all');
        },
        set: function (value) {
            this._logAll = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.prototype.resetLogAll = function () {
        this._logAll = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.prototype, "logAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.prototype, "logBlocks", {
        get: function () {
            return this.getBooleanAttribute('log_blocks');
        },
        set: function (value) {
            this._logBlocks = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.prototype.resetLogBlocks = function () {
        this._logBlocks = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.prototype, "logBlocksInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logBlocks;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference = ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference;
function zeroTrustGatewayLoggingSettingsByRuleTypeHttpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        log_all: cdktf.booleanToTerraform(struct.logAll),
        log_blocks: cdktf.booleanToTerraform(struct.logBlocks),
    };
}
function zeroTrustGatewayLoggingSettingsByRuleTypeHttpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        log_all: {
            value: cdktf.booleanToHclTerraform(struct.logAll),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        log_blocks: {
            value: cdktf.booleanToHclTerraform(struct.logBlocks),
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
var ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._logAll !== undefined) {
                hasAnyValues = true;
                internalValueResult.logAll = this._logAll;
            }
            if (this._logBlocks !== undefined) {
                hasAnyValues = true;
                internalValueResult.logBlocks = this._logBlocks;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._logAll = undefined;
                this._logBlocks = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._logAll = value.logAll;
                this._logBlocks = value.logBlocks;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.prototype, "logAll", {
        get: function () {
            return this.getBooleanAttribute('log_all');
        },
        set: function (value) {
            this._logAll = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.prototype.resetLogAll = function () {
        this._logAll = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.prototype, "logAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.prototype, "logBlocks", {
        get: function () {
            return this.getBooleanAttribute('log_blocks');
        },
        set: function (value) {
            this._logBlocks = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.prototype.resetLogBlocks = function () {
        this._logBlocks = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.prototype, "logBlocksInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logBlocks;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference = ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference;
function zeroTrustGatewayLoggingSettingsByRuleTypeL4ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        log_all: cdktf.booleanToTerraform(struct.logAll),
        log_blocks: cdktf.booleanToTerraform(struct.logBlocks),
    };
}
function zeroTrustGatewayLoggingSettingsByRuleTypeL4ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        log_all: {
            value: cdktf.booleanToHclTerraform(struct.logAll),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        log_blocks: {
            value: cdktf.booleanToHclTerraform(struct.logBlocks),
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
var ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._logAll !== undefined) {
                hasAnyValues = true;
                internalValueResult.logAll = this._logAll;
            }
            if (this._logBlocks !== undefined) {
                hasAnyValues = true;
                internalValueResult.logBlocks = this._logBlocks;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._logAll = undefined;
                this._logBlocks = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._logAll = value.logAll;
                this._logBlocks = value.logBlocks;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.prototype, "logAll", {
        get: function () {
            return this.getBooleanAttribute('log_all');
        },
        set: function (value) {
            this._logAll = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.prototype.resetLogAll = function () {
        this._logAll = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.prototype, "logAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.prototype, "logBlocks", {
        get: function () {
            return this.getBooleanAttribute('log_blocks');
        },
        set: function (value) {
            this._logBlocks = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.prototype.resetLogBlocks = function () {
        this._logBlocks = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.prototype, "logBlocksInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logBlocks;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference = ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference;
function zeroTrustGatewayLoggingSettingsByRuleTypeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        dns: zeroTrustGatewayLoggingSettingsByRuleTypeDnsToTerraform(struct.dns),
        http: zeroTrustGatewayLoggingSettingsByRuleTypeHttpToTerraform(struct.http),
        l4: zeroTrustGatewayLoggingSettingsByRuleTypeL4ToTerraform(struct.l4),
    };
}
function zeroTrustGatewayLoggingSettingsByRuleTypeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        dns: {
            value: zeroTrustGatewayLoggingSettingsByRuleTypeDnsToHclTerraform(struct.dns),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewayLoggingSettingsByRuleTypeDns",
        },
        http: {
            value: zeroTrustGatewayLoggingSettingsByRuleTypeHttpToHclTerraform(struct.http),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewayLoggingSettingsByRuleTypeHttp",
        },
        l4: {
            value: zeroTrustGatewayLoggingSettingsByRuleTypeL4ToHclTerraform(struct.l4),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewayLoggingSettingsByRuleTypeL4",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // dns - computed: true, optional: true, required: false
        _this._dns = new ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference(_this, "dns");
        // http - computed: true, optional: true, required: false
        _this._http = new ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference(_this, "http");
        // l4 - computed: true, optional: true, required: false
        _this._l4 = new ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference(_this, "l4");
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d, _e, _f;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._dns) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.dns = (_b = this._dns) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._http) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.http = (_d = this._http) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (((_e = this._l4) === null || _e === void 0 ? void 0 : _e.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.l4 = (_f = this._l4) === null || _f === void 0 ? void 0 : _f.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._dns.internalValue = undefined;
                this._http.internalValue = undefined;
                this._l4.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._dns.internalValue = value.dns;
                this._http.internalValue = value.http;
                this._l4.internalValue = value.l4;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.prototype, "dns", {
        get: function () {
            return this._dns;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.prototype.putDns = function (value) {
        this._dns.internalValue = value;
    };
    ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.prototype.resetDns = function () {
        this._dns.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.prototype, "dnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dns.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.prototype, "http", {
        get: function () {
            return this._http;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.prototype.putHttp = function (value) {
        this._http.internalValue = value;
    };
    ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.prototype.resetHttp = function () {
        this._http.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.prototype, "httpInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._http.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.prototype, "l4", {
        get: function () {
            return this._l4;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.prototype.putL4 = function (value) {
        this._l4.internalValue = value;
    };
    ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.prototype.resetL4 = function () {
        this._l4.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.prototype, "l4Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._l4.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference = ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_logging cloudflare_zero_trust_gateway_logging}
*/
var ZeroTrustGatewayLogging = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewayLogging, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_logging cloudflare_zero_trust_gateway_logging} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustGatewayLoggingConfig
    */
    function ZeroTrustGatewayLogging(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_gateway_logging',
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
        // settings_by_rule_type - computed: true, optional: true, required: false
        _this._settingsByRuleType = new ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference(_this, "settings_by_rule_type");
        _this._accountId = config.accountId;
        _this._redactPii = config.redactPii;
        _this._settingsByRuleType.internalValue = config.settingsByRuleType;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustGatewayLogging resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustGatewayLogging to import
    * @param importFromId The id of the existing ZeroTrustGatewayLogging that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_logging#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustGatewayLogging to import is found
    */
    ZeroTrustGatewayLogging.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_gateway_logging", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZeroTrustGatewayLogging.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayLogging.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayLogging.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayLogging.prototype, "redactPii", {
        get: function () {
            return this.getBooleanAttribute('redact_pii');
        },
        set: function (value) {
            this._redactPii = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayLogging.prototype.resetRedactPii = function () {
        this._redactPii = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayLogging.prototype, "redactPiiInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._redactPii;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayLogging.prototype, "settingsByRuleType", {
        get: function () {
            return this._settingsByRuleType;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayLogging.prototype.putSettingsByRuleType = function (value) {
        this._settingsByRuleType.internalValue = value;
    };
    ZeroTrustGatewayLogging.prototype.resetSettingsByRuleType = function () {
        this._settingsByRuleType.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayLogging.prototype, "settingsByRuleTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._settingsByRuleType.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ZeroTrustGatewayLogging.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            redact_pii: cdktf.booleanToTerraform(this._redactPii),
            settings_by_rule_type: zeroTrustGatewayLoggingSettingsByRuleTypeToTerraform(this._settingsByRuleType.internalValue),
        };
    };
    ZeroTrustGatewayLogging.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            redact_pii: {
                value: cdktf.booleanToHclTerraform(this._redactPii),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            settings_by_rule_type: {
                value: zeroTrustGatewayLoggingSettingsByRuleTypeToHclTerraform(this._settingsByRuleType.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustGatewayLoggingSettingsByRuleType",
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
    ZeroTrustGatewayLogging.tfResourceType = "cloudflare_zero_trust_gateway_logging";
    return ZeroTrustGatewayLogging;
}(cdktf.TerraformResource));
exports.ZeroTrustGatewayLogging = ZeroTrustGatewayLogging;
