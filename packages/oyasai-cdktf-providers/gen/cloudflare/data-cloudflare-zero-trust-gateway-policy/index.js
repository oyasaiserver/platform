"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_policy
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
exports.DataCloudflareZeroTrustGatewayPolicy = exports.DataCloudflareZeroTrustGatewayPolicyScheduleOutputReference = exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference = exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference = exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference = exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference = exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference = exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference = exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference = exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference = exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsForensicCopyOutputReference = exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsEgressOutputReference = exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference = exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List = exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference = exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List = exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference = exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference = exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference = exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference = exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference = exports.DataCloudflareZeroTrustGatewayPolicyExpirationOutputReference = void 0;
exports.dataCloudflareZeroTrustGatewayPolicyExpirationToTerraform = dataCloudflareZeroTrustGatewayPolicyExpirationToTerraform;
exports.dataCloudflareZeroTrustGatewayPolicyExpirationToHclTerraform = dataCloudflareZeroTrustGatewayPolicyExpirationToHclTerraform;
exports.dataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSshToTerraform = dataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSshToTerraform;
exports.dataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSshToHclTerraform = dataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSshToHclTerraform;
exports.dataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsToTerraform = dataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsToTerraform;
exports.dataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsToHclTerraform = dataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsToHclTerraform;
exports.dataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPageToTerraform = dataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPageToTerraform;
exports.dataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPageToHclTerraform = dataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPageToHclTerraform;
exports.dataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSessionToTerraform = dataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSessionToTerraform;
exports.dataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSessionToHclTerraform = dataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSessionToHclTerraform;
exports.dataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4ToTerraform = dataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4ToTerraform;
exports.dataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4ToHclTerraform = dataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4ToHclTerraform;
exports.dataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6ToTerraform = dataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6ToTerraform;
exports.dataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6ToHclTerraform = dataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6ToHclTerraform;
exports.dataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversToTerraform = dataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversToTerraform;
exports.dataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversToHclTerraform = dataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversToHclTerraform;
exports.dataCloudflareZeroTrustGatewayPolicyRuleSettingsEgressToTerraform = dataCloudflareZeroTrustGatewayPolicyRuleSettingsEgressToTerraform;
exports.dataCloudflareZeroTrustGatewayPolicyRuleSettingsEgressToHclTerraform = dataCloudflareZeroTrustGatewayPolicyRuleSettingsEgressToHclTerraform;
exports.dataCloudflareZeroTrustGatewayPolicyRuleSettingsForensicCopyToTerraform = dataCloudflareZeroTrustGatewayPolicyRuleSettingsForensicCopyToTerraform;
exports.dataCloudflareZeroTrustGatewayPolicyRuleSettingsForensicCopyToHclTerraform = dataCloudflareZeroTrustGatewayPolicyRuleSettingsForensicCopyToHclTerraform;
exports.dataCloudflareZeroTrustGatewayPolicyRuleSettingsL4OverrideToTerraform = dataCloudflareZeroTrustGatewayPolicyRuleSettingsL4OverrideToTerraform;
exports.dataCloudflareZeroTrustGatewayPolicyRuleSettingsL4OverrideToHclTerraform = dataCloudflareZeroTrustGatewayPolicyRuleSettingsL4OverrideToHclTerraform;
exports.dataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettingsToTerraform = dataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettingsToTerraform;
exports.dataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettingsToHclTerraform = dataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettingsToHclTerraform;
exports.dataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLogToTerraform = dataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLogToTerraform;
exports.dataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLogToHclTerraform = dataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLogToHclTerraform;
exports.dataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantineToTerraform = dataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantineToTerraform;
exports.dataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantineToHclTerraform = dataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantineToHclTerraform;
exports.dataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirectToTerraform = dataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirectToTerraform;
exports.dataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirectToHclTerraform = dataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirectToHclTerraform;
exports.dataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyToTerraform = dataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyToTerraform;
exports.dataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyToHclTerraform = dataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyToHclTerraform;
exports.dataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCertToTerraform = dataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCertToTerraform;
exports.dataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCertToHclTerraform = dataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCertToHclTerraform;
exports.dataCloudflareZeroTrustGatewayPolicyRuleSettingsToTerraform = dataCloudflareZeroTrustGatewayPolicyRuleSettingsToTerraform;
exports.dataCloudflareZeroTrustGatewayPolicyRuleSettingsToHclTerraform = dataCloudflareZeroTrustGatewayPolicyRuleSettingsToHclTerraform;
exports.dataCloudflareZeroTrustGatewayPolicyScheduleToTerraform = dataCloudflareZeroTrustGatewayPolicyScheduleToTerraform;
exports.dataCloudflareZeroTrustGatewayPolicyScheduleToHclTerraform = dataCloudflareZeroTrustGatewayPolicyScheduleToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustGatewayPolicyExpirationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPolicyExpirationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPolicyExpirationOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPolicyExpirationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayPolicyExpirationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyExpirationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyExpirationOutputReference.prototype, "duration", {
        // duration - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('duration');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyExpirationOutputReference.prototype, "expired", {
        // expired - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('expired');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyExpirationOutputReference.prototype, "expiresAt", {
        // expires_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expires_at');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPolicyExpirationOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPolicyExpirationOutputReference = DataCloudflareZeroTrustGatewayPolicyExpirationOutputReference;
function dataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSshToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSshToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.prototype, "commandLogging", {
        // command_logging - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('command_logging');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference = DataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference;
function dataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "copy", {
        // copy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('copy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "dcp", {
        // dcp - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('dcp');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "dd", {
        // dd - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('dd');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "dk", {
        // dk - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('dk');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "download", {
        // download - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('download');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "dp", {
        // dp - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('dp');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "du", {
        // du - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('du');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "keyboard", {
        // keyboard - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('keyboard');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "paste", {
        // paste - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('paste');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "printing", {
        // printing - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('printing');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "upload", {
        // upload - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('upload');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.prototype, "wmId", {
        // wm_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('wm_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference = DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference;
function dataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPageToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPageToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.prototype, "includeContext", {
        // include_context - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('include_context');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.prototype, "targetUri", {
        // target_uri - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('target_uri');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference = DataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference;
function dataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSessionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSessionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.prototype, "duration", {
        // duration - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('duration');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.prototype, "enforce", {
        // enforce - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enforce');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference = DataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference;
function dataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.prototype, "ip", {
        // ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.prototype, "routeThroughPrivateNetwork", {
        // route_through_private_network - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('route_through_private_network');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.prototype, "vnetId", {
        // vnet_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vnet_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference = DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference;
var DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.prototype.get = function (index) {
        return new DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List = DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List;
function dataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.prototype, "ip", {
        // ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.prototype, "routeThroughPrivateNetwork", {
        // route_through_private_network - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('route_through_private_network');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.prototype, "vnetId", {
        // vnet_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vnet_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference = DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference;
var DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.prototype.get = function (index) {
        return new DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List = DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List;
function dataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // ipv4 - computed: true, optional: false, required: false
        _this._ipv4 = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List(_this, "ipv4", false);
        // ipv6 - computed: true, optional: false, required: false
        _this._ipv6 = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List(_this, "ipv6", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.prototype, "ipv4", {
        get: function () {
            return this._ipv4;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.prototype, "ipv6", {
        get: function () {
            return this._ipv6;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference = DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference;
function dataCloudflareZeroTrustGatewayPolicyRuleSettingsEgressToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPolicyRuleSettingsEgressToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPolicyRuleSettingsEgressOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPolicyRuleSettingsEgressOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayPolicyRuleSettingsEgressOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.prototype, "ipv4", {
        // ipv4 - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ipv4');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.prototype, "ipv4Fallback", {
        // ipv4_fallback - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ipv4_fallback');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.prototype, "ipv6", {
        // ipv6 - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ipv6');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPolicyRuleSettingsEgressOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsEgressOutputReference = DataCloudflareZeroTrustGatewayPolicyRuleSettingsEgressOutputReference;
function dataCloudflareZeroTrustGatewayPolicyRuleSettingsForensicCopyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPolicyRuleSettingsForensicCopyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPolicyRuleSettingsForensicCopyOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPolicyRuleSettingsForensicCopyOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayPolicyRuleSettingsForensicCopyOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsForensicCopyOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsForensicCopyOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPolicyRuleSettingsForensicCopyOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsForensicCopyOutputReference = DataCloudflareZeroTrustGatewayPolicyRuleSettingsForensicCopyOutputReference;
function dataCloudflareZeroTrustGatewayPolicyRuleSettingsL4OverrideToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPolicyRuleSettingsL4OverrideToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.prototype, "ip", {
        // ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference = DataCloudflareZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference;
function dataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.prototype, "includeContext", {
        // include_context - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('include_context');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.prototype, "msg", {
        // msg - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('msg');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.prototype, "supportUrl", {
        // support_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('support_url');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference = DataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference;
function dataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLogToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLogToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference = DataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference;
function dataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantineToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantineToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.prototype, "fileTypes", {
        // file_types - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('file_types');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference = DataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference;
function dataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirectToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirectToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.prototype, "includeContext", {
        // include_context - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('include_context');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.prototype, "preservePathAndQuery", {
        // preserve_path_and_query - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('preserve_path_and_query');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.prototype, "targetUri", {
        // target_uri - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('target_uri');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference = DataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference;
function dataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.prototype, "fallback", {
        // fallback - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('fallback');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.prototype, "viewId", {
        // view_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('view_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference = DataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference;
function dataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCertToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCertToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.prototype, "action", {
        // action - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('action');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference = DataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference;
function dataCloudflareZeroTrustGatewayPolicyRuleSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPolicyRuleSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // add_headers - computed: true, optional: false, required: false
        _this._addHeaders = new cdktf.StringListMap(_this, "add_headers");
        // audit_ssh - computed: true, optional: false, required: false
        _this._auditSsh = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference(_this, "audit_ssh");
        // biso_admin_controls - computed: true, optional: false, required: false
        _this._bisoAdminControls = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference(_this, "biso_admin_controls");
        // block_page - computed: true, optional: false, required: false
        _this._blockPage = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference(_this, "block_page");
        // check_session - computed: true, optional: false, required: false
        _this._checkSession = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference(_this, "check_session");
        // dns_resolvers - computed: true, optional: false, required: false
        _this._dnsResolvers = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference(_this, "dns_resolvers");
        // egress - computed: true, optional: false, required: false
        _this._egress = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsEgressOutputReference(_this, "egress");
        // forensic_copy - computed: true, optional: false, required: false
        _this._forensicCopy = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsForensicCopyOutputReference(_this, "forensic_copy");
        // l4override - computed: true, optional: false, required: false
        _this._l4Override = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference(_this, "l4override");
        // notification_settings - computed: true, optional: false, required: false
        _this._notificationSettings = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference(_this, "notification_settings");
        // payload_log - computed: true, optional: false, required: false
        _this._payloadLog = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference(_this, "payload_log");
        // quarantine - computed: true, optional: false, required: false
        _this._quarantine = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference(_this, "quarantine");
        // redirect - computed: true, optional: false, required: false
        _this._redirect = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference(_this, "redirect");
        // resolve_dns_internally - computed: true, optional: false, required: false
        _this._resolveDnsInternally = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference(_this, "resolve_dns_internally");
        // untrusted_cert - computed: true, optional: false, required: false
        _this._untrustedCert = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference(_this, "untrusted_cert");
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "addHeaders", {
        get: function () {
            return this._addHeaders;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "allowChildBypass", {
        // allow_child_bypass - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('allow_child_bypass');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "auditSsh", {
        get: function () {
            return this._auditSsh;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "bisoAdminControls", {
        get: function () {
            return this._bisoAdminControls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "blockPage", {
        get: function () {
            return this._blockPage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "blockPageEnabled", {
        // block_page_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('block_page_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "blockReason", {
        // block_reason - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('block_reason');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "bypassParentRule", {
        // bypass_parent_rule - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('bypass_parent_rule');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "checkSession", {
        get: function () {
            return this._checkSession;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "dnsResolvers", {
        get: function () {
            return this._dnsResolvers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "egress", {
        get: function () {
            return this._egress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "forensicCopy", {
        get: function () {
            return this._forensicCopy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "ignoreCnameCategoryMatches", {
        // ignore_cname_category_matches - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ignore_cname_category_matches');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "insecureDisableDnssecValidation", {
        // insecure_disable_dnssec_validation - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('insecure_disable_dnssec_validation');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "ipCategories", {
        // ip_categories - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ip_categories');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "ipIndicatorFeeds", {
        // ip_indicator_feeds - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ip_indicator_feeds');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "l4Override", {
        get: function () {
            return this._l4Override;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "notificationSettings", {
        get: function () {
            return this._notificationSettings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "overrideHost", {
        // override_host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('override_host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "overrideIps", {
        // override_ips - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('override_ips');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "payloadLog", {
        get: function () {
            return this._payloadLog;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "quarantine", {
        get: function () {
            return this._quarantine;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "redirect", {
        get: function () {
            return this._redirect;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "resolveDnsInternally", {
        get: function () {
            return this._resolveDnsInternally;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "resolveDnsThroughCloudflare", {
        // resolve_dns_through_cloudflare - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('resolve_dns_through_cloudflare');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference.prototype, "untrustedCert", {
        get: function () {
            return this._untrustedCert;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference = DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference;
function dataCloudflareZeroTrustGatewayPolicyScheduleToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPolicyScheduleToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPolicyScheduleOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPolicyScheduleOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayPolicyScheduleOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyScheduleOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyScheduleOutputReference.prototype, "fri", {
        // fri - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('fri');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyScheduleOutputReference.prototype, "mon", {
        // mon - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mon');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyScheduleOutputReference.prototype, "sat", {
        // sat - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sat');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyScheduleOutputReference.prototype, "sun", {
        // sun - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sun');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyScheduleOutputReference.prototype, "thu", {
        // thu - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('thu');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyScheduleOutputReference.prototype, "timeZone", {
        // time_zone - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('time_zone');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyScheduleOutputReference.prototype, "tue", {
        // tue - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tue');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicyScheduleOutputReference.prototype, "wed", {
        // wed - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('wed');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPolicyScheduleOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPolicyScheduleOutputReference = DataCloudflareZeroTrustGatewayPolicyScheduleOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_policy cloudflare_zero_trust_gateway_policy}
*/
var DataCloudflareZeroTrustGatewayPolicy = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_policy cloudflare_zero_trust_gateway_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustGatewayPolicyConfig
    */
    function DataCloudflareZeroTrustGatewayPolicy(scope, id, config) {
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
        // expiration - computed: true, optional: false, required: false
        _this._expiration = new DataCloudflareZeroTrustGatewayPolicyExpirationOutputReference(_this, "expiration");
        // rule_settings - computed: true, optional: false, required: false
        _this._ruleSettings = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference(_this, "rule_settings");
        // schedule - computed: true, optional: false, required: false
        _this._schedule = new DataCloudflareZeroTrustGatewayPolicyScheduleOutputReference(_this, "schedule");
        _this._accountId = config.accountId;
        _this._ruleId = config.ruleId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustGatewayPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustGatewayPolicy to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustGatewayPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustGatewayPolicy to import is found
    */
    DataCloudflareZeroTrustGatewayPolicy.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_gateway_policy", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicy.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustGatewayPolicy.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicy.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicy.prototype, "action", {
        // action - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('action');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicy.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicy.prototype, "deletedAt", {
        // deleted_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('deleted_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicy.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicy.prototype, "devicePosture", {
        // device_posture - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('device_posture');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicy.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicy.prototype, "expiration", {
        get: function () {
            return this._expiration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicy.prototype, "filters", {
        // filters - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('filters');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicy.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicy.prototype, "identity", {
        // identity - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('identity');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicy.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicy.prototype, "precedence", {
        // precedence - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('precedence');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicy.prototype, "readOnly", {
        // read_only - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read_only');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicy.prototype, "ruleId", {
        get: function () {
            return this.getStringAttribute('rule_id');
        },
        set: function (value) {
            this._ruleId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicy.prototype, "ruleIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ruleId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicy.prototype, "ruleSettings", {
        get: function () {
            return this._ruleSettings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicy.prototype, "schedule", {
        get: function () {
            return this._schedule;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicy.prototype, "sharable", {
        // sharable - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('sharable');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicy.prototype, "sourceAccount", {
        // source_account - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source_account');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicy.prototype, "traffic", {
        // traffic - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('traffic');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicy.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicy.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicy.prototype, "warningStatus", {
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
    DataCloudflareZeroTrustGatewayPolicy.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            rule_id: cdktf.stringToTerraform(this._ruleId),
        };
    };
    DataCloudflareZeroTrustGatewayPolicy.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rule_id: {
                value: cdktf.stringToHclTerraform(this._ruleId),
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
    DataCloudflareZeroTrustGatewayPolicy.tfResourceType = "cloudflare_zero_trust_gateway_policy";
    return DataCloudflareZeroTrustGatewayPolicy;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustGatewayPolicy = DataCloudflareZeroTrustGatewayPolicy;
