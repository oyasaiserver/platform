"use strict";
// https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/containers
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
exports.DataDockerContainers = exports.DataDockerContainersContainersList = exports.DataDockerContainersContainersOutputReference = void 0;
exports.dataDockerContainersContainersToTerraform = dataDockerContainersContainersToTerraform;
exports.dataDockerContainersContainersToHclTerraform = dataDockerContainersContainersToHclTerraform;
var cdktf = require("cdktf");
function dataDockerContainersContainersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataDockerContainersContainersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataDockerContainersContainersOutputReference = /** @class */ (function (_super) {
    __extends(DataDockerContainersContainersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataDockerContainersContainersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // labels - computed: true, optional: false, required: false
        _this._labels = new cdktf.StringMap(_this, "labels");
        return _this;
    }
    Object.defineProperty(DataDockerContainersContainersOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataDockerContainersContainersOutputReference.prototype, "command", {
        // command - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('command');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerContainersContainersOutputReference.prototype, "created", {
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerContainersContainersOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerContainersContainersOutputReference.prototype, "image", {
        // image - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('image');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerContainersContainersOutputReference.prototype, "imageId", {
        // image_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('image_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerContainersContainersOutputReference.prototype, "labels", {
        get: function () {
            return this._labels;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerContainersContainersOutputReference.prototype, "names", {
        // names - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('names');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerContainersContainersOutputReference.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerContainersContainersOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    return DataDockerContainersContainersOutputReference;
}(cdktf.ComplexObject));
exports.DataDockerContainersContainersOutputReference = DataDockerContainersContainersOutputReference;
var DataDockerContainersContainersList = /** @class */ (function (_super) {
    __extends(DataDockerContainersContainersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataDockerContainersContainersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataDockerContainersContainersList.prototype.get = function (index) {
        return new DataDockerContainersContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataDockerContainersContainersList;
}(cdktf.ComplexList));
exports.DataDockerContainersContainersList = DataDockerContainersContainersList;
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/containers docker_containers}
*/
var DataDockerContainers = /** @class */ (function (_super) {
    __extends(DataDockerContainers, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/containers docker_containers} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataDockerContainersConfig = {}
    */
    function DataDockerContainers(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'docker_containers',
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
        _this._containers = new DataDockerContainersContainersList(_this, "containers", false);
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataDockerContainers resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataDockerContainers to import
    * @param importFromId The id of the existing DataDockerContainers that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/containers#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataDockerContainers to import is found
    */
    DataDockerContainers.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_containers", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataDockerContainers.prototype, "containers", {
        get: function () {
            return this._containers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataDockerContainers.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataDockerContainers.prototype.synthesizeAttributes = function () {
        return {};
    };
    DataDockerContainers.prototype.synthesizeHclAttributes = function () {
        var attrs = {};
        return attrs;
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataDockerContainers.tfResourceType = "docker_containers";
    return DataDockerContainers;
}(cdktf.TerraformDataSource));
exports.DataDockerContainers = DataDockerContainers;
