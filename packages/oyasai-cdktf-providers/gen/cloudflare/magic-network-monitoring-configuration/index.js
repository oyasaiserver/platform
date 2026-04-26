"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_configuration
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
exports.MagicNetworkMonitoringConfiguration = exports.MagicNetworkMonitoringConfigurationWarpDevicesList = exports.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference = void 0;
exports.magicNetworkMonitoringConfigurationWarpDevicesToTerraform = magicNetworkMonitoringConfigurationWarpDevicesToTerraform;
exports.magicNetworkMonitoringConfigurationWarpDevicesToHclTerraform = magicNetworkMonitoringConfigurationWarpDevicesToHclTerraform;
var cdktf = require("cdktf");
function magicNetworkMonitoringConfigurationWarpDevicesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        name: cdktf.stringToTerraform(struct.name),
        router_ip: cdktf.stringToTerraform(struct.routerIp),
    };
}
function magicNetworkMonitoringConfigurationWarpDevicesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        router_ip: {
            value: cdktf.stringToHclTerraform(struct.routerIp),
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
var MagicNetworkMonitoringConfigurationWarpDevicesOutputReference = /** @class */ (function (_super) {
    __extends(MagicNetworkMonitoringConfigurationWarpDevicesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function MagicNetworkMonitoringConfigurationWarpDevicesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            if (this._routerIp !== undefined) {
                hasAnyValues = true;
                internalValueResult.routerIp = this._routerIp;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._id = undefined;
                this._name = undefined;
                this._routerIp = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._id = value.id;
                this._name = value.name;
                this._routerIp = value.routerIp;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.prototype, "routerIp", {
        get: function () {
            return this.getStringAttribute('router_ip');
        },
        set: function (value) {
            this._routerIp = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.prototype, "routerIpInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._routerIp;
        },
        enumerable: false,
        configurable: true
    });
    return MagicNetworkMonitoringConfigurationWarpDevicesOutputReference;
}(cdktf.ComplexObject));
exports.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference = MagicNetworkMonitoringConfigurationWarpDevicesOutputReference;
var MagicNetworkMonitoringConfigurationWarpDevicesList = /** @class */ (function (_super) {
    __extends(MagicNetworkMonitoringConfigurationWarpDevicesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function MagicNetworkMonitoringConfigurationWarpDevicesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    MagicNetworkMonitoringConfigurationWarpDevicesList.prototype.get = function (index) {
        return new MagicNetworkMonitoringConfigurationWarpDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return MagicNetworkMonitoringConfigurationWarpDevicesList;
}(cdktf.ComplexList));
exports.MagicNetworkMonitoringConfigurationWarpDevicesList = MagicNetworkMonitoringConfigurationWarpDevicesList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_configuration cloudflare_magic_network_monitoring_configuration}
*/
var MagicNetworkMonitoringConfiguration = /** @class */ (function (_super) {
    __extends(MagicNetworkMonitoringConfiguration, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_configuration cloudflare_magic_network_monitoring_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MagicNetworkMonitoringConfigurationConfig
    */
    function MagicNetworkMonitoringConfiguration(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_magic_network_monitoring_configuration',
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
        // warp_devices - computed: false, optional: true, required: false
        _this._warpDevices = new MagicNetworkMonitoringConfigurationWarpDevicesList(_this, "warp_devices", false);
        _this._accountId = config.accountId;
        _this._defaultSampling = config.defaultSampling;
        _this._name = config.name;
        _this._routerIps = config.routerIps;
        _this._warpDevices.internalValue = config.warpDevices;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a MagicNetworkMonitoringConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MagicNetworkMonitoringConfiguration to import
    * @param importFromId The id of the existing MagicNetworkMonitoringConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MagicNetworkMonitoringConfiguration to import is found
    */
    MagicNetworkMonitoringConfiguration.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_network_monitoring_configuration", importId: importFromId, provider: provider });
    };
    Object.defineProperty(MagicNetworkMonitoringConfiguration.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicNetworkMonitoringConfiguration.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(MagicNetworkMonitoringConfiguration.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicNetworkMonitoringConfiguration.prototype, "defaultSampling", {
        get: function () {
            return this.getNumberAttribute('default_sampling');
        },
        set: function (value) {
            this._defaultSampling = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicNetworkMonitoringConfiguration.prototype.resetDefaultSampling = function () {
        this._defaultSampling = undefined;
    };
    Object.defineProperty(MagicNetworkMonitoringConfiguration.prototype, "defaultSamplingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultSampling;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicNetworkMonitoringConfiguration.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicNetworkMonitoringConfiguration.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicNetworkMonitoringConfiguration.prototype, "routerIps", {
        get: function () {
            return this.getListAttribute('router_ips');
        },
        set: function (value) {
            this._routerIps = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicNetworkMonitoringConfiguration.prototype.resetRouterIps = function () {
        this._routerIps = undefined;
    };
    Object.defineProperty(MagicNetworkMonitoringConfiguration.prototype, "routerIpsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._routerIps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicNetworkMonitoringConfiguration.prototype, "warpDevices", {
        get: function () {
            return this._warpDevices;
        },
        enumerable: false,
        configurable: true
    });
    MagicNetworkMonitoringConfiguration.prototype.putWarpDevices = function (value) {
        this._warpDevices.internalValue = value;
    };
    MagicNetworkMonitoringConfiguration.prototype.resetWarpDevices = function () {
        this._warpDevices.internalValue = undefined;
    };
    Object.defineProperty(MagicNetworkMonitoringConfiguration.prototype, "warpDevicesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._warpDevices.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    MagicNetworkMonitoringConfiguration.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            default_sampling: cdktf.numberToTerraform(this._defaultSampling),
            name: cdktf.stringToTerraform(this._name),
            router_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._routerIps),
            warp_devices: cdktf.listMapper(magicNetworkMonitoringConfigurationWarpDevicesToTerraform, false)(this._warpDevices.internalValue),
        };
    };
    MagicNetworkMonitoringConfiguration.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            default_sampling: {
                value: cdktf.numberToHclTerraform(this._defaultSampling),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            router_ips: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._routerIps),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            warp_devices: {
                value: cdktf.listMapperHcl(magicNetworkMonitoringConfigurationWarpDevicesToHclTerraform, false)(this._warpDevices.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "MagicNetworkMonitoringConfigurationWarpDevicesList",
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
    MagicNetworkMonitoringConfiguration.tfResourceType = "cloudflare_magic_network_monitoring_configuration";
    return MagicNetworkMonitoringConfiguration;
}(cdktf.TerraformResource));
exports.MagicNetworkMonitoringConfiguration = MagicNetworkMonitoringConfiguration;
