"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_policies
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
exports.DataCloudflareZeroTrustGatewayPolicies = exports.DataCloudflareZeroTrustGatewayPoliciesResultList = exports.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference = exports.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference = exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference = exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference = exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference = exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference = exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference = exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference = exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference = exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference = exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsForensicCopyOutputReference = exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference = exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference = exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List = exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference = exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List = exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference = exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference = exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference = exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference = exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference = exports.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference = void 0;
exports.dataCloudflareZeroTrustGatewayPoliciesResultExpirationToTerraform = dataCloudflareZeroTrustGatewayPoliciesResultExpirationToTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultExpirationToHclTerraform = dataCloudflareZeroTrustGatewayPoliciesResultExpirationToHclTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshToTerraform = dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshToTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshToHclTerraform = dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshToHclTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsToTerraform = dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsToTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsToHclTerraform = dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsToHclTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageToTerraform = dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageToTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageToHclTerraform = dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageToHclTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionToTerraform = dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionToTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionToHclTerraform = dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionToHclTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4ToTerraform = dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4ToTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4ToHclTerraform = dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4ToHclTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6ToTerraform = dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6ToTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6ToHclTerraform = dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6ToHclTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversToTerraform = dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversToTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversToHclTerraform = dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversToHclTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressToTerraform = dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressToTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressToHclTerraform = dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressToHclTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsForensicCopyToTerraform = dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsForensicCopyToTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsForensicCopyToHclTerraform = dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsForensicCopyToHclTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideToTerraform = dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideToTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideToHclTerraform = dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideToHclTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsToTerraform = dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsToTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsToHclTerraform = dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsToHclTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogToTerraform = dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogToTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogToHclTerraform = dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogToHclTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineToTerraform = dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineToTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineToHclTerraform = dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineToHclTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectToTerraform = dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectToTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectToHclTerraform = dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectToHclTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyToTerraform = dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyToTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyToHclTerraform = dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyToHclTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertToTerraform = dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertToTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertToHclTerraform = dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertToHclTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsToTerraform = dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsToTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsToHclTerraform = dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsToHclTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultScheduleToTerraform = dataCloudflareZeroTrustGatewayPoliciesResultScheduleToTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultScheduleToHclTerraform = dataCloudflareZeroTrustGatewayPoliciesResultScheduleToHclTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultToTerraform = dataCloudflareZeroTrustGatewayPoliciesResultToTerraform;
exports.dataCloudflareZeroTrustGatewayPoliciesResultToHclTerraform = dataCloudflareZeroTrustGatewayPoliciesResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustGatewayPoliciesResultExpirationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPoliciesResultExpirationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.prototype, "duration", {
        // duration - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('duration');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.prototype, "expired", {
        // expired - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('expired');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.prototype, "expiresAt", {
        // expires_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expires_at');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference = DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference;
function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.prototype, "commandLogging", {
        // command_logging - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('command_logging');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference = DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference;
function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.prototype, "copy", {
        // copy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('copy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.prototype, "dcp", {
        // dcp - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('dcp');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.prototype, "dd", {
        // dd - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('dd');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.prototype, "dk", {
        // dk - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('dk');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.prototype, "download", {
        // download - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('download');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.prototype, "dp", {
        // dp - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('dp');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.prototype, "du", {
        // du - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('du');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.prototype, "keyboard", {
        // keyboard - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('keyboard');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.prototype, "paste", {
        // paste - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('paste');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.prototype, "printing", {
        // printing - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('printing');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.prototype, "upload", {
        // upload - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('upload');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.prototype, "wmId", {
        // wm_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('wm_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference = DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference;
function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.prototype, "includeContext", {
        // include_context - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('include_context');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.prototype, "targetUri", {
        // target_uri - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('target_uri');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference = DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference;
function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.prototype, "duration", {
        // duration - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('duration');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.prototype, "enforce", {
        // enforce - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enforce');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference = DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference;
function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.prototype, "ip", {
        // ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.prototype, "routeThroughPrivateNetwork", {
        // route_through_private_network - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('route_through_private_network');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.prototype, "vnetId", {
        // vnet_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vnet_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference = DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference;
var DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List.prototype.get = function (index) {
        return new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List = DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List;
function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.prototype, "ip", {
        // ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.prototype, "routeThroughPrivateNetwork", {
        // route_through_private_network - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('route_through_private_network');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.prototype, "vnetId", {
        // vnet_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vnet_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference = DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference;
var DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List.prototype.get = function (index) {
        return new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List = DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List;
function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // ipv4 - computed: true, optional: false, required: false
        _this._ipv4 = new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List(_this, "ipv4", false);
        // ipv6 - computed: true, optional: false, required: false
        _this._ipv6 = new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List(_this, "ipv6", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.prototype, "ipv4", {
        get: function () {
            return this._ipv4;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.prototype, "ipv6", {
        get: function () {
            return this._ipv6;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference = DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference;
function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.prototype, "ipv4", {
        // ipv4 - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ipv4');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.prototype, "ipv4Fallback", {
        // ipv4_fallback - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ipv4_fallback');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.prototype, "ipv6", {
        // ipv6 - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ipv6');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference = DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference;
function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsForensicCopyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsForensicCopyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsForensicCopyOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsForensicCopyOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsForensicCopyOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsForensicCopyOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsForensicCopyOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsForensicCopyOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsForensicCopyOutputReference = DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsForensicCopyOutputReference;
function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.prototype, "ip", {
        // ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference = DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference;
function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.prototype, "includeContext", {
        // include_context - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('include_context');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.prototype, "msg", {
        // msg - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('msg');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.prototype, "supportUrl", {
        // support_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('support_url');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference = DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference;
function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference = DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference;
function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.prototype, "fileTypes", {
        // file_types - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('file_types');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference = DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference;
function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.prototype, "includeContext", {
        // include_context - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('include_context');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.prototype, "preservePathAndQuery", {
        // preserve_path_and_query - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('preserve_path_and_query');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.prototype, "targetUri", {
        // target_uri - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('target_uri');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference = DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference;
function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.prototype, "fallback", {
        // fallback - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('fallback');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.prototype, "viewId", {
        // view_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('view_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference = DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference;
function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.prototype, "action", {
        // action - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('action');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference = DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference;
function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // add_headers - computed: true, optional: false, required: false
        _this._addHeaders = new cdktf.StringListMap(_this, "add_headers");
        // audit_ssh - computed: true, optional: false, required: false
        _this._auditSsh = new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference(_this, "audit_ssh");
        // biso_admin_controls - computed: true, optional: false, required: false
        _this._bisoAdminControls = new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference(_this, "biso_admin_controls");
        // block_page - computed: true, optional: false, required: false
        _this._blockPage = new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference(_this, "block_page");
        // check_session - computed: true, optional: false, required: false
        _this._checkSession = new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference(_this, "check_session");
        // dns_resolvers - computed: true, optional: false, required: false
        _this._dnsResolvers = new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference(_this, "dns_resolvers");
        // egress - computed: true, optional: false, required: false
        _this._egress = new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference(_this, "egress");
        // forensic_copy - computed: true, optional: false, required: false
        _this._forensicCopy = new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsForensicCopyOutputReference(_this, "forensic_copy");
        // l4override - computed: true, optional: false, required: false
        _this._l4Override = new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference(_this, "l4override");
        // notification_settings - computed: true, optional: false, required: false
        _this._notificationSettings = new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference(_this, "notification_settings");
        // payload_log - computed: true, optional: false, required: false
        _this._payloadLog = new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference(_this, "payload_log");
        // quarantine - computed: true, optional: false, required: false
        _this._quarantine = new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference(_this, "quarantine");
        // redirect - computed: true, optional: false, required: false
        _this._redirect = new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference(_this, "redirect");
        // resolve_dns_internally - computed: true, optional: false, required: false
        _this._resolveDnsInternally = new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference(_this, "resolve_dns_internally");
        // untrusted_cert - computed: true, optional: false, required: false
        _this._untrustedCert = new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference(_this, "untrusted_cert");
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.prototype, "addHeaders", {
        get: function () {
            return this._addHeaders;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.prototype, "allowChildBypass", {
        // allow_child_bypass - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('allow_child_bypass');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.prototype, "auditSsh", {
        get: function () {
            return this._auditSsh;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.prototype, "bisoAdminControls", {
        get: function () {
            return this._bisoAdminControls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.prototype, "blockPage", {
        get: function () {
            return this._blockPage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.prototype, "blockPageEnabled", {
        // block_page_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('block_page_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.prototype, "blockReason", {
        // block_reason - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('block_reason');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.prototype, "bypassParentRule", {
        // bypass_parent_rule - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('bypass_parent_rule');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.prototype, "checkSession", {
        get: function () {
            return this._checkSession;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.prototype, "dnsResolvers", {
        get: function () {
            return this._dnsResolvers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.prototype, "egress", {
        get: function () {
            return this._egress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.prototype, "forensicCopy", {
        get: function () {
            return this._forensicCopy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.prototype, "ignoreCnameCategoryMatches", {
        // ignore_cname_category_matches - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ignore_cname_category_matches');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.prototype, "insecureDisableDnssecValidation", {
        // insecure_disable_dnssec_validation - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('insecure_disable_dnssec_validation');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.prototype, "ipCategories", {
        // ip_categories - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ip_categories');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.prototype, "ipIndicatorFeeds", {
        // ip_indicator_feeds - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ip_indicator_feeds');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.prototype, "l4Override", {
        get: function () {
            return this._l4Override;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.prototype, "notificationSettings", {
        get: function () {
            return this._notificationSettings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.prototype, "overrideHost", {
        // override_host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('override_host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.prototype, "overrideIps", {
        // override_ips - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('override_ips');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.prototype, "payloadLog", {
        get: function () {
            return this._payloadLog;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.prototype, "quarantine", {
        get: function () {
            return this._quarantine;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.prototype, "redirect", {
        get: function () {
            return this._redirect;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.prototype, "resolveDnsInternally", {
        get: function () {
            return this._resolveDnsInternally;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.prototype, "resolveDnsThroughCloudflare", {
        // resolve_dns_through_cloudflare - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('resolve_dns_through_cloudflare');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.prototype, "untrustedCert", {
        get: function () {
            return this._untrustedCert;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference = DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference;
function dataCloudflareZeroTrustGatewayPoliciesResultScheduleToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPoliciesResultScheduleToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.prototype, "fri", {
        // fri - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('fri');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.prototype, "mon", {
        // mon - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mon');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.prototype, "sat", {
        // sat - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sat');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.prototype, "sun", {
        // sun - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sun');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.prototype, "thu", {
        // thu - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('thu');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.prototype, "timeZone", {
        // time_zone - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('time_zone');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.prototype, "tue", {
        // tue - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tue');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.prototype, "wed", {
        // wed - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('wed');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference = DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference;
function dataCloudflareZeroTrustGatewayPoliciesResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayPoliciesResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayPoliciesResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPoliciesResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustGatewayPoliciesResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // expiration - computed: true, optional: false, required: false
        _this._expiration = new DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference(_this, "expiration");
        // rule_settings - computed: true, optional: false, required: false
        _this._ruleSettings = new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference(_this, "rule_settings");
        // schedule - computed: true, optional: false, required: false
        _this._schedule = new DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference(_this, "schedule");
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.prototype, "action", {
        // action - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('action');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.prototype, "deletedAt", {
        // deleted_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('deleted_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.prototype, "devicePosture", {
        // device_posture - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('device_posture');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.prototype, "expiration", {
        get: function () {
            return this._expiration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.prototype, "filters", {
        // filters - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('filters');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.prototype, "identity", {
        // identity - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('identity');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.prototype, "precedence", {
        // precedence - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('precedence');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.prototype, "readOnly", {
        // read_only - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read_only');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.prototype, "ruleSettings", {
        get: function () {
            return this._ruleSettings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.prototype, "schedule", {
        get: function () {
            return this._schedule;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.prototype, "sharable", {
        // sharable - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('sharable');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.prototype, "sourceAccount", {
        // source_account - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source_account');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.prototype, "traffic", {
        // traffic - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('traffic');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.prototype, "warningStatus", {
        // warning_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('warning_status');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayPoliciesResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference = DataCloudflareZeroTrustGatewayPoliciesResultOutputReference;
var DataCloudflareZeroTrustGatewayPoliciesResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPoliciesResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustGatewayPoliciesResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustGatewayPoliciesResultList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustGatewayPoliciesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustGatewayPoliciesResultList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustGatewayPoliciesResultList = DataCloudflareZeroTrustGatewayPoliciesResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_policies cloudflare_zero_trust_gateway_policies}
*/
var DataCloudflareZeroTrustGatewayPolicies = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayPolicies, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_policies cloudflare_zero_trust_gateway_policies} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustGatewayPoliciesConfig = {}
    */
    function DataCloudflareZeroTrustGatewayPolicies(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_gateway_policies',
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
        _this._result = new DataCloudflareZeroTrustGatewayPoliciesResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustGatewayPolicies resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustGatewayPolicies to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustGatewayPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_policies#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustGatewayPolicies to import is found
    */
    DataCloudflareZeroTrustGatewayPolicies.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_gateway_policies", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicies.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustGatewayPolicies.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicies.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicies.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustGatewayPolicies.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicies.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayPolicies.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustGatewayPolicies.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
        };
    };
    DataCloudflareZeroTrustGatewayPolicies.prototype.synthesizeHclAttributes = function () {
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
    DataCloudflareZeroTrustGatewayPolicies.tfResourceType = "cloudflare_zero_trust_gateway_policies";
    return DataCloudflareZeroTrustGatewayPolicies;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustGatewayPolicies = DataCloudflareZeroTrustGatewayPolicies;
