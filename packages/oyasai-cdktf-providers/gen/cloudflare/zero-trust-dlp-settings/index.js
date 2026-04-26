"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_settings
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
exports.ZeroTrustDlpSettings = exports.ZeroTrustDlpSettingsPayloadLoggingOutputReference = void 0;
exports.zeroTrustDlpSettingsPayloadLoggingToTerraform = zeroTrustDlpSettingsPayloadLoggingToTerraform;
exports.zeroTrustDlpSettingsPayloadLoggingToHclTerraform = zeroTrustDlpSettingsPayloadLoggingToHclTerraform;
var cdktf = require("cdktf");
function zeroTrustDlpSettingsPayloadLoggingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        masking_level: cdktf.stringToTerraform(struct.maskingLevel),
        public_key: cdktf.stringToTerraform(struct.publicKey),
    };
}
function zeroTrustDlpSettingsPayloadLoggingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        masking_level: {
            value: cdktf.stringToHclTerraform(struct.maskingLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        public_key: {
            value: cdktf.stringToHclTerraform(struct.publicKey),
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
var ZeroTrustDlpSettingsPayloadLoggingOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDlpSettingsPayloadLoggingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustDlpSettingsPayloadLoggingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDlpSettingsPayloadLoggingOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._maskingLevel !== undefined) {
                hasAnyValues = true;
                internalValueResult.maskingLevel = this._maskingLevel;
            }
            if (this._publicKey !== undefined) {
                hasAnyValues = true;
                internalValueResult.publicKey = this._publicKey;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._maskingLevel = undefined;
                this._publicKey = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._maskingLevel = value.maskingLevel;
                this._publicKey = value.publicKey;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpSettingsPayloadLoggingOutputReference.prototype, "maskingLevel", {
        get: function () {
            return this.getStringAttribute('masking_level');
        },
        set: function (value) {
            this._maskingLevel = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpSettingsPayloadLoggingOutputReference.prototype.resetMaskingLevel = function () {
        this._maskingLevel = undefined;
    };
    Object.defineProperty(ZeroTrustDlpSettingsPayloadLoggingOutputReference.prototype, "maskingLevelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maskingLevel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpSettingsPayloadLoggingOutputReference.prototype, "publicKey", {
        get: function () {
            return this.getStringAttribute('public_key');
        },
        set: function (value) {
            this._publicKey = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpSettingsPayloadLoggingOutputReference.prototype.resetPublicKey = function () {
        this._publicKey = undefined;
    };
    Object.defineProperty(ZeroTrustDlpSettingsPayloadLoggingOutputReference.prototype, "publicKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._publicKey;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDlpSettingsPayloadLoggingOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDlpSettingsPayloadLoggingOutputReference = ZeroTrustDlpSettingsPayloadLoggingOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_settings cloudflare_zero_trust_dlp_settings}
*/
var ZeroTrustDlpSettings = /** @class */ (function (_super) {
    __extends(ZeroTrustDlpSettings, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_settings cloudflare_zero_trust_dlp_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDlpSettingsConfig
    */
    function ZeroTrustDlpSettings(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_dlp_settings',
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
        // payload_logging - computed: true, optional: true, required: false
        _this._payloadLogging = new ZeroTrustDlpSettingsPayloadLoggingOutputReference(_this, "payload_logging");
        _this._accountId = config.accountId;
        _this._aiContextAnalysis = config.aiContextAnalysis;
        _this._ocr = config.ocr;
        _this._payloadLogging.internalValue = config.payloadLogging;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustDlpSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDlpSettings to import
    * @param importFromId The id of the existing ZeroTrustDlpSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDlpSettings to import is found
    */
    ZeroTrustDlpSettings.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_dlp_settings", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZeroTrustDlpSettings.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpSettings.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpSettings.prototype, "aiContextAnalysis", {
        get: function () {
            return this.getBooleanAttribute('ai_context_analysis');
        },
        set: function (value) {
            this._aiContextAnalysis = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpSettings.prototype.resetAiContextAnalysis = function () {
        this._aiContextAnalysis = undefined;
    };
    Object.defineProperty(ZeroTrustDlpSettings.prototype, "aiContextAnalysisInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._aiContextAnalysis;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpSettings.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpSettings.prototype, "ocr", {
        get: function () {
            return this.getBooleanAttribute('ocr');
        },
        set: function (value) {
            this._ocr = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpSettings.prototype.resetOcr = function () {
        this._ocr = undefined;
    };
    Object.defineProperty(ZeroTrustDlpSettings.prototype, "ocrInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ocr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpSettings.prototype, "payloadLogging", {
        get: function () {
            return this._payloadLogging;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpSettings.prototype.putPayloadLogging = function (value) {
        this._payloadLogging.internalValue = value;
    };
    ZeroTrustDlpSettings.prototype.resetPayloadLogging = function () {
        this._payloadLogging.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustDlpSettings.prototype, "payloadLoggingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._payloadLogging.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ZeroTrustDlpSettings.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            ai_context_analysis: cdktf.booleanToTerraform(this._aiContextAnalysis),
            ocr: cdktf.booleanToTerraform(this._ocr),
            payload_logging: zeroTrustDlpSettingsPayloadLoggingToTerraform(this._payloadLogging.internalValue),
        };
    };
    ZeroTrustDlpSettings.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ai_context_analysis: {
                value: cdktf.booleanToHclTerraform(this._aiContextAnalysis),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            ocr: {
                value: cdktf.booleanToHclTerraform(this._ocr),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            payload_logging: {
                value: zeroTrustDlpSettingsPayloadLoggingToHclTerraform(this._payloadLogging.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustDlpSettingsPayloadLogging",
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
    ZeroTrustDlpSettings.tfResourceType = "cloudflare_zero_trust_dlp_settings";
    return ZeroTrustDlpSettings;
}(cdktf.TerraformResource));
exports.ZeroTrustDlpSettings = ZeroTrustDlpSettings;
