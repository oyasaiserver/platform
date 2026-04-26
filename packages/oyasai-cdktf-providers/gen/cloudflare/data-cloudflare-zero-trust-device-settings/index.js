"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_settings
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
exports.DataCloudflareZeroTrustDeviceSettings = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_settings cloudflare_zero_trust_device_settings}
*/
var DataCloudflareZeroTrustDeviceSettings = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceSettings, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_settings cloudflare_zero_trust_device_settings} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDeviceSettingsConfig = {}
    */
    function DataCloudflareZeroTrustDeviceSettings(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_device_settings',
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
        _this._accountId = config.accountId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDeviceSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDeviceSettings to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDeviceSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDeviceSettings to import is found
    */
    DataCloudflareZeroTrustDeviceSettings.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_device_settings", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustDeviceSettings.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDeviceSettings.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDeviceSettings.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceSettings.prototype, "disableForTime", {
        // disable_for_time - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('disable_for_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceSettings.prototype, "externalEmergencySignalEnabled", {
        // external_emergency_signal_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('external_emergency_signal_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceSettings.prototype, "externalEmergencySignalFingerprint", {
        // external_emergency_signal_fingerprint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('external_emergency_signal_fingerprint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceSettings.prototype, "externalEmergencySignalInterval", {
        // external_emergency_signal_interval - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('external_emergency_signal_interval');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceSettings.prototype, "externalEmergencySignalUrl", {
        // external_emergency_signal_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('external_emergency_signal_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceSettings.prototype, "gatewayProxyEnabled", {
        // gateway_proxy_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('gateway_proxy_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceSettings.prototype, "gatewayUdpProxyEnabled", {
        // gateway_udp_proxy_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('gateway_udp_proxy_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceSettings.prototype, "rootCertificateInstallationEnabled", {
        // root_certificate_installation_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('root_certificate_installation_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceSettings.prototype, "useZtVirtualIp", {
        // use_zt_virtual_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('use_zt_virtual_ip');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustDeviceSettings.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
        };
    };
    DataCloudflareZeroTrustDeviceSettings.prototype.synthesizeHclAttributes = function () {
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
    DataCloudflareZeroTrustDeviceSettings.tfResourceType = "cloudflare_zero_trust_device_settings";
    return DataCloudflareZeroTrustDeviceSettings;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustDeviceSettings = DataCloudflareZeroTrustDeviceSettings;
