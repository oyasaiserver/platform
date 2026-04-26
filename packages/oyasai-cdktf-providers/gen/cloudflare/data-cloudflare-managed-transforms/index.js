"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/managed_transforms
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
exports.DataCloudflareManagedTransforms = exports.DataCloudflareManagedTransformsManagedResponseHeadersList = exports.DataCloudflareManagedTransformsManagedResponseHeadersOutputReference = exports.DataCloudflareManagedTransformsManagedRequestHeadersList = exports.DataCloudflareManagedTransformsManagedRequestHeadersOutputReference = void 0;
exports.dataCloudflareManagedTransformsManagedRequestHeadersToTerraform = dataCloudflareManagedTransformsManagedRequestHeadersToTerraform;
exports.dataCloudflareManagedTransformsManagedRequestHeadersToHclTerraform = dataCloudflareManagedTransformsManagedRequestHeadersToHclTerraform;
exports.dataCloudflareManagedTransformsManagedResponseHeadersToTerraform = dataCloudflareManagedTransformsManagedResponseHeadersToTerraform;
exports.dataCloudflareManagedTransformsManagedResponseHeadersToHclTerraform = dataCloudflareManagedTransformsManagedResponseHeadersToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareManagedTransformsManagedRequestHeadersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareManagedTransformsManagedRequestHeadersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareManagedTransformsManagedRequestHeadersOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareManagedTransformsManagedRequestHeadersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareManagedTransformsManagedRequestHeadersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareManagedTransformsManagedRequestHeadersOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareManagedTransformsManagedRequestHeadersOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareManagedTransformsManagedRequestHeadersOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareManagedTransformsManagedRequestHeadersOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareManagedTransformsManagedRequestHeadersOutputReference = DataCloudflareManagedTransformsManagedRequestHeadersOutputReference;
var DataCloudflareManagedTransformsManagedRequestHeadersList = /** @class */ (function (_super) {
    __extends(DataCloudflareManagedTransformsManagedRequestHeadersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareManagedTransformsManagedRequestHeadersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareManagedTransformsManagedRequestHeadersList.prototype.get = function (index) {
        return new DataCloudflareManagedTransformsManagedRequestHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareManagedTransformsManagedRequestHeadersList;
}(cdktf.ComplexList));
exports.DataCloudflareManagedTransformsManagedRequestHeadersList = DataCloudflareManagedTransformsManagedRequestHeadersList;
function dataCloudflareManagedTransformsManagedResponseHeadersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareManagedTransformsManagedResponseHeadersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareManagedTransformsManagedResponseHeadersOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareManagedTransformsManagedResponseHeadersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareManagedTransformsManagedResponseHeadersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareManagedTransformsManagedResponseHeadersOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareManagedTransformsManagedResponseHeadersOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareManagedTransformsManagedResponseHeadersOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareManagedTransformsManagedResponseHeadersOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareManagedTransformsManagedResponseHeadersOutputReference = DataCloudflareManagedTransformsManagedResponseHeadersOutputReference;
var DataCloudflareManagedTransformsManagedResponseHeadersList = /** @class */ (function (_super) {
    __extends(DataCloudflareManagedTransformsManagedResponseHeadersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareManagedTransformsManagedResponseHeadersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareManagedTransformsManagedResponseHeadersList.prototype.get = function (index) {
        return new DataCloudflareManagedTransformsManagedResponseHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareManagedTransformsManagedResponseHeadersList;
}(cdktf.ComplexList));
exports.DataCloudflareManagedTransformsManagedResponseHeadersList = DataCloudflareManagedTransformsManagedResponseHeadersList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/managed_transforms cloudflare_managed_transforms}
*/
var DataCloudflareManagedTransforms = /** @class */ (function (_super) {
    __extends(DataCloudflareManagedTransforms, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/managed_transforms cloudflare_managed_transforms} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareManagedTransformsConfig = {}
    */
    function DataCloudflareManagedTransforms(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_managed_transforms',
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
        // managed_request_headers - computed: true, optional: false, required: false
        _this._managedRequestHeaders = new DataCloudflareManagedTransformsManagedRequestHeadersList(_this, "managed_request_headers", false);
        // managed_response_headers - computed: true, optional: false, required: false
        _this._managedResponseHeaders = new DataCloudflareManagedTransformsManagedResponseHeadersList(_this, "managed_response_headers", false);
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareManagedTransforms resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareManagedTransforms to import
    * @param importFromId The id of the existing DataCloudflareManagedTransforms that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/managed_transforms#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareManagedTransforms to import is found
    */
    DataCloudflareManagedTransforms.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_managed_transforms", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareManagedTransforms.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareManagedTransforms.prototype, "managedRequestHeaders", {
        get: function () {
            return this._managedRequestHeaders;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareManagedTransforms.prototype, "managedResponseHeaders", {
        get: function () {
            return this._managedResponseHeaders;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareManagedTransforms.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareManagedTransforms.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareManagedTransforms.prototype, "zoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareManagedTransforms.prototype.synthesizeAttributes = function () {
        return {
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareManagedTransforms.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            zone_id: {
                value: cdktf.stringToHclTerraform(this._zoneId),
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
    DataCloudflareManagedTransforms.tfResourceType = "cloudflare_managed_transforms";
    return DataCloudflareManagedTransforms;
}(cdktf.TerraformDataSource));
exports.DataCloudflareManagedTransforms = DataCloudflareManagedTransforms;
