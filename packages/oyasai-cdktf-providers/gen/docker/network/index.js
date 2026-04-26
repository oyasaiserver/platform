"use strict";
// https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/network
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
exports.Network = exports.NetworkLabelsList = exports.NetworkLabelsOutputReference = exports.NetworkIpamConfigList = exports.NetworkIpamConfigOutputReference = void 0;
exports.networkIpamConfigToTerraform = networkIpamConfigToTerraform;
exports.networkIpamConfigToHclTerraform = networkIpamConfigToHclTerraform;
exports.networkLabelsToTerraform = networkLabelsToTerraform;
exports.networkLabelsToHclTerraform = networkLabelsToHclTerraform;
var cdktf = require("cdktf");
function networkIpamConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        aux_address: cdktf.hashMapper(cdktf.stringToTerraform)(struct.auxAddress),
        gateway: cdktf.stringToTerraform(struct.gateway),
        ip_range: cdktf.stringToTerraform(struct.ipRange),
        subnet: cdktf.stringToTerraform(struct.subnet),
    };
}
function networkIpamConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        aux_address: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.auxAddress),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        gateway: {
            value: cdktf.stringToHclTerraform(struct.gateway),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ip_range: {
            value: cdktf.stringToHclTerraform(struct.ipRange),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        subnet: {
            value: cdktf.stringToHclTerraform(struct.subnet),
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
var NetworkIpamConfigOutputReference = /** @class */ (function (_super) {
    __extends(NetworkIpamConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function NetworkIpamConfigOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(NetworkIpamConfigOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._auxAddress !== undefined) {
                hasAnyValues = true;
                internalValueResult.auxAddress = this._auxAddress;
            }
            if (this._gateway !== undefined) {
                hasAnyValues = true;
                internalValueResult.gateway = this._gateway;
            }
            if (this._ipRange !== undefined) {
                hasAnyValues = true;
                internalValueResult.ipRange = this._ipRange;
            }
            if (this._subnet !== undefined) {
                hasAnyValues = true;
                internalValueResult.subnet = this._subnet;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._auxAddress = undefined;
                this._gateway = undefined;
                this._ipRange = undefined;
                this._subnet = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._auxAddress = value.auxAddress;
                this._gateway = value.gateway;
                this._ipRange = value.ipRange;
                this._subnet = value.subnet;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkIpamConfigOutputReference.prototype, "auxAddress", {
        get: function () {
            return this.getStringMapAttribute('aux_address');
        },
        set: function (value) {
            this._auxAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkIpamConfigOutputReference.prototype.resetAuxAddress = function () {
        this._auxAddress = undefined;
    };
    Object.defineProperty(NetworkIpamConfigOutputReference.prototype, "auxAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._auxAddress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkIpamConfigOutputReference.prototype, "gateway", {
        get: function () {
            return this.getStringAttribute('gateway');
        },
        set: function (value) {
            this._gateway = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkIpamConfigOutputReference.prototype.resetGateway = function () {
        this._gateway = undefined;
    };
    Object.defineProperty(NetworkIpamConfigOutputReference.prototype, "gatewayInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gateway;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkIpamConfigOutputReference.prototype, "ipRange", {
        get: function () {
            return this.getStringAttribute('ip_range');
        },
        set: function (value) {
            this._ipRange = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkIpamConfigOutputReference.prototype.resetIpRange = function () {
        this._ipRange = undefined;
    };
    Object.defineProperty(NetworkIpamConfigOutputReference.prototype, "ipRangeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipRange;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkIpamConfigOutputReference.prototype, "subnet", {
        get: function () {
            return this.getStringAttribute('subnet');
        },
        set: function (value) {
            this._subnet = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkIpamConfigOutputReference.prototype.resetSubnet = function () {
        this._subnet = undefined;
    };
    Object.defineProperty(NetworkIpamConfigOutputReference.prototype, "subnetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnet;
        },
        enumerable: false,
        configurable: true
    });
    return NetworkIpamConfigOutputReference;
}(cdktf.ComplexObject));
exports.NetworkIpamConfigOutputReference = NetworkIpamConfigOutputReference;
var NetworkIpamConfigList = /** @class */ (function (_super) {
    __extends(NetworkIpamConfigList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function NetworkIpamConfigList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    NetworkIpamConfigList.prototype.get = function (index) {
        return new NetworkIpamConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return NetworkIpamConfigList;
}(cdktf.ComplexList));
exports.NetworkIpamConfigList = NetworkIpamConfigList;
function networkLabelsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        label: cdktf.stringToTerraform(struct.label),
        value: cdktf.stringToTerraform(struct.value),
    };
}
function networkLabelsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        label: {
            value: cdktf.stringToHclTerraform(struct.label),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.stringToHclTerraform(struct.value),
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
var NetworkLabelsOutputReference = /** @class */ (function (_super) {
    __extends(NetworkLabelsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function NetworkLabelsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(NetworkLabelsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._label !== undefined) {
                hasAnyValues = true;
                internalValueResult.label = this._label;
            }
            if (this._value !== undefined) {
                hasAnyValues = true;
                internalValueResult.value = this._value;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._label = undefined;
                this._value = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._label = value.label;
                this._value = value.value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkLabelsOutputReference.prototype, "label", {
        get: function () {
            return this.getStringAttribute('label');
        },
        set: function (value) {
            this._label = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkLabelsOutputReference.prototype, "labelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._label;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkLabelsOutputReference.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkLabelsOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return NetworkLabelsOutputReference;
}(cdktf.ComplexObject));
exports.NetworkLabelsOutputReference = NetworkLabelsOutputReference;
var NetworkLabelsList = /** @class */ (function (_super) {
    __extends(NetworkLabelsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function NetworkLabelsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    NetworkLabelsList.prototype.get = function (index) {
        return new NetworkLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return NetworkLabelsList;
}(cdktf.ComplexList));
exports.NetworkLabelsList = NetworkLabelsList;
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/network docker_network}
*/
var Network = /** @class */ (function (_super) {
    __extends(Network, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/network docker_network} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkConfig
    */
    function Network(scope, id, config) {
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
        // ipam_config - computed: false, optional: true, required: false
        _this._ipamConfig = new NetworkIpamConfigList(_this, "ipam_config", true);
        // labels - computed: false, optional: true, required: false
        _this._labels = new NetworkLabelsList(_this, "labels", true);
        _this._attachable = config.attachable;
        _this._driver = config.driver;
        _this._id = config.id;
        _this._ingress = config.ingress;
        _this._internal = config.internal;
        _this._ipamDriver = config.ipamDriver;
        _this._ipamOptions = config.ipamOptions;
        _this._ipv6 = config.ipv6;
        _this._name = config.name;
        _this._options = config.options;
        _this._ipamConfig.internalValue = config.ipamConfig;
        _this._labels.internalValue = config.labels;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Network resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Network to import
    * @param importFromId The id of the existing Network that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/network#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Network to import is found
    */
    Network.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_network", importId: importFromId, provider: provider });
    };
    Object.defineProperty(Network.prototype, "attachable", {
        get: function () {
            return this.getBooleanAttribute('attachable');
        },
        set: function (value) {
            this._attachable = value;
        },
        enumerable: false,
        configurable: true
    });
    Network.prototype.resetAttachable = function () {
        this._attachable = undefined;
    };
    Object.defineProperty(Network.prototype, "attachableInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._attachable;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Network.prototype, "driver", {
        get: function () {
            return this.getStringAttribute('driver');
        },
        set: function (value) {
            this._driver = value;
        },
        enumerable: false,
        configurable: true
    });
    Network.prototype.resetDriver = function () {
        this._driver = undefined;
    };
    Object.defineProperty(Network.prototype, "driverInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._driver;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Network.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Network.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(Network.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Network.prototype, "ingress", {
        get: function () {
            return this.getBooleanAttribute('ingress');
        },
        set: function (value) {
            this._ingress = value;
        },
        enumerable: false,
        configurable: true
    });
    Network.prototype.resetIngress = function () {
        this._ingress = undefined;
    };
    Object.defineProperty(Network.prototype, "ingressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ingress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Network.prototype, "internal", {
        get: function () {
            return this.getBooleanAttribute('internal');
        },
        set: function (value) {
            this._internal = value;
        },
        enumerable: false,
        configurable: true
    });
    Network.prototype.resetInternal = function () {
        this._internal = undefined;
    };
    Object.defineProperty(Network.prototype, "internalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._internal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Network.prototype, "ipamDriver", {
        get: function () {
            return this.getStringAttribute('ipam_driver');
        },
        set: function (value) {
            this._ipamDriver = value;
        },
        enumerable: false,
        configurable: true
    });
    Network.prototype.resetIpamDriver = function () {
        this._ipamDriver = undefined;
    };
    Object.defineProperty(Network.prototype, "ipamDriverInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipamDriver;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Network.prototype, "ipamOptions", {
        get: function () {
            return this.getStringMapAttribute('ipam_options');
        },
        set: function (value) {
            this._ipamOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    Network.prototype.resetIpamOptions = function () {
        this._ipamOptions = undefined;
    };
    Object.defineProperty(Network.prototype, "ipamOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipamOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Network.prototype, "ipv6", {
        get: function () {
            return this.getBooleanAttribute('ipv6');
        },
        set: function (value) {
            this._ipv6 = value;
        },
        enumerable: false,
        configurable: true
    });
    Network.prototype.resetIpv6 = function () {
        this._ipv6 = undefined;
    };
    Object.defineProperty(Network.prototype, "ipv6Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv6;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Network.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Network.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Network.prototype, "options", {
        get: function () {
            return this.getStringMapAttribute('options');
        },
        set: function (value) {
            this._options = value;
        },
        enumerable: false,
        configurable: true
    });
    Network.prototype.resetOptions = function () {
        this._options = undefined;
    };
    Object.defineProperty(Network.prototype, "optionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._options;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Network.prototype, "scope", {
        // scope - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('scope');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Network.prototype, "ipamConfig", {
        get: function () {
            return this._ipamConfig;
        },
        enumerable: false,
        configurable: true
    });
    Network.prototype.putIpamConfig = function (value) {
        this._ipamConfig.internalValue = value;
    };
    Network.prototype.resetIpamConfig = function () {
        this._ipamConfig.internalValue = undefined;
    };
    Object.defineProperty(Network.prototype, "ipamConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipamConfig.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Network.prototype, "labels", {
        get: function () {
            return this._labels;
        },
        enumerable: false,
        configurable: true
    });
    Network.prototype.putLabels = function (value) {
        this._labels.internalValue = value;
    };
    Network.prototype.resetLabels = function () {
        this._labels.internalValue = undefined;
    };
    Object.defineProperty(Network.prototype, "labelsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._labels.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Network.prototype.synthesizeAttributes = function () {
        return {
            attachable: cdktf.booleanToTerraform(this._attachable),
            driver: cdktf.stringToTerraform(this._driver),
            id: cdktf.stringToTerraform(this._id),
            ingress: cdktf.booleanToTerraform(this._ingress),
            internal: cdktf.booleanToTerraform(this._internal),
            ipam_driver: cdktf.stringToTerraform(this._ipamDriver),
            ipam_options: cdktf.hashMapper(cdktf.stringToTerraform)(this._ipamOptions),
            ipv6: cdktf.booleanToTerraform(this._ipv6),
            name: cdktf.stringToTerraform(this._name),
            options: cdktf.hashMapper(cdktf.stringToTerraform)(this._options),
            ipam_config: cdktf.listMapper(networkIpamConfigToTerraform, true)(this._ipamConfig.internalValue),
            labels: cdktf.listMapper(networkLabelsToTerraform, true)(this._labels.internalValue),
        };
    };
    Network.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            attachable: {
                value: cdktf.booleanToHclTerraform(this._attachable),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            driver: {
                value: cdktf.stringToHclTerraform(this._driver),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ingress: {
                value: cdktf.booleanToHclTerraform(this._ingress),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            internal: {
                value: cdktf.booleanToHclTerraform(this._internal),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            ipam_driver: {
                value: cdktf.stringToHclTerraform(this._ipamDriver),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ipam_options: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._ipamOptions),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            ipv6: {
                value: cdktf.booleanToHclTerraform(this._ipv6),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            options: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._options),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            ipam_config: {
                value: cdktf.listMapperHcl(networkIpamConfigToHclTerraform, true)(this._ipamConfig.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "NetworkIpamConfigList",
            },
            labels: {
                value: cdktf.listMapperHcl(networkLabelsToHclTerraform, true)(this._labels.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "NetworkLabelsList",
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
    Network.tfResourceType = "docker_network";
    return Network;
}(cdktf.TerraformResource));
exports.Network = Network;
