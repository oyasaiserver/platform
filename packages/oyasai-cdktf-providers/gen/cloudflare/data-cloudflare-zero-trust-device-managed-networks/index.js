"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_managed_networks
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
exports.DataCloudflareZeroTrustDeviceManagedNetworks = exports.DataCloudflareZeroTrustDeviceManagedNetworksConfigAOutputReference = void 0;
exports.dataCloudflareZeroTrustDeviceManagedNetworksConfigAToTerraform = dataCloudflareZeroTrustDeviceManagedNetworksConfigAToTerraform;
exports.dataCloudflareZeroTrustDeviceManagedNetworksConfigAToHclTerraform = dataCloudflareZeroTrustDeviceManagedNetworksConfigAToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustDeviceManagedNetworksConfigAToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDeviceManagedNetworksConfigAToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDeviceManagedNetworksConfigAOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceManagedNetworksConfigAOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDeviceManagedNetworksConfigAOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDeviceManagedNetworksConfigAOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDeviceManagedNetworksConfigAOutputReference.prototype, "sha256", {
        // sha256 - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sha256');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceManagedNetworksConfigAOutputReference.prototype, "tlsSockaddr", {
        // tls_sockaddr - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tls_sockaddr');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDeviceManagedNetworksConfigAOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDeviceManagedNetworksConfigAOutputReference = DataCloudflareZeroTrustDeviceManagedNetworksConfigAOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_managed_networks cloudflare_zero_trust_device_managed_networks}
*/
var DataCloudflareZeroTrustDeviceManagedNetworks = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceManagedNetworks, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_managed_networks cloudflare_zero_trust_device_managed_networks} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDeviceManagedNetworksConfig
    */
    function DataCloudflareZeroTrustDeviceManagedNetworks(scope, id, config) {
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
        // config - computed: true, optional: false, required: false
        _this._config = new DataCloudflareZeroTrustDeviceManagedNetworksConfigAOutputReference(_this, "config");
        _this._accountId = config.accountId;
        _this._networkId = config.networkId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDeviceManagedNetworks resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDeviceManagedNetworks to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDeviceManagedNetworks that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_managed_networks#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDeviceManagedNetworks to import is found
    */
    DataCloudflareZeroTrustDeviceManagedNetworks.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_device_managed_networks", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustDeviceManagedNetworks.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDeviceManagedNetworks.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDeviceManagedNetworks.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceManagedNetworks.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceManagedNetworks.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceManagedNetworks.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceManagedNetworks.prototype, "networkId", {
        get: function () {
            return this.getStringAttribute('network_id');
        },
        set: function (value) {
            this._networkId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceManagedNetworks.prototype, "networkIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._networkId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceManagedNetworks.prototype, "type", {
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
    DataCloudflareZeroTrustDeviceManagedNetworks.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            network_id: cdktf.stringToTerraform(this._networkId),
        };
    };
    DataCloudflareZeroTrustDeviceManagedNetworks.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            network_id: {
                value: cdktf.stringToHclTerraform(this._networkId),
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
    DataCloudflareZeroTrustDeviceManagedNetworks.tfResourceType = "cloudflare_zero_trust_device_managed_networks";
    return DataCloudflareZeroTrustDeviceManagedNetworks;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustDeviceManagedNetworks = DataCloudflareZeroTrustDeviceManagedNetworks;
