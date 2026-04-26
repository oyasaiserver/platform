"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_settings
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
exports.DataCloudflareZeroTrustDlpSettings = exports.DataCloudflareZeroTrustDlpSettingsPayloadLoggingOutputReference = void 0;
exports.dataCloudflareZeroTrustDlpSettingsPayloadLoggingToTerraform = dataCloudflareZeroTrustDlpSettingsPayloadLoggingToTerraform;
exports.dataCloudflareZeroTrustDlpSettingsPayloadLoggingToHclTerraform = dataCloudflareZeroTrustDlpSettingsPayloadLoggingToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustDlpSettingsPayloadLoggingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDlpSettingsPayloadLoggingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDlpSettingsPayloadLoggingOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpSettingsPayloadLoggingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDlpSettingsPayloadLoggingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDlpSettingsPayloadLoggingOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDlpSettingsPayloadLoggingOutputReference.prototype, "maskingLevel", {
        // masking_level - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('masking_level');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpSettingsPayloadLoggingOutputReference.prototype, "publicKey", {
        // public_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('public_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpSettingsPayloadLoggingOutputReference.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDlpSettingsPayloadLoggingOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDlpSettingsPayloadLoggingOutputReference = DataCloudflareZeroTrustDlpSettingsPayloadLoggingOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_settings cloudflare_zero_trust_dlp_settings}
*/
var DataCloudflareZeroTrustDlpSettings = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpSettings, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_settings cloudflare_zero_trust_dlp_settings} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDlpSettingsConfig
    */
    function DataCloudflareZeroTrustDlpSettings(scope, id, config) {
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
        // payload_logging - computed: true, optional: false, required: false
        _this._payloadLogging = new DataCloudflareZeroTrustDlpSettingsPayloadLoggingOutputReference(_this, "payload_logging");
        _this._accountId = config.accountId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDlpSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDlpSettings to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDlpSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDlpSettings to import is found
    */
    DataCloudflareZeroTrustDlpSettings.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_dlp_settings", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustDlpSettings.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpSettings.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpSettings.prototype, "aiContextAnalysis", {
        // ai_context_analysis - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ai_context_analysis');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpSettings.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpSettings.prototype, "ocr", {
        // ocr - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ocr');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpSettings.prototype, "payloadLogging", {
        get: function () {
            return this._payloadLogging;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustDlpSettings.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
        };
    };
    DataCloudflareZeroTrustDlpSettings.prototype.synthesizeHclAttributes = function () {
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
    DataCloudflareZeroTrustDlpSettings.tfResourceType = "cloudflare_zero_trust_dlp_settings";
    return DataCloudflareZeroTrustDlpSettings;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustDlpSettings = DataCloudflareZeroTrustDlpSettings;
