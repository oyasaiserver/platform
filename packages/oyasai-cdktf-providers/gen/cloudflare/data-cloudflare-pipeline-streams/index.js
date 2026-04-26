"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_streams
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
exports.DataCloudflarePipelineStreams = exports.DataCloudflarePipelineStreamsResultList = exports.DataCloudflarePipelineStreamsResultOutputReference = exports.DataCloudflarePipelineStreamsResultWorkerBindingOutputReference = exports.DataCloudflarePipelineStreamsResultSchemaOutputReference = exports.DataCloudflarePipelineStreamsResultSchemaFormatOutputReference = exports.DataCloudflarePipelineStreamsResultSchemaFieldsList = exports.DataCloudflarePipelineStreamsResultSchemaFieldsOutputReference = exports.DataCloudflarePipelineStreamsResultHttpOutputReference = exports.DataCloudflarePipelineStreamsResultHttpCorsOutputReference = exports.DataCloudflarePipelineStreamsResultFormatOutputReference = void 0;
exports.dataCloudflarePipelineStreamsResultFormatToTerraform = dataCloudflarePipelineStreamsResultFormatToTerraform;
exports.dataCloudflarePipelineStreamsResultFormatToHclTerraform = dataCloudflarePipelineStreamsResultFormatToHclTerraform;
exports.dataCloudflarePipelineStreamsResultHttpCorsToTerraform = dataCloudflarePipelineStreamsResultHttpCorsToTerraform;
exports.dataCloudflarePipelineStreamsResultHttpCorsToHclTerraform = dataCloudflarePipelineStreamsResultHttpCorsToHclTerraform;
exports.dataCloudflarePipelineStreamsResultHttpToTerraform = dataCloudflarePipelineStreamsResultHttpToTerraform;
exports.dataCloudflarePipelineStreamsResultHttpToHclTerraform = dataCloudflarePipelineStreamsResultHttpToHclTerraform;
exports.dataCloudflarePipelineStreamsResultSchemaFieldsToTerraform = dataCloudflarePipelineStreamsResultSchemaFieldsToTerraform;
exports.dataCloudflarePipelineStreamsResultSchemaFieldsToHclTerraform = dataCloudflarePipelineStreamsResultSchemaFieldsToHclTerraform;
exports.dataCloudflarePipelineStreamsResultSchemaFormatToTerraform = dataCloudflarePipelineStreamsResultSchemaFormatToTerraform;
exports.dataCloudflarePipelineStreamsResultSchemaFormatToHclTerraform = dataCloudflarePipelineStreamsResultSchemaFormatToHclTerraform;
exports.dataCloudflarePipelineStreamsResultSchemaToTerraform = dataCloudflarePipelineStreamsResultSchemaToTerraform;
exports.dataCloudflarePipelineStreamsResultSchemaToHclTerraform = dataCloudflarePipelineStreamsResultSchemaToHclTerraform;
exports.dataCloudflarePipelineStreamsResultWorkerBindingToTerraform = dataCloudflarePipelineStreamsResultWorkerBindingToTerraform;
exports.dataCloudflarePipelineStreamsResultWorkerBindingToHclTerraform = dataCloudflarePipelineStreamsResultWorkerBindingToHclTerraform;
exports.dataCloudflarePipelineStreamsResultToTerraform = dataCloudflarePipelineStreamsResultToTerraform;
exports.dataCloudflarePipelineStreamsResultToHclTerraform = dataCloudflarePipelineStreamsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflarePipelineStreamsResultFormatToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePipelineStreamsResultFormatToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePipelineStreamsResultFormatOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineStreamsResultFormatOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePipelineStreamsResultFormatOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePipelineStreamsResultFormatOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePipelineStreamsResultFormatOutputReference.prototype, "compression", {
        // compression - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('compression');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamsResultFormatOutputReference.prototype, "decimalEncoding", {
        // decimal_encoding - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('decimal_encoding');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamsResultFormatOutputReference.prototype, "rowGroupBytes", {
        // row_group_bytes - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('row_group_bytes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamsResultFormatOutputReference.prototype, "timestampFormat", {
        // timestamp_format - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('timestamp_format');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamsResultFormatOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamsResultFormatOutputReference.prototype, "unstructured", {
        // unstructured - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('unstructured');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePipelineStreamsResultFormatOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePipelineStreamsResultFormatOutputReference = DataCloudflarePipelineStreamsResultFormatOutputReference;
function dataCloudflarePipelineStreamsResultHttpCorsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePipelineStreamsResultHttpCorsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePipelineStreamsResultHttpCorsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineStreamsResultHttpCorsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePipelineStreamsResultHttpCorsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePipelineStreamsResultHttpCorsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePipelineStreamsResultHttpCorsOutputReference.prototype, "origins", {
        // origins - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('origins');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePipelineStreamsResultHttpCorsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePipelineStreamsResultHttpCorsOutputReference = DataCloudflarePipelineStreamsResultHttpCorsOutputReference;
function dataCloudflarePipelineStreamsResultHttpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePipelineStreamsResultHttpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePipelineStreamsResultHttpOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineStreamsResultHttpOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePipelineStreamsResultHttpOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // cors - computed: true, optional: false, required: false
        _this._cors = new DataCloudflarePipelineStreamsResultHttpCorsOutputReference(_this, "cors");
        return _this;
    }
    Object.defineProperty(DataCloudflarePipelineStreamsResultHttpOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePipelineStreamsResultHttpOutputReference.prototype, "authentication", {
        // authentication - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('authentication');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamsResultHttpOutputReference.prototype, "cors", {
        get: function () {
            return this._cors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamsResultHttpOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePipelineStreamsResultHttpOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePipelineStreamsResultHttpOutputReference = DataCloudflarePipelineStreamsResultHttpOutputReference;
function dataCloudflarePipelineStreamsResultSchemaFieldsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePipelineStreamsResultSchemaFieldsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePipelineStreamsResultSchemaFieldsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineStreamsResultSchemaFieldsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflarePipelineStreamsResultSchemaFieldsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePipelineStreamsResultSchemaFieldsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePipelineStreamsResultSchemaFieldsOutputReference.prototype, "metadataKey", {
        // metadata_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('metadata_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamsResultSchemaFieldsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamsResultSchemaFieldsOutputReference.prototype, "required", {
        // required - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('required');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamsResultSchemaFieldsOutputReference.prototype, "sqlName", {
        // sql_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sql_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamsResultSchemaFieldsOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamsResultSchemaFieldsOutputReference.prototype, "unit", {
        // unit - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('unit');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePipelineStreamsResultSchemaFieldsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePipelineStreamsResultSchemaFieldsOutputReference = DataCloudflarePipelineStreamsResultSchemaFieldsOutputReference;
var DataCloudflarePipelineStreamsResultSchemaFieldsList = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineStreamsResultSchemaFieldsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflarePipelineStreamsResultSchemaFieldsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflarePipelineStreamsResultSchemaFieldsList.prototype.get = function (index) {
        return new DataCloudflarePipelineStreamsResultSchemaFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflarePipelineStreamsResultSchemaFieldsList;
}(cdktf.ComplexList));
exports.DataCloudflarePipelineStreamsResultSchemaFieldsList = DataCloudflarePipelineStreamsResultSchemaFieldsList;
function dataCloudflarePipelineStreamsResultSchemaFormatToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePipelineStreamsResultSchemaFormatToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePipelineStreamsResultSchemaFormatOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineStreamsResultSchemaFormatOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePipelineStreamsResultSchemaFormatOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePipelineStreamsResultSchemaFormatOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePipelineStreamsResultSchemaFormatOutputReference.prototype, "compression", {
        // compression - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('compression');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamsResultSchemaFormatOutputReference.prototype, "decimalEncoding", {
        // decimal_encoding - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('decimal_encoding');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamsResultSchemaFormatOutputReference.prototype, "rowGroupBytes", {
        // row_group_bytes - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('row_group_bytes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamsResultSchemaFormatOutputReference.prototype, "timestampFormat", {
        // timestamp_format - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('timestamp_format');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamsResultSchemaFormatOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamsResultSchemaFormatOutputReference.prototype, "unstructured", {
        // unstructured - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('unstructured');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePipelineStreamsResultSchemaFormatOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePipelineStreamsResultSchemaFormatOutputReference = DataCloudflarePipelineStreamsResultSchemaFormatOutputReference;
function dataCloudflarePipelineStreamsResultSchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePipelineStreamsResultSchemaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePipelineStreamsResultSchemaOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineStreamsResultSchemaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePipelineStreamsResultSchemaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // fields - computed: true, optional: false, required: false
        _this._fields = new DataCloudflarePipelineStreamsResultSchemaFieldsList(_this, "fields", false);
        // format - computed: true, optional: false, required: false
        _this._format = new DataCloudflarePipelineStreamsResultSchemaFormatOutputReference(_this, "format");
        return _this;
    }
    Object.defineProperty(DataCloudflarePipelineStreamsResultSchemaOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePipelineStreamsResultSchemaOutputReference.prototype, "fields", {
        get: function () {
            return this._fields;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamsResultSchemaOutputReference.prototype, "format", {
        get: function () {
            return this._format;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamsResultSchemaOutputReference.prototype, "inferred", {
        // inferred - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('inferred');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePipelineStreamsResultSchemaOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePipelineStreamsResultSchemaOutputReference = DataCloudflarePipelineStreamsResultSchemaOutputReference;
function dataCloudflarePipelineStreamsResultWorkerBindingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePipelineStreamsResultWorkerBindingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePipelineStreamsResultWorkerBindingOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineStreamsResultWorkerBindingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePipelineStreamsResultWorkerBindingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePipelineStreamsResultWorkerBindingOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePipelineStreamsResultWorkerBindingOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePipelineStreamsResultWorkerBindingOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePipelineStreamsResultWorkerBindingOutputReference = DataCloudflarePipelineStreamsResultWorkerBindingOutputReference;
function dataCloudflarePipelineStreamsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePipelineStreamsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePipelineStreamsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineStreamsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflarePipelineStreamsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // format - computed: true, optional: false, required: false
        _this._format = new DataCloudflarePipelineStreamsResultFormatOutputReference(_this, "format");
        // http - computed: true, optional: false, required: false
        _this._http = new DataCloudflarePipelineStreamsResultHttpOutputReference(_this, "http");
        // schema - computed: true, optional: false, required: false
        _this._schema = new DataCloudflarePipelineStreamsResultSchemaOutputReference(_this, "schema");
        // worker_binding - computed: true, optional: false, required: false
        _this._workerBinding = new DataCloudflarePipelineStreamsResultWorkerBindingOutputReference(_this, "worker_binding");
        return _this;
    }
    Object.defineProperty(DataCloudflarePipelineStreamsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePipelineStreamsResultOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamsResultOutputReference.prototype, "endpoint", {
        // endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamsResultOutputReference.prototype, "format", {
        get: function () {
            return this._format;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamsResultOutputReference.prototype, "http", {
        get: function () {
            return this._http;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamsResultOutputReference.prototype, "modifiedAt", {
        // modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamsResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamsResultOutputReference.prototype, "schema", {
        get: function () {
            return this._schema;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamsResultOutputReference.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreamsResultOutputReference.prototype, "workerBinding", {
        get: function () {
            return this._workerBinding;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePipelineStreamsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePipelineStreamsResultOutputReference = DataCloudflarePipelineStreamsResultOutputReference;
var DataCloudflarePipelineStreamsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineStreamsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflarePipelineStreamsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflarePipelineStreamsResultList.prototype.get = function (index) {
        return new DataCloudflarePipelineStreamsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflarePipelineStreamsResultList;
}(cdktf.ComplexList));
exports.DataCloudflarePipelineStreamsResultList = DataCloudflarePipelineStreamsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_streams cloudflare_pipeline_streams}
*/
var DataCloudflarePipelineStreams = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineStreams, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_streams cloudflare_pipeline_streams} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflarePipelineStreamsConfig = {}
    */
    function DataCloudflarePipelineStreams(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_pipeline_streams',
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
        // result - computed: true, optional: false, required: false
        _this._result = new DataCloudflarePipelineStreamsResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        _this._pipelineId = config.pipelineId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflarePipelineStreams resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflarePipelineStreams to import
    * @param importFromId The id of the existing DataCloudflarePipelineStreams that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_streams#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflarePipelineStreams to import is found
    */
    DataCloudflarePipelineStreams.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_pipeline_streams", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflarePipelineStreams.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePipelineStreams.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflarePipelineStreams.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreams.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePipelineStreams.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflarePipelineStreams.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreams.prototype, "pipelineId", {
        get: function () {
            return this.getStringAttribute('pipeline_id');
        },
        set: function (value) {
            this._pipelineId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePipelineStreams.prototype.resetPipelineId = function () {
        this._pipelineId = undefined;
    };
    Object.defineProperty(DataCloudflarePipelineStreams.prototype, "pipelineIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pipelineId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineStreams.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflarePipelineStreams.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
            pipeline_id: cdktf.stringToTerraform(this._pipelineId),
        };
    };
    DataCloudflarePipelineStreams.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            pipeline_id: {
                value: cdktf.stringToHclTerraform(this._pipelineId),
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
    DataCloudflarePipelineStreams.tfResourceType = "cloudflare_pipeline_streams";
    return DataCloudflarePipelineStreams;
}(cdktf.TerraformDataSource));
exports.DataCloudflarePipelineStreams = DataCloudflarePipelineStreams;
