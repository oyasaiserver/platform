"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_managed_networks
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
exports.ZeroTrustDeviceManagedNetworks = exports.ZeroTrustDeviceManagedNetworksConfigAOutputReference = void 0;
exports.zeroTrustDeviceManagedNetworksConfigAToTerraform = zeroTrustDeviceManagedNetworksConfigAToTerraform;
exports.zeroTrustDeviceManagedNetworksConfigAToHclTerraform = zeroTrustDeviceManagedNetworksConfigAToHclTerraform;
var cdktf = require("cdktf");
function zeroTrustDeviceManagedNetworksConfigAToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        sha256: cdktf.stringToTerraform(struct.sha256),
        tls_sockaddr: cdktf.stringToTerraform(struct.tlsSockaddr),
    };
}
function zeroTrustDeviceManagedNetworksConfigAToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        sha256: {
            value: cdktf.stringToHclTerraform(struct.sha256),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tls_sockaddr: {
            value: cdktf.stringToHclTerraform(struct.tlsSockaddr),
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
var ZeroTrustDeviceManagedNetworksConfigAOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDeviceManagedNetworksConfigAOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustDeviceManagedNetworksConfigAOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDeviceManagedNetworksConfigAOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._sha256 !== undefined) {
                hasAnyValues = true;
                internalValueResult.sha256 = this._sha256;
            }
            if (this._tlsSockaddr !== undefined) {
                hasAnyValues = true;
                internalValueResult.tlsSockaddr = this._tlsSockaddr;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._sha256 = undefined;
                this._tlsSockaddr = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._sha256 = value.sha256;
                this._tlsSockaddr = value.tlsSockaddr;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceManagedNetworksConfigAOutputReference.prototype, "sha256", {
        get: function () {
            return this.getStringAttribute('sha256');
        },
        set: function (value) {
            this._sha256 = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceManagedNetworksConfigAOutputReference.prototype.resetSha256 = function () {
        this._sha256 = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceManagedNetworksConfigAOutputReference.prototype, "sha256Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sha256;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceManagedNetworksConfigAOutputReference.prototype, "tlsSockaddr", {
        get: function () {
            return this.getStringAttribute('tls_sockaddr');
        },
        set: function (value) {
            this._tlsSockaddr = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceManagedNetworksConfigAOutputReference.prototype, "tlsSockaddrInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tlsSockaddr;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDeviceManagedNetworksConfigAOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDeviceManagedNetworksConfigAOutputReference = ZeroTrustDeviceManagedNetworksConfigAOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_managed_networks cloudflare_zero_trust_device_managed_networks}
*/
var ZeroTrustDeviceManagedNetworks = /** @class */ (function (_super) {
    __extends(ZeroTrustDeviceManagedNetworks, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_managed_networks cloudflare_zero_trust_device_managed_networks} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDeviceManagedNetworksConfig
    */
    function ZeroTrustDeviceManagedNetworks(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_device_managed_networks',
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
        _this._config = new ZeroTrustDeviceManagedNetworksConfigAOutputReference(_this, "config");
        _this._accountId = config.accountId;
        _this._config.internalValue = config.config;
        _this._name = config.name;
        _this._type = config.type;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustDeviceManagedNetworks resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDeviceManagedNetworks to import
    * @param importFromId The id of the existing ZeroTrustDeviceManagedNetworks that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_managed_networks#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDeviceManagedNetworks to import is found
    */
    ZeroTrustDeviceManagedNetworks.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_device_managed_networks", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZeroTrustDeviceManagedNetworks.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceManagedNetworks.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceManagedNetworks.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceManagedNetworks.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceManagedNetworks.prototype.putConfig = function (value) {
        this._config.internalValue = value;
    };
    Object.defineProperty(ZeroTrustDeviceManagedNetworks.prototype, "configInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._config.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceManagedNetworks.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceManagedNetworks.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceManagedNetworks.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceManagedNetworks.prototype, "networkId", {
        // network_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('network_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceManagedNetworks.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceManagedNetworks.prototype, "typeInput", {
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
    ZeroTrustDeviceManagedNetworks.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            config: zeroTrustDeviceManagedNetworksConfigAToTerraform(this._config.internalValue),
            name: cdktf.stringToTerraform(this._name),
            type: cdktf.stringToTerraform(this._type),
        };
    };
    ZeroTrustDeviceManagedNetworks.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            config: {
                value: zeroTrustDeviceManagedNetworksConfigAToHclTerraform(this._config.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustDeviceManagedNetworksConfigA",
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
    ZeroTrustDeviceManagedNetworks.tfResourceType = "cloudflare_zero_trust_device_managed_networks";
    return ZeroTrustDeviceManagedNetworks;
}(cdktf.TerraformResource));
exports.ZeroTrustDeviceManagedNetworks = ZeroTrustDeviceManagedNetworks;
