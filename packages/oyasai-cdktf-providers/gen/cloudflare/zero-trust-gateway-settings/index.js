"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings
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
exports.ZeroTrustGatewaySettings = exports.ZeroTrustGatewaySettingsSettingsOutputReference = exports.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference = exports.ZeroTrustGatewaySettingsSettingsSandboxOutputReference = exports.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference = exports.ZeroTrustGatewaySettingsSettingsInspectionOutputReference = exports.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference = exports.ZeroTrustGatewaySettingsSettingsFipsOutputReference = exports.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference = exports.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference = exports.ZeroTrustGatewaySettingsSettingsCertificateOutputReference = exports.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference = exports.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference = exports.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference = exports.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference = exports.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference = exports.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference = void 0;
exports.zeroTrustGatewaySettingsSettingsActivityLogToTerraform = zeroTrustGatewaySettingsSettingsActivityLogToTerraform;
exports.zeroTrustGatewaySettingsSettingsActivityLogToHclTerraform = zeroTrustGatewaySettingsSettingsActivityLogToHclTerraform;
exports.zeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsToTerraform = zeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsToTerraform;
exports.zeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsToHclTerraform = zeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsToHclTerraform;
exports.zeroTrustGatewaySettingsSettingsAntivirusToTerraform = zeroTrustGatewaySettingsSettingsAntivirusToTerraform;
exports.zeroTrustGatewaySettingsSettingsAntivirusToHclTerraform = zeroTrustGatewaySettingsSettingsAntivirusToHclTerraform;
exports.zeroTrustGatewaySettingsSettingsBlockPageToTerraform = zeroTrustGatewaySettingsSettingsBlockPageToTerraform;
exports.zeroTrustGatewaySettingsSettingsBlockPageToHclTerraform = zeroTrustGatewaySettingsSettingsBlockPageToHclTerraform;
exports.zeroTrustGatewaySettingsSettingsBodyScanningToTerraform = zeroTrustGatewaySettingsSettingsBodyScanningToTerraform;
exports.zeroTrustGatewaySettingsSettingsBodyScanningToHclTerraform = zeroTrustGatewaySettingsSettingsBodyScanningToHclTerraform;
exports.zeroTrustGatewaySettingsSettingsBrowserIsolationToTerraform = zeroTrustGatewaySettingsSettingsBrowserIsolationToTerraform;
exports.zeroTrustGatewaySettingsSettingsBrowserIsolationToHclTerraform = zeroTrustGatewaySettingsSettingsBrowserIsolationToHclTerraform;
exports.zeroTrustGatewaySettingsSettingsCertificateToTerraform = zeroTrustGatewaySettingsSettingsCertificateToTerraform;
exports.zeroTrustGatewaySettingsSettingsCertificateToHclTerraform = zeroTrustGatewaySettingsSettingsCertificateToHclTerraform;
exports.zeroTrustGatewaySettingsSettingsCustomCertificateToTerraform = zeroTrustGatewaySettingsSettingsCustomCertificateToTerraform;
exports.zeroTrustGatewaySettingsSettingsCustomCertificateToHclTerraform = zeroTrustGatewaySettingsSettingsCustomCertificateToHclTerraform;
exports.zeroTrustGatewaySettingsSettingsExtendedEmailMatchingToTerraform = zeroTrustGatewaySettingsSettingsExtendedEmailMatchingToTerraform;
exports.zeroTrustGatewaySettingsSettingsExtendedEmailMatchingToHclTerraform = zeroTrustGatewaySettingsSettingsExtendedEmailMatchingToHclTerraform;
exports.zeroTrustGatewaySettingsSettingsFipsToTerraform = zeroTrustGatewaySettingsSettingsFipsToTerraform;
exports.zeroTrustGatewaySettingsSettingsFipsToHclTerraform = zeroTrustGatewaySettingsSettingsFipsToHclTerraform;
exports.zeroTrustGatewaySettingsSettingsHostSelectorToTerraform = zeroTrustGatewaySettingsSettingsHostSelectorToTerraform;
exports.zeroTrustGatewaySettingsSettingsHostSelectorToHclTerraform = zeroTrustGatewaySettingsSettingsHostSelectorToHclTerraform;
exports.zeroTrustGatewaySettingsSettingsInspectionToTerraform = zeroTrustGatewaySettingsSettingsInspectionToTerraform;
exports.zeroTrustGatewaySettingsSettingsInspectionToHclTerraform = zeroTrustGatewaySettingsSettingsInspectionToHclTerraform;
exports.zeroTrustGatewaySettingsSettingsProtocolDetectionToTerraform = zeroTrustGatewaySettingsSettingsProtocolDetectionToTerraform;
exports.zeroTrustGatewaySettingsSettingsProtocolDetectionToHclTerraform = zeroTrustGatewaySettingsSettingsProtocolDetectionToHclTerraform;
exports.zeroTrustGatewaySettingsSettingsSandboxToTerraform = zeroTrustGatewaySettingsSettingsSandboxToTerraform;
exports.zeroTrustGatewaySettingsSettingsSandboxToHclTerraform = zeroTrustGatewaySettingsSettingsSandboxToHclTerraform;
exports.zeroTrustGatewaySettingsSettingsTlsDecryptToTerraform = zeroTrustGatewaySettingsSettingsTlsDecryptToTerraform;
exports.zeroTrustGatewaySettingsSettingsTlsDecryptToHclTerraform = zeroTrustGatewaySettingsSettingsTlsDecryptToHclTerraform;
exports.zeroTrustGatewaySettingsSettingsToTerraform = zeroTrustGatewaySettingsSettingsToTerraform;
exports.zeroTrustGatewaySettingsSettingsToHclTerraform = zeroTrustGatewaySettingsSettingsToHclTerraform;
var cdktf = require("cdktf");
function zeroTrustGatewaySettingsSettingsActivityLogToTerraform(struct) {
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
function zeroTrustGatewaySettingsSettingsActivityLogToHclTerraform(struct) {
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
var ZeroTrustGatewaySettingsSettingsActivityLogOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewaySettingsSettingsActivityLogOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustGatewaySettingsSettingsActivityLogOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewaySettingsSettingsActivityLogOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference = ZeroTrustGatewaySettingsSettingsActivityLogOutputReference;
function zeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsToTerraform(struct) {
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
function zeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsToHclTerraform(struct) {
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
var ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.prototype, "includeContext", {
        get: function () {
            return this.getBooleanAttribute('include_context');
        },
        set: function (value) {
            this._includeContext = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.prototype.resetIncludeContext = function () {
        this._includeContext = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.prototype, "includeContextInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._includeContext;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.prototype, "msg", {
        get: function () {
            return this.getStringAttribute('msg');
        },
        set: function (value) {
            this._msg = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.prototype.resetMsg = function () {
        this._msg = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.prototype, "msgInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._msg;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.prototype, "supportUrl", {
        get: function () {
            return this.getStringAttribute('support_url');
        },
        set: function (value) {
            this._supportUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.prototype.resetSupportUrl = function () {
        this._supportUrl = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.prototype, "supportUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._supportUrl;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference = ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference;
function zeroTrustGatewaySettingsSettingsAntivirusToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled_download_phase: cdktf.booleanToTerraform(struct.enabledDownloadPhase),
        enabled_upload_phase: cdktf.booleanToTerraform(struct.enabledUploadPhase),
        fail_closed: cdktf.booleanToTerraform(struct.failClosed),
        notification_settings: zeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsToTerraform(struct.notificationSettings),
    };
}
function zeroTrustGatewaySettingsSettingsAntivirusToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        enabled_download_phase: {
            value: cdktf.booleanToHclTerraform(struct.enabledDownloadPhase),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        enabled_upload_phase: {
            value: cdktf.booleanToHclTerraform(struct.enabledUploadPhase),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        fail_closed: {
            value: cdktf.booleanToHclTerraform(struct.failClosed),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        notification_settings: {
            value: zeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsToHclTerraform(struct.notificationSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ZeroTrustGatewaySettingsSettingsAntivirusOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewaySettingsSettingsAntivirusOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustGatewaySettingsSettingsAntivirusOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // notification_settings - computed: true, optional: true, required: false
        _this._notificationSettings = new ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference(_this, "notification_settings");
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._enabledDownloadPhase !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabledDownloadPhase = this._enabledDownloadPhase;
            }
            if (this._enabledUploadPhase !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabledUploadPhase = this._enabledUploadPhase;
            }
            if (this._failClosed !== undefined) {
                hasAnyValues = true;
                internalValueResult.failClosed = this._failClosed;
            }
            if (((_a = this._notificationSettings) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.notificationSettings = (_b = this._notificationSettings) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._enabledDownloadPhase = undefined;
                this._enabledUploadPhase = undefined;
                this._failClosed = undefined;
                this._notificationSettings.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._enabledDownloadPhase = value.enabledDownloadPhase;
                this._enabledUploadPhase = value.enabledUploadPhase;
                this._failClosed = value.failClosed;
                this._notificationSettings.internalValue = value.notificationSettings;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.prototype, "enabledDownloadPhase", {
        get: function () {
            return this.getBooleanAttribute('enabled_download_phase');
        },
        set: function (value) {
            this._enabledDownloadPhase = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.prototype.resetEnabledDownloadPhase = function () {
        this._enabledDownloadPhase = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.prototype, "enabledDownloadPhaseInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabledDownloadPhase;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.prototype, "enabledUploadPhase", {
        get: function () {
            return this.getBooleanAttribute('enabled_upload_phase');
        },
        set: function (value) {
            this._enabledUploadPhase = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.prototype.resetEnabledUploadPhase = function () {
        this._enabledUploadPhase = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.prototype, "enabledUploadPhaseInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabledUploadPhase;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.prototype, "failClosed", {
        get: function () {
            return this.getBooleanAttribute('fail_closed');
        },
        set: function (value) {
            this._failClosed = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.prototype.resetFailClosed = function () {
        this._failClosed = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.prototype, "failClosedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._failClosed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.prototype, "notificationSettings", {
        get: function () {
            return this._notificationSettings;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.prototype.putNotificationSettings = function (value) {
        this._notificationSettings.internalValue = value;
    };
    ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.prototype.resetNotificationSettings = function () {
        this._notificationSettings.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.prototype, "notificationSettingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._notificationSettings.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewaySettingsSettingsAntivirusOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference = ZeroTrustGatewaySettingsSettingsAntivirusOutputReference;
function zeroTrustGatewaySettingsSettingsBlockPageToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        background_color: cdktf.stringToTerraform(struct.backgroundColor),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        footer_text: cdktf.stringToTerraform(struct.footerText),
        header_text: cdktf.stringToTerraform(struct.headerText),
        include_context: cdktf.booleanToTerraform(struct.includeContext),
        logo_path: cdktf.stringToTerraform(struct.logoPath),
        mailto_address: cdktf.stringToTerraform(struct.mailtoAddress),
        mailto_subject: cdktf.stringToTerraform(struct.mailtoSubject),
        mode: cdktf.stringToTerraform(struct.mode),
        name: cdktf.stringToTerraform(struct.name),
        read_only: cdktf.booleanToTerraform(struct.readOnly),
        source_account: cdktf.stringToTerraform(struct.sourceAccount),
        suppress_footer: cdktf.booleanToTerraform(struct.suppressFooter),
        target_uri: cdktf.stringToTerraform(struct.targetUri),
        version: cdktf.numberToTerraform(struct.version),
    };
}
function zeroTrustGatewaySettingsSettingsBlockPageToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        background_color: {
            value: cdktf.stringToHclTerraform(struct.backgroundColor),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        footer_text: {
            value: cdktf.stringToHclTerraform(struct.footerText),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        header_text: {
            value: cdktf.stringToHclTerraform(struct.headerText),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        include_context: {
            value: cdktf.booleanToHclTerraform(struct.includeContext),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        logo_path: {
            value: cdktf.stringToHclTerraform(struct.logoPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mailto_address: {
            value: cdktf.stringToHclTerraform(struct.mailtoAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mailto_subject: {
            value: cdktf.stringToHclTerraform(struct.mailtoSubject),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mode: {
            value: cdktf.stringToHclTerraform(struct.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        read_only: {
            value: cdktf.booleanToHclTerraform(struct.readOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        source_account: {
            value: cdktf.stringToHclTerraform(struct.sourceAccount),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        suppress_footer: {
            value: cdktf.booleanToHclTerraform(struct.suppressFooter),
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
        version: {
            value: cdktf.numberToHclTerraform(struct.version),
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
var ZeroTrustGatewaySettingsSettingsBlockPageOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewaySettingsSettingsBlockPageOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustGatewaySettingsSettingsBlockPageOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._backgroundColor !== undefined) {
                hasAnyValues = true;
                internalValueResult.backgroundColor = this._backgroundColor;
            }
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (this._footerText !== undefined) {
                hasAnyValues = true;
                internalValueResult.footerText = this._footerText;
            }
            if (this._headerText !== undefined) {
                hasAnyValues = true;
                internalValueResult.headerText = this._headerText;
            }
            if (this._includeContext !== undefined) {
                hasAnyValues = true;
                internalValueResult.includeContext = this._includeContext;
            }
            if (this._logoPath !== undefined) {
                hasAnyValues = true;
                internalValueResult.logoPath = this._logoPath;
            }
            if (this._mailtoAddress !== undefined) {
                hasAnyValues = true;
                internalValueResult.mailtoAddress = this._mailtoAddress;
            }
            if (this._mailtoSubject !== undefined) {
                hasAnyValues = true;
                internalValueResult.mailtoSubject = this._mailtoSubject;
            }
            if (this._mode !== undefined) {
                hasAnyValues = true;
                internalValueResult.mode = this._mode;
            }
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            if (this._readOnly !== undefined) {
                hasAnyValues = true;
                internalValueResult.readOnly = this._readOnly;
            }
            if (this._sourceAccount !== undefined) {
                hasAnyValues = true;
                internalValueResult.sourceAccount = this._sourceAccount;
            }
            if (this._suppressFooter !== undefined) {
                hasAnyValues = true;
                internalValueResult.suppressFooter = this._suppressFooter;
            }
            if (this._targetUri !== undefined) {
                hasAnyValues = true;
                internalValueResult.targetUri = this._targetUri;
            }
            if (this._version !== undefined) {
                hasAnyValues = true;
                internalValueResult.version = this._version;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._backgroundColor = undefined;
                this._enabled = undefined;
                this._footerText = undefined;
                this._headerText = undefined;
                this._includeContext = undefined;
                this._logoPath = undefined;
                this._mailtoAddress = undefined;
                this._mailtoSubject = undefined;
                this._mode = undefined;
                this._name = undefined;
                this._readOnly = undefined;
                this._sourceAccount = undefined;
                this._suppressFooter = undefined;
                this._targetUri = undefined;
                this._version = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._backgroundColor = value.backgroundColor;
                this._enabled = value.enabled;
                this._footerText = value.footerText;
                this._headerText = value.headerText;
                this._includeContext = value.includeContext;
                this._logoPath = value.logoPath;
                this._mailtoAddress = value.mailtoAddress;
                this._mailtoSubject = value.mailtoSubject;
                this._mode = value.mode;
                this._name = value.name;
                this._readOnly = value.readOnly;
                this._sourceAccount = value.sourceAccount;
                this._suppressFooter = value.suppressFooter;
                this._targetUri = value.targetUri;
                this._version = value.version;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "backgroundColor", {
        get: function () {
            return this.getStringAttribute('background_color');
        },
        set: function (value) {
            this._backgroundColor = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype.resetBackgroundColor = function () {
        this._backgroundColor = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "backgroundColorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._backgroundColor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "footerText", {
        get: function () {
            return this.getStringAttribute('footer_text');
        },
        set: function (value) {
            this._footerText = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype.resetFooterText = function () {
        this._footerText = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "footerTextInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._footerText;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "headerText", {
        get: function () {
            return this.getStringAttribute('header_text');
        },
        set: function (value) {
            this._headerText = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype.resetHeaderText = function () {
        this._headerText = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "headerTextInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._headerText;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "includeContext", {
        get: function () {
            return this.getBooleanAttribute('include_context');
        },
        set: function (value) {
            this._includeContext = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype.resetIncludeContext = function () {
        this._includeContext = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "includeContextInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._includeContext;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "logoPath", {
        get: function () {
            return this.getStringAttribute('logo_path');
        },
        set: function (value) {
            this._logoPath = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype.resetLogoPath = function () {
        this._logoPath = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "logoPathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logoPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "mailtoAddress", {
        get: function () {
            return this.getStringAttribute('mailto_address');
        },
        set: function (value) {
            this._mailtoAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype.resetMailtoAddress = function () {
        this._mailtoAddress = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "mailtoAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mailtoAddress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "mailtoSubject", {
        get: function () {
            return this.getStringAttribute('mailto_subject');
        },
        set: function (value) {
            this._mailtoSubject = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype.resetMailtoSubject = function () {
        this._mailtoSubject = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "mailtoSubjectInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mailtoSubject;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "mode", {
        get: function () {
            return this.getStringAttribute('mode');
        },
        set: function (value) {
            this._mode = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype.resetMode = function () {
        this._mode = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "modeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "readOnly", {
        get: function () {
            return this.getBooleanAttribute('read_only');
        },
        set: function (value) {
            this._readOnly = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype.resetReadOnly = function () {
        this._readOnly = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "readOnlyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._readOnly;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "sourceAccount", {
        get: function () {
            return this.getStringAttribute('source_account');
        },
        set: function (value) {
            this._sourceAccount = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype.resetSourceAccount = function () {
        this._sourceAccount = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "sourceAccountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceAccount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "suppressFooter", {
        get: function () {
            return this.getBooleanAttribute('suppress_footer');
        },
        set: function (value) {
            this._suppressFooter = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype.resetSuppressFooter = function () {
        this._suppressFooter = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "suppressFooterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._suppressFooter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "targetUri", {
        get: function () {
            return this.getStringAttribute('target_uri');
        },
        set: function (value) {
            this._targetUri = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype.resetTargetUri = function () {
        this._targetUri = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "targetUriInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetUri;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "version", {
        get: function () {
            return this.getNumberAttribute('version');
        },
        set: function (value) {
            this._version = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype.resetVersion = function () {
        this._version = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "versionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._version;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewaySettingsSettingsBlockPageOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference = ZeroTrustGatewaySettingsSettingsBlockPageOutputReference;
function zeroTrustGatewaySettingsSettingsBodyScanningToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        inspection_mode: cdktf.stringToTerraform(struct.inspectionMode),
    };
}
function zeroTrustGatewaySettingsSettingsBodyScanningToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        inspection_mode: {
            value: cdktf.stringToHclTerraform(struct.inspectionMode),
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
var ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._inspectionMode !== undefined) {
                hasAnyValues = true;
                internalValueResult.inspectionMode = this._inspectionMode;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._inspectionMode = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._inspectionMode = value.inspectionMode;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.prototype, "inspectionMode", {
        get: function () {
            return this.getStringAttribute('inspection_mode');
        },
        set: function (value) {
            this._inspectionMode = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.prototype.resetInspectionMode = function () {
        this._inspectionMode = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.prototype, "inspectionModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._inspectionMode;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference = ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference;
function zeroTrustGatewaySettingsSettingsBrowserIsolationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        non_identity_enabled: cdktf.booleanToTerraform(struct.nonIdentityEnabled),
        url_browser_isolation_enabled: cdktf.booleanToTerraform(struct.urlBrowserIsolationEnabled),
    };
}
function zeroTrustGatewaySettingsSettingsBrowserIsolationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        non_identity_enabled: {
            value: cdktf.booleanToHclTerraform(struct.nonIdentityEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        url_browser_isolation_enabled: {
            value: cdktf.booleanToHclTerraform(struct.urlBrowserIsolationEnabled),
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
var ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._nonIdentityEnabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.nonIdentityEnabled = this._nonIdentityEnabled;
            }
            if (this._urlBrowserIsolationEnabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.urlBrowserIsolationEnabled = this._urlBrowserIsolationEnabled;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._nonIdentityEnabled = undefined;
                this._urlBrowserIsolationEnabled = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._nonIdentityEnabled = value.nonIdentityEnabled;
                this._urlBrowserIsolationEnabled = value.urlBrowserIsolationEnabled;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.prototype, "nonIdentityEnabled", {
        get: function () {
            return this.getBooleanAttribute('non_identity_enabled');
        },
        set: function (value) {
            this._nonIdentityEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.prototype.resetNonIdentityEnabled = function () {
        this._nonIdentityEnabled = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.prototype, "nonIdentityEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._nonIdentityEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.prototype, "urlBrowserIsolationEnabled", {
        get: function () {
            return this.getBooleanAttribute('url_browser_isolation_enabled');
        },
        set: function (value) {
            this._urlBrowserIsolationEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.prototype.resetUrlBrowserIsolationEnabled = function () {
        this._urlBrowserIsolationEnabled = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.prototype, "urlBrowserIsolationEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._urlBrowserIsolationEnabled;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference = ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference;
function zeroTrustGatewaySettingsSettingsCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
    };
}
function zeroTrustGatewaySettingsSettingsCertificateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
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
var ZeroTrustGatewaySettingsSettingsCertificateOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewaySettingsSettingsCertificateOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustGatewaySettingsSettingsCertificateOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsCertificateOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._id = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._id = value.id;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsCertificateOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsCertificateOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewaySettingsSettingsCertificateOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewaySettingsSettingsCertificateOutputReference = ZeroTrustGatewaySettingsSettingsCertificateOutputReference;
function zeroTrustGatewaySettingsSettingsCustomCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        binding_status: cdktf.stringToTerraform(struct.bindingStatus),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        id: cdktf.stringToTerraform(struct.id),
        updated_at: cdktf.stringToTerraform(struct.updatedAt),
    };
}
function zeroTrustGatewaySettingsSettingsCustomCertificateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        binding_status: {
            value: cdktf.stringToHclTerraform(struct.bindingStatus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        updated_at: {
            value: cdktf.stringToHclTerraform(struct.updatedAt),
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
var ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._bindingStatus !== undefined) {
                hasAnyValues = true;
                internalValueResult.bindingStatus = this._bindingStatus;
            }
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            if (this._updatedAt !== undefined) {
                hasAnyValues = true;
                internalValueResult.updatedAt = this._updatedAt;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._bindingStatus = undefined;
                this._enabled = undefined;
                this._id = undefined;
                this._updatedAt = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._bindingStatus = value.bindingStatus;
                this._enabled = value.enabled;
                this._id = value.id;
                this._updatedAt = value.updatedAt;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.prototype, "bindingStatus", {
        get: function () {
            return this.getStringAttribute('binding_status');
        },
        set: function (value) {
            this._bindingStatus = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.prototype.resetBindingStatus = function () {
        this._bindingStatus = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.prototype, "bindingStatusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bindingStatus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.prototype, "updatedAt", {
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        set: function (value) {
            this._updatedAt = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.prototype.resetUpdatedAt = function () {
        this._updatedAt = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.prototype, "updatedAtInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._updatedAt;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference = ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference;
function zeroTrustGatewaySettingsSettingsExtendedEmailMatchingToTerraform(struct) {
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
function zeroTrustGatewaySettingsSettingsExtendedEmailMatchingToHclTerraform(struct) {
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
var ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.prototype, "readOnly", {
        // read_only - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read_only');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.prototype, "sourceAccount", {
        // source_account - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source_account');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference = ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference;
function zeroTrustGatewaySettingsSettingsFipsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        tls: cdktf.booleanToTerraform(struct.tls),
    };
}
function zeroTrustGatewaySettingsSettingsFipsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        tls: {
            value: cdktf.booleanToHclTerraform(struct.tls),
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
var ZeroTrustGatewaySettingsSettingsFipsOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewaySettingsSettingsFipsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustGatewaySettingsSettingsFipsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsFipsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._tls !== undefined) {
                hasAnyValues = true;
                internalValueResult.tls = this._tls;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._tls = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._tls = value.tls;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsFipsOutputReference.prototype, "tls", {
        get: function () {
            return this.getBooleanAttribute('tls');
        },
        set: function (value) {
            this._tls = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsFipsOutputReference.prototype.resetTls = function () {
        this._tls = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsFipsOutputReference.prototype, "tlsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tls;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewaySettingsSettingsFipsOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewaySettingsSettingsFipsOutputReference = ZeroTrustGatewaySettingsSettingsFipsOutputReference;
function zeroTrustGatewaySettingsSettingsHostSelectorToTerraform(struct) {
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
function zeroTrustGatewaySettingsSettingsHostSelectorToHclTerraform(struct) {
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
var ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference = ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference;
function zeroTrustGatewaySettingsSettingsInspectionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mode: cdktf.stringToTerraform(struct.mode),
    };
}
function zeroTrustGatewaySettingsSettingsInspectionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        mode: {
            value: cdktf.stringToHclTerraform(struct.mode),
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
var ZeroTrustGatewaySettingsSettingsInspectionOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewaySettingsSettingsInspectionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustGatewaySettingsSettingsInspectionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsInspectionOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._mode !== undefined) {
                hasAnyValues = true;
                internalValueResult.mode = this._mode;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._mode = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._mode = value.mode;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsInspectionOutputReference.prototype, "mode", {
        get: function () {
            return this.getStringAttribute('mode');
        },
        set: function (value) {
            this._mode = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsInspectionOutputReference.prototype.resetMode = function () {
        this._mode = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsInspectionOutputReference.prototype, "modeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mode;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewaySettingsSettingsInspectionOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewaySettingsSettingsInspectionOutputReference = ZeroTrustGatewaySettingsSettingsInspectionOutputReference;
function zeroTrustGatewaySettingsSettingsProtocolDetectionToTerraform(struct) {
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
function zeroTrustGatewaySettingsSettingsProtocolDetectionToHclTerraform(struct) {
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
var ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference = ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference;
function zeroTrustGatewaySettingsSettingsSandboxToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        fallback_action: cdktf.stringToTerraform(struct.fallbackAction),
    };
}
function zeroTrustGatewaySettingsSettingsSandboxToHclTerraform(struct) {
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
        fallback_action: {
            value: cdktf.stringToHclTerraform(struct.fallbackAction),
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
var ZeroTrustGatewaySettingsSettingsSandboxOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewaySettingsSettingsSandboxOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustGatewaySettingsSettingsSandboxOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsSandboxOutputReference.prototype, "internalValue", {
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
            if (this._fallbackAction !== undefined) {
                hasAnyValues = true;
                internalValueResult.fallbackAction = this._fallbackAction;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._enabled = undefined;
                this._fallbackAction = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._enabled = value.enabled;
                this._fallbackAction = value.fallbackAction;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsSandboxOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsSandboxOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsSandboxOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsSandboxOutputReference.prototype, "fallbackAction", {
        get: function () {
            return this.getStringAttribute('fallback_action');
        },
        set: function (value) {
            this._fallbackAction = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsSandboxOutputReference.prototype.resetFallbackAction = function () {
        this._fallbackAction = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsSandboxOutputReference.prototype, "fallbackActionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fallbackAction;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewaySettingsSettingsSandboxOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewaySettingsSettingsSandboxOutputReference = ZeroTrustGatewaySettingsSettingsSandboxOutputReference;
function zeroTrustGatewaySettingsSettingsTlsDecryptToTerraform(struct) {
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
function zeroTrustGatewaySettingsSettingsTlsDecryptToHclTerraform(struct) {
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
var ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference = ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference;
function zeroTrustGatewaySettingsSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        activity_log: zeroTrustGatewaySettingsSettingsActivityLogToTerraform(struct.activityLog),
        antivirus: zeroTrustGatewaySettingsSettingsAntivirusToTerraform(struct.antivirus),
        block_page: zeroTrustGatewaySettingsSettingsBlockPageToTerraform(struct.blockPage),
        body_scanning: zeroTrustGatewaySettingsSettingsBodyScanningToTerraform(struct.bodyScanning),
        browser_isolation: zeroTrustGatewaySettingsSettingsBrowserIsolationToTerraform(struct.browserIsolation),
        certificate: zeroTrustGatewaySettingsSettingsCertificateToTerraform(struct.certificate),
        custom_certificate: zeroTrustGatewaySettingsSettingsCustomCertificateToTerraform(struct.customCertificate),
        extended_email_matching: zeroTrustGatewaySettingsSettingsExtendedEmailMatchingToTerraform(struct.extendedEmailMatching),
        fips: zeroTrustGatewaySettingsSettingsFipsToTerraform(struct.fips),
        host_selector: zeroTrustGatewaySettingsSettingsHostSelectorToTerraform(struct.hostSelector),
        inspection: zeroTrustGatewaySettingsSettingsInspectionToTerraform(struct.inspection),
        protocol_detection: zeroTrustGatewaySettingsSettingsProtocolDetectionToTerraform(struct.protocolDetection),
        sandbox: zeroTrustGatewaySettingsSettingsSandboxToTerraform(struct.sandbox),
        tls_decrypt: zeroTrustGatewaySettingsSettingsTlsDecryptToTerraform(struct.tlsDecrypt),
    };
}
function zeroTrustGatewaySettingsSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        activity_log: {
            value: zeroTrustGatewaySettingsSettingsActivityLogToHclTerraform(struct.activityLog),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewaySettingsSettingsActivityLog",
        },
        antivirus: {
            value: zeroTrustGatewaySettingsSettingsAntivirusToHclTerraform(struct.antivirus),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewaySettingsSettingsAntivirus",
        },
        block_page: {
            value: zeroTrustGatewaySettingsSettingsBlockPageToHclTerraform(struct.blockPage),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewaySettingsSettingsBlockPage",
        },
        body_scanning: {
            value: zeroTrustGatewaySettingsSettingsBodyScanningToHclTerraform(struct.bodyScanning),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewaySettingsSettingsBodyScanning",
        },
        browser_isolation: {
            value: zeroTrustGatewaySettingsSettingsBrowserIsolationToHclTerraform(struct.browserIsolation),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewaySettingsSettingsBrowserIsolation",
        },
        certificate: {
            value: zeroTrustGatewaySettingsSettingsCertificateToHclTerraform(struct.certificate),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewaySettingsSettingsCertificate",
        },
        custom_certificate: {
            value: zeroTrustGatewaySettingsSettingsCustomCertificateToHclTerraform(struct.customCertificate),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewaySettingsSettingsCustomCertificate",
        },
        extended_email_matching: {
            value: zeroTrustGatewaySettingsSettingsExtendedEmailMatchingToHclTerraform(struct.extendedEmailMatching),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewaySettingsSettingsExtendedEmailMatching",
        },
        fips: {
            value: zeroTrustGatewaySettingsSettingsFipsToHclTerraform(struct.fips),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewaySettingsSettingsFips",
        },
        host_selector: {
            value: zeroTrustGatewaySettingsSettingsHostSelectorToHclTerraform(struct.hostSelector),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewaySettingsSettingsHostSelector",
        },
        inspection: {
            value: zeroTrustGatewaySettingsSettingsInspectionToHclTerraform(struct.inspection),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewaySettingsSettingsInspection",
        },
        protocol_detection: {
            value: zeroTrustGatewaySettingsSettingsProtocolDetectionToHclTerraform(struct.protocolDetection),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewaySettingsSettingsProtocolDetection",
        },
        sandbox: {
            value: zeroTrustGatewaySettingsSettingsSandboxToHclTerraform(struct.sandbox),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewaySettingsSettingsSandbox",
        },
        tls_decrypt: {
            value: zeroTrustGatewaySettingsSettingsTlsDecryptToHclTerraform(struct.tlsDecrypt),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustGatewaySettingsSettingsTlsDecrypt",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ZeroTrustGatewaySettingsSettingsOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewaySettingsSettingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustGatewaySettingsSettingsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // activity_log - computed: false, optional: true, required: false
        _this._activityLog = new ZeroTrustGatewaySettingsSettingsActivityLogOutputReference(_this, "activity_log");
        // antivirus - computed: false, optional: true, required: false
        _this._antivirus = new ZeroTrustGatewaySettingsSettingsAntivirusOutputReference(_this, "antivirus");
        // block_page - computed: false, optional: true, required: false
        _this._blockPage = new ZeroTrustGatewaySettingsSettingsBlockPageOutputReference(_this, "block_page");
        // body_scanning - computed: false, optional: true, required: false
        _this._bodyScanning = new ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference(_this, "body_scanning");
        // browser_isolation - computed: false, optional: true, required: false
        _this._browserIsolation = new ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference(_this, "browser_isolation");
        // certificate - computed: false, optional: true, required: false
        _this._certificate = new ZeroTrustGatewaySettingsSettingsCertificateOutputReference(_this, "certificate");
        // custom_certificate - computed: false, optional: true, required: false
        _this._customCertificate = new ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference(_this, "custom_certificate");
        // extended_email_matching - computed: false, optional: true, required: false
        _this._extendedEmailMatching = new ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference(_this, "extended_email_matching");
        // fips - computed: false, optional: true, required: false
        _this._fips = new ZeroTrustGatewaySettingsSettingsFipsOutputReference(_this, "fips");
        // host_selector - computed: false, optional: true, required: false
        _this._hostSelector = new ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference(_this, "host_selector");
        // inspection - computed: false, optional: true, required: false
        _this._inspection = new ZeroTrustGatewaySettingsSettingsInspectionOutputReference(_this, "inspection");
        // protocol_detection - computed: false, optional: true, required: false
        _this._protocolDetection = new ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference(_this, "protocol_detection");
        // sandbox - computed: false, optional: true, required: false
        _this._sandbox = new ZeroTrustGatewaySettingsSettingsSandboxOutputReference(_this, "sandbox");
        // tls_decrypt - computed: false, optional: true, required: false
        _this._tlsDecrypt = new ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference(_this, "tls_decrypt");
        return _this;
    }
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._activityLog) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.activityLog = (_b = this._activityLog) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._antivirus) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.antivirus = (_d = this._antivirus) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (((_e = this._blockPage) === null || _e === void 0 ? void 0 : _e.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.blockPage = (_f = this._blockPage) === null || _f === void 0 ? void 0 : _f.internalValue;
            }
            if (((_g = this._bodyScanning) === null || _g === void 0 ? void 0 : _g.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.bodyScanning = (_h = this._bodyScanning) === null || _h === void 0 ? void 0 : _h.internalValue;
            }
            if (((_j = this._browserIsolation) === null || _j === void 0 ? void 0 : _j.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.browserIsolation = (_k = this._browserIsolation) === null || _k === void 0 ? void 0 : _k.internalValue;
            }
            if (((_l = this._certificate) === null || _l === void 0 ? void 0 : _l.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.certificate = (_m = this._certificate) === null || _m === void 0 ? void 0 : _m.internalValue;
            }
            if (((_o = this._customCertificate) === null || _o === void 0 ? void 0 : _o.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.customCertificate = (_p = this._customCertificate) === null || _p === void 0 ? void 0 : _p.internalValue;
            }
            if (((_q = this._extendedEmailMatching) === null || _q === void 0 ? void 0 : _q.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.extendedEmailMatching = (_r = this._extendedEmailMatching) === null || _r === void 0 ? void 0 : _r.internalValue;
            }
            if (((_s = this._fips) === null || _s === void 0 ? void 0 : _s.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.fips = (_t = this._fips) === null || _t === void 0 ? void 0 : _t.internalValue;
            }
            if (((_u = this._hostSelector) === null || _u === void 0 ? void 0 : _u.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.hostSelector = (_v = this._hostSelector) === null || _v === void 0 ? void 0 : _v.internalValue;
            }
            if (((_w = this._inspection) === null || _w === void 0 ? void 0 : _w.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.inspection = (_x = this._inspection) === null || _x === void 0 ? void 0 : _x.internalValue;
            }
            if (((_y = this._protocolDetection) === null || _y === void 0 ? void 0 : _y.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.protocolDetection = (_z = this._protocolDetection) === null || _z === void 0 ? void 0 : _z.internalValue;
            }
            if (((_0 = this._sandbox) === null || _0 === void 0 ? void 0 : _0.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.sandbox = (_1 = this._sandbox) === null || _1 === void 0 ? void 0 : _1.internalValue;
            }
            if (((_2 = this._tlsDecrypt) === null || _2 === void 0 ? void 0 : _2.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.tlsDecrypt = (_3 = this._tlsDecrypt) === null || _3 === void 0 ? void 0 : _3.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._activityLog.internalValue = undefined;
                this._antivirus.internalValue = undefined;
                this._blockPage.internalValue = undefined;
                this._bodyScanning.internalValue = undefined;
                this._browserIsolation.internalValue = undefined;
                this._certificate.internalValue = undefined;
                this._customCertificate.internalValue = undefined;
                this._extendedEmailMatching.internalValue = undefined;
                this._fips.internalValue = undefined;
                this._hostSelector.internalValue = undefined;
                this._inspection.internalValue = undefined;
                this._protocolDetection.internalValue = undefined;
                this._sandbox.internalValue = undefined;
                this._tlsDecrypt.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._activityLog.internalValue = value.activityLog;
                this._antivirus.internalValue = value.antivirus;
                this._blockPage.internalValue = value.blockPage;
                this._bodyScanning.internalValue = value.bodyScanning;
                this._browserIsolation.internalValue = value.browserIsolation;
                this._certificate.internalValue = value.certificate;
                this._customCertificate.internalValue = value.customCertificate;
                this._extendedEmailMatching.internalValue = value.extendedEmailMatching;
                this._fips.internalValue = value.fips;
                this._hostSelector.internalValue = value.hostSelector;
                this._inspection.internalValue = value.inspection;
                this._protocolDetection.internalValue = value.protocolDetection;
                this._sandbox.internalValue = value.sandbox;
                this._tlsDecrypt.internalValue = value.tlsDecrypt;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsOutputReference.prototype, "activityLog", {
        get: function () {
            return this._activityLog;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsOutputReference.prototype.putActivityLog = function (value) {
        this._activityLog.internalValue = value;
    };
    ZeroTrustGatewaySettingsSettingsOutputReference.prototype.resetActivityLog = function () {
        this._activityLog.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsOutputReference.prototype, "activityLogInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._activityLog.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsOutputReference.prototype, "antivirus", {
        get: function () {
            return this._antivirus;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsOutputReference.prototype.putAntivirus = function (value) {
        this._antivirus.internalValue = value;
    };
    ZeroTrustGatewaySettingsSettingsOutputReference.prototype.resetAntivirus = function () {
        this._antivirus.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsOutputReference.prototype, "antivirusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._antivirus.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsOutputReference.prototype, "blockPage", {
        get: function () {
            return this._blockPage;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsOutputReference.prototype.putBlockPage = function (value) {
        this._blockPage.internalValue = value;
    };
    ZeroTrustGatewaySettingsSettingsOutputReference.prototype.resetBlockPage = function () {
        this._blockPage.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsOutputReference.prototype, "blockPageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._blockPage.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsOutputReference.prototype, "bodyScanning", {
        get: function () {
            return this._bodyScanning;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsOutputReference.prototype.putBodyScanning = function (value) {
        this._bodyScanning.internalValue = value;
    };
    ZeroTrustGatewaySettingsSettingsOutputReference.prototype.resetBodyScanning = function () {
        this._bodyScanning.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsOutputReference.prototype, "bodyScanningInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bodyScanning.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsOutputReference.prototype, "browserIsolation", {
        get: function () {
            return this._browserIsolation;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsOutputReference.prototype.putBrowserIsolation = function (value) {
        this._browserIsolation.internalValue = value;
    };
    ZeroTrustGatewaySettingsSettingsOutputReference.prototype.resetBrowserIsolation = function () {
        this._browserIsolation.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsOutputReference.prototype, "browserIsolationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._browserIsolation.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsOutputReference.prototype, "certificate", {
        get: function () {
            return this._certificate;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsOutputReference.prototype.putCertificate = function (value) {
        this._certificate.internalValue = value;
    };
    ZeroTrustGatewaySettingsSettingsOutputReference.prototype.resetCertificate = function () {
        this._certificate.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsOutputReference.prototype, "certificateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificate.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsOutputReference.prototype, "customCertificate", {
        get: function () {
            return this._customCertificate;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsOutputReference.prototype.putCustomCertificate = function (value) {
        this._customCertificate.internalValue = value;
    };
    ZeroTrustGatewaySettingsSettingsOutputReference.prototype.resetCustomCertificate = function () {
        this._customCertificate.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsOutputReference.prototype, "customCertificateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customCertificate.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsOutputReference.prototype, "extendedEmailMatching", {
        get: function () {
            return this._extendedEmailMatching;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsOutputReference.prototype.putExtendedEmailMatching = function (value) {
        this._extendedEmailMatching.internalValue = value;
    };
    ZeroTrustGatewaySettingsSettingsOutputReference.prototype.resetExtendedEmailMatching = function () {
        this._extendedEmailMatching.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsOutputReference.prototype, "extendedEmailMatchingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._extendedEmailMatching.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsOutputReference.prototype, "fips", {
        get: function () {
            return this._fips;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsOutputReference.prototype.putFips = function (value) {
        this._fips.internalValue = value;
    };
    ZeroTrustGatewaySettingsSettingsOutputReference.prototype.resetFips = function () {
        this._fips.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsOutputReference.prototype, "fipsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fips.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsOutputReference.prototype, "hostSelector", {
        get: function () {
            return this._hostSelector;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsOutputReference.prototype.putHostSelector = function (value) {
        this._hostSelector.internalValue = value;
    };
    ZeroTrustGatewaySettingsSettingsOutputReference.prototype.resetHostSelector = function () {
        this._hostSelector.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsOutputReference.prototype, "hostSelectorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostSelector.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsOutputReference.prototype, "inspection", {
        get: function () {
            return this._inspection;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsOutputReference.prototype.putInspection = function (value) {
        this._inspection.internalValue = value;
    };
    ZeroTrustGatewaySettingsSettingsOutputReference.prototype.resetInspection = function () {
        this._inspection.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsOutputReference.prototype, "inspectionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._inspection.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsOutputReference.prototype, "protocolDetection", {
        get: function () {
            return this._protocolDetection;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsOutputReference.prototype.putProtocolDetection = function (value) {
        this._protocolDetection.internalValue = value;
    };
    ZeroTrustGatewaySettingsSettingsOutputReference.prototype.resetProtocolDetection = function () {
        this._protocolDetection.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsOutputReference.prototype, "protocolDetectionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._protocolDetection.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsOutputReference.prototype, "sandbox", {
        get: function () {
            return this._sandbox;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsOutputReference.prototype.putSandbox = function (value) {
        this._sandbox.internalValue = value;
    };
    ZeroTrustGatewaySettingsSettingsOutputReference.prototype.resetSandbox = function () {
        this._sandbox.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsOutputReference.prototype, "sandboxInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sandbox.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsOutputReference.prototype, "tlsDecrypt", {
        get: function () {
            return this._tlsDecrypt;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettingsSettingsOutputReference.prototype.putTlsDecrypt = function (value) {
        this._tlsDecrypt.internalValue = value;
    };
    ZeroTrustGatewaySettingsSettingsOutputReference.prototype.resetTlsDecrypt = function () {
        this._tlsDecrypt.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettingsSettingsOutputReference.prototype, "tlsDecryptInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tlsDecrypt.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustGatewaySettingsSettingsOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustGatewaySettingsSettingsOutputReference = ZeroTrustGatewaySettingsSettingsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings cloudflare_zero_trust_gateway_settings}
*/
var ZeroTrustGatewaySettings = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewaySettings, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings cloudflare_zero_trust_gateway_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustGatewaySettingsConfig
    */
    function ZeroTrustGatewaySettings(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_gateway_settings',
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
        // settings - computed: false, optional: true, required: false
        _this._settings = new ZeroTrustGatewaySettingsSettingsOutputReference(_this, "settings");
        _this._accountId = config.accountId;
        _this._settings.internalValue = config.settings;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustGatewaySettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustGatewaySettings to import
    * @param importFromId The id of the existing ZeroTrustGatewaySettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustGatewaySettings to import is found
    */
    ZeroTrustGatewaySettings.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_gateway_settings", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZeroTrustGatewaySettings.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettings.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettings.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettings.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettings.prototype, "settings", {
        get: function () {
            return this._settings;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewaySettings.prototype.putSettings = function (value) {
        this._settings.internalValue = value;
    };
    ZeroTrustGatewaySettings.prototype.resetSettings = function () {
        this._settings.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustGatewaySettings.prototype, "settingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._settings.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewaySettings.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ZeroTrustGatewaySettings.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            settings: zeroTrustGatewaySettingsSettingsToTerraform(this._settings.internalValue),
        };
    };
    ZeroTrustGatewaySettings.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            settings: {
                value: zeroTrustGatewaySettingsSettingsToHclTerraform(this._settings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustGatewaySettingsSettings",
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
    ZeroTrustGatewaySettings.tfResourceType = "cloudflare_zero_trust_gateway_settings";
    return ZeroTrustGatewaySettings;
}(cdktf.TerraformResource));
exports.ZeroTrustGatewaySettings = ZeroTrustGatewaySettings;
