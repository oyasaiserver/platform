"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_sink
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
exports.DataCloudflarePipelineSink = exports.DataCloudflarePipelineSinkSchemaOutputReference = exports.DataCloudflarePipelineSinkSchemaFormatOutputReference = exports.DataCloudflarePipelineSinkSchemaFieldsList = exports.DataCloudflarePipelineSinkSchemaFieldsOutputReference = exports.DataCloudflarePipelineSinkFormatOutputReference = exports.DataCloudflarePipelineSinkFilterOutputReference = exports.DataCloudflarePipelineSinkConfigAOutputReference = exports.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference = exports.DataCloudflarePipelineSinkConfigPartitioningOutputReference = exports.DataCloudflarePipelineSinkConfigFileNamingOutputReference = void 0;
exports.dataCloudflarePipelineSinkConfigFileNamingToTerraform = dataCloudflarePipelineSinkConfigFileNamingToTerraform;
exports.dataCloudflarePipelineSinkConfigFileNamingToHclTerraform = dataCloudflarePipelineSinkConfigFileNamingToHclTerraform;
exports.dataCloudflarePipelineSinkConfigPartitioningToTerraform = dataCloudflarePipelineSinkConfigPartitioningToTerraform;
exports.dataCloudflarePipelineSinkConfigPartitioningToHclTerraform = dataCloudflarePipelineSinkConfigPartitioningToHclTerraform;
exports.dataCloudflarePipelineSinkConfigRollingPolicyToTerraform = dataCloudflarePipelineSinkConfigRollingPolicyToTerraform;
exports.dataCloudflarePipelineSinkConfigRollingPolicyToHclTerraform = dataCloudflarePipelineSinkConfigRollingPolicyToHclTerraform;
exports.dataCloudflarePipelineSinkConfigAToTerraform = dataCloudflarePipelineSinkConfigAToTerraform;
exports.dataCloudflarePipelineSinkConfigAToHclTerraform = dataCloudflarePipelineSinkConfigAToHclTerraform;
exports.dataCloudflarePipelineSinkFilterToTerraform = dataCloudflarePipelineSinkFilterToTerraform;
exports.dataCloudflarePipelineSinkFilterToHclTerraform = dataCloudflarePipelineSinkFilterToHclTerraform;
exports.dataCloudflarePipelineSinkFormatToTerraform = dataCloudflarePipelineSinkFormatToTerraform;
exports.dataCloudflarePipelineSinkFormatToHclTerraform = dataCloudflarePipelineSinkFormatToHclTerraform;
exports.dataCloudflarePipelineSinkSchemaFieldsToTerraform = dataCloudflarePipelineSinkSchemaFieldsToTerraform;
exports.dataCloudflarePipelineSinkSchemaFieldsToHclTerraform = dataCloudflarePipelineSinkSchemaFieldsToHclTerraform;
exports.dataCloudflarePipelineSinkSchemaFormatToTerraform = dataCloudflarePipelineSinkSchemaFormatToTerraform;
exports.dataCloudflarePipelineSinkSchemaFormatToHclTerraform = dataCloudflarePipelineSinkSchemaFormatToHclTerraform;
exports.dataCloudflarePipelineSinkSchemaToTerraform = dataCloudflarePipelineSinkSchemaToTerraform;
exports.dataCloudflarePipelineSinkSchemaToHclTerraform = dataCloudflarePipelineSinkSchemaToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflarePipelineSinkConfigFileNamingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePipelineSinkConfigFileNamingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePipelineSinkConfigFileNamingOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineSinkConfigFileNamingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePipelineSinkConfigFileNamingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePipelineSinkConfigFileNamingOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePipelineSinkConfigFileNamingOutputReference.prototype, "prefix", {
        // prefix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('prefix');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinkConfigFileNamingOutputReference.prototype, "strategy", {
        // strategy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('strategy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinkConfigFileNamingOutputReference.prototype, "suffix", {
        // suffix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('suffix');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePipelineSinkConfigFileNamingOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePipelineSinkConfigFileNamingOutputReference = DataCloudflarePipelineSinkConfigFileNamingOutputReference;
function dataCloudflarePipelineSinkConfigPartitioningToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePipelineSinkConfigPartitioningToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePipelineSinkConfigPartitioningOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineSinkConfigPartitioningOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePipelineSinkConfigPartitioningOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePipelineSinkConfigPartitioningOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePipelineSinkConfigPartitioningOutputReference.prototype, "timePattern", {
        // time_pattern - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('time_pattern');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePipelineSinkConfigPartitioningOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePipelineSinkConfigPartitioningOutputReference = DataCloudflarePipelineSinkConfigPartitioningOutputReference;
function dataCloudflarePipelineSinkConfigRollingPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePipelineSinkConfigRollingPolicyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePipelineSinkConfigRollingPolicyOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineSinkConfigRollingPolicyOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePipelineSinkConfigRollingPolicyOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.prototype, "fileSizeBytes", {
        // file_size_bytes - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('file_size_bytes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.prototype, "inactivitySeconds", {
        // inactivity_seconds - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('inactivity_seconds');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.prototype, "intervalSeconds", {
        // interval_seconds - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('interval_seconds');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePipelineSinkConfigRollingPolicyOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference = DataCloudflarePipelineSinkConfigRollingPolicyOutputReference;
function dataCloudflarePipelineSinkConfigAToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePipelineSinkConfigAToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePipelineSinkConfigAOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineSinkConfigAOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePipelineSinkConfigAOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // file_naming - computed: true, optional: false, required: false
        _this._fileNaming = new DataCloudflarePipelineSinkConfigFileNamingOutputReference(_this, "file_naming");
        // partitioning - computed: true, optional: false, required: false
        _this._partitioning = new DataCloudflarePipelineSinkConfigPartitioningOutputReference(_this, "partitioning");
        // rolling_policy - computed: true, optional: false, required: false
        _this._rollingPolicy = new DataCloudflarePipelineSinkConfigRollingPolicyOutputReference(_this, "rolling_policy");
        return _this;
    }
    Object.defineProperty(DataCloudflarePipelineSinkConfigAOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePipelineSinkConfigAOutputReference.prototype, "accountId", {
        // account_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('account_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinkConfigAOutputReference.prototype, "bucket", {
        // bucket - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bucket');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinkConfigAOutputReference.prototype, "fileNaming", {
        get: function () {
            return this._fileNaming;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinkConfigAOutputReference.prototype, "jurisdiction", {
        // jurisdiction - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('jurisdiction');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinkConfigAOutputReference.prototype, "namespace", {
        // namespace - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('namespace');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinkConfigAOutputReference.prototype, "partitioning", {
        get: function () {
            return this._partitioning;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinkConfigAOutputReference.prototype, "path", {
        // path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('path');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinkConfigAOutputReference.prototype, "rollingPolicy", {
        get: function () {
            return this._rollingPolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinkConfigAOutputReference.prototype, "tableName", {
        // table_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('table_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePipelineSinkConfigAOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePipelineSinkConfigAOutputReference = DataCloudflarePipelineSinkConfigAOutputReference;
function dataCloudflarePipelineSinkFilterToTerraform(struct) {
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
function dataCloudflarePipelineSinkFilterToHclTerraform(struct) {
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
var DataCloudflarePipelineSinkFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineSinkFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePipelineSinkFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePipelineSinkFilterOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePipelineSinkFilterOutputReference.prototype, "pipelineId", {
        get: function () {
            return this.getStringAttribute('pipeline_id');
        },
        set: function (value) {
            this._pipelineId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePipelineSinkFilterOutputReference.prototype.resetPipelineId = function () {
        this._pipelineId = undefined;
    };
    Object.defineProperty(DataCloudflarePipelineSinkFilterOutputReference.prototype, "pipelineIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pipelineId;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePipelineSinkFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePipelineSinkFilterOutputReference = DataCloudflarePipelineSinkFilterOutputReference;
function dataCloudflarePipelineSinkFormatToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePipelineSinkFormatToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePipelineSinkFormatOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineSinkFormatOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePipelineSinkFormatOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePipelineSinkFormatOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePipelineSinkFormatOutputReference.prototype, "compression", {
        // compression - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('compression');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinkFormatOutputReference.prototype, "decimalEncoding", {
        // decimal_encoding - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('decimal_encoding');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinkFormatOutputReference.prototype, "rowGroupBytes", {
        // row_group_bytes - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('row_group_bytes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinkFormatOutputReference.prototype, "timestampFormat", {
        // timestamp_format - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('timestamp_format');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinkFormatOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinkFormatOutputReference.prototype, "unstructured", {
        // unstructured - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('unstructured');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePipelineSinkFormatOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePipelineSinkFormatOutputReference = DataCloudflarePipelineSinkFormatOutputReference;
function dataCloudflarePipelineSinkSchemaFieldsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePipelineSinkSchemaFieldsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePipelineSinkSchemaFieldsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineSinkSchemaFieldsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflarePipelineSinkSchemaFieldsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePipelineSinkSchemaFieldsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePipelineSinkSchemaFieldsOutputReference.prototype, "metadataKey", {
        // metadata_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('metadata_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinkSchemaFieldsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinkSchemaFieldsOutputReference.prototype, "required", {
        // required - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('required');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinkSchemaFieldsOutputReference.prototype, "sqlName", {
        // sql_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sql_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinkSchemaFieldsOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinkSchemaFieldsOutputReference.prototype, "unit", {
        // unit - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('unit');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePipelineSinkSchemaFieldsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePipelineSinkSchemaFieldsOutputReference = DataCloudflarePipelineSinkSchemaFieldsOutputReference;
var DataCloudflarePipelineSinkSchemaFieldsList = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineSinkSchemaFieldsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflarePipelineSinkSchemaFieldsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflarePipelineSinkSchemaFieldsList.prototype.get = function (index) {
        return new DataCloudflarePipelineSinkSchemaFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflarePipelineSinkSchemaFieldsList;
}(cdktf.ComplexList));
exports.DataCloudflarePipelineSinkSchemaFieldsList = DataCloudflarePipelineSinkSchemaFieldsList;
function dataCloudflarePipelineSinkSchemaFormatToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePipelineSinkSchemaFormatToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePipelineSinkSchemaFormatOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineSinkSchemaFormatOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePipelineSinkSchemaFormatOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePipelineSinkSchemaFormatOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePipelineSinkSchemaFormatOutputReference.prototype, "compression", {
        // compression - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('compression');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinkSchemaFormatOutputReference.prototype, "decimalEncoding", {
        // decimal_encoding - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('decimal_encoding');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinkSchemaFormatOutputReference.prototype, "rowGroupBytes", {
        // row_group_bytes - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('row_group_bytes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinkSchemaFormatOutputReference.prototype, "timestampFormat", {
        // timestamp_format - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('timestamp_format');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinkSchemaFormatOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinkSchemaFormatOutputReference.prototype, "unstructured", {
        // unstructured - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('unstructured');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePipelineSinkSchemaFormatOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePipelineSinkSchemaFormatOutputReference = DataCloudflarePipelineSinkSchemaFormatOutputReference;
function dataCloudflarePipelineSinkSchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePipelineSinkSchemaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePipelineSinkSchemaOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineSinkSchemaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePipelineSinkSchemaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // fields - computed: true, optional: false, required: false
        _this._fields = new DataCloudflarePipelineSinkSchemaFieldsList(_this, "fields", false);
        // format - computed: true, optional: false, required: false
        _this._format = new DataCloudflarePipelineSinkSchemaFormatOutputReference(_this, "format");
        return _this;
    }
    Object.defineProperty(DataCloudflarePipelineSinkSchemaOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePipelineSinkSchemaOutputReference.prototype, "fields", {
        get: function () {
            return this._fields;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinkSchemaOutputReference.prototype, "format", {
        get: function () {
            return this._format;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinkSchemaOutputReference.prototype, "inferred", {
        // inferred - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('inferred');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePipelineSinkSchemaOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePipelineSinkSchemaOutputReference = DataCloudflarePipelineSinkSchemaOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_sink cloudflare_pipeline_sink}
*/
var DataCloudflarePipelineSink = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineSink, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_sink cloudflare_pipeline_sink} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflarePipelineSinkConfig = {}
    */
    function DataCloudflarePipelineSink(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_pipeline_sink',
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
        // config - computed: true, optional: false, required: false
        _this._config = new DataCloudflarePipelineSinkConfigAOutputReference(_this, "config");
        // filter - computed: false, optional: true, required: false
        _this._filter = new DataCloudflarePipelineSinkFilterOutputReference(_this, "filter");
        // format - computed: true, optional: false, required: false
        _this._format = new DataCloudflarePipelineSinkFormatOutputReference(_this, "format");
        // schema - computed: true, optional: false, required: false
        _this._schema = new DataCloudflarePipelineSinkSchemaOutputReference(_this, "schema");
        _this._accountId = config.accountId;
        _this._filter.internalValue = config.filter;
        _this._sinkId = config.sinkId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflarePipelineSink resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflarePipelineSink to import
    * @param importFromId The id of the existing DataCloudflarePipelineSink that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_sink#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflarePipelineSink to import is found
    */
    DataCloudflarePipelineSink.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_pipeline_sink", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflarePipelineSink.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePipelineSink.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflarePipelineSink.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSink.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSink.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSink.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePipelineSink.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflarePipelineSink.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflarePipelineSink.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSink.prototype, "format", {
        get: function () {
            return this._format;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSink.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSink.prototype, "modifiedAt", {
        // modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSink.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSink.prototype, "schema", {
        get: function () {
            return this._schema;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSink.prototype, "sinkId", {
        get: function () {
            return this.getStringAttribute('sink_id');
        },
        set: function (value) {
            this._sinkId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePipelineSink.prototype.resetSinkId = function () {
        this._sinkId = undefined;
    };
    Object.defineProperty(DataCloudflarePipelineSink.prototype, "sinkIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sinkId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSink.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflarePipelineSink.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            filter: dataCloudflarePipelineSinkFilterToTerraform(this._filter.internalValue),
            sink_id: cdktf.stringToTerraform(this._sinkId),
        };
    };
    DataCloudflarePipelineSink.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflarePipelineSinkFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflarePipelineSinkFilter",
            },
            sink_id: {
                value: cdktf.stringToHclTerraform(this._sinkId),
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
    DataCloudflarePipelineSink.tfResourceType = "cloudflare_pipeline_sink";
    return DataCloudflarePipelineSink;
}(cdktf.TerraformDataSource));
exports.DataCloudflarePipelineSink = DataCloudflarePipelineSink;
