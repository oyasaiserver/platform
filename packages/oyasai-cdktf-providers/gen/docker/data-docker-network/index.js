"use strict";
// https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/network
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
exports.DataDockerNetwork = exports.DataDockerNetworkIpamConfigList = exports.DataDockerNetworkIpamConfigOutputReference = exports.DataDockerNetworkContainersList = exports.DataDockerNetworkContainersOutputReference = void 0;
exports.dataDockerNetworkContainersToTerraform = dataDockerNetworkContainersToTerraform;
exports.dataDockerNetworkContainersToHclTerraform = dataDockerNetworkContainersToHclTerraform;
exports.dataDockerNetworkIpamConfigToTerraform = dataDockerNetworkIpamConfigToTerraform;
exports.dataDockerNetworkIpamConfigToHclTerraform = dataDockerNetworkIpamConfigToHclTerraform;
var cdktf = require("cdktf");
function dataDockerNetworkContainersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataDockerNetworkContainersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataDockerNetworkContainersOutputReference = /** @class */ (function (_super) {
    __extends(DataDockerNetworkContainersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataDockerNetworkContainersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataDockerNetworkContainersOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataDockerNetworkContainersOutputReference.prototype, "containerId", {
        // container_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('container_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerNetworkContainersOutputReference.prototype, "endpointId", {
        // endpoint_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('endpoint_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerNetworkContainersOutputReference.prototype, "ipv4Address", {
        // ipv4_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ipv4_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerNetworkContainersOutputReference.prototype, "ipv6Address", {
        // ipv6_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ipv6_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerNetworkContainersOutputReference.prototype, "macAddress", {
        // mac_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mac_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerNetworkContainersOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataDockerNetworkContainersOutputReference;
}(cdktf.ComplexObject));
exports.DataDockerNetworkContainersOutputReference = DataDockerNetworkContainersOutputReference;
var DataDockerNetworkContainersList = /** @class */ (function (_super) {
    __extends(DataDockerNetworkContainersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataDockerNetworkContainersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataDockerNetworkContainersList.prototype.get = function (index) {
        return new DataDockerNetworkContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataDockerNetworkContainersList;
}(cdktf.ComplexList));
exports.DataDockerNetworkContainersList = DataDockerNetworkContainersList;
function dataDockerNetworkIpamConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataDockerNetworkIpamConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataDockerNetworkIpamConfigOutputReference = /** @class */ (function (_super) {
    __extends(DataDockerNetworkIpamConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataDockerNetworkIpamConfigOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // aux_address - computed: true, optional: false, required: false
        _this._auxAddress = new cdktf.StringMap(_this, "aux_address");
        return _this;
    }
    Object.defineProperty(DataDockerNetworkIpamConfigOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataDockerNetworkIpamConfigOutputReference.prototype, "auxAddress", {
        get: function () {
            return this._auxAddress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerNetworkIpamConfigOutputReference.prototype, "gateway", {
        // gateway - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('gateway');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerNetworkIpamConfigOutputReference.prototype, "ipRange", {
        // ip_range - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip_range');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerNetworkIpamConfigOutputReference.prototype, "subnet", {
        // subnet - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('subnet');
        },
        enumerable: false,
        configurable: true
    });
    return DataDockerNetworkIpamConfigOutputReference;
}(cdktf.ComplexObject));
exports.DataDockerNetworkIpamConfigOutputReference = DataDockerNetworkIpamConfigOutputReference;
var DataDockerNetworkIpamConfigList = /** @class */ (function (_super) {
    __extends(DataDockerNetworkIpamConfigList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataDockerNetworkIpamConfigList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataDockerNetworkIpamConfigList.prototype.get = function (index) {
        return new DataDockerNetworkIpamConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataDockerNetworkIpamConfigList;
}(cdktf.ComplexList));
exports.DataDockerNetworkIpamConfigList = DataDockerNetworkIpamConfigList;
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/network docker_network}
*/
var DataDockerNetwork = /** @class */ (function (_super) {
    __extends(DataDockerNetwork, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/network docker_network} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataDockerNetworkConfig
    */
    function DataDockerNetwork(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'docker_network',
            terraformGeneratorMetadata: {
                providerName: 'docker',
                providerVersion: '4.2.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        }) || this;
        // ==========
        // ATTRIBUTES
        // ==========
        // containers - computed: true, optional: false, required: false
        _this._containers = new DataDockerNetworkContainersList(_this, "containers", false);
        // ipam_config - computed: true, optional: false, required: false
        _this._ipamConfig = new DataDockerNetworkIpamConfigList(_this, "ipam_config", true);
        // options - computed: true, optional: false, required: false
        _this._options = new cdktf.StringMap(_this, "options");
        _this._name = config.name;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataDockerNetwork resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataDockerNetwork to import
    * @param importFromId The id of the existing DataDockerNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/network#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataDockerNetwork to import is found
    */
    DataDockerNetwork.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_network", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataDockerNetwork.prototype, "containers", {
        get: function () {
            return this._containers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerNetwork.prototype, "driver", {
        // driver - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('driver');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerNetwork.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerNetwork.prototype, "internal", {
        // internal - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('internal');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerNetwork.prototype, "ipamConfig", {
        get: function () {
            return this._ipamConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerNetwork.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerNetwork.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerNetwork.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerNetwork.prototype, "scope", {
        // scope - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('scope');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataDockerNetwork.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
        };
    };
    DataDockerNetwork.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            name: {
                value: cdktf.stringToHclTerraform(this._name),
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
    DataDockerNetwork.tfResourceType = "docker_network";
    return DataDockerNetwork;
}(cdktf.TerraformDataSource));
exports.DataDockerNetwork = DataDockerNetwork;
