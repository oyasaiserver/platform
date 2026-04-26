"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_posture_integration
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
exports.DataCloudflareZeroTrustDevicePostureIntegration = exports.DataCloudflareZeroTrustDevicePostureIntegrationConfigAOutputReference = void 0;
exports.dataCloudflareZeroTrustDevicePostureIntegrationConfigAToTerraform = dataCloudflareZeroTrustDevicePostureIntegrationConfigAToTerraform;
exports.dataCloudflareZeroTrustDevicePostureIntegrationConfigAToHclTerraform = dataCloudflareZeroTrustDevicePostureIntegrationConfigAToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustDevicePostureIntegrationConfigAToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDevicePostureIntegrationConfigAToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDevicePostureIntegrationConfigAOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDevicePostureIntegrationConfigAOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDevicePostureIntegrationConfigAOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureIntegrationConfigAOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureIntegrationConfigAOutputReference.prototype, "apiUrl", {
        // api_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('api_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureIntegrationConfigAOutputReference.prototype, "authUrl", {
        // auth_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('auth_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureIntegrationConfigAOutputReference.prototype, "clientId", {
        // client_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('client_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDevicePostureIntegrationConfigAOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDevicePostureIntegrationConfigAOutputReference = DataCloudflareZeroTrustDevicePostureIntegrationConfigAOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_posture_integration cloudflare_zero_trust_device_posture_integration}
*/
var DataCloudflareZeroTrustDevicePostureIntegration = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDevicePostureIntegration, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_posture_integration cloudflare_zero_trust_device_posture_integration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDevicePostureIntegrationConfig
    */
    function DataCloudflareZeroTrustDevicePostureIntegration(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_device_posture_integration',
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
        // config - computed: true, optional: false, required: false
        _this._config = new DataCloudflareZeroTrustDevicePostureIntegrationConfigAOutputReference(_this, "config");
        _this._accountId = config.accountId;
        _this._integrationId = config.integrationId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDevicePostureIntegration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDevicePostureIntegration to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDevicePostureIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_posture_integration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDevicePostureIntegration to import is found
    */
    DataCloudflareZeroTrustDevicePostureIntegration.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_device_posture_integration", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureIntegration.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDevicePostureIntegration.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureIntegration.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureIntegration.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureIntegration.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureIntegration.prototype, "integrationId", {
        get: function () {
            return this.getStringAttribute('integration_id');
        },
        set: function (value) {
            this._integrationId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureIntegration.prototype, "integrationIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._integrationId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureIntegration.prototype, "interval", {
        // interval - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('interval');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureIntegration.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureIntegration.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustDevicePostureIntegration.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            integration_id: cdktf.stringToTerraform(this._integrationId),
        };
    };
    DataCloudflareZeroTrustDevicePostureIntegration.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            integration_id: {
                value: cdktf.stringToHclTerraform(this._integrationId),
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
    DataCloudflareZeroTrustDevicePostureIntegration.tfResourceType = "cloudflare_zero_trust_device_posture_integration";
    return DataCloudflareZeroTrustDevicePostureIntegration;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustDevicePostureIntegration = DataCloudflareZeroTrustDevicePostureIntegration;
