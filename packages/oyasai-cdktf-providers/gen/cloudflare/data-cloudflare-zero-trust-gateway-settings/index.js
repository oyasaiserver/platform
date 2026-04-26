"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_settings
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
exports.DataCloudflareZeroTrustGatewaySettings = exports.DataCloudflareZeroTrustGatewaySettingsSettingsOutputReference = exports.DataCloudflareZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference = exports.DataCloudflareZeroTrustGatewaySettingsSettingsSandboxOutputReference = exports.DataCloudflareZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference = exports.DataCloudflareZeroTrustGatewaySettingsSettingsInspectionOutputReference = exports.DataCloudflareZeroTrustGatewaySettingsSettingsHostSelectorOutputReference = exports.DataCloudflareZeroTrustGatewaySettingsSettingsFipsOutputReference = exports.DataCloudflareZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference = exports.DataCloudflareZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference = exports.DataCloudflareZeroTrustGatewaySettingsSettingsCertificateOutputReference = exports.DataCloudflareZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference = exports.DataCloudflareZeroTrustGatewaySettingsSettingsBodyScanningOutputReference = exports.DataCloudflareZeroTrustGatewaySettingsSettingsBlockPageOutputReference = exports.DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusOutputReference = exports.DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference = exports.DataCloudflareZeroTrustGatewaySettingsSettingsActivityLogOutputReference = void 0;
exports.dataCloudflareZeroTrustGatewaySettingsSettingsActivityLogToTerraform = dataCloudflareZeroTrustGatewaySettingsSettingsActivityLogToTerraform;
exports.dataCloudflareZeroTrustGatewaySettingsSettingsActivityLogToHclTerraform = dataCloudflareZeroTrustGatewaySettingsSettingsActivityLogToHclTerraform;
exports.dataCloudflareZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsToTerraform = dataCloudflareZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsToTerraform;
exports.dataCloudflareZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsToHclTerraform = dataCloudflareZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsToHclTerraform;
exports.dataCloudflareZeroTrustGatewaySettingsSettingsAntivirusToTerraform = dataCloudflareZeroTrustGatewaySettingsSettingsAntivirusToTerraform;
exports.dataCloudflareZeroTrustGatewaySettingsSettingsAntivirusToHclTerraform = dataCloudflareZeroTrustGatewaySettingsSettingsAntivirusToHclTerraform;
exports.dataCloudflareZeroTrustGatewaySettingsSettingsBlockPageToTerraform = dataCloudflareZeroTrustGatewaySettingsSettingsBlockPageToTerraform;
exports.dataCloudflareZeroTrustGatewaySettingsSettingsBlockPageToHclTerraform = dataCloudflareZeroTrustGatewaySettingsSettingsBlockPageToHclTerraform;
exports.dataCloudflareZeroTrustGatewaySettingsSettingsBodyScanningToTerraform = dataCloudflareZeroTrustGatewaySettingsSettingsBodyScanningToTerraform;
exports.dataCloudflareZeroTrustGatewaySettingsSettingsBodyScanningToHclTerraform = dataCloudflareZeroTrustGatewaySettingsSettingsBodyScanningToHclTerraform;
exports.dataCloudflareZeroTrustGatewaySettingsSettingsBrowserIsolationToTerraform = dataCloudflareZeroTrustGatewaySettingsSettingsBrowserIsolationToTerraform;
exports.dataCloudflareZeroTrustGatewaySettingsSettingsBrowserIsolationToHclTerraform = dataCloudflareZeroTrustGatewaySettingsSettingsBrowserIsolationToHclTerraform;
exports.dataCloudflareZeroTrustGatewaySettingsSettingsCertificateToTerraform = dataCloudflareZeroTrustGatewaySettingsSettingsCertificateToTerraform;
exports.dataCloudflareZeroTrustGatewaySettingsSettingsCertificateToHclTerraform = dataCloudflareZeroTrustGatewaySettingsSettingsCertificateToHclTerraform;
exports.dataCloudflareZeroTrustGatewaySettingsSettingsCustomCertificateToTerraform = dataCloudflareZeroTrustGatewaySettingsSettingsCustomCertificateToTerraform;
exports.dataCloudflareZeroTrustGatewaySettingsSettingsCustomCertificateToHclTerraform = dataCloudflareZeroTrustGatewaySettingsSettingsCustomCertificateToHclTerraform;
exports.dataCloudflareZeroTrustGatewaySettingsSettingsExtendedEmailMatchingToTerraform = dataCloudflareZeroTrustGatewaySettingsSettingsExtendedEmailMatchingToTerraform;
exports.dataCloudflareZeroTrustGatewaySettingsSettingsExtendedEmailMatchingToHclTerraform = dataCloudflareZeroTrustGatewaySettingsSettingsExtendedEmailMatchingToHclTerraform;
exports.dataCloudflareZeroTrustGatewaySettingsSettingsFipsToTerraform = dataCloudflareZeroTrustGatewaySettingsSettingsFipsToTerraform;
exports.dataCloudflareZeroTrustGatewaySettingsSettingsFipsToHclTerraform = dataCloudflareZeroTrustGatewaySettingsSettingsFipsToHclTerraform;
exports.dataCloudflareZeroTrustGatewaySettingsSettingsHostSelectorToTerraform = dataCloudflareZeroTrustGatewaySettingsSettingsHostSelectorToTerraform;
exports.dataCloudflareZeroTrustGatewaySettingsSettingsHostSelectorToHclTerraform = dataCloudflareZeroTrustGatewaySettingsSettingsHostSelectorToHclTerraform;
exports.dataCloudflareZeroTrustGatewaySettingsSettingsInspectionToTerraform = dataCloudflareZeroTrustGatewaySettingsSettingsInspectionToTerraform;
exports.dataCloudflareZeroTrustGatewaySettingsSettingsInspectionToHclTerraform = dataCloudflareZeroTrustGatewaySettingsSettingsInspectionToHclTerraform;
exports.dataCloudflareZeroTrustGatewaySettingsSettingsProtocolDetectionToTerraform = dataCloudflareZeroTrustGatewaySettingsSettingsProtocolDetectionToTerraform;
exports.dataCloudflareZeroTrustGatewaySettingsSettingsProtocolDetectionToHclTerraform = dataCloudflareZeroTrustGatewaySettingsSettingsProtocolDetectionToHclTerraform;
exports.dataCloudflareZeroTrustGatewaySettingsSettingsSandboxToTerraform = dataCloudflareZeroTrustGatewaySettingsSettingsSandboxToTerraform;
exports.dataCloudflareZeroTrustGatewaySettingsSettingsSandboxToHclTerraform = dataCloudflareZeroTrustGatewaySettingsSettingsSandboxToHclTerraform;
exports.dataCloudflareZeroTrustGatewaySettingsSettingsTlsDecryptToTerraform = dataCloudflareZeroTrustGatewaySettingsSettingsTlsDecryptToTerraform;
exports.dataCloudflareZeroTrustGatewaySettingsSettingsTlsDecryptToHclTerraform = dataCloudflareZeroTrustGatewaySettingsSettingsTlsDecryptToHclTerraform;
exports.dataCloudflareZeroTrustGatewaySettingsSettingsToTerraform = dataCloudflareZeroTrustGatewaySettingsSettingsToTerraform;
exports.dataCloudflareZeroTrustGatewaySettingsSettingsToHclTerraform = dataCloudflareZeroTrustGatewaySettingsSettingsToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustGatewaySettingsSettingsActivityLogToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewaySettingsSettingsActivityLogToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewaySettingsSettingsActivityLogOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewaySettingsSettingsActivityLogOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewaySettingsSettingsActivityLogOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsActivityLogOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsActivityLogOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewaySettingsSettingsActivityLogOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewaySettingsSettingsActivityLogOutputReference = DataCloudflareZeroTrustGatewaySettingsSettingsActivityLogOutputReference;
function dataCloudflareZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.prototype, "includeContext", {
        // include_context - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('include_context');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.prototype, "msg", {
        // msg - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('msg');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.prototype, "supportUrl", {
        // support_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('support_url');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference = DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference;
function dataCloudflareZeroTrustGatewaySettingsSettingsAntivirusToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewaySettingsSettingsAntivirusToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // notification_settings - computed: true, optional: false, required: false
        _this._notificationSettings = new DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference(_this, "notification_settings");
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusOutputReference.prototype, "enabledDownloadPhase", {
        // enabled_download_phase - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled_download_phase');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusOutputReference.prototype, "enabledUploadPhase", {
        // enabled_upload_phase - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled_upload_phase');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusOutputReference.prototype, "failClosed", {
        // fail_closed - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('fail_closed');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusOutputReference.prototype, "notificationSettings", {
        get: function () {
            return this._notificationSettings;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusOutputReference = DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusOutputReference;
function dataCloudflareZeroTrustGatewaySettingsSettingsBlockPageToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewaySettingsSettingsBlockPageToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewaySettingsSettingsBlockPageOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewaySettingsSettingsBlockPageOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewaySettingsSettingsBlockPageOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "backgroundColor", {
        // background_color - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('background_color');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "footerText", {
        // footer_text - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('footer_text');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "headerText", {
        // header_text - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('header_text');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "includeContext", {
        // include_context - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('include_context');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "logoPath", {
        // logo_path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('logo_path');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "mailtoAddress", {
        // mailto_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mailto_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "mailtoSubject", {
        // mailto_subject - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mailto_subject');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "mode", {
        // mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "readOnly", {
        // read_only - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read_only');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "sourceAccount", {
        // source_account - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source_account');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "suppressFooter", {
        // suppress_footer - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('suppress_footer');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "targetUri", {
        // target_uri - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('target_uri');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsBlockPageOutputReference.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewaySettingsSettingsBlockPageOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewaySettingsSettingsBlockPageOutputReference = DataCloudflareZeroTrustGatewaySettingsSettingsBlockPageOutputReference;
function dataCloudflareZeroTrustGatewaySettingsSettingsBodyScanningToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewaySettingsSettingsBodyScanningToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewaySettingsSettingsBodyScanningOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewaySettingsSettingsBodyScanningOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewaySettingsSettingsBodyScanningOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.prototype, "inspectionMode", {
        // inspection_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('inspection_mode');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewaySettingsSettingsBodyScanningOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewaySettingsSettingsBodyScanningOutputReference = DataCloudflareZeroTrustGatewaySettingsSettingsBodyScanningOutputReference;
function dataCloudflareZeroTrustGatewaySettingsSettingsBrowserIsolationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewaySettingsSettingsBrowserIsolationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.prototype, "nonIdentityEnabled", {
        // non_identity_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('non_identity_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.prototype, "urlBrowserIsolationEnabled", {
        // url_browser_isolation_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('url_browser_isolation_enabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference = DataCloudflareZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference;
function dataCloudflareZeroTrustGatewaySettingsSettingsCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewaySettingsSettingsCertificateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewaySettingsSettingsCertificateOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewaySettingsSettingsCertificateOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewaySettingsSettingsCertificateOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsCertificateOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsCertificateOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewaySettingsSettingsCertificateOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewaySettingsSettingsCertificateOutputReference = DataCloudflareZeroTrustGatewaySettingsSettingsCertificateOutputReference;
function dataCloudflareZeroTrustGatewaySettingsSettingsCustomCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewaySettingsSettingsCustomCertificateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.prototype, "bindingStatus", {
        // binding_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('binding_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference = DataCloudflareZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference;
function dataCloudflareZeroTrustGatewaySettingsSettingsExtendedEmailMatchingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewaySettingsSettingsExtendedEmailMatchingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.prototype, "readOnly", {
        // read_only - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read_only');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.prototype, "sourceAccount", {
        // source_account - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source_account');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference = DataCloudflareZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference;
function dataCloudflareZeroTrustGatewaySettingsSettingsFipsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewaySettingsSettingsFipsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewaySettingsSettingsFipsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewaySettingsSettingsFipsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewaySettingsSettingsFipsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsFipsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsFipsOutputReference.prototype, "tls", {
        // tls - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('tls');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewaySettingsSettingsFipsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewaySettingsSettingsFipsOutputReference = DataCloudflareZeroTrustGatewaySettingsSettingsFipsOutputReference;
function dataCloudflareZeroTrustGatewaySettingsSettingsHostSelectorToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewaySettingsSettingsHostSelectorToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewaySettingsSettingsHostSelectorOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewaySettingsSettingsHostSelectorOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewaySettingsSettingsHostSelectorOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewaySettingsSettingsHostSelectorOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewaySettingsSettingsHostSelectorOutputReference = DataCloudflareZeroTrustGatewaySettingsSettingsHostSelectorOutputReference;
function dataCloudflareZeroTrustGatewaySettingsSettingsInspectionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewaySettingsSettingsInspectionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewaySettingsSettingsInspectionOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewaySettingsSettingsInspectionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewaySettingsSettingsInspectionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsInspectionOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsInspectionOutputReference.prototype, "mode", {
        // mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mode');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewaySettingsSettingsInspectionOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewaySettingsSettingsInspectionOutputReference = DataCloudflareZeroTrustGatewaySettingsSettingsInspectionOutputReference;
function dataCloudflareZeroTrustGatewaySettingsSettingsProtocolDetectionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewaySettingsSettingsProtocolDetectionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference = DataCloudflareZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference;
function dataCloudflareZeroTrustGatewaySettingsSettingsSandboxToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewaySettingsSettingsSandboxToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewaySettingsSettingsSandboxOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewaySettingsSettingsSandboxOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewaySettingsSettingsSandboxOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsSandboxOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsSandboxOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsSandboxOutputReference.prototype, "fallbackAction", {
        // fallback_action - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('fallback_action');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewaySettingsSettingsSandboxOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewaySettingsSettingsSandboxOutputReference = DataCloudflareZeroTrustGatewaySettingsSettingsSandboxOutputReference;
function dataCloudflareZeroTrustGatewaySettingsSettingsTlsDecryptToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewaySettingsSettingsTlsDecryptToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference = DataCloudflareZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference;
function dataCloudflareZeroTrustGatewaySettingsSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewaySettingsSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewaySettingsSettingsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewaySettingsSettingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewaySettingsSettingsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // activity_log - computed: true, optional: false, required: false
        _this._activityLog = new DataCloudflareZeroTrustGatewaySettingsSettingsActivityLogOutputReference(_this, "activity_log");
        // antivirus - computed: true, optional: false, required: false
        _this._antivirus = new DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusOutputReference(_this, "antivirus");
        // block_page - computed: true, optional: false, required: false
        _this._blockPage = new DataCloudflareZeroTrustGatewaySettingsSettingsBlockPageOutputReference(_this, "block_page");
        // body_scanning - computed: true, optional: false, required: false
        _this._bodyScanning = new DataCloudflareZeroTrustGatewaySettingsSettingsBodyScanningOutputReference(_this, "body_scanning");
        // browser_isolation - computed: true, optional: false, required: false
        _this._browserIsolation = new DataCloudflareZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference(_this, "browser_isolation");
        // certificate - computed: true, optional: false, required: false
        _this._certificate = new DataCloudflareZeroTrustGatewaySettingsSettingsCertificateOutputReference(_this, "certificate");
        // custom_certificate - computed: true, optional: false, required: false
        _this._customCertificate = new DataCloudflareZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference(_this, "custom_certificate");
        // extended_email_matching - computed: true, optional: false, required: false
        _this._extendedEmailMatching = new DataCloudflareZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference(_this, "extended_email_matching");
        // fips - computed: true, optional: false, required: false
        _this._fips = new DataCloudflareZeroTrustGatewaySettingsSettingsFipsOutputReference(_this, "fips");
        // host_selector - computed: true, optional: false, required: false
        _this._hostSelector = new DataCloudflareZeroTrustGatewaySettingsSettingsHostSelectorOutputReference(_this, "host_selector");
        // inspection - computed: true, optional: false, required: false
        _this._inspection = new DataCloudflareZeroTrustGatewaySettingsSettingsInspectionOutputReference(_this, "inspection");
        // protocol_detection - computed: true, optional: false, required: false
        _this._protocolDetection = new DataCloudflareZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference(_this, "protocol_detection");
        // sandbox - computed: true, optional: false, required: false
        _this._sandbox = new DataCloudflareZeroTrustGatewaySettingsSettingsSandboxOutputReference(_this, "sandbox");
        // tls_decrypt - computed: true, optional: false, required: false
        _this._tlsDecrypt = new DataCloudflareZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference(_this, "tls_decrypt");
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsOutputReference.prototype, "activityLog", {
        get: function () {
            return this._activityLog;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsOutputReference.prototype, "antivirus", {
        get: function () {
            return this._antivirus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsOutputReference.prototype, "blockPage", {
        get: function () {
            return this._blockPage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsOutputReference.prototype, "bodyScanning", {
        get: function () {
            return this._bodyScanning;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsOutputReference.prototype, "browserIsolation", {
        get: function () {
            return this._browserIsolation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsOutputReference.prototype, "certificate", {
        get: function () {
            return this._certificate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsOutputReference.prototype, "customCertificate", {
        get: function () {
            return this._customCertificate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsOutputReference.prototype, "extendedEmailMatching", {
        get: function () {
            return this._extendedEmailMatching;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsOutputReference.prototype, "fips", {
        get: function () {
            return this._fips;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsOutputReference.prototype, "hostSelector", {
        get: function () {
            return this._hostSelector;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsOutputReference.prototype, "inspection", {
        get: function () {
            return this._inspection;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsOutputReference.prototype, "protocolDetection", {
        get: function () {
            return this._protocolDetection;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsOutputReference.prototype, "sandbox", {
        get: function () {
            return this._sandbox;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettingsSettingsOutputReference.prototype, "tlsDecrypt", {
        get: function () {
            return this._tlsDecrypt;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewaySettingsSettingsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewaySettingsSettingsOutputReference = DataCloudflareZeroTrustGatewaySettingsSettingsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_settings cloudflare_zero_trust_gateway_settings}
*/
var DataCloudflareZeroTrustGatewaySettings = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewaySettings, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_settings cloudflare_zero_trust_gateway_settings} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustGatewaySettingsConfig = {}
    */
    function DataCloudflareZeroTrustGatewaySettings(scope, id, config) {
        if (config === void 0) { config = {}; }
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
        // settings - computed: true, optional: false, required: false
        _this._settings = new DataCloudflareZeroTrustGatewaySettingsSettingsOutputReference(_this, "settings");
        _this._accountId = config.accountId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustGatewaySettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustGatewaySettings to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustGatewaySettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustGatewaySettings to import is found
    */
    DataCloudflareZeroTrustGatewaySettings.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_gateway_settings", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettings.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustGatewaySettings.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettings.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettings.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettings.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettings.prototype, "settings", {
        get: function () {
            return this._settings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewaySettings.prototype, "updatedAt", {
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
    DataCloudflareZeroTrustGatewaySettings.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
        };
    };
    DataCloudflareZeroTrustGatewaySettings.prototype.synthesizeHclAttributes = function () {
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
    DataCloudflareZeroTrustGatewaySettings.tfResourceType = "cloudflare_zero_trust_gateway_settings";
    return DataCloudflareZeroTrustGatewaySettings;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustGatewaySettings = DataCloudflareZeroTrustGatewaySettings;
