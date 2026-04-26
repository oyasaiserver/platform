"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy
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
exports.ZeroTrustGatewayPolicy = exports.ZeroTrustGatewayPolicyScheduleOutputReference = exports.ZeroTrustGatewayPolicyRuleSettingsOutputReference = exports.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference = exports.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference = exports.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference = exports.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference = exports.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference = exports.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference = exports.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference = exports.ZeroTrustGatewayPolicyRuleSettingsForensicCopyOutputReference = exports.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference = exports.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference = exports.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List = exports.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference = exports.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List = exports.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference = exports.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference = exports.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference = exports.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference = exports.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference = exports.ZeroTrustGatewayPolicyExpirationOutputReference = void 0;
exports.zeroTrustGatewayPolicyExpirationToTerraform = zeroTrustGatewayPolicyExpirationToTerraform;
exports.zeroTrustGatewayPolicyExpirationToHclTerraform = zeroTrustGatewayPolicyExpirationToHclTerraform;
exports.zeroTrustGatewayPolicyRuleSettingsAuditSshToTerraform = zeroTrustGatewayPolicyRuleSettingsAuditSshToTerraform;
exports.zeroTrustGatewayPolicyRuleSettingsAuditSshToHclTerraform = zeroTrustGatewayPolicyRuleSettingsAuditSshToHclTerraform;
exports.zeroTrustGatewayPolicyRuleSettingsBisoAdminControlsToTerraform = zeroTrustGatewayPolicyRuleSettingsBisoAdminControlsToTerraform;
exports.zeroTrustGatewayPolicyRuleSettingsBisoAdminControlsToHclTerraform = zeroTrustGatewayPolicyRuleSettingsBisoAdminControlsToHclTerraform;
exports.zeroTrustGatewayPolicyRuleSettingsBlockPageToTerraform = zeroTrustGatewayPolicyRuleSettingsBlockPageToTerraform;
exports.zeroTrustGatewayPolicyRuleSettingsBlockPageToHclTerraform = zeroTrustGatewayPolicyRuleSettingsBlockPageToHclTerraform;
exports.zeroTrustGatewayPolicyRuleSettingsCheckSessionToTerraform = zeroTrustGatewayPolicyRuleSettingsCheckSessionToTerraform;
exports.zeroTrustGatewayPolicyRuleSettingsCheckSessionToHclTerraform = zeroTrustGatewayPolicyRuleSettingsCheckSessionToHclTerraform;
exports.zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4ToTerraform = zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4ToTerraform;
exports.zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4ToHclTerraform = zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4ToHclTerraform;
exports.zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6ToTerraform = zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6ToTerraform;
exports.zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6ToHclTerraform = zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6ToHclTerraform;
exports.zeroTrustGatewayPolicyRuleSettingsDnsResolversToTerraform = zeroTrustGatewayPolicyRuleSettingsDnsResolversToTerraform;
exports.zeroTrustGatewayPolicyRuleSettingsDnsResolversToHclTerraform = zeroTrustGatewayPolicyRuleSettingsDnsResolversToHclTerraform;
exports.zeroTrustGatewayPolicyRuleSettingsEgressToTerraform = zeroTrustGatewayPolicyRuleSettingsEgressToTerraform;
exports.zeroTrustGatewayPolicyRuleSettingsEgressToHclTerraform = zeroTrustGatewayPolicyRuleSettingsEgressToHclTerraform;
exports.zeroTrustGatewayPolicyRuleSettingsForensicCopyToTerraform = zeroTrustGatewayPolicyRuleSettingsForensicCopyToTerraform;
exports.zeroTrustGatewayPolicyRuleSettingsForensicCopyToHclTerraform = zeroTrustGatewayPolicyRuleSettingsForensicCopyToHclTerraform;
exports.zeroTrustGatewayPolicyRuleSettingsL4OverrideToTerraform = zeroTrustGatewayPolicyRuleSettingsL4OverrideToTerraform;
exports.zeroTrustGatewayPolicyRuleSettingsL4OverrideToHclTerraform = zeroTrustGatewayPolicyRuleSettingsL4OverrideToHclTerraform;
exports.zeroTrustGatewayPolicyRuleSettingsNotificationSettingsToTerraform = zeroTrustGatewayPolicyRuleSettingsNotificationSettingsToTerraform;
exports.zeroTrustGatewayPolicyRuleSettingsNotificationSettingsToHclTerraform = zeroTrustGatewayPolicyRuleSettingsNotificationSettingsToHclTerraform;
exports.zeroTrustGatewayPolicyRuleSettingsPayloadLogToTerraform = zeroTrustGatewayPolicyRuleSettingsPayloadLogToTerraform;
exports.zeroTrustGatewayPolicyRuleSettingsPayloadLogToHclTerraform = zeroTrustGatewayPolicyRuleSettingsPayloadLogToHclTerraform;
exports.zeroTrustGatewayPolicyRuleSettingsQuarantineToTerraform = zeroTrustGatewayPolicyRuleSettingsQuarantineToTerraform;
exports.zeroTrustGatewayPolicyRuleSettingsQuarantineToHclTerraform = zeroTrustGatewayPolicyRuleSettingsQuarantineToHclTerraform;
exports.zeroTrustGatewayPolicyRuleSettingsRedirectToTerraform = zeroTrustGatewayPolicyRuleSettingsRedirectToTerraform;
exports.zeroTrustGatewayPolicyRuleSettingsRedirectToHclTerraform = zeroTrustGatewayPolicyRuleSettingsRedirectToHclTerraform;
exports.zeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyToTerraform = zeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyToTerraform;
exports.zeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyToHclTerraform = zeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyToHclTerraform;
exports.zeroTrustGatewayPolicyRuleSettingsUntrustedCertToTerraform = zeroTrustGatewayPolicyRuleSettingsUntrustedCertToTerraform;
exports.zeroTrustGatewayPolicyRuleSettingsUntrustedCertToHclTerraform = zeroTrustGatewayPolicyRuleSettingsUntrustedCertToHclTerraform;
exports.zeroTrustGatewayPolicyRuleSettingsToTerraform = zeroTrustGatewayPolicyRuleSettingsToTerraform;
exports.zeroTrustGatewayPolicyRuleSettingsToHclTerraform = zeroTrustGatewayPolicyRuleSettingsToHclTerraform;
exports.zeroTrustGatewayPolicyScheduleToTerraform = zeroTrustGatewayPolicyScheduleToTerraform;
exports.zeroTrustGatewayPolicyScheduleToHclTerraform = zeroTrustGatewayPolicyScheduleToHclTerraform;
var cdktf = require("cdktf");
function zeroTrustGatewayPolicyExpirationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        duration: cdktf.numberToTerraform(struct.duration),
        expires_at: cdktf.stringToTerraform(struct.expiresAt),
    };
}
function zeroTrustGatewayPolicyExpirationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        duration: {
            value: cdktf.numberToHclTerraform(struct.duration),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        expires_at: {
            value: cdktf.stringToHclTerraform(struct.expiresAt),
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
var ZeroTrustGatewayPolicyExpirationOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewayPolicyExpirationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustGatewayPolicyExpirationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewayPolicyExpirationOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._duration !== undefined) {
                hasAnyValues = true;
                internalValueResult.duration = this._duration;
            }
            if (this._expiresAt !== undefined) {
                hasAnyValues = true;
                internalValueResult.expiresAt = this._expiresAt;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._duration = undefined;
                this._expiresAt = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._duration = value.duration;
                this._expiresAt = value.expiresAt;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyExpirationOutputReference.prototype, "duration", {
        get: function () {
            return this.getNumberAttribute('duration');
        },
        set: function (value) {
            this._duration = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyExpirationOutputReference.prototype.resetDuration = function () {
        this._duration = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyExpirationOutputReference.prototype, "durationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._duration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyExpirationOutputReference.prototype, "expired", {
        // expired - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('expired');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyExpirationOutputReference.prototype, "expiresAt", {
        get: function () {
            return this.getStringAttribute('expires_at');
        },
        set: function (value) {
            this._expiresAt = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyExpirationOutputReference.prototype, "expiresAtInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._expiresAt;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewayPolicyExpirationOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewayPolicyExpirationOutputReference = ZeroTrustGatewayPolicyExpirationOutputReference;
function zeroTrustGatewayPolicyRuleSettingsAuditSshToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        command_logging: cdktf.booleanToTerraform(struct.commandLogging),
    };
}
function zeroTrustGatewayPolicyRuleSettingsAuditSshToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        command_logging: {
            value: cdktf.booleanToHclTerraform(struct.commandLogging),
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
var ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._commandLogging !== undefined) {
                hasAnyValues = true;
                internalValueResult.commandLogging = this._commandLogging;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._commandLogging = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._commandLogging = value.commandLogging;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.prototype, "commandLogging", {
        get: function () {
            return this.getBooleanAttribute('command_logging');
        },
        set: function (value) {
            this._commandLogging = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.prototype.resetCommandLogging = function () {
        this._commandLogging = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.prototype, "commandLoggingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._commandLogging;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference = ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference;
function zeroTrustGatewayPolicyRuleSettingsBisoAdminControlsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        copy: cdktf.stringToTerraform(struct.copy),
        dcp: cdktf.booleanToTerraform(struct.dcp),
        dd: cdktf.booleanToTerraform(struct.dd),
        dk: cdktf.booleanToTerraform(struct.dk),
        download: cdktf.stringToTerraform(struct.download),
        dp: cdktf.booleanToTerraform(struct.dp),
        du: cdktf.booleanToTerraform(struct.du),
        keyboard: cdktf.stringToTerraform(struct.keyboard),
        paste: cdktf.stringToTerraform(struct.paste),
        printing: cdktf.stringToTerraform(struct.printing),
        upload: cdktf.stringToTerraform(struct.upload),
        version: cdktf.stringToTerraform(struct.version),
        wm_id: cdktf.stringToTerraform(struct.wmId),
    };
}
function zeroTrustGatewayPolicyRuleSettingsBisoAdminControlsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        copy: {
            value: cdktf.stringToHclTerraform(struct.copy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dcp: {
            value: cdktf.booleanToHclTerraform(struct.dcp),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        dd: {
            value: cdktf.booleanToHclTerraform(struct.dd),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        dk: {
            value: cdktf.booleanToHclTerraform(struct.dk),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        download: {
            value: cdktf.stringToHclTerraform(struct.download),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dp: {
            value: cdktf.booleanToHclTerraform(struct.dp),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        du: {
            value: cdktf.booleanToHclTerraform(struct.du),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        keyboard: {
            value: cdktf.stringToHclTerraform(struct.keyboard),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        paste: {
            value: cdktf.stringToHclTerraform(struct.paste),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        printing: {
            value: cdktf.stringToHclTerraform(struct.printing),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        upload: {
            value: cdktf.stringToHclTerraform(struct.upload),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version: {
            value: cdktf.stringToHclTerraform(struct.version),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        wm_id: {
            value: cdktf.stringToHclTerraform(struct.wmId),
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
var ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._copy !== undefined) {
                hasAnyValues = true;
                internalValueResult.copy = this._copy;
            }
            if (this._dcp !== undefined) {
                hasAnyValues = true;
                internalValueResult.dcp = this._dcp;
            }
            if (this._dd !== undefined) {
                hasAnyValues = true;
                internalValueResult.dd = this._dd;
            }
            if (this._dk !== undefined) {
                hasAnyValues = true;
                internalValueResult.dk = this._dk;
            }
            if (this._download !== undefined) {
                hasAnyValues = true;
                internalValueResult.download = this._download;
            }
            if (this._dp !== undefined) {
                hasAnyValues = true;
                internalValueResult.dp = this._dp;
            }
            if (this._du !== undefined) {
                hasAnyValues = true;
                internalValueResult.du = this._du;
            }
            if (this._keyboard !== undefined) {
                hasAnyValues = true;
                internalValueResult.keyboard = this._keyboard;
            }
            if (this._paste !== undefined) {
                hasAnyValues = true;
                internalValueResult.paste = this._paste;
            }
            if (this._printing !== undefined) {
                hasAnyValues = true;
                internalValueResult.printing = this._printing;
            }
            if (this._upload !== undefined) {
                hasAnyValues = true;
                internalValueResult.upload = this._upload;
            }
            if (this._version !== undefined) {
                hasAnyValues = true;
                internalValueResult.version = this._version;
            }
            if (this._wmId !== undefined) {
                hasAnyValues = true;
                internalValueResult.wmId = this._wmId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._copy = undefined;
                this._dcp = undefined;
                this._dd = undefined;
                this._dk = undefined;
                this._download = undefined;
                this._dp = undefined;
                this._du = undefined;
                this._keyboard = undefined;
                this._paste = undefined;
                this._printing = undefined;
                this._upload = undefined;
                this._version = undefined;
                this._wmId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._copy = value.copy;
                this._dcp = value.dcp;
                this._dd = value.dd;
                this._dk = value.dk;
                this._download = value.download;
                this._dp = value.dp;
                this._du = value.du;
                this._keyboard = value.keyboard;
                this._paste = value.paste;
                this._printing = value.printing;
                this._upload = value.upload;
                this._version = value.version;
                this._wmId = value.wmId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "copy", {
        get: function () {
            return this.getStringAttribute('copy');
        },
        set: function (value) {
            this._copy = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype.resetCopy = function () {
        this._copy = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "copyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._copy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "dcp", {
        get: function () {
            return this.getBooleanAttribute('dcp');
        },
        set: function (value) {
            this._dcp = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype.resetDcp = function () {
        this._dcp = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "dcpInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dcp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "dd", {
        get: function () {
            return this.getBooleanAttribute('dd');
        },
        set: function (value) {
            this._dd = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype.resetDd = function () {
        this._dd = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "ddInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dd;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "dk", {
        get: function () {
            return this.getBooleanAttribute('dk');
        },
        set: function (value) {
            this._dk = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype.resetDk = function () {
        this._dk = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "dkInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dk;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "download", {
        get: function () {
            return this.getStringAttribute('download');
        },
        set: function (value) {
            this._download = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype.resetDownload = function () {
        this._download = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "downloadInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._download;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "dp", {
        get: function () {
            return this.getBooleanAttribute('dp');
        },
        set: function (value) {
            this._dp = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype.resetDp = function () {
        this._dp = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "dpInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "du", {
        get: function () {
            return this.getBooleanAttribute('du');
        },
        set: function (value) {
            this._du = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype.resetDu = function () {
        this._du = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "duInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._du;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "keyboard", {
        get: function () {
            return this.getStringAttribute('keyboard');
        },
        set: function (value) {
            this._keyboard = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype.resetKeyboard = function () {
        this._keyboard = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "keyboardInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyboard;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "paste", {
        get: function () {
            return this.getStringAttribute('paste');
        },
        set: function (value) {
            this._paste = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype.resetPaste = function () {
        this._paste = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "pasteInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._paste;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "printing", {
        get: function () {
            return this.getStringAttribute('printing');
        },
        set: function (value) {
            this._printing = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype.resetPrinting = function () {
        this._printing = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "printingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._printing;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "upload", {
        get: function () {
            return this.getStringAttribute('upload');
        },
        set: function (value) {
            this._upload = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype.resetUpload = function () {
        this._upload = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "uploadInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._upload;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "version", {
        get: function () {
            return this.getStringAttribute('version');
        },
        set: function (value) {
            this._version = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype.resetVersion = function () {
        this._version = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "versionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._version;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "wmId", {
        get: function () {
            return this.getStringAttribute('wm_id');
        },
        set: function (value) {
            this._wmId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype.resetWmId = function () {
        this._wmId = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "wmIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._wmId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference = ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference;
function zeroTrustGatewayPolicyRuleSettingsBlockPageToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        include_context: cdktf.booleanToTerraform(struct.includeContext),
        target_uri: cdktf.stringToTerraform(struct.targetUri),
    };
}
function zeroTrustGatewayPolicyRuleSettingsBlockPageToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        include_context: {
            value: cdktf.booleanToHclTerraform(struct.includeContext),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        target_uri: {
            value: cdktf.stringToHclTerraform(struct.targetUri),
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
var ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._includeContext !== undefined) {
                hasAnyValues = true;
                internalValueResult.includeContext = this._includeContext;
            }
            if (this._targetUri !== undefined) {
                hasAnyValues = true;
                internalValueResult.targetUri = this._targetUri;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._includeContext = undefined;
                this._targetUri = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._includeContext = value.includeContext;
                this._targetUri = value.targetUri;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.prototype, "includeContext", {
        get: function () {
            return this.getBooleanAttribute('include_context');
        },
        set: function (value) {
            this._includeContext = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.prototype.resetIncludeContext = function () {
        this._includeContext = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.prototype, "includeContextInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._includeContext;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.prototype, "targetUri", {
        get: function () {
            return this.getStringAttribute('target_uri');
        },
        set: function (value) {
            this._targetUri = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.prototype, "targetUriInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetUri;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference = ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference;
function zeroTrustGatewayPolicyRuleSettingsCheckSessionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        duration: cdktf.stringToTerraform(struct.duration),
        enforce: cdktf.booleanToTerraform(struct.enforce),
    };
}
function zeroTrustGatewayPolicyRuleSettingsCheckSessionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        duration: {
            value: cdktf.stringToHclTerraform(struct.duration),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enforce: {
            value: cdktf.booleanToHclTerraform(struct.enforce),
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
var ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._duration !== undefined) {
                hasAnyValues = true;
                internalValueResult.duration = this._duration;
            }
            if (this._enforce !== undefined) {
                hasAnyValues = true;
                internalValueResult.enforce = this._enforce;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._duration = undefined;
                this._enforce = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._duration = value.duration;
                this._enforce = value.enforce;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.prototype, "duration", {
        get: function () {
            return this.getStringAttribute('duration');
        },
        set: function (value) {
            this._duration = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.prototype.resetDuration = function () {
        this._duration = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.prototype, "durationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._duration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.prototype, "enforce", {
        get: function () {
            return this.getBooleanAttribute('enforce');
        },
        set: function (value) {
            this._enforce = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.prototype.resetEnforce = function () {
        this._enforce = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.prototype, "enforceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enforce;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference = ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference;
function zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ip: cdktf.stringToTerraform(struct.ip),
        port: cdktf.numberToTerraform(struct.port),
        route_through_private_network: cdktf.booleanToTerraform(struct.routeThroughPrivateNetwork),
        vnet_id: cdktf.stringToTerraform(struct.vnetId),
    };
}
function zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        ip: {
            value: cdktf.stringToHclTerraform(struct.ip),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktf.numberToHclTerraform(struct.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        route_through_private_network: {
            value: cdktf.booleanToHclTerraform(struct.routeThroughPrivateNetwork),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        vnet_id: {
            value: cdktf.stringToHclTerraform(struct.vnetId),
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
var ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._ip !== undefined) {
                hasAnyValues = true;
                internalValueResult.ip = this._ip;
            }
            if (this._port !== undefined) {
                hasAnyValues = true;
                internalValueResult.port = this._port;
            }
            if (this._routeThroughPrivateNetwork !== undefined) {
                hasAnyValues = true;
                internalValueResult.routeThroughPrivateNetwork = this._routeThroughPrivateNetwork;
            }
            if (this._vnetId !== undefined) {
                hasAnyValues = true;
                internalValueResult.vnetId = this._vnetId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._ip = undefined;
                this._port = undefined;
                this._routeThroughPrivateNetwork = undefined;
                this._vnetId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._ip = value.ip;
                this._port = value.port;
                this._routeThroughPrivateNetwork = value.routeThroughPrivateNetwork;
                this._vnetId = value.vnetId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.prototype, "ip", {
        get: function () {
            return this.getStringAttribute('ip');
        },
        set: function (value) {
            this._ip = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.prototype, "ipInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ip;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.prototype, "port", {
        get: function () {
            return this.getNumberAttribute('port');
        },
        set: function (value) {
            this._port = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.prototype.resetPort = function () {
        this._port = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.prototype, "portInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.prototype, "routeThroughPrivateNetwork", {
        get: function () {
            return this.getBooleanAttribute('route_through_private_network');
        },
        set: function (value) {
            this._routeThroughPrivateNetwork = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.prototype.resetRouteThroughPrivateNetwork = function () {
        this._routeThroughPrivateNetwork = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.prototype, "routeThroughPrivateNetworkInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._routeThroughPrivateNetwork;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.prototype, "vnetId", {
        get: function () {
            return this.getStringAttribute('vnet_id');
        },
        set: function (value) {
            this._vnetId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.prototype.resetVnetId = function () {
        this._vnetId = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.prototype, "vnetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vnetId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference = ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference;
var ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.prototype.get = function (index) {
        return new ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List;
}(cdktf.ComplexList));
exports.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List = ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List;
function zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ip: cdktf.stringToTerraform(struct.ip),
        port: cdktf.numberToTerraform(struct.port),
        route_through_private_network: cdktf.booleanToTerraform(struct.routeThroughPrivateNetwork),
        vnet_id: cdktf.stringToTerraform(struct.vnetId),
    };
}
function zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        ip: {
            value: cdktf.stringToHclTerraform(struct.ip),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktf.numberToHclTerraform(struct.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        route_through_private_network: {
            value: cdktf.booleanToHclTerraform(struct.routeThroughPrivateNetwork),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        vnet_id: {
            value: cdktf.stringToHclTerraform(struct.vnetId),
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
var ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._ip !== undefined) {
                hasAnyValues = true;
                internalValueResult.ip = this._ip;
            }
            if (this._port !== undefined) {
                hasAnyValues = true;
                internalValueResult.port = this._port;
            }
            if (this._routeThroughPrivateNetwork !== undefined) {
                hasAnyValues = true;
                internalValueResult.routeThroughPrivateNetwork = this._routeThroughPrivateNetwork;
            }
            if (this._vnetId !== undefined) {
                hasAnyValues = true;
                internalValueResult.vnetId = this._vnetId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._ip = undefined;
                this._port = undefined;
                this._routeThroughPrivateNetwork = undefined;
                this._vnetId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._ip = value.ip;
                this._port = value.port;
                this._routeThroughPrivateNetwork = value.routeThroughPrivateNetwork;
                this._vnetId = value.vnetId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.prototype, "ip", {
        get: function () {
            return this.getStringAttribute('ip');
        },
        set: function (value) {
            this._ip = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.prototype, "ipInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ip;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.prototype, "port", {
        get: function () {
            return this.getNumberAttribute('port');
        },
        set: function (value) {
            this._port = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.prototype.resetPort = function () {
        this._port = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.prototype, "portInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.prototype, "routeThroughPrivateNetwork", {
        get: function () {
            return this.getBooleanAttribute('route_through_private_network');
        },
        set: function (value) {
            this._routeThroughPrivateNetwork = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.prototype.resetRouteThroughPrivateNetwork = function () {
        this._routeThroughPrivateNetwork = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.prototype, "routeThroughPrivateNetworkInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._routeThroughPrivateNetwork;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.prototype, "vnetId", {
        get: function () {
            return this.getStringAttribute('vnet_id');
        },
        set: function (value) {
            this._vnetId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.prototype.resetVnetId = function () {
        this._vnetId = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.prototype, "vnetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vnetId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference = ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference;
var ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.prototype.get = function (index) {
        return new ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List;
}(cdktf.ComplexList));
exports.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List = ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List;
function zeroTrustGatewayPolicyRuleSettingsDnsResolversToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ipv4: cdktf.listMapper(zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4ToTerraform, false)(struct.ipv4),
        ipv6: cdktf.listMapper(zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6ToTerraform, false)(struct.ipv6),
    };
}
function zeroTrustGatewayPolicyRuleSettingsDnsResolversToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        ipv4: {
            value: cdktf.listMapperHcl(zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4ToHclTerraform, false)(struct.ipv4),
            isBlock: true,
            type: "list",
            storageClassType: "ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List",
        },
        ipv6: {
            value: cdktf.listMapperHcl(zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6ToHclTerraform, false)(struct.ipv6),
            isBlock: true,
            type: "list",
            storageClassType: "ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // ipv4 - computed: true, optional: true, required: false
        _this._ipv4 = new ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List(_this, "ipv4", false);
        // ipv6 - computed: true, optional: true, required: false
        _this._ipv6 = new ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List(_this, "ipv6", false);
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._ipv4) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.ipv4 = (_b = this._ipv4) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._ipv6) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.ipv6 = (_d = this._ipv6) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._ipv4.internalValue = undefined;
                this._ipv6.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._ipv4.internalValue = value.ipv4;
                this._ipv6.internalValue = value.ipv6;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.prototype, "ipv4", {
        get: function () {
            return this._ipv4;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.prototype.putIpv4 = function (value) {
        this._ipv4.internalValue = value;
    };
    ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.prototype.resetIpv4 = function () {
        this._ipv4.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.prototype, "ipv4Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv4.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.prototype, "ipv6", {
        get: function () {
            return this._ipv6;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.prototype.putIpv6 = function (value) {
        this._ipv6.internalValue = value;
    };
    ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.prototype.resetIpv6 = function () {
        this._ipv6.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.prototype, "ipv6Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv6.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference = ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference;
function zeroTrustGatewayPolicyRuleSettingsEgressToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ipv4: cdktf.stringToTerraform(struct.ipv4),
        ipv4_fallback: cdktf.stringToTerraform(struct.ipv4Fallback),
        ipv6: cdktf.stringToTerraform(struct.ipv6),
    };
}
function zeroTrustGatewayPolicyRuleSettingsEgressToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        ipv4: {
            value: cdktf.stringToHclTerraform(struct.ipv4),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ipv4_fallback: {
            value: cdktf.stringToHclTerraform(struct.ipv4Fallback),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ipv6: {
            value: cdktf.stringToHclTerraform(struct.ipv6),
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
var ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._ipv4 !== undefined) {
                hasAnyValues = true;
                internalValueResult.ipv4 = this._ipv4;
            }
            if (this._ipv4Fallback !== undefined) {
                hasAnyValues = true;
                internalValueResult.ipv4Fallback = this._ipv4Fallback;
            }
            if (this._ipv6 !== undefined) {
                hasAnyValues = true;
                internalValueResult.ipv6 = this._ipv6;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._ipv4 = undefined;
                this._ipv4Fallback = undefined;
                this._ipv6 = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._ipv4 = value.ipv4;
                this._ipv4Fallback = value.ipv4Fallback;
                this._ipv6 = value.ipv6;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.prototype, "ipv4", {
        get: function () {
            return this.getStringAttribute('ipv4');
        },
        set: function (value) {
            this._ipv4 = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.prototype.resetIpv4 = function () {
        this._ipv4 = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.prototype, "ipv4Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv4;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.prototype, "ipv4Fallback", {
        get: function () {
            return this.getStringAttribute('ipv4_fallback');
        },
        set: function (value) {
            this._ipv4Fallback = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.prototype.resetIpv4Fallback = function () {
        this._ipv4Fallback = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.prototype, "ipv4FallbackInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv4Fallback;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.prototype, "ipv6", {
        get: function () {
            return this.getStringAttribute('ipv6');
        },
        set: function (value) {
            this._ipv6 = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.prototype.resetIpv6 = function () {
        this._ipv6 = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.prototype, "ipv6Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv6;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference = ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference;
function zeroTrustGatewayPolicyRuleSettingsForensicCopyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
function zeroTrustGatewayPolicyRuleSettingsForensicCopyToHclTerraform(struct) {
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ZeroTrustGatewayPolicyRuleSettingsForensicCopyOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewayPolicyRuleSettingsForensicCopyOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustGatewayPolicyRuleSettingsForensicCopyOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsForensicCopyOutputReference.prototype, "internalValue", {
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
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._enabled = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._enabled = value.enabled;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsForensicCopyOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsForensicCopyOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsForensicCopyOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewayPolicyRuleSettingsForensicCopyOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewayPolicyRuleSettingsForensicCopyOutputReference = ZeroTrustGatewayPolicyRuleSettingsForensicCopyOutputReference;
function zeroTrustGatewayPolicyRuleSettingsL4OverrideToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ip: cdktf.stringToTerraform(struct.ip),
        port: cdktf.numberToTerraform(struct.port),
    };
}
function zeroTrustGatewayPolicyRuleSettingsL4OverrideToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        ip: {
            value: cdktf.stringToHclTerraform(struct.ip),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktf.numberToHclTerraform(struct.port),
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
var ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._ip !== undefined) {
                hasAnyValues = true;
                internalValueResult.ip = this._ip;
            }
            if (this._port !== undefined) {
                hasAnyValues = true;
                internalValueResult.port = this._port;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._ip = undefined;
                this._port = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._ip = value.ip;
                this._port = value.port;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.prototype, "ip", {
        get: function () {
            return this.getStringAttribute('ip');
        },
        set: function (value) {
            this._ip = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.prototype.resetIp = function () {
        this._ip = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.prototype, "ipInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ip;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.prototype, "port", {
        get: function () {
            return this.getNumberAttribute('port');
        },
        set: function (value) {
            this._port = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.prototype.resetPort = function () {
        this._port = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.prototype, "portInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference = ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference;
function zeroTrustGatewayPolicyRuleSettingsNotificationSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        include_context: cdktf.booleanToTerraform(struct.includeContext),
        msg: cdktf.stringToTerraform(struct.msg),
        support_url: cdktf.stringToTerraform(struct.supportUrl),
    };
}
function zeroTrustGatewayPolicyRuleSettingsNotificationSettingsToHclTerraform(struct) {
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
        include_context: {
            value: cdktf.booleanToHclTerraform(struct.includeContext),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        msg: {
            value: cdktf.stringToHclTerraform(struct.msg),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        support_url: {
            value: cdktf.stringToHclTerraform(struct.supportUrl),
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
var ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.prototype, "internalValue", {
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
            if (this._includeContext !== undefined) {
                hasAnyValues = true;
                internalValueResult.includeContext = this._includeContext;
            }
            if (this._msg !== undefined) {
                hasAnyValues = true;
                internalValueResult.msg = this._msg;
            }
            if (this._supportUrl !== undefined) {
                hasAnyValues = true;
                internalValueResult.supportUrl = this._supportUrl;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._enabled = undefined;
                this._includeContext = undefined;
                this._msg = undefined;
                this._supportUrl = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._enabled = value.enabled;
                this._includeContext = value.includeContext;
                this._msg = value.msg;
                this._supportUrl = value.supportUrl;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.prototype, "includeContext", {
        get: function () {
            return this.getBooleanAttribute('include_context');
        },
        set: function (value) {
            this._includeContext = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.prototype.resetIncludeContext = function () {
        this._includeContext = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.prototype, "includeContextInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._includeContext;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.prototype, "msg", {
        get: function () {
            return this.getStringAttribute('msg');
        },
        set: function (value) {
            this._msg = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.prototype.resetMsg = function () {
        this._msg = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.prototype, "msgInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._msg;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.prototype, "supportUrl", {
        get: function () {
            return this.getStringAttribute('support_url');
        },
        set: function (value) {
            this._supportUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.prototype.resetSupportUrl = function () {
        this._supportUrl = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.prototype, "supportUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._supportUrl;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference = ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference;
function zeroTrustGatewayPolicyRuleSettingsPayloadLogToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
function zeroTrustGatewayPolicyRuleSettingsPayloadLogToHclTerraform(struct) {
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.prototype, "internalValue", {
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
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._enabled = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._enabled = value.enabled;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference = ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference;
function zeroTrustGatewayPolicyRuleSettingsQuarantineToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        file_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.fileTypes),
    };
}
function zeroTrustGatewayPolicyRuleSettingsQuarantineToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        file_types: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.fileTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._fileTypes !== undefined) {
                hasAnyValues = true;
                internalValueResult.fileTypes = this._fileTypes;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._fileTypes = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._fileTypes = value.fileTypes;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.prototype, "fileTypes", {
        get: function () {
            return this.getListAttribute('file_types');
        },
        set: function (value) {
            this._fileTypes = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.prototype.resetFileTypes = function () {
        this._fileTypes = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.prototype, "fileTypesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fileTypes;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference = ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference;
function zeroTrustGatewayPolicyRuleSettingsRedirectToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        include_context: cdktf.booleanToTerraform(struct.includeContext),
        preserve_path_and_query: cdktf.booleanToTerraform(struct.preservePathAndQuery),
        target_uri: cdktf.stringToTerraform(struct.targetUri),
    };
}
function zeroTrustGatewayPolicyRuleSettingsRedirectToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        include_context: {
            value: cdktf.booleanToHclTerraform(struct.includeContext),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        preserve_path_and_query: {
            value: cdktf.booleanToHclTerraform(struct.preservePathAndQuery),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        target_uri: {
            value: cdktf.stringToHclTerraform(struct.targetUri),
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
var ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._includeContext !== undefined) {
                hasAnyValues = true;
                internalValueResult.includeContext = this._includeContext;
            }
            if (this._preservePathAndQuery !== undefined) {
                hasAnyValues = true;
                internalValueResult.preservePathAndQuery = this._preservePathAndQuery;
            }
            if (this._targetUri !== undefined) {
                hasAnyValues = true;
                internalValueResult.targetUri = this._targetUri;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._includeContext = undefined;
                this._preservePathAndQuery = undefined;
                this._targetUri = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._includeContext = value.includeContext;
                this._preservePathAndQuery = value.preservePathAndQuery;
                this._targetUri = value.targetUri;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.prototype, "includeContext", {
        get: function () {
            return this.getBooleanAttribute('include_context');
        },
        set: function (value) {
            this._includeContext = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.prototype.resetIncludeContext = function () {
        this._includeContext = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.prototype, "includeContextInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._includeContext;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.prototype, "preservePathAndQuery", {
        get: function () {
            return this.getBooleanAttribute('preserve_path_and_query');
        },
        set: function (value) {
            this._preservePathAndQuery = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.prototype.resetPreservePathAndQuery = function () {
        this._preservePathAndQuery = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.prototype, "preservePathAndQueryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preservePathAndQuery;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.prototype, "targetUri", {
        get: function () {
            return this.getStringAttribute('target_uri');
        },
        set: function (value) {
            this._targetUri = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.prototype, "targetUriInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetUri;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference = ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference;
function zeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fallback: cdktf.stringToTerraform(struct.fallback),
        view_id: cdktf.stringToTerraform(struct.viewId),
    };
}
function zeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        fallback: {
            value: cdktf.stringToHclTerraform(struct.fallback),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        view_id: {
            value: cdktf.stringToHclTerraform(struct.viewId),
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
var ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._fallback !== undefined) {
                hasAnyValues = true;
                internalValueResult.fallback = this._fallback;
            }
            if (this._viewId !== undefined) {
                hasAnyValues = true;
                internalValueResult.viewId = this._viewId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._fallback = undefined;
                this._viewId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._fallback = value.fallback;
                this._viewId = value.viewId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.prototype, "fallback", {
        get: function () {
            return this.getStringAttribute('fallback');
        },
        set: function (value) {
            this._fallback = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.prototype.resetFallback = function () {
        this._fallback = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.prototype, "fallbackInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fallback;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.prototype, "viewId", {
        get: function () {
            return this.getStringAttribute('view_id');
        },
        set: function (value) {
            this._viewId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.prototype.resetViewId = function () {
        this._viewId = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.prototype, "viewIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._viewId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference = ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference;
function zeroTrustGatewayPolicyRuleSettingsUntrustedCertToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action: cdktf.stringToTerraform(struct.action),
    };
}
function zeroTrustGatewayPolicyRuleSettingsUntrustedCertToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        action: {
            value: cdktf.stringToHclTerraform(struct.action),
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
var ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._action !== undefined) {
                hasAnyValues = true;
                internalValueResult.action = this._action;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._action = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._action = value.action;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.prototype, "action", {
        get: function () {
            return this.getStringAttribute('action');
        },
        set: function (value) {
            this._action = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.prototype.resetAction = function () {
        this._action = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.prototype, "actionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._action;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference = ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference;
function zeroTrustGatewayPolicyRuleSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        add_headers: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct.addHeaders),
        allow_child_bypass: cdktf.booleanToTerraform(struct.allowChildBypass),
        audit_ssh: zeroTrustGatewayPolicyRuleSettingsAuditSshToTerraform(struct.auditSsh),
        biso_admin_controls: zeroTrustGatewayPolicyRuleSettingsBisoAdminControlsToTerraform(struct.bisoAdminControls),
        block_page: zeroTrustGatewayPolicyRuleSettingsBlockPageToTerraform(struct.blockPage),
        block_page_enabled: cdktf.booleanToTerraform(struct.blockPageEnabled),
        block_reason: cdktf.stringToTerraform(struct.blockReason),
        bypass_parent_rule: cdktf.booleanToTerraform(struct.bypassParentRule),
        check_session: zeroTrustGatewayPolicyRuleSettingsCheckSessionToTerraform(struct.checkSession),
        dns_resolvers: zeroTrustGatewayPolicyRuleSettingsDnsResolversToTerraform(struct.dnsResolvers),
        egress: zeroTrustGatewayPolicyRuleSettingsEgressToTerraform(struct.egress),
        forensic_copy: zeroTrustGatewayPolicyRuleSettingsForensicCopyToTerraform(struct.forensicCopy),
        ignore_cname_category_matches: cdktf.booleanToTerraform(struct.ignoreCnameCategoryMatches),
        insecure_disable_dnssec_validation: cdktf.booleanToTerraform(struct.insecureDisableDnssecValidation),
        ip_categories: cdktf.booleanToTerraform(struct.ipCategories),
        ip_indicator_feeds: cdktf.booleanToTerraform(struct.ipIndicatorFeeds),
        l4override: zeroTrustGatewayPolicyRuleSettingsL4OverrideToTerraform(struct.l4Override),
        notification_settings: zeroTrustGatewayPolicyRuleSettingsNotificationSettingsToTerraform(struct.notificationSettings),
        override_host: cdktf.stringToTerraform(struct.overrideHost),
        override_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.overrideIps),
        payload_log: zeroTrustGatewayPolicyRuleSettingsPayloadLogToTerraform(struct.payloadLog),
        quarantine: zeroTrustGatewayPolicyRuleSettingsQuarantineToTerraform(struct.quarantine),
        redirect: zeroTrustGatewayPolicyRuleSettingsRedirectToTerraform(struct.redirect),
        resolve_dns_internally: zeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyToTerraform(struct.resolveDnsInternally),
        resolve_dns_through_cloudflare: cdktf.booleanToTerraform(struct.resolveDnsThroughCloudflare),
        untrusted_cert: zeroTrustGatewayPolicyRuleSettingsUntrustedCertToTerraform(struct.untrustedCert),
    };
}
function zeroTrustGatewayPolicyRuleSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        add_headers: {
            value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct.addHeaders),
            isBlock: false,
            type: "map",
            storageClassType: "stringListMap",
        },
        allow_child_bypass: {
            value: cdktf.booleanToHclTerraform(struct.allowChildBypass),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        audit_ssh: {
            value: zeroTrustGatewayPolicyRuleSettingsAuditSshToHclTerraform(struct.auditSsh),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewayPolicyRuleSettingsAuditSsh",
        },
        biso_admin_controls: {
            value: zeroTrustGatewayPolicyRuleSettingsBisoAdminControlsToHclTerraform(struct.bisoAdminControls),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls",
        },
        block_page: {
            value: zeroTrustGatewayPolicyRuleSettingsBlockPageToHclTerraform(struct.blockPage),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewayPolicyRuleSettingsBlockPage",
        },
        block_page_enabled: {
            value: cdktf.booleanToHclTerraform(struct.blockPageEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        block_reason: {
            value: cdktf.stringToHclTerraform(struct.blockReason),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bypass_parent_rule: {
            value: cdktf.booleanToHclTerraform(struct.bypassParentRule),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        check_session: {
            value: zeroTrustGatewayPolicyRuleSettingsCheckSessionToHclTerraform(struct.checkSession),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewayPolicyRuleSettingsCheckSession",
        },
        dns_resolvers: {
            value: zeroTrustGatewayPolicyRuleSettingsDnsResolversToHclTerraform(struct.dnsResolvers),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewayPolicyRuleSettingsDnsResolvers",
        },
        egress: {
            value: zeroTrustGatewayPolicyRuleSettingsEgressToHclTerraform(struct.egress),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewayPolicyRuleSettingsEgress",
        },
        forensic_copy: {
            value: zeroTrustGatewayPolicyRuleSettingsForensicCopyToHclTerraform(struct.forensicCopy),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewayPolicyRuleSettingsForensicCopy",
        },
        ignore_cname_category_matches: {
            value: cdktf.booleanToHclTerraform(struct.ignoreCnameCategoryMatches),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        insecure_disable_dnssec_validation: {
            value: cdktf.booleanToHclTerraform(struct.insecureDisableDnssecValidation),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        ip_categories: {
            value: cdktf.booleanToHclTerraform(struct.ipCategories),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        ip_indicator_feeds: {
            value: cdktf.booleanToHclTerraform(struct.ipIndicatorFeeds),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        l4override: {
            value: zeroTrustGatewayPolicyRuleSettingsL4OverrideToHclTerraform(struct.l4Override),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewayPolicyRuleSettingsL4Override",
        },
        notification_settings: {
            value: zeroTrustGatewayPolicyRuleSettingsNotificationSettingsToHclTerraform(struct.notificationSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewayPolicyRuleSettingsNotificationSettings",
        },
        override_host: {
            value: cdktf.stringToHclTerraform(struct.overrideHost),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        override_ips: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.overrideIps),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        payload_log: {
            value: zeroTrustGatewayPolicyRuleSettingsPayloadLogToHclTerraform(struct.payloadLog),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewayPolicyRuleSettingsPayloadLog",
        },
        quarantine: {
            value: zeroTrustGatewayPolicyRuleSettingsQuarantineToHclTerraform(struct.quarantine),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewayPolicyRuleSettingsQuarantine",
        },
        redirect: {
            value: zeroTrustGatewayPolicyRuleSettingsRedirectToHclTerraform(struct.redirect),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewayPolicyRuleSettingsRedirect",
        },
        resolve_dns_internally: {
            value: zeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyToHclTerraform(struct.resolveDnsInternally),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally",
        },
        resolve_dns_through_cloudflare: {
            value: cdktf.booleanToHclTerraform(struct.resolveDnsThroughCloudflare),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        untrusted_cert: {
            value: zeroTrustGatewayPolicyRuleSettingsUntrustedCertToHclTerraform(struct.untrustedCert),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewayPolicyRuleSettingsUntrustedCert",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ZeroTrustGatewayPolicyRuleSettingsOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewayPolicyRuleSettingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustGatewayPolicyRuleSettingsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // audit_ssh - computed: true, optional: true, required: false
        _this._auditSsh = new ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference(_this, "audit_ssh");
        // biso_admin_controls - computed: true, optional: true, required: false
        _this._bisoAdminControls = new ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference(_this, "biso_admin_controls");
        // block_page - computed: true, optional: true, required: false
        _this._blockPage = new ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference(_this, "block_page");
        // check_session - computed: true, optional: true, required: false
        _this._checkSession = new ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference(_this, "check_session");
        // dns_resolvers - computed: true, optional: true, required: false
        _this._dnsResolvers = new ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference(_this, "dns_resolvers");
        // egress - computed: true, optional: true, required: false
        _this._egress = new ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference(_this, "egress");
        // forensic_copy - computed: true, optional: true, required: false
        _this._forensicCopy = new ZeroTrustGatewayPolicyRuleSettingsForensicCopyOutputReference(_this, "forensic_copy");
        // l4override - computed: true, optional: true, required: false
        _this._l4Override = new ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference(_this, "l4override");
        // notification_settings - computed: true, optional: true, required: false
        _this._notificationSettings = new ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference(_this, "notification_settings");
        // payload_log - computed: true, optional: true, required: false
        _this._payloadLog = new ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference(_this, "payload_log");
        // quarantine - computed: true, optional: true, required: false
        _this._quarantine = new ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference(_this, "quarantine");
        // redirect - computed: true, optional: true, required: false
        _this._redirect = new ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference(_this, "redirect");
        // resolve_dns_internally - computed: true, optional: true, required: false
        _this._resolveDnsInternally = new ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference(_this, "resolve_dns_internally");
        // untrusted_cert - computed: true, optional: true, required: false
        _this._untrustedCert = new ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference(_this, "untrusted_cert");
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._addHeaders !== undefined) {
                hasAnyValues = true;
                internalValueResult.addHeaders = this._addHeaders;
            }
            if (this._allowChildBypass !== undefined) {
                hasAnyValues = true;
                internalValueResult.allowChildBypass = this._allowChildBypass;
            }
            if (((_a = this._auditSsh) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.auditSsh = (_b = this._auditSsh) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._bisoAdminControls) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.bisoAdminControls = (_d = this._bisoAdminControls) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (((_e = this._blockPage) === null || _e === void 0 ? void 0 : _e.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.blockPage = (_f = this._blockPage) === null || _f === void 0 ? void 0 : _f.internalValue;
            }
            if (this._blockPageEnabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.blockPageEnabled = this._blockPageEnabled;
            }
            if (this._blockReason !== undefined) {
                hasAnyValues = true;
                internalValueResult.blockReason = this._blockReason;
            }
            if (this._bypassParentRule !== undefined) {
                hasAnyValues = true;
                internalValueResult.bypassParentRule = this._bypassParentRule;
            }
            if (((_g = this._checkSession) === null || _g === void 0 ? void 0 : _g.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.checkSession = (_h = this._checkSession) === null || _h === void 0 ? void 0 : _h.internalValue;
            }
            if (((_j = this._dnsResolvers) === null || _j === void 0 ? void 0 : _j.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.dnsResolvers = (_k = this._dnsResolvers) === null || _k === void 0 ? void 0 : _k.internalValue;
            }
            if (((_l = this._egress) === null || _l === void 0 ? void 0 : _l.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.egress = (_m = this._egress) === null || _m === void 0 ? void 0 : _m.internalValue;
            }
            if (((_o = this._forensicCopy) === null || _o === void 0 ? void 0 : _o.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.forensicCopy = (_p = this._forensicCopy) === null || _p === void 0 ? void 0 : _p.internalValue;
            }
            if (this._ignoreCnameCategoryMatches !== undefined) {
                hasAnyValues = true;
                internalValueResult.ignoreCnameCategoryMatches = this._ignoreCnameCategoryMatches;
            }
            if (this._insecureDisableDnssecValidation !== undefined) {
                hasAnyValues = true;
                internalValueResult.insecureDisableDnssecValidation = this._insecureDisableDnssecValidation;
            }
            if (this._ipCategories !== undefined) {
                hasAnyValues = true;
                internalValueResult.ipCategories = this._ipCategories;
            }
            if (this._ipIndicatorFeeds !== undefined) {
                hasAnyValues = true;
                internalValueResult.ipIndicatorFeeds = this._ipIndicatorFeeds;
            }
            if (((_q = this._l4Override) === null || _q === void 0 ? void 0 : _q.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.l4Override = (_r = this._l4Override) === null || _r === void 0 ? void 0 : _r.internalValue;
            }
            if (((_s = this._notificationSettings) === null || _s === void 0 ? void 0 : _s.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.notificationSettings = (_t = this._notificationSettings) === null || _t === void 0 ? void 0 : _t.internalValue;
            }
            if (this._overrideHost !== undefined) {
                hasAnyValues = true;
                internalValueResult.overrideHost = this._overrideHost;
            }
            if (this._overrideIps !== undefined) {
                hasAnyValues = true;
                internalValueResult.overrideIps = this._overrideIps;
            }
            if (((_u = this._payloadLog) === null || _u === void 0 ? void 0 : _u.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.payloadLog = (_v = this._payloadLog) === null || _v === void 0 ? void 0 : _v.internalValue;
            }
            if (((_w = this._quarantine) === null || _w === void 0 ? void 0 : _w.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.quarantine = (_x = this._quarantine) === null || _x === void 0 ? void 0 : _x.internalValue;
            }
            if (((_y = this._redirect) === null || _y === void 0 ? void 0 : _y.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.redirect = (_z = this._redirect) === null || _z === void 0 ? void 0 : _z.internalValue;
            }
            if (((_0 = this._resolveDnsInternally) === null || _0 === void 0 ? void 0 : _0.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.resolveDnsInternally = (_1 = this._resolveDnsInternally) === null || _1 === void 0 ? void 0 : _1.internalValue;
            }
            if (this._resolveDnsThroughCloudflare !== undefined) {
                hasAnyValues = true;
                internalValueResult.resolveDnsThroughCloudflare = this._resolveDnsThroughCloudflare;
            }
            if (((_2 = this._untrustedCert) === null || _2 === void 0 ? void 0 : _2.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.untrustedCert = (_3 = this._untrustedCert) === null || _3 === void 0 ? void 0 : _3.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._addHeaders = undefined;
                this._allowChildBypass = undefined;
                this._auditSsh.internalValue = undefined;
                this._bisoAdminControls.internalValue = undefined;
                this._blockPage.internalValue = undefined;
                this._blockPageEnabled = undefined;
                this._blockReason = undefined;
                this._bypassParentRule = undefined;
                this._checkSession.internalValue = undefined;
                this._dnsResolvers.internalValue = undefined;
                this._egress.internalValue = undefined;
                this._forensicCopy.internalValue = undefined;
                this._ignoreCnameCategoryMatches = undefined;
                this._insecureDisableDnssecValidation = undefined;
                this._ipCategories = undefined;
                this._ipIndicatorFeeds = undefined;
                this._l4Override.internalValue = undefined;
                this._notificationSettings.internalValue = undefined;
                this._overrideHost = undefined;
                this._overrideIps = undefined;
                this._payloadLog.internalValue = undefined;
                this._quarantine.internalValue = undefined;
                this._redirect.internalValue = undefined;
                this._resolveDnsInternally.internalValue = undefined;
                this._resolveDnsThroughCloudflare = undefined;
                this._untrustedCert.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._addHeaders = value.addHeaders;
                this._allowChildBypass = value.allowChildBypass;
                this._auditSsh.internalValue = value.auditSsh;
                this._bisoAdminControls.internalValue = value.bisoAdminControls;
                this._blockPage.internalValue = value.blockPage;
                this._blockPageEnabled = value.blockPageEnabled;
                this._blockReason = value.blockReason;
                this._bypassParentRule = value.bypassParentRule;
                this._checkSession.internalValue = value.checkSession;
                this._dnsResolvers.internalValue = value.dnsResolvers;
                this._egress.internalValue = value.egress;
                this._forensicCopy.internalValue = value.forensicCopy;
                this._ignoreCnameCategoryMatches = value.ignoreCnameCategoryMatches;
                this._insecureDisableDnssecValidation = value.insecureDisableDnssecValidation;
                this._ipCategories = value.ipCategories;
                this._ipIndicatorFeeds = value.ipIndicatorFeeds;
                this._l4Override.internalValue = value.l4Override;
                this._notificationSettings.internalValue = value.notificationSettings;
                this._overrideHost = value.overrideHost;
                this._overrideIps = value.overrideIps;
                this._payloadLog.internalValue = value.payloadLog;
                this._quarantine.internalValue = value.quarantine;
                this._redirect.internalValue = value.redirect;
                this._resolveDnsInternally.internalValue = value.resolveDnsInternally;
                this._resolveDnsThroughCloudflare = value.resolveDnsThroughCloudflare;
                this._untrustedCert.internalValue = value.untrustedCert;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "addHeaders", {
        get: function () {
            return this.interpolationForAttribute('add_headers');
        },
        set: function (value) {
            this._addHeaders = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.resetAddHeaders = function () {
        this._addHeaders = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "addHeadersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._addHeaders;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "allowChildBypass", {
        get: function () {
            return this.getBooleanAttribute('allow_child_bypass');
        },
        set: function (value) {
            this._allowChildBypass = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.resetAllowChildBypass = function () {
        this._allowChildBypass = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "allowChildBypassInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowChildBypass;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "auditSsh", {
        get: function () {
            return this._auditSsh;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.putAuditSsh = function (value) {
        this._auditSsh.internalValue = value;
    };
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.resetAuditSsh = function () {
        this._auditSsh.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "auditSshInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._auditSsh.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "bisoAdminControls", {
        get: function () {
            return this._bisoAdminControls;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.putBisoAdminControls = function (value) {
        this._bisoAdminControls.internalValue = value;
    };
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.resetBisoAdminControls = function () {
        this._bisoAdminControls.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "bisoAdminControlsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bisoAdminControls.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "blockPage", {
        get: function () {
            return this._blockPage;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.putBlockPage = function (value) {
        this._blockPage.internalValue = value;
    };
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.resetBlockPage = function () {
        this._blockPage.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "blockPageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._blockPage.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "blockPageEnabled", {
        get: function () {
            return this.getBooleanAttribute('block_page_enabled');
        },
        set: function (value) {
            this._blockPageEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.resetBlockPageEnabled = function () {
        this._blockPageEnabled = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "blockPageEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._blockPageEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "blockReason", {
        get: function () {
            return this.getStringAttribute('block_reason');
        },
        set: function (value) {
            this._blockReason = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.resetBlockReason = function () {
        this._blockReason = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "blockReasonInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._blockReason;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "bypassParentRule", {
        get: function () {
            return this.getBooleanAttribute('bypass_parent_rule');
        },
        set: function (value) {
            this._bypassParentRule = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.resetBypassParentRule = function () {
        this._bypassParentRule = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "bypassParentRuleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bypassParentRule;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "checkSession", {
        get: function () {
            return this._checkSession;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.putCheckSession = function (value) {
        this._checkSession.internalValue = value;
    };
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.resetCheckSession = function () {
        this._checkSession.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "checkSessionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._checkSession.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "dnsResolvers", {
        get: function () {
            return this._dnsResolvers;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.putDnsResolvers = function (value) {
        this._dnsResolvers.internalValue = value;
    };
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.resetDnsResolvers = function () {
        this._dnsResolvers.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "dnsResolversInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dnsResolvers.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "egress", {
        get: function () {
            return this._egress;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.putEgress = function (value) {
        this._egress.internalValue = value;
    };
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.resetEgress = function () {
        this._egress.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "egressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._egress.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "forensicCopy", {
        get: function () {
            return this._forensicCopy;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.putForensicCopy = function (value) {
        this._forensicCopy.internalValue = value;
    };
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.resetForensicCopy = function () {
        this._forensicCopy.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "forensicCopyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._forensicCopy.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "ignoreCnameCategoryMatches", {
        get: function () {
            return this.getBooleanAttribute('ignore_cname_category_matches');
        },
        set: function (value) {
            this._ignoreCnameCategoryMatches = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.resetIgnoreCnameCategoryMatches = function () {
        this._ignoreCnameCategoryMatches = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "ignoreCnameCategoryMatchesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ignoreCnameCategoryMatches;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "insecureDisableDnssecValidation", {
        get: function () {
            return this.getBooleanAttribute('insecure_disable_dnssec_validation');
        },
        set: function (value) {
            this._insecureDisableDnssecValidation = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.resetInsecureDisableDnssecValidation = function () {
        this._insecureDisableDnssecValidation = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "insecureDisableDnssecValidationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._insecureDisableDnssecValidation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "ipCategories", {
        get: function () {
            return this.getBooleanAttribute('ip_categories');
        },
        set: function (value) {
            this._ipCategories = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.resetIpCategories = function () {
        this._ipCategories = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "ipCategoriesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipCategories;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "ipIndicatorFeeds", {
        get: function () {
            return this.getBooleanAttribute('ip_indicator_feeds');
        },
        set: function (value) {
            this._ipIndicatorFeeds = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.resetIpIndicatorFeeds = function () {
        this._ipIndicatorFeeds = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "ipIndicatorFeedsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipIndicatorFeeds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "l4Override", {
        get: function () {
            return this._l4Override;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.putL4Override = function (value) {
        this._l4Override.internalValue = value;
    };
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.resetL4Override = function () {
        this._l4Override.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "l4OverrideInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._l4Override.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "notificationSettings", {
        get: function () {
            return this._notificationSettings;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.putNotificationSettings = function (value) {
        this._notificationSettings.internalValue = value;
    };
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.resetNotificationSettings = function () {
        this._notificationSettings.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "notificationSettingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._notificationSettings.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "overrideHost", {
        get: function () {
            return this.getStringAttribute('override_host');
        },
        set: function (value) {
            this._overrideHost = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.resetOverrideHost = function () {
        this._overrideHost = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "overrideHostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._overrideHost;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "overrideIps", {
        get: function () {
            return this.getListAttribute('override_ips');
        },
        set: function (value) {
            this._overrideIps = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.resetOverrideIps = function () {
        this._overrideIps = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "overrideIpsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._overrideIps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "payloadLog", {
        get: function () {
            return this._payloadLog;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.putPayloadLog = function (value) {
        this._payloadLog.internalValue = value;
    };
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.resetPayloadLog = function () {
        this._payloadLog.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "payloadLogInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._payloadLog.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "quarantine", {
        get: function () {
            return this._quarantine;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.putQuarantine = function (value) {
        this._quarantine.internalValue = value;
    };
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.resetQuarantine = function () {
        this._quarantine.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "quarantineInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._quarantine.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "redirect", {
        get: function () {
            return this._redirect;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.putRedirect = function (value) {
        this._redirect.internalValue = value;
    };
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.resetRedirect = function () {
        this._redirect.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "redirectInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._redirect.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "resolveDnsInternally", {
        get: function () {
            return this._resolveDnsInternally;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.putResolveDnsInternally = function (value) {
        this._resolveDnsInternally.internalValue = value;
    };
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.resetResolveDnsInternally = function () {
        this._resolveDnsInternally.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "resolveDnsInternallyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resolveDnsInternally.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "resolveDnsThroughCloudflare", {
        get: function () {
            return this.getBooleanAttribute('resolve_dns_through_cloudflare');
        },
        set: function (value) {
            this._resolveDnsThroughCloudflare = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.resetResolveDnsThroughCloudflare = function () {
        this._resolveDnsThroughCloudflare = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "resolveDnsThroughCloudflareInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resolveDnsThroughCloudflare;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "untrustedCert", {
        get: function () {
            return this._untrustedCert;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.putUntrustedCert = function (value) {
        this._untrustedCert.internalValue = value;
    };
    ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype.resetUntrustedCert = function () {
        this._untrustedCert.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "untrustedCertInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._untrustedCert.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewayPolicyRuleSettingsOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewayPolicyRuleSettingsOutputReference = ZeroTrustGatewayPolicyRuleSettingsOutputReference;
function zeroTrustGatewayPolicyScheduleToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fri: cdktf.stringToTerraform(struct.fri),
        mon: cdktf.stringToTerraform(struct.mon),
        sat: cdktf.stringToTerraform(struct.sat),
        sun: cdktf.stringToTerraform(struct.sun),
        thu: cdktf.stringToTerraform(struct.thu),
        time_zone: cdktf.stringToTerraform(struct.timeZone),
        tue: cdktf.stringToTerraform(struct.tue),
        wed: cdktf.stringToTerraform(struct.wed),
    };
}
function zeroTrustGatewayPolicyScheduleToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        fri: {
            value: cdktf.stringToHclTerraform(struct.fri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mon: {
            value: cdktf.stringToHclTerraform(struct.mon),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sat: {
            value: cdktf.stringToHclTerraform(struct.sat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sun: {
            value: cdktf.stringToHclTerraform(struct.sun),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        thu: {
            value: cdktf.stringToHclTerraform(struct.thu),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        time_zone: {
            value: cdktf.stringToHclTerraform(struct.timeZone),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tue: {
            value: cdktf.stringToHclTerraform(struct.tue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        wed: {
            value: cdktf.stringToHclTerraform(struct.wed),
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
var ZeroTrustGatewayPolicyScheduleOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewayPolicyScheduleOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustGatewayPolicyScheduleOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewayPolicyScheduleOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._fri !== undefined) {
                hasAnyValues = true;
                internalValueResult.fri = this._fri;
            }
            if (this._mon !== undefined) {
                hasAnyValues = true;
                internalValueResult.mon = this._mon;
            }
            if (this._sat !== undefined) {
                hasAnyValues = true;
                internalValueResult.sat = this._sat;
            }
            if (this._sun !== undefined) {
                hasAnyValues = true;
                internalValueResult.sun = this._sun;
            }
            if (this._thu !== undefined) {
                hasAnyValues = true;
                internalValueResult.thu = this._thu;
            }
            if (this._timeZone !== undefined) {
                hasAnyValues = true;
                internalValueResult.timeZone = this._timeZone;
            }
            if (this._tue !== undefined) {
                hasAnyValues = true;
                internalValueResult.tue = this._tue;
            }
            if (this._wed !== undefined) {
                hasAnyValues = true;
                internalValueResult.wed = this._wed;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._fri = undefined;
                this._mon = undefined;
                this._sat = undefined;
                this._sun = undefined;
                this._thu = undefined;
                this._timeZone = undefined;
                this._tue = undefined;
                this._wed = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._fri = value.fri;
                this._mon = value.mon;
                this._sat = value.sat;
                this._sun = value.sun;
                this._thu = value.thu;
                this._timeZone = value.timeZone;
                this._tue = value.tue;
                this._wed = value.wed;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyScheduleOutputReference.prototype, "fri", {
        get: function () {
            return this.getStringAttribute('fri');
        },
        set: function (value) {
            this._fri = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyScheduleOutputReference.prototype.resetFri = function () {
        this._fri = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyScheduleOutputReference.prototype, "friInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fri;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyScheduleOutputReference.prototype, "mon", {
        get: function () {
            return this.getStringAttribute('mon');
        },
        set: function (value) {
            this._mon = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyScheduleOutputReference.prototype.resetMon = function () {
        this._mon = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyScheduleOutputReference.prototype, "monInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mon;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyScheduleOutputReference.prototype, "sat", {
        get: function () {
            return this.getStringAttribute('sat');
        },
        set: function (value) {
            this._sat = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyScheduleOutputReference.prototype.resetSat = function () {
        this._sat = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyScheduleOutputReference.prototype, "satInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sat;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyScheduleOutputReference.prototype, "sun", {
        get: function () {
            return this.getStringAttribute('sun');
        },
        set: function (value) {
            this._sun = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyScheduleOutputReference.prototype.resetSun = function () {
        this._sun = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyScheduleOutputReference.prototype, "sunInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sun;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyScheduleOutputReference.prototype, "thu", {
        get: function () {
            return this.getStringAttribute('thu');
        },
        set: function (value) {
            this._thu = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyScheduleOutputReference.prototype.resetThu = function () {
        this._thu = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyScheduleOutputReference.prototype, "thuInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._thu;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyScheduleOutputReference.prototype, "timeZone", {
        get: function () {
            return this.getStringAttribute('time_zone');
        },
        set: function (value) {
            this._timeZone = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyScheduleOutputReference.prototype.resetTimeZone = function () {
        this._timeZone = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyScheduleOutputReference.prototype, "timeZoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeZone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyScheduleOutputReference.prototype, "tue", {
        get: function () {
            return this.getStringAttribute('tue');
        },
        set: function (value) {
            this._tue = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyScheduleOutputReference.prototype.resetTue = function () {
        this._tue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyScheduleOutputReference.prototype, "tueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicyScheduleOutputReference.prototype, "wed", {
        get: function () {
            return this.getStringAttribute('wed');
        },
        set: function (value) {
            this._wed = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicyScheduleOutputReference.prototype.resetWed = function () {
        this._wed = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicyScheduleOutputReference.prototype, "wedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._wed;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewayPolicyScheduleOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewayPolicyScheduleOutputReference = ZeroTrustGatewayPolicyScheduleOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy cloudflare_zero_trust_gateway_policy}
*/
var ZeroTrustGatewayPolicy = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewayPolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy cloudflare_zero_trust_gateway_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustGatewayPolicyConfig
    */
    function ZeroTrustGatewayPolicy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_gateway_policy',
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
        // expiration - computed: true, optional: true, required: false
        _this._expiration = new ZeroTrustGatewayPolicyExpirationOutputReference(_this, "expiration");
        // rule_settings - computed: true, optional: true, required: false
        _this._ruleSettings = new ZeroTrustGatewayPolicyRuleSettingsOutputReference(_this, "rule_settings");
        // schedule - computed: true, optional: true, required: false
        _this._schedule = new ZeroTrustGatewayPolicyScheduleOutputReference(_this, "schedule");
        _this._accountId = config.accountId;
        _this._action = config.action;
        _this._description = config.description;
        _this._devicePosture = config.devicePosture;
        _this._enabled = config.enabled;
        _this._expiration.internalValue = config.expiration;
        _this._filters = config.filters;
        _this._identity = config.identity;
        _this._name = config.name;
        _this._precedence = config.precedence;
        _this._ruleSettings.internalValue = config.ruleSettings;
        _this._schedule.internalValue = config.schedule;
        _this._traffic = config.traffic;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustGatewayPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustGatewayPolicy to import
    * @param importFromId The id of the existing ZeroTrustGatewayPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustGatewayPolicy to import is found
    */
    ZeroTrustGatewayPolicy.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_gateway_policy", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZeroTrustGatewayPolicy.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicy.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicy.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicy.prototype, "action", {
        get: function () {
            return this.getStringAttribute('action');
        },
        set: function (value) {
            this._action = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicy.prototype, "actionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._action;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicy.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicy.prototype, "deletedAt", {
        // deleted_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('deleted_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicy.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicy.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicy.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicy.prototype, "devicePosture", {
        get: function () {
            return this.getStringAttribute('device_posture');
        },
        set: function (value) {
            this._devicePosture = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicy.prototype.resetDevicePosture = function () {
        this._devicePosture = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicy.prototype, "devicePostureInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._devicePosture;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicy.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicy.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicy.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicy.prototype, "expiration", {
        get: function () {
            return this._expiration;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicy.prototype.putExpiration = function (value) {
        this._expiration.internalValue = value;
    };
    ZeroTrustGatewayPolicy.prototype.resetExpiration = function () {
        this._expiration.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicy.prototype, "expirationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._expiration.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicy.prototype, "filters", {
        get: function () {
            return this.getListAttribute('filters');
        },
        set: function (value) {
            this._filters = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicy.prototype.resetFilters = function () {
        this._filters = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicy.prototype, "filtersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicy.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicy.prototype, "identity", {
        get: function () {
            return this.getStringAttribute('identity');
        },
        set: function (value) {
            this._identity = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicy.prototype.resetIdentity = function () {
        this._identity = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicy.prototype, "identityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicy.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicy.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicy.prototype, "precedence", {
        get: function () {
            return this.getNumberAttribute('precedence');
        },
        set: function (value) {
            this._precedence = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicy.prototype.resetPrecedence = function () {
        this._precedence = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicy.prototype, "precedenceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._precedence;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicy.prototype, "readOnly", {
        // read_only - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read_only');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicy.prototype, "ruleSettings", {
        get: function () {
            return this._ruleSettings;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicy.prototype.putRuleSettings = function (value) {
        this._ruleSettings.internalValue = value;
    };
    ZeroTrustGatewayPolicy.prototype.resetRuleSettings = function () {
        this._ruleSettings.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicy.prototype, "ruleSettingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ruleSettings.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicy.prototype, "schedule", {
        get: function () {
            return this._schedule;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicy.prototype.putSchedule = function (value) {
        this._schedule.internalValue = value;
    };
    ZeroTrustGatewayPolicy.prototype.resetSchedule = function () {
        this._schedule.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicy.prototype, "scheduleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._schedule.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicy.prototype, "sharable", {
        // sharable - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('sharable');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicy.prototype, "sourceAccount", {
        // source_account - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source_account');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicy.prototype, "traffic", {
        get: function () {
            return this.getStringAttribute('traffic');
        },
        set: function (value) {
            this._traffic = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayPolicy.prototype.resetTraffic = function () {
        this._traffic = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayPolicy.prototype, "trafficInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._traffic;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicy.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicy.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayPolicy.prototype, "warningStatus", {
        // warning_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('warning_status');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ZeroTrustGatewayPolicy.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            action: cdktf.stringToTerraform(this._action),
            description: cdktf.stringToTerraform(this._description),
            device_posture: cdktf.stringToTerraform(this._devicePosture),
            enabled: cdktf.booleanToTerraform(this._enabled),
            expiration: zeroTrustGatewayPolicyExpirationToTerraform(this._expiration.internalValue),
            filters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filters),
            identity: cdktf.stringToTerraform(this._identity),
            name: cdktf.stringToTerraform(this._name),
            precedence: cdktf.numberToTerraform(this._precedence),
            rule_settings: zeroTrustGatewayPolicyRuleSettingsToTerraform(this._ruleSettings.internalValue),
            schedule: zeroTrustGatewayPolicyScheduleToTerraform(this._schedule.internalValue),
            traffic: cdktf.stringToTerraform(this._traffic),
        };
    };
    ZeroTrustGatewayPolicy.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            action: {
                value: cdktf.stringToHclTerraform(this._action),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            device_posture: {
                value: cdktf.stringToHclTerraform(this._devicePosture),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enabled: {
                value: cdktf.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            expiration: {
                value: zeroTrustGatewayPolicyExpirationToHclTerraform(this._expiration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustGatewayPolicyExpiration",
            },
            filters: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filters),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            identity: {
                value: cdktf.stringToHclTerraform(this._identity),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            precedence: {
                value: cdktf.numberToHclTerraform(this._precedence),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            rule_settings: {
                value: zeroTrustGatewayPolicyRuleSettingsToHclTerraform(this._ruleSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustGatewayPolicyRuleSettings",
            },
            schedule: {
                value: zeroTrustGatewayPolicyScheduleToHclTerraform(this._schedule.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustGatewayPolicySchedule",
            },
            traffic: {
                value: cdktf.stringToHclTerraform(this._traffic),
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
    ZeroTrustGatewayPolicy.tfResourceType = "cloudflare_zero_trust_gateway_policy";
    return ZeroTrustGatewayPolicy;
}(cdktf.TerraformResource));
exports.ZeroTrustGatewayPolicy = ZeroTrustGatewayPolicy;
