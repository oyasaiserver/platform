"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_stream
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
exports.DataCloudflarePipelineStream = exports.DataCloudflarePipelineStreamWorkerBindingOutputReference = exports.DataCloudflarePipelineStreamSchemaOutputReference = exports.DataCloudflarePipelineStreamSchemaFormatOutputReference = exports.DataCloudflarePipelineStreamSchemaFieldsList = exports.DataCloudflarePipelineStreamSchemaFieldsOutputReference = exports.DataCloudflarePipelineStreamHttpOutputReference = exports.DataCloudflarePipelineStreamHttpCorsOutputReference = exports.DataCloudflarePipelineStreamFormatOutputReference = exports.DataCloudflarePipelineStreamFilterOutputReference = void 0;
exports.dataCloudflarePipelineStreamFilterToTerraform = dataCloudflarePipelineStreamFilterToTerraform;
exports.dataCloudflarePipelineStreamFilterToHclTerraform = dataCloudflarePipelineStreamFilterToHclTerraform;
exports.dataCloudflarePipelineStreamFormatToTerraform = dataCloudflarePipelineStreamFormatToTerraform;
exports.dataCloudflarePipelineStreamFormatToHclTerraform = dataCloudflarePipelineStreamFormatToHclTerraform;
exports.dataCloudflarePipelineStreamHttpCorsToTerraform = dataCloudflarePipelineStreamHttpCorsToTerraform;
exports.dataCloudflarePipelineStreamHttpCorsToHclTerraform = dataCloudflarePipelineStreamHttpCorsToHclTerraform;
exports.dataCloudflarePipelineStreamHttpToTerraform = dataCloudflarePipelineStreamHttpToTerraform;
exports.dataCloudflarePipelineStreamHttpToHclTerraform = dataCloudflarePipelineStreamHttpToHclTerraform;
exports.dataCloudflarePipelineStreamSchemaFieldsToTerraform = dataCloudflarePipelineStreamSchemaFieldsToTerraform;
exports.dataCloudflarePipelineStreamSchemaFieldsToHclTerraform = dataCloudflarePipelineStreamSchemaFieldsToHclTerraform;
exports.dataCloudflarePipelineStreamSchemaFormatToTerraform = dataCloudflarePipelineStreamSchemaFormatToTerraform;
exports.dataCloudflarePipelineStreamSchemaFormatToHclTerraform = dataCloudflarePipelineStreamSchemaFormatToHclTerraform;
exports.dataCloudflarePipelineStreamSchemaToTerraform = dataCloudflarePipelineStreamSchemaToTerraform;
exports.dataCloudflarePipelineStreamSchemaToHclTerraform = dataCloudflarePipelineStreamSchemaToHclTerraform;
exports.dataCloudflarePipelineStreamWorkerBindingToTerraform = dataCloudflarePipelineStreamWorkerBindingToTerraform;
exports.dataCloudflarePipelineStreamWorkerBindingToHclTerraform = dataCloudflarePipelineStreamWorkerBindingToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflarePipelineStreamFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        pipeline_id: cdktf.stringToTerraform(struct.pipelineId),
    };
}
function dataCloudflarePipelineStreamFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        pipeline_id: {
            value: cdktf.stringToHclTerraform(struct.pipelineId),
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
var DataCloudflarePipelineStreamFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineStreamFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePipelineStreamFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePipelineStreamFilterOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._pipelineId !== undefined) {
                hasAnyValues = true;
                internalValueResult.pipelineId = this._pipelineId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._pipelineId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._pipelineId = value.pipelineId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamFilterOutputReference.prototype, "pipelineId", {
        get: function () {
            return this.getStringAttribute('pipeline_id');
        },
        set: function (value) {
            this._pipelineId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePipelineStreamFilterOutputReference.prototype.resetPipelineId = function () {
        this._pipelineId = undefined;
    };
    Object.defineProperty(DataCloudflarePipelineStreamFilterOutputReference.prototype, "pipelineIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pipelineId;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePipelineStreamFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePipelineStreamFilterOutputReference = DataCloudflarePipelineStreamFilterOutputReference;
function dataCloudflarePipelineStreamFormatToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePipelineStreamFormatToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePipelineStreamFormatOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineStreamFormatOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePipelineStreamFormatOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePipelineStreamFormatOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePipelineStreamFormatOutputReference.prototype, "compression", {
        // compression - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('compression');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamFormatOutputReference.prototype, "decimalEncoding", {
        // decimal_encoding - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('decimal_encoding');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamFormatOutputReference.prototype, "rowGroupBytes", {
        // row_group_bytes - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('row_group_bytes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamFormatOutputReference.prototype, "timestampFormat", {
        // timestamp_format - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('timestamp_format');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamFormatOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamFormatOutputReference.prototype, "unstructured", {
        // unstructured - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('unstructured');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePipelineStreamFormatOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePipelineStreamFormatOutputReference = DataCloudflarePipelineStreamFormatOutputReference;
function dataCloudflarePipelineStreamHttpCorsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePipelineStreamHttpCorsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePipelineStreamHttpCorsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineStreamHttpCorsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePipelineStreamHttpCorsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePipelineStreamHttpCorsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePipelineStreamHttpCorsOutputReference.prototype, "origins", {
        // origins - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('origins');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePipelineStreamHttpCorsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePipelineStreamHttpCorsOutputReference = DataCloudflarePipelineStreamHttpCorsOutputReference;
function dataCloudflarePipelineStreamHttpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePipelineStreamHttpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePipelineStreamHttpOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineStreamHttpOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePipelineStreamHttpOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // cors - computed: true, optional: false, required: false
        _this._cors = new DataCloudflarePipelineStreamHttpCorsOutputReference(_this, "cors");
        return _this;
    }
    Object.defineProperty(DataCloudflarePipelineStreamHttpOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePipelineStreamHttpOutputReference.prototype, "authentication", {
        // authentication - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('authentication');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamHttpOutputReference.prototype, "cors", {
        get: function () {
            return this._cors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamHttpOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePipelineStreamHttpOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePipelineStreamHttpOutputReference = DataCloudflarePipelineStreamHttpOutputReference;
function dataCloudflarePipelineStreamSchemaFieldsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePipelineStreamSchemaFieldsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePipelineStreamSchemaFieldsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineStreamSchemaFieldsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflarePipelineStreamSchemaFieldsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePipelineStreamSchemaFieldsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePipelineStreamSchemaFieldsOutputReference.prototype, "metadataKey", {
        // metadata_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('metadata_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamSchemaFieldsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamSchemaFieldsOutputReference.prototype, "required", {
        // required - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('required');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamSchemaFieldsOutputReference.prototype, "sqlName", {
        // sql_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sql_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamSchemaFieldsOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamSchemaFieldsOutputReference.prototype, "unit", {
        // unit - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('unit');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePipelineStreamSchemaFieldsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePipelineStreamSchemaFieldsOutputReference = DataCloudflarePipelineStreamSchemaFieldsOutputReference;
var DataCloudflarePipelineStreamSchemaFieldsList = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineStreamSchemaFieldsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflarePipelineStreamSchemaFieldsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflarePipelineStreamSchemaFieldsList.prototype.get = function (index) {
        return new DataCloudflarePipelineStreamSchemaFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflarePipelineStreamSchemaFieldsList;
}(cdktf.ComplexList));
exports.DataCloudflarePipelineStreamSchemaFieldsList = DataCloudflarePipelineStreamSchemaFieldsList;
function dataCloudflarePipelineStreamSchemaFormatToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePipelineStreamSchemaFormatToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePipelineStreamSchemaFormatOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineStreamSchemaFormatOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePipelineStreamSchemaFormatOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePipelineStreamSchemaFormatOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePipelineStreamSchemaFormatOutputReference.prototype, "compression", {
        // compression - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('compression');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamSchemaFormatOutputReference.prototype, "decimalEncoding", {
        // decimal_encoding - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('decimal_encoding');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamSchemaFormatOutputReference.prototype, "rowGroupBytes", {
        // row_group_bytes - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('row_group_bytes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamSchemaFormatOutputReference.prototype, "timestampFormat", {
        // timestamp_format - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('timestamp_format');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamSchemaFormatOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamSchemaFormatOutputReference.prototype, "unstructured", {
        // unstructured - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('unstructured');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePipelineStreamSchemaFormatOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePipelineStreamSchemaFormatOutputReference = DataCloudflarePipelineStreamSchemaFormatOutputReference;
function dataCloudflarePipelineStreamSchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePipelineStreamSchemaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePipelineStreamSchemaOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineStreamSchemaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePipelineStreamSchemaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // fields - computed: true, optional: false, required: false
        _this._fields = new DataCloudflarePipelineStreamSchemaFieldsList(_this, "fields", false);
        // format - computed: true, optional: false, required: false
        _this._format = new DataCloudflarePipelineStreamSchemaFormatOutputReference(_this, "format");
        return _this;
    }
    Object.defineProperty(DataCloudflarePipelineStreamSchemaOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePipelineStreamSchemaOutputReference.prototype, "fields", {
        get: function () {
            return this._fields;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamSchemaOutputReference.prototype, "format", {
        get: function () {
            return this._format;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamSchemaOutputReference.prototype, "inferred", {
        // inferred - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('inferred');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePipelineStreamSchemaOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePipelineStreamSchemaOutputReference = DataCloudflarePipelineStreamSchemaOutputReference;
function dataCloudflarePipelineStreamWorkerBindingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePipelineStreamWorkerBindingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePipelineStreamWorkerBindingOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineStreamWorkerBindingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePipelineStreamWorkerBindingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePipelineStreamWorkerBindingOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePipelineStreamWorkerBindingOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePipelineStreamWorkerBindingOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePipelineStreamWorkerBindingOutputReference = DataCloudflarePipelineStreamWorkerBindingOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_stream cloudflare_pipeline_stream}
*/
var DataCloudflarePipelineStream = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineStream, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_stream cloudflare_pipeline_stream} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflarePipelineStreamConfig = {}
    */
    function DataCloudflarePipelineStream(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_pipeline_stream',
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
        // filter - computed: false, optional: true, required: false
        _this._filter = new DataCloudflarePipelineStreamFilterOutputReference(_this, "filter");
        // format - computed: true, optional: false, required: false
        _this._format = new DataCloudflarePipelineStreamFormatOutputReference(_this, "format");
        // http - computed: true, optional: false, required: false
        _this._http = new DataCloudflarePipelineStreamHttpOutputReference(_this, "http");
        // schema - computed: true, optional: false, required: false
        _this._schema = new DataCloudflarePipelineStreamSchemaOutputReference(_this, "schema");
        // worker_binding - computed: true, optional: false, required: false
        _this._workerBinding = new DataCloudflarePipelineStreamWorkerBindingOutputReference(_this, "worker_binding");
        _this._accountId = config.accountId;
        _this._filter.internalValue = config.filter;
        _this._streamId = config.streamId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflarePipelineStream resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflarePipelineStream to import
    * @param importFromId The id of the existing DataCloudflarePipelineStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_stream#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflarePipelineStream to import is found
    */
    DataCloudflarePipelineStream.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_pipeline_stream", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflarePipelineStream.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePipelineStream.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflarePipelineStream.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStream.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStream.prototype, "endpoint", {
        // endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStream.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePipelineStream.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflarePipelineStream.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflarePipelineStream.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStream.prototype, "format", {
        get: function () {
            return this._format;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStream.prototype, "http", {
        get: function () {
            return this._http;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStream.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStream.prototype, "modifiedAt", {
        // modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStream.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStream.prototype, "schema", {
        get: function () {
            return this._schema;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStream.prototype, "streamId", {
        get: function () {
            return this.getStringAttribute('stream_id');
        },
        set: function (value) {
            this._streamId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePipelineStream.prototype.resetStreamId = function () {
        this._streamId = undefined;
    };
    Object.defineProperty(DataCloudflarePipelineStream.prototype, "streamIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._streamId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStream.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStream.prototype, "workerBinding", {
        get: function () {
            return this._workerBinding;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflarePipelineStream.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            filter: dataCloudflarePipelineStreamFilterToTerraform(this._filter.internalValue),
            stream_id: cdktf.stringToTerraform(this._streamId),
        };
    };
    DataCloudflarePipelineStream.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflarePipelineStreamFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflarePipelineStreamFilter",
            },
            stream_id: {
                value: cdktf.stringToHclTerraform(this._streamId),
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
    DataCloudflarePipelineStream.tfResourceType = "cloudflare_pipeline_stream";
    return DataCloudflarePipelineStream;
}(cdktf.TerraformDataSource));
exports.DataCloudflarePipelineStream = DataCloudflarePipelineStream;
