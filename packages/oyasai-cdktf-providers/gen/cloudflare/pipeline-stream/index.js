"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream
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
exports.PipelineStream = exports.PipelineStreamWorkerBindingOutputReference = exports.PipelineStreamSchemaOutputReference = exports.PipelineStreamSchemaFormatOutputReference = exports.PipelineStreamSchemaFieldsList = exports.PipelineStreamSchemaFieldsOutputReference = exports.PipelineStreamHttpOutputReference = exports.PipelineStreamHttpCorsOutputReference = exports.PipelineStreamFormatOutputReference = void 0;
exports.pipelineStreamFormatToTerraform = pipelineStreamFormatToTerraform;
exports.pipelineStreamFormatToHclTerraform = pipelineStreamFormatToHclTerraform;
exports.pipelineStreamHttpCorsToTerraform = pipelineStreamHttpCorsToTerraform;
exports.pipelineStreamHttpCorsToHclTerraform = pipelineStreamHttpCorsToHclTerraform;
exports.pipelineStreamHttpToTerraform = pipelineStreamHttpToTerraform;
exports.pipelineStreamHttpToHclTerraform = pipelineStreamHttpToHclTerraform;
exports.pipelineStreamSchemaFieldsToTerraform = pipelineStreamSchemaFieldsToTerraform;
exports.pipelineStreamSchemaFieldsToHclTerraform = pipelineStreamSchemaFieldsToHclTerraform;
exports.pipelineStreamSchemaFormatToTerraform = pipelineStreamSchemaFormatToTerraform;
exports.pipelineStreamSchemaFormatToHclTerraform = pipelineStreamSchemaFormatToHclTerraform;
exports.pipelineStreamSchemaToTerraform = pipelineStreamSchemaToTerraform;
exports.pipelineStreamSchemaToHclTerraform = pipelineStreamSchemaToHclTerraform;
exports.pipelineStreamWorkerBindingToTerraform = pipelineStreamWorkerBindingToTerraform;
exports.pipelineStreamWorkerBindingToHclTerraform = pipelineStreamWorkerBindingToHclTerraform;
var cdktf = require("cdktf");
function pipelineStreamFormatToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        compression: cdktf.stringToTerraform(struct.compression),
        decimal_encoding: cdktf.stringToTerraform(struct.decimalEncoding),
        row_group_bytes: cdktf.numberToTerraform(struct.rowGroupBytes),
        timestamp_format: cdktf.stringToTerraform(struct.timestampFormat),
        type: cdktf.stringToTerraform(struct.type),
        unstructured: cdktf.booleanToTerraform(struct.unstructured),
    };
}
function pipelineStreamFormatToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        compression: {
            value: cdktf.stringToHclTerraform(struct.compression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        decimal_encoding: {
            value: cdktf.stringToHclTerraform(struct.decimalEncoding),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        row_group_bytes: {
            value: cdktf.numberToHclTerraform(struct.rowGroupBytes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        timestamp_format: {
            value: cdktf.stringToHclTerraform(struct.timestampFormat),
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
        unstructured: {
            value: cdktf.booleanToHclTerraform(struct.unstructured),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var PipelineStreamFormatOutputReference = /** @class */ (function (_super) {
    __extends(PipelineStreamFormatOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PipelineStreamFormatOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PipelineStreamFormatOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._compression !== undefined) {
                hasAnyValues = true;
                internalValueResult.compression = this._compression;
            }
            if (this._decimalEncoding !== undefined) {
                hasAnyValues = true;
                internalValueResult.decimalEncoding = this._decimalEncoding;
            }
            if (this._rowGroupBytes !== undefined) {
                hasAnyValues = true;
                internalValueResult.rowGroupBytes = this._rowGroupBytes;
            }
            if (this._timestampFormat !== undefined) {
                hasAnyValues = true;
                internalValueResult.timestampFormat = this._timestampFormat;
            }
            if (this._type !== undefined) {
                hasAnyValues = true;
                internalValueResult.type = this._type;
            }
            if (this._unstructured !== undefined) {
                hasAnyValues = true;
                internalValueResult.unstructured = this._unstructured;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._compression = undefined;
                this._decimalEncoding = undefined;
                this._rowGroupBytes = undefined;
                this._timestampFormat = undefined;
                this._type = undefined;
                this._unstructured = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._compression = value.compression;
                this._decimalEncoding = value.decimalEncoding;
                this._rowGroupBytes = value.rowGroupBytes;
                this._timestampFormat = value.timestampFormat;
                this._type = value.type;
                this._unstructured = value.unstructured;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStreamFormatOutputReference.prototype, "compression", {
        get: function () {
            return this.getStringAttribute('compression');
        },
        set: function (value) {
            this._compression = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineStreamFormatOutputReference.prototype.resetCompression = function () {
        this._compression = undefined;
    };
    Object.defineProperty(PipelineStreamFormatOutputReference.prototype, "compressionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._compression;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStreamFormatOutputReference.prototype, "decimalEncoding", {
        get: function () {
            return this.getStringAttribute('decimal_encoding');
        },
        set: function (value) {
            this._decimalEncoding = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineStreamFormatOutputReference.prototype.resetDecimalEncoding = function () {
        this._decimalEncoding = undefined;
    };
    Object.defineProperty(PipelineStreamFormatOutputReference.prototype, "decimalEncodingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._decimalEncoding;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStreamFormatOutputReference.prototype, "rowGroupBytes", {
        get: function () {
            return this.getNumberAttribute('row_group_bytes');
        },
        set: function (value) {
            this._rowGroupBytes = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineStreamFormatOutputReference.prototype.resetRowGroupBytes = function () {
        this._rowGroupBytes = undefined;
    };
    Object.defineProperty(PipelineStreamFormatOutputReference.prototype, "rowGroupBytesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rowGroupBytes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStreamFormatOutputReference.prototype, "timestampFormat", {
        get: function () {
            return this.getStringAttribute('timestamp_format');
        },
        set: function (value) {
            this._timestampFormat = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineStreamFormatOutputReference.prototype.resetTimestampFormat = function () {
        this._timestampFormat = undefined;
    };
    Object.defineProperty(PipelineStreamFormatOutputReference.prototype, "timestampFormatInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timestampFormat;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStreamFormatOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStreamFormatOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStreamFormatOutputReference.prototype, "unstructured", {
        get: function () {
            return this.getBooleanAttribute('unstructured');
        },
        set: function (value) {
            this._unstructured = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineStreamFormatOutputReference.prototype.resetUnstructured = function () {
        this._unstructured = undefined;
    };
    Object.defineProperty(PipelineStreamFormatOutputReference.prototype, "unstructuredInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._unstructured;
        },
        enumerable: false,
        configurable: true
    });
    return PipelineStreamFormatOutputReference;
}(cdktf.ComplexObject));
exports.PipelineStreamFormatOutputReference = PipelineStreamFormatOutputReference;
function pipelineStreamHttpCorsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.origins),
    };
}
function pipelineStreamHttpCorsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        origins: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.origins),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var PipelineStreamHttpCorsOutputReference = /** @class */ (function (_super) {
    __extends(PipelineStreamHttpCorsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PipelineStreamHttpCorsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PipelineStreamHttpCorsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._origins !== undefined) {
                hasAnyValues = true;
                internalValueResult.origins = this._origins;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._origins = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._origins = value.origins;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStreamHttpCorsOutputReference.prototype, "origins", {
        get: function () {
            return this.getListAttribute('origins');
        },
        set: function (value) {
            this._origins = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineStreamHttpCorsOutputReference.prototype.resetOrigins = function () {
        this._origins = undefined;
    };
    Object.defineProperty(PipelineStreamHttpCorsOutputReference.prototype, "originsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._origins;
        },
        enumerable: false,
        configurable: true
    });
    return PipelineStreamHttpCorsOutputReference;
}(cdktf.ComplexObject));
exports.PipelineStreamHttpCorsOutputReference = PipelineStreamHttpCorsOutputReference;
function pipelineStreamHttpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        authentication: cdktf.booleanToTerraform(struct.authentication),
        cors: pipelineStreamHttpCorsToTerraform(struct.cors),
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
function pipelineStreamHttpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        authentication: {
            value: cdktf.booleanToHclTerraform(struct.authentication),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        cors: {
            value: pipelineStreamHttpCorsToHclTerraform(struct.cors),
            isBlock: true,
            type: "struct",
            storageClassType: "PipelineStreamHttpCors",
        },
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var PipelineStreamHttpOutputReference = /** @class */ (function (_super) {
    __extends(PipelineStreamHttpOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PipelineStreamHttpOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // cors - computed: true, optional: true, required: false
        _this._cors = new PipelineStreamHttpCorsOutputReference(_this, "cors");
        return _this;
    }
    Object.defineProperty(PipelineStreamHttpOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._authentication !== undefined) {
                hasAnyValues = true;
                internalValueResult.authentication = this._authentication;
            }
            if (((_a = this._cors) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.cors = (_b = this._cors) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._authentication = undefined;
                this._cors.internalValue = undefined;
                this._enabled = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._authentication = value.authentication;
                this._cors.internalValue = value.cors;
                this._enabled = value.enabled;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStreamHttpOutputReference.prototype, "authentication", {
        get: function () {
            return this.getBooleanAttribute('authentication');
        },
        set: function (value) {
            this._authentication = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStreamHttpOutputReference.prototype, "authenticationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authentication;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStreamHttpOutputReference.prototype, "cors", {
        get: function () {
            return this._cors;
        },
        enumerable: false,
        configurable: true
    });
    PipelineStreamHttpOutputReference.prototype.putCors = function (value) {
        this._cors.internalValue = value;
    };
    PipelineStreamHttpOutputReference.prototype.resetCors = function () {
        this._cors.internalValue = undefined;
    };
    Object.defineProperty(PipelineStreamHttpOutputReference.prototype, "corsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cors.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStreamHttpOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStreamHttpOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    return PipelineStreamHttpOutputReference;
}(cdktf.ComplexObject));
exports.PipelineStreamHttpOutputReference = PipelineStreamHttpOutputReference;
function pipelineStreamSchemaFieldsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        metadata_key: cdktf.stringToTerraform(struct.metadataKey),
        name: cdktf.stringToTerraform(struct.name),
        required: cdktf.booleanToTerraform(struct.required),
        sql_name: cdktf.stringToTerraform(struct.sqlName),
        type: cdktf.stringToTerraform(struct.type),
        unit: cdktf.stringToTerraform(struct.unit),
    };
}
function pipelineStreamSchemaFieldsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        metadata_key: {
            value: cdktf.stringToHclTerraform(struct.metadataKey),
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
        required: {
            value: cdktf.booleanToHclTerraform(struct.required),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        sql_name: {
            value: cdktf.stringToHclTerraform(struct.sqlName),
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
        unit: {
            value: cdktf.stringToHclTerraform(struct.unit),
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
var PipelineStreamSchemaFieldsOutputReference = /** @class */ (function (_super) {
    __extends(PipelineStreamSchemaFieldsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function PipelineStreamSchemaFieldsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PipelineStreamSchemaFieldsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._metadataKey !== undefined) {
                hasAnyValues = true;
                internalValueResult.metadataKey = this._metadataKey;
            }
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            if (this._required !== undefined) {
                hasAnyValues = true;
                internalValueResult.required = this._required;
            }
            if (this._sqlName !== undefined) {
                hasAnyValues = true;
                internalValueResult.sqlName = this._sqlName;
            }
            if (this._type !== undefined) {
                hasAnyValues = true;
                internalValueResult.type = this._type;
            }
            if (this._unit !== undefined) {
                hasAnyValues = true;
                internalValueResult.unit = this._unit;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._metadataKey = undefined;
                this._name = undefined;
                this._required = undefined;
                this._sqlName = undefined;
                this._type = undefined;
                this._unit = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._metadataKey = value.metadataKey;
                this._name = value.name;
                this._required = value.required;
                this._sqlName = value.sqlName;
                this._type = value.type;
                this._unit = value.unit;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStreamSchemaFieldsOutputReference.prototype, "metadataKey", {
        get: function () {
            return this.getStringAttribute('metadata_key');
        },
        set: function (value) {
            this._metadataKey = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineStreamSchemaFieldsOutputReference.prototype.resetMetadataKey = function () {
        this._metadataKey = undefined;
    };
    Object.defineProperty(PipelineStreamSchemaFieldsOutputReference.prototype, "metadataKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._metadataKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStreamSchemaFieldsOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineStreamSchemaFieldsOutputReference.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(PipelineStreamSchemaFieldsOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStreamSchemaFieldsOutputReference.prototype, "required", {
        get: function () {
            return this.getBooleanAttribute('required');
        },
        set: function (value) {
            this._required = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineStreamSchemaFieldsOutputReference.prototype.resetRequired = function () {
        this._required = undefined;
    };
    Object.defineProperty(PipelineStreamSchemaFieldsOutputReference.prototype, "requiredInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._required;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStreamSchemaFieldsOutputReference.prototype, "sqlName", {
        get: function () {
            return this.getStringAttribute('sql_name');
        },
        set: function (value) {
            this._sqlName = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineStreamSchemaFieldsOutputReference.prototype.resetSqlName = function () {
        this._sqlName = undefined;
    };
    Object.defineProperty(PipelineStreamSchemaFieldsOutputReference.prototype, "sqlNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sqlName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStreamSchemaFieldsOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStreamSchemaFieldsOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStreamSchemaFieldsOutputReference.prototype, "unit", {
        get: function () {
            return this.getStringAttribute('unit');
        },
        set: function (value) {
            this._unit = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineStreamSchemaFieldsOutputReference.prototype.resetUnit = function () {
        this._unit = undefined;
    };
    Object.defineProperty(PipelineStreamSchemaFieldsOutputReference.prototype, "unitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._unit;
        },
        enumerable: false,
        configurable: true
    });
    return PipelineStreamSchemaFieldsOutputReference;
}(cdktf.ComplexObject));
exports.PipelineStreamSchemaFieldsOutputReference = PipelineStreamSchemaFieldsOutputReference;
var PipelineStreamSchemaFieldsList = /** @class */ (function (_super) {
    __extends(PipelineStreamSchemaFieldsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function PipelineStreamSchemaFieldsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    PipelineStreamSchemaFieldsList.prototype.get = function (index) {
        return new PipelineStreamSchemaFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return PipelineStreamSchemaFieldsList;
}(cdktf.ComplexList));
exports.PipelineStreamSchemaFieldsList = PipelineStreamSchemaFieldsList;
function pipelineStreamSchemaFormatToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        compression: cdktf.stringToTerraform(struct.compression),
        decimal_encoding: cdktf.stringToTerraform(struct.decimalEncoding),
        row_group_bytes: cdktf.numberToTerraform(struct.rowGroupBytes),
        timestamp_format: cdktf.stringToTerraform(struct.timestampFormat),
        type: cdktf.stringToTerraform(struct.type),
        unstructured: cdktf.booleanToTerraform(struct.unstructured),
    };
}
function pipelineStreamSchemaFormatToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        compression: {
            value: cdktf.stringToHclTerraform(struct.compression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        decimal_encoding: {
            value: cdktf.stringToHclTerraform(struct.decimalEncoding),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        row_group_bytes: {
            value: cdktf.numberToHclTerraform(struct.rowGroupBytes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        timestamp_format: {
            value: cdktf.stringToHclTerraform(struct.timestampFormat),
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
        unstructured: {
            value: cdktf.booleanToHclTerraform(struct.unstructured),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var PipelineStreamSchemaFormatOutputReference = /** @class */ (function (_super) {
    __extends(PipelineStreamSchemaFormatOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PipelineStreamSchemaFormatOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PipelineStreamSchemaFormatOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._compression !== undefined) {
                hasAnyValues = true;
                internalValueResult.compression = this._compression;
            }
            if (this._decimalEncoding !== undefined) {
                hasAnyValues = true;
                internalValueResult.decimalEncoding = this._decimalEncoding;
            }
            if (this._rowGroupBytes !== undefined) {
                hasAnyValues = true;
                internalValueResult.rowGroupBytes = this._rowGroupBytes;
            }
            if (this._timestampFormat !== undefined) {
                hasAnyValues = true;
                internalValueResult.timestampFormat = this._timestampFormat;
            }
            if (this._type !== undefined) {
                hasAnyValues = true;
                internalValueResult.type = this._type;
            }
            if (this._unstructured !== undefined) {
                hasAnyValues = true;
                internalValueResult.unstructured = this._unstructured;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._compression = undefined;
                this._decimalEncoding = undefined;
                this._rowGroupBytes = undefined;
                this._timestampFormat = undefined;
                this._type = undefined;
                this._unstructured = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._compression = value.compression;
                this._decimalEncoding = value.decimalEncoding;
                this._rowGroupBytes = value.rowGroupBytes;
                this._timestampFormat = value.timestampFormat;
                this._type = value.type;
                this._unstructured = value.unstructured;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStreamSchemaFormatOutputReference.prototype, "compression", {
        get: function () {
            return this.getStringAttribute('compression');
        },
        set: function (value) {
            this._compression = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineStreamSchemaFormatOutputReference.prototype.resetCompression = function () {
        this._compression = undefined;
    };
    Object.defineProperty(PipelineStreamSchemaFormatOutputReference.prototype, "compressionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._compression;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStreamSchemaFormatOutputReference.prototype, "decimalEncoding", {
        get: function () {
            return this.getStringAttribute('decimal_encoding');
        },
        set: function (value) {
            this._decimalEncoding = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineStreamSchemaFormatOutputReference.prototype.resetDecimalEncoding = function () {
        this._decimalEncoding = undefined;
    };
    Object.defineProperty(PipelineStreamSchemaFormatOutputReference.prototype, "decimalEncodingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._decimalEncoding;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStreamSchemaFormatOutputReference.prototype, "rowGroupBytes", {
        get: function () {
            return this.getNumberAttribute('row_group_bytes');
        },
        set: function (value) {
            this._rowGroupBytes = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineStreamSchemaFormatOutputReference.prototype.resetRowGroupBytes = function () {
        this._rowGroupBytes = undefined;
    };
    Object.defineProperty(PipelineStreamSchemaFormatOutputReference.prototype, "rowGroupBytesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rowGroupBytes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStreamSchemaFormatOutputReference.prototype, "timestampFormat", {
        get: function () {
            return this.getStringAttribute('timestamp_format');
        },
        set: function (value) {
            this._timestampFormat = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineStreamSchemaFormatOutputReference.prototype.resetTimestampFormat = function () {
        this._timestampFormat = undefined;
    };
    Object.defineProperty(PipelineStreamSchemaFormatOutputReference.prototype, "timestampFormatInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timestampFormat;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStreamSchemaFormatOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStreamSchemaFormatOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStreamSchemaFormatOutputReference.prototype, "unstructured", {
        get: function () {
            return this.getBooleanAttribute('unstructured');
        },
        set: function (value) {
            this._unstructured = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineStreamSchemaFormatOutputReference.prototype.resetUnstructured = function () {
        this._unstructured = undefined;
    };
    Object.defineProperty(PipelineStreamSchemaFormatOutputReference.prototype, "unstructuredInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._unstructured;
        },
        enumerable: false,
        configurable: true
    });
    return PipelineStreamSchemaFormatOutputReference;
}(cdktf.ComplexObject));
exports.PipelineStreamSchemaFormatOutputReference = PipelineStreamSchemaFormatOutputReference;
function pipelineStreamSchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fields: cdktf.listMapper(pipelineStreamSchemaFieldsToTerraform, false)(struct.fields),
        format: pipelineStreamSchemaFormatToTerraform(struct.format),
        inferred: cdktf.booleanToTerraform(struct.inferred),
    };
}
function pipelineStreamSchemaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        fields: {
            value: cdktf.listMapperHcl(pipelineStreamSchemaFieldsToHclTerraform, false)(struct.fields),
            isBlock: true,
            type: "list",
            storageClassType: "PipelineStreamSchemaFieldsList",
        },
        format: {
            value: pipelineStreamSchemaFormatToHclTerraform(struct.format),
            isBlock: true,
            type: "struct",
            storageClassType: "PipelineStreamSchemaFormat",
        },
        inferred: {
            value: cdktf.booleanToHclTerraform(struct.inferred),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var PipelineStreamSchemaOutputReference = /** @class */ (function (_super) {
    __extends(PipelineStreamSchemaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PipelineStreamSchemaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // fields - computed: false, optional: true, required: false
        _this._fields = new PipelineStreamSchemaFieldsList(_this, "fields", false);
        // format - computed: false, optional: true, required: false
        _this._format = new PipelineStreamSchemaFormatOutputReference(_this, "format");
        return _this;
    }
    Object.defineProperty(PipelineStreamSchemaOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._fields) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.fields = (_b = this._fields) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._format) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.format = (_d = this._format) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (this._inferred !== undefined) {
                hasAnyValues = true;
                internalValueResult.inferred = this._inferred;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._fields.internalValue = undefined;
                this._format.internalValue = undefined;
                this._inferred = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._fields.internalValue = value.fields;
                this._format.internalValue = value.format;
                this._inferred = value.inferred;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStreamSchemaOutputReference.prototype, "fields", {
        get: function () {
            return this._fields;
        },
        enumerable: false,
        configurable: true
    });
    PipelineStreamSchemaOutputReference.prototype.putFields = function (value) {
        this._fields.internalValue = value;
    };
    PipelineStreamSchemaOutputReference.prototype.resetFields = function () {
        this._fields.internalValue = undefined;
    };
    Object.defineProperty(PipelineStreamSchemaOutputReference.prototype, "fieldsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fields.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStreamSchemaOutputReference.prototype, "format", {
        get: function () {
            return this._format;
        },
        enumerable: false,
        configurable: true
    });
    PipelineStreamSchemaOutputReference.prototype.putFormat = function (value) {
        this._format.internalValue = value;
    };
    PipelineStreamSchemaOutputReference.prototype.resetFormat = function () {
        this._format.internalValue = undefined;
    };
    Object.defineProperty(PipelineStreamSchemaOutputReference.prototype, "formatInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._format.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStreamSchemaOutputReference.prototype, "inferred", {
        get: function () {
            return this.getBooleanAttribute('inferred');
        },
        set: function (value) {
            this._inferred = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineStreamSchemaOutputReference.prototype.resetInferred = function () {
        this._inferred = undefined;
    };
    Object.defineProperty(PipelineStreamSchemaOutputReference.prototype, "inferredInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._inferred;
        },
        enumerable: false,
        configurable: true
    });
    return PipelineStreamSchemaOutputReference;
}(cdktf.ComplexObject));
exports.PipelineStreamSchemaOutputReference = PipelineStreamSchemaOutputReference;
function pipelineStreamWorkerBindingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
function pipelineStreamWorkerBindingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var PipelineStreamWorkerBindingOutputReference = /** @class */ (function (_super) {
    __extends(PipelineStreamWorkerBindingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PipelineStreamWorkerBindingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PipelineStreamWorkerBindingOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._enabled = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._enabled = value.enabled;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStreamWorkerBindingOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStreamWorkerBindingOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    return PipelineStreamWorkerBindingOutputReference;
}(cdktf.ComplexObject));
exports.PipelineStreamWorkerBindingOutputReference = PipelineStreamWorkerBindingOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream cloudflare_pipeline_stream}
*/
var PipelineStream = /** @class */ (function (_super) {
    __extends(PipelineStream, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream cloudflare_pipeline_stream} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PipelineStreamConfig
    */
    function PipelineStream(scope, id, config) {
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
        // format - computed: false, optional: true, required: false
        _this._format = new PipelineStreamFormatOutputReference(_this, "format");
        // http - computed: true, optional: true, required: false
        _this._http = new PipelineStreamHttpOutputReference(_this, "http");
        // schema - computed: false, optional: true, required: false
        _this._schema = new PipelineStreamSchemaOutputReference(_this, "schema");
        // worker_binding - computed: true, optional: true, required: false
        _this._workerBinding = new PipelineStreamWorkerBindingOutputReference(_this, "worker_binding");
        _this._accountId = config.accountId;
        _this._format.internalValue = config.format;
        _this._http.internalValue = config.http;
        _this._name = config.name;
        _this._schema.internalValue = config.schema;
        _this._workerBinding.internalValue = config.workerBinding;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a PipelineStream resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the PipelineStream to import
    * @param importFromId The id of the existing PipelineStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_stream#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the PipelineStream to import is found
    */
    PipelineStream.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_pipeline_stream", importId: importFromId, provider: provider });
    };
    Object.defineProperty(PipelineStream.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineStream.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(PipelineStream.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStream.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStream.prototype, "endpoint", {
        // endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStream.prototype, "format", {
        get: function () {
            return this._format;
        },
        enumerable: false,
        configurable: true
    });
    PipelineStream.prototype.putFormat = function (value) {
        this._format.internalValue = value;
    };
    PipelineStream.prototype.resetFormat = function () {
        this._format.internalValue = undefined;
    };
    Object.defineProperty(PipelineStream.prototype, "formatInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._format.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStream.prototype, "http", {
        get: function () {
            return this._http;
        },
        enumerable: false,
        configurable: true
    });
    PipelineStream.prototype.putHttp = function (value) {
        this._http.internalValue = value;
    };
    PipelineStream.prototype.resetHttp = function () {
        this._http.internalValue = undefined;
    };
    Object.defineProperty(PipelineStream.prototype, "httpInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._http.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStream.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStream.prototype, "modifiedAt", {
        // modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStream.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStream.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStream.prototype, "schema", {
        get: function () {
            return this._schema;
        },
        enumerable: false,
        configurable: true
    });
    PipelineStream.prototype.putSchema = function (value) {
        this._schema.internalValue = value;
    };
    PipelineStream.prototype.resetSchema = function () {
        this._schema.internalValue = undefined;
    };
    Object.defineProperty(PipelineStream.prototype, "schemaInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._schema.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStream.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineStream.prototype, "workerBinding", {
        get: function () {
            return this._workerBinding;
        },
        enumerable: false,
        configurable: true
    });
    PipelineStream.prototype.putWorkerBinding = function (value) {
        this._workerBinding.internalValue = value;
    };
    PipelineStream.prototype.resetWorkerBinding = function () {
        this._workerBinding.internalValue = undefined;
    };
    Object.defineProperty(PipelineStream.prototype, "workerBindingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._workerBinding.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    PipelineStream.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            format: pipelineStreamFormatToTerraform(this._format.internalValue),
            http: pipelineStreamHttpToTerraform(this._http.internalValue),
            name: cdktf.stringToTerraform(this._name),
            schema: pipelineStreamSchemaToTerraform(this._schema.internalValue),
            worker_binding: pipelineStreamWorkerBindingToTerraform(this._workerBinding.internalValue),
        };
    };
    PipelineStream.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            format: {
                value: pipelineStreamFormatToHclTerraform(this._format.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "PipelineStreamFormat",
            },
            http: {
                value: pipelineStreamHttpToHclTerraform(this._http.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "PipelineStreamHttp",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            schema: {
                value: pipelineStreamSchemaToHclTerraform(this._schema.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "PipelineStreamSchema",
            },
            worker_binding: {
                value: pipelineStreamWorkerBindingToHclTerraform(this._workerBinding.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "PipelineStreamWorkerBinding",
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
    PipelineStream.tfResourceType = "cloudflare_pipeline_stream";
    return PipelineStream;
}(cdktf.TerraformResource));
exports.PipelineStream = PipelineStream;
