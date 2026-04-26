"use strict";
// https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/volume
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
exports.Volume = exports.VolumeLabelsList = exports.VolumeLabelsOutputReference = exports.VolumeClusterOutputReference = void 0;
exports.volumeClusterToTerraform = volumeClusterToTerraform;
exports.volumeClusterToHclTerraform = volumeClusterToHclTerraform;
exports.volumeLabelsToTerraform = volumeLabelsToTerraform;
exports.volumeLabelsToHclTerraform = volumeLabelsToHclTerraform;
var cdktf = require("cdktf");
function volumeClusterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        availability: cdktf.stringToTerraform(struct.availability),
        group: cdktf.stringToTerraform(struct.group),
        limit_bytes: cdktf.stringToTerraform(struct.limitBytes),
        required_bytes: cdktf.stringToTerraform(struct.requiredBytes),
        scope: cdktf.stringToTerraform(struct.scope),
        sharing: cdktf.stringToTerraform(struct.sharing),
        topology_preferred: cdktf.stringToTerraform(struct.topologyPreferred),
        topology_required: cdktf.stringToTerraform(struct.topologyRequired),
        type: cdktf.stringToTerraform(struct.type),
    };
}
function volumeClusterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        availability: {
            value: cdktf.stringToHclTerraform(struct.availability),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        group: {
            value: cdktf.stringToHclTerraform(struct.group),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        limit_bytes: {
            value: cdktf.stringToHclTerraform(struct.limitBytes),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        required_bytes: {
            value: cdktf.stringToHclTerraform(struct.requiredBytes),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scope: {
            value: cdktf.stringToHclTerraform(struct.scope),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sharing: {
            value: cdktf.stringToHclTerraform(struct.sharing),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        topology_preferred: {
            value: cdktf.stringToHclTerraform(struct.topologyPreferred),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        topology_required: {
            value: cdktf.stringToHclTerraform(struct.topologyRequired),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
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
var VolumeClusterOutputReference = /** @class */ (function (_super) {
    __extends(VolumeClusterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function VolumeClusterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(VolumeClusterOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._availability !== undefined) {
                hasAnyValues = true;
                internalValueResult.availability = this._availability;
            }
            if (this._group !== undefined) {
                hasAnyValues = true;
                internalValueResult.group = this._group;
            }
            if (this._limitBytes !== undefined) {
                hasAnyValues = true;
                internalValueResult.limitBytes = this._limitBytes;
            }
            if (this._requiredBytes !== undefined) {
                hasAnyValues = true;
                internalValueResult.requiredBytes = this._requiredBytes;
            }
            if (this._scope !== undefined) {
                hasAnyValues = true;
                internalValueResult.scope = this._scope;
            }
            if (this._sharing !== undefined) {
                hasAnyValues = true;
                internalValueResult.sharing = this._sharing;
            }
            if (this._topologyPreferred !== undefined) {
                hasAnyValues = true;
                internalValueResult.topologyPreferred = this._topologyPreferred;
            }
            if (this._topologyRequired !== undefined) {
                hasAnyValues = true;
                internalValueResult.topologyRequired = this._topologyRequired;
            }
            if (this._type !== undefined) {
                hasAnyValues = true;
                internalValueResult.type = this._type;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._availability = undefined;
                this._group = undefined;
                this._limitBytes = undefined;
                this._requiredBytes = undefined;
                this._scope = undefined;
                this._sharing = undefined;
                this._topologyPreferred = undefined;
                this._topologyRequired = undefined;
                this._type = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._availability = value.availability;
                this._group = value.group;
                this._limitBytes = value.limitBytes;
                this._requiredBytes = value.requiredBytes;
                this._scope = value.scope;
                this._sharing = value.sharing;
                this._topologyPreferred = value.topologyPreferred;
                this._topologyRequired = value.topologyRequired;
                this._type = value.type;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VolumeClusterOutputReference.prototype, "availability", {
        get: function () {
            return this.getStringAttribute('availability');
        },
        set: function (value) {
            this._availability = value;
        },
        enumerable: false,
        configurable: true
    });
    VolumeClusterOutputReference.prototype.resetAvailability = function () {
        this._availability = undefined;
    };
    Object.defineProperty(VolumeClusterOutputReference.prototype, "availabilityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._availability;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VolumeClusterOutputReference.prototype, "group", {
        get: function () {
            return this.getStringAttribute('group');
        },
        set: function (value) {
            this._group = value;
        },
        enumerable: false,
        configurable: true
    });
    VolumeClusterOutputReference.prototype.resetGroup = function () {
        this._group = undefined;
    };
    Object.defineProperty(VolumeClusterOutputReference.prototype, "groupInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._group;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VolumeClusterOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VolumeClusterOutputReference.prototype, "limitBytes", {
        get: function () {
            return this.getStringAttribute('limit_bytes');
        },
        set: function (value) {
            this._limitBytes = value;
        },
        enumerable: false,
        configurable: true
    });
    VolumeClusterOutputReference.prototype.resetLimitBytes = function () {
        this._limitBytes = undefined;
    };
    Object.defineProperty(VolumeClusterOutputReference.prototype, "limitBytesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._limitBytes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VolumeClusterOutputReference.prototype, "requiredBytes", {
        get: function () {
            return this.getStringAttribute('required_bytes');
        },
        set: function (value) {
            this._requiredBytes = value;
        },
        enumerable: false,
        configurable: true
    });
    VolumeClusterOutputReference.prototype.resetRequiredBytes = function () {
        this._requiredBytes = undefined;
    };
    Object.defineProperty(VolumeClusterOutputReference.prototype, "requiredBytesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requiredBytes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VolumeClusterOutputReference.prototype, "scope", {
        get: function () {
            return this.getStringAttribute('scope');
        },
        set: function (value) {
            this._scope = value;
        },
        enumerable: false,
        configurable: true
    });
    VolumeClusterOutputReference.prototype.resetScope = function () {
        this._scope = undefined;
    };
    Object.defineProperty(VolumeClusterOutputReference.prototype, "scopeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scope;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VolumeClusterOutputReference.prototype, "sharing", {
        get: function () {
            return this.getStringAttribute('sharing');
        },
        set: function (value) {
            this._sharing = value;
        },
        enumerable: false,
        configurable: true
    });
    VolumeClusterOutputReference.prototype.resetSharing = function () {
        this._sharing = undefined;
    };
    Object.defineProperty(VolumeClusterOutputReference.prototype, "sharingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sharing;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VolumeClusterOutputReference.prototype, "topologyPreferred", {
        get: function () {
            return this.getStringAttribute('topology_preferred');
        },
        set: function (value) {
            this._topologyPreferred = value;
        },
        enumerable: false,
        configurable: true
    });
    VolumeClusterOutputReference.prototype.resetTopologyPreferred = function () {
        this._topologyPreferred = undefined;
    };
    Object.defineProperty(VolumeClusterOutputReference.prototype, "topologyPreferredInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._topologyPreferred;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VolumeClusterOutputReference.prototype, "topologyRequired", {
        get: function () {
            return this.getStringAttribute('topology_required');
        },
        set: function (value) {
            this._topologyRequired = value;
        },
        enumerable: false,
        configurable: true
    });
    VolumeClusterOutputReference.prototype.resetTopologyRequired = function () {
        this._topologyRequired = undefined;
    };
    Object.defineProperty(VolumeClusterOutputReference.prototype, "topologyRequiredInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._topologyRequired;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VolumeClusterOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    VolumeClusterOutputReference.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(VolumeClusterOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    return VolumeClusterOutputReference;
}(cdktf.ComplexObject));
exports.VolumeClusterOutputReference = VolumeClusterOutputReference;
function volumeLabelsToTerraform(struct) {
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
function volumeLabelsToHclTerraform(struct) {
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
var VolumeLabelsOutputReference = /** @class */ (function (_super) {
    __extends(VolumeLabelsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function VolumeLabelsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(VolumeLabelsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(VolumeLabelsOutputReference.prototype, "label", {
        get: function () {
            return this.getStringAttribute('label');
        },
        set: function (value) {
            this._label = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VolumeLabelsOutputReference.prototype, "labelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._label;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VolumeLabelsOutputReference.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VolumeLabelsOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return VolumeLabelsOutputReference;
}(cdktf.ComplexObject));
exports.VolumeLabelsOutputReference = VolumeLabelsOutputReference;
var VolumeLabelsList = /** @class */ (function (_super) {
    __extends(VolumeLabelsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function VolumeLabelsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    VolumeLabelsList.prototype.get = function (index) {
        return new VolumeLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return VolumeLabelsList;
}(cdktf.ComplexList));
exports.VolumeLabelsList = VolumeLabelsList;
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/volume docker_volume}
*/
var Volume = /** @class */ (function (_super) {
    __extends(Volume, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/volume docker_volume} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VolumeConfig = {}
    */
    function Volume(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'docker_volume',
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
        // cluster - computed: false, optional: true, required: false
        _this._cluster = new VolumeClusterOutputReference(_this, "cluster");
        // labels - computed: false, optional: true, required: false
        _this._labels = new VolumeLabelsList(_this, "labels", true);
        _this._driver = config.driver;
        _this._driverOpts = config.driverOpts;
        _this._id = config.id;
        _this._name = config.name;
        _this._cluster.internalValue = config.cluster;
        _this._labels.internalValue = config.labels;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Volume resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Volume to import
    * @param importFromId The id of the existing Volume that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/volume#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Volume to import is found
    */
    Volume.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_volume", importId: importFromId, provider: provider });
    };
    Object.defineProperty(Volume.prototype, "driver", {
        get: function () {
            return this.getStringAttribute('driver');
        },
        set: function (value) {
            this._driver = value;
        },
        enumerable: false,
        configurable: true
    });
    Volume.prototype.resetDriver = function () {
        this._driver = undefined;
    };
    Object.defineProperty(Volume.prototype, "driverInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._driver;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Volume.prototype, "driverOpts", {
        get: function () {
            return this.getStringMapAttribute('driver_opts');
        },
        set: function (value) {
            this._driverOpts = value;
        },
        enumerable: false,
        configurable: true
    });
    Volume.prototype.resetDriverOpts = function () {
        this._driverOpts = undefined;
    };
    Object.defineProperty(Volume.prototype, "driverOptsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._driverOpts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Volume.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Volume.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(Volume.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Volume.prototype, "mountpoint", {
        // mountpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mountpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Volume.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Volume.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(Volume.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Volume.prototype, "cluster", {
        get: function () {
            return this._cluster;
        },
        enumerable: false,
        configurable: true
    });
    Volume.prototype.putCluster = function (value) {
        this._cluster.internalValue = value;
    };
    Volume.prototype.resetCluster = function () {
        this._cluster.internalValue = undefined;
    };
    Object.defineProperty(Volume.prototype, "clusterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cluster.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Volume.prototype, "labels", {
        get: function () {
            return this._labels;
        },
        enumerable: false,
        configurable: true
    });
    Volume.prototype.putLabels = function (value) {
        this._labels.internalValue = value;
    };
    Volume.prototype.resetLabels = function () {
        this._labels.internalValue = undefined;
    };
    Object.defineProperty(Volume.prototype, "labelsInput", {
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
    Volume.prototype.synthesizeAttributes = function () {
        return {
            driver: cdktf.stringToTerraform(this._driver),
            driver_opts: cdktf.hashMapper(cdktf.stringToTerraform)(this._driverOpts),
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
            cluster: volumeClusterToTerraform(this._cluster.internalValue),
            labels: cdktf.listMapper(volumeLabelsToTerraform, true)(this._labels.internalValue),
        };
    };
    Volume.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            driver: {
                value: cdktf.stringToHclTerraform(this._driver),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            driver_opts: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._driverOpts),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
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
            cluster: {
                value: volumeClusterToHclTerraform(this._cluster.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "VolumeClusterList",
            },
            labels: {
                value: cdktf.listMapperHcl(volumeLabelsToHclTerraform, true)(this._labels.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "VolumeLabelsList",
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
    Volume.tfResourceType = "docker_volume";
    return Volume;
}(cdktf.TerraformResource));
exports.Volume = Volume;
