"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_network_monitoring_configuration
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
exports.DataCloudflareMagicNetworkMonitoringConfiguration = exports.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList = exports.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference = void 0;
exports.dataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesToTerraform = dataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesToTerraform;
exports.dataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesToHclTerraform = dataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.prototype, "routerIp", {
        // router_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('router_ip');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference = DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference;
var DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.prototype.get = function (index) {
        return new DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList;
}(cdktf.ComplexList));
exports.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList = DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_network_monitoring_configuration cloudflare_magic_network_monitoring_configuration}
*/
var DataCloudflareMagicNetworkMonitoringConfiguration = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicNetworkMonitoringConfiguration, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_network_monitoring_configuration cloudflare_magic_network_monitoring_configuration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMagicNetworkMonitoringConfigurationConfig = {}
    */
    function DataCloudflareMagicNetworkMonitoringConfiguration(scope, id, config) {
        if (config === void 0) { config = {}; }
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
        // warp_devices - computed: true, optional: false, required: false
        _this._warpDevices = new DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList(_this, "warp_devices", false);
        _this._accountId = config.accountId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareMagicNetworkMonitoringConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMagicNetworkMonitoringConfiguration to import
    * @param importFromId The id of the existing DataCloudflareMagicNetworkMonitoringConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_network_monitoring_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMagicNetworkMonitoringConfiguration to import is found
    */
    DataCloudflareMagicNetworkMonitoringConfiguration.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_network_monitoring_configuration", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringConfiguration.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareMagicNetworkMonitoringConfiguration.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringConfiguration.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringConfiguration.prototype, "defaultSampling", {
        // default_sampling - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('default_sampling');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringConfiguration.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringConfiguration.prototype, "routerIps", {
        // router_ips - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('router_ips');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringConfiguration.prototype, "warpDevices", {
        get: function () {
            return this._warpDevices;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareMagicNetworkMonitoringConfiguration.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
        };
    };
    DataCloudflareMagicNetworkMonitoringConfiguration.prototype.synthesizeHclAttributes = function () {
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
    DataCloudflareMagicNetworkMonitoringConfiguration.tfResourceType = "cloudflare_magic_network_monitoring_configuration";
    return DataCloudflareMagicNetworkMonitoringConfiguration;
}(cdktf.TerraformDataSource));
exports.DataCloudflareMagicNetworkMonitoringConfiguration = DataCloudflareMagicNetworkMonitoringConfiguration;
