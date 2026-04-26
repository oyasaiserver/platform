"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_integration
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
exports.ZeroTrustDevicePostureIntegration = exports.ZeroTrustDevicePostureIntegrationConfigAOutputReference = void 0;
exports.zeroTrustDevicePostureIntegrationConfigAToTerraform = zeroTrustDevicePostureIntegrationConfigAToTerraform;
exports.zeroTrustDevicePostureIntegrationConfigAToHclTerraform = zeroTrustDevicePostureIntegrationConfigAToHclTerraform;
var cdktf = require("cdktf");
function zeroTrustDevicePostureIntegrationConfigAToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_client_id: cdktf.stringToTerraform(struct.accessClientId),
        access_client_secret: cdktf.stringToTerraform(struct.accessClientSecret),
        api_url: cdktf.stringToTerraform(struct.apiUrl),
        auth_url: cdktf.stringToTerraform(struct.authUrl),
        client_id: cdktf.stringToTerraform(struct.clientId),
        client_key: cdktf.stringToTerraform(struct.clientKey),
        client_secret: cdktf.stringToTerraform(struct.clientSecret),
        customer_id: cdktf.stringToTerraform(struct.customerId),
    };
}
function zeroTrustDevicePostureIntegrationConfigAToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        access_client_id: {
            value: cdktf.stringToHclTerraform(struct.accessClientId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        access_client_secret: {
            value: cdktf.stringToHclTerraform(struct.accessClientSecret),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        api_url: {
            value: cdktf.stringToHclTerraform(struct.apiUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        auth_url: {
            value: cdktf.stringToHclTerraform(struct.authUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_id: {
            value: cdktf.stringToHclTerraform(struct.clientId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_key: {
            value: cdktf.stringToHclTerraform(struct.clientKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_secret: {
            value: cdktf.stringToHclTerraform(struct.clientSecret),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        customer_id: {
            value: cdktf.stringToHclTerraform(struct.customerId),
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
var ZeroTrustDevicePostureIntegrationConfigAOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDevicePostureIntegrationConfigAOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustDevicePostureIntegrationConfigAOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDevicePostureIntegrationConfigAOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._accessClientId !== undefined) {
                hasAnyValues = true;
                internalValueResult.accessClientId = this._accessClientId;
            }
            if (this._accessClientSecret !== undefined) {
                hasAnyValues = true;
                internalValueResult.accessClientSecret = this._accessClientSecret;
            }
            if (this._apiUrl !== undefined) {
                hasAnyValues = true;
                internalValueResult.apiUrl = this._apiUrl;
            }
            if (this._authUrl !== undefined) {
                hasAnyValues = true;
                internalValueResult.authUrl = this._authUrl;
            }
            if (this._clientId !== undefined) {
                hasAnyValues = true;
                internalValueResult.clientId = this._clientId;
            }
            if (this._clientKey !== undefined) {
                hasAnyValues = true;
                internalValueResult.clientKey = this._clientKey;
            }
            if (this._clientSecret !== undefined) {
                hasAnyValues = true;
                internalValueResult.clientSecret = this._clientSecret;
            }
            if (this._customerId !== undefined) {
                hasAnyValues = true;
                internalValueResult.customerId = this._customerId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._accessClientId = undefined;
                this._accessClientSecret = undefined;
                this._apiUrl = undefined;
                this._authUrl = undefined;
                this._clientId = undefined;
                this._clientKey = undefined;
                this._clientSecret = undefined;
                this._customerId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._accessClientId = value.accessClientId;
                this._accessClientSecret = value.accessClientSecret;
                this._apiUrl = value.apiUrl;
                this._authUrl = value.authUrl;
                this._clientId = value.clientId;
                this._clientKey = value.clientKey;
                this._clientSecret = value.clientSecret;
                this._customerId = value.customerId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureIntegrationConfigAOutputReference.prototype, "accessClientId", {
        get: function () {
            return this.getStringAttribute('access_client_id');
        },
        set: function (value) {
            this._accessClientId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureIntegrationConfigAOutputReference.prototype.resetAccessClientId = function () {
        this._accessClientId = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureIntegrationConfigAOutputReference.prototype, "accessClientIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessClientId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureIntegrationConfigAOutputReference.prototype, "accessClientSecret", {
        get: function () {
            return this.getStringAttribute('access_client_secret');
        },
        set: function (value) {
            this._accessClientSecret = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureIntegrationConfigAOutputReference.prototype.resetAccessClientSecret = function () {
        this._accessClientSecret = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureIntegrationConfigAOutputReference.prototype, "accessClientSecretInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessClientSecret;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureIntegrationConfigAOutputReference.prototype, "apiUrl", {
        get: function () {
            return this.getStringAttribute('api_url');
        },
        set: function (value) {
            this._apiUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureIntegrationConfigAOutputReference.prototype.resetApiUrl = function () {
        this._apiUrl = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureIntegrationConfigAOutputReference.prototype, "apiUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._apiUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureIntegrationConfigAOutputReference.prototype, "authUrl", {
        get: function () {
            return this.getStringAttribute('auth_url');
        },
        set: function (value) {
            this._authUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureIntegrationConfigAOutputReference.prototype.resetAuthUrl = function () {
        this._authUrl = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureIntegrationConfigAOutputReference.prototype, "authUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureIntegrationConfigAOutputReference.prototype, "clientId", {
        get: function () {
            return this.getStringAttribute('client_id');
        },
        set: function (value) {
            this._clientId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureIntegrationConfigAOutputReference.prototype.resetClientId = function () {
        this._clientId = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureIntegrationConfigAOutputReference.prototype, "clientIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clientId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureIntegrationConfigAOutputReference.prototype, "clientKey", {
        get: function () {
            return this.getStringAttribute('client_key');
        },
        set: function (value) {
            this._clientKey = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureIntegrationConfigAOutputReference.prototype.resetClientKey = function () {
        this._clientKey = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureIntegrationConfigAOutputReference.prototype, "clientKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clientKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureIntegrationConfigAOutputReference.prototype, "clientSecret", {
        get: function () {
            return this.getStringAttribute('client_secret');
        },
        set: function (value) {
            this._clientSecret = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureIntegrationConfigAOutputReference.prototype.resetClientSecret = function () {
        this._clientSecret = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureIntegrationConfigAOutputReference.prototype, "clientSecretInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clientSecret;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureIntegrationConfigAOutputReference.prototype, "customerId", {
        get: function () {
            return this.getStringAttribute('customer_id');
        },
        set: function (value) {
            this._customerId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureIntegrationConfigAOutputReference.prototype.resetCustomerId = function () {
        this._customerId = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureIntegrationConfigAOutputReference.prototype, "customerIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customerId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDevicePostureIntegrationConfigAOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDevicePostureIntegrationConfigAOutputReference = ZeroTrustDevicePostureIntegrationConfigAOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_integration cloudflare_zero_trust_device_posture_integration}
*/
var ZeroTrustDevicePostureIntegration = /** @class */ (function (_super) {
    __extends(ZeroTrustDevicePostureIntegration, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_integration cloudflare_zero_trust_device_posture_integration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDevicePostureIntegrationConfig
    */
    function ZeroTrustDevicePostureIntegration(scope, id, config) {
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
        // config - computed: false, optional: false, required: true
        _this._config = new ZeroTrustDevicePostureIntegrationConfigAOutputReference(_this, "config");
        _this._accountId = config.accountId;
        _this._config.internalValue = config.config;
        _this._interval = config.interval;
        _this._name = config.name;
        _this._type = config.type;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustDevicePostureIntegration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDevicePostureIntegration to import
    * @param importFromId The id of the existing ZeroTrustDevicePostureIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_integration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDevicePostureIntegration to import is found
    */
    ZeroTrustDevicePostureIntegration.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_device_posture_integration", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZeroTrustDevicePostureIntegration.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureIntegration.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(ZeroTrustDevicePostureIntegration.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureIntegration.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDevicePostureIntegration.prototype.putConfig = function (value) {
        this._config.internalValue = value;
    };
    Object.defineProperty(ZeroTrustDevicePostureIntegration.prototype, "configInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._config.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureIntegration.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureIntegration.prototype, "interval", {
        get: function () {
            return this.getStringAttribute('interval');
        },
        set: function (value) {
            this._interval = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureIntegration.prototype, "intervalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._interval;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureIntegration.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureIntegration.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureIntegration.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDevicePostureIntegration.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ZeroTrustDevicePostureIntegration.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            config: zeroTrustDevicePostureIntegrationConfigAToTerraform(this._config.internalValue),
            interval: cdktf.stringToTerraform(this._interval),
            name: cdktf.stringToTerraform(this._name),
            type: cdktf.stringToTerraform(this._type),
        };
    };
    ZeroTrustDevicePostureIntegration.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            config: {
                value: zeroTrustDevicePostureIntegrationConfigAToHclTerraform(this._config.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustDevicePostureIntegrationConfigA",
            },
            interval: {
                value: cdktf.stringToHclTerraform(this._interval),
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
            type: {
                value: cdktf.stringToHclTerraform(this._type),
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
    ZeroTrustDevicePostureIntegration.tfResourceType = "cloudflare_zero_trust_device_posture_integration";
    return ZeroTrustDevicePostureIntegration;
}(cdktf.TerraformResource));
exports.ZeroTrustDevicePostureIntegration = ZeroTrustDevicePostureIntegration;
