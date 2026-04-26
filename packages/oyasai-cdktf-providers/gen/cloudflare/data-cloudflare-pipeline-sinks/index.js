"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_sinks
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
exports.DataCloudflarePipelineSinks = exports.DataCloudflarePipelineSinksResultList = exports.DataCloudflarePipelineSinksResultOutputReference = exports.DataCloudflarePipelineSinksResultSchemaOutputReference = exports.DataCloudflarePipelineSinksResultSchemaFormatOutputReference = exports.DataCloudflarePipelineSinksResultSchemaFieldsList = exports.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference = exports.DataCloudflarePipelineSinksResultFormatOutputReference = exports.DataCloudflarePipelineSinksResultConfigOutputReference = exports.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference = exports.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference = exports.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference = void 0;
exports.dataCloudflarePipelineSinksResultConfigFileNamingToTerraform = dataCloudflarePipelineSinksResultConfigFileNamingToTerraform;
exports.dataCloudflarePipelineSinksResultConfigFileNamingToHclTerraform = dataCloudflarePipelineSinksResultConfigFileNamingToHclTerraform;
exports.dataCloudflarePipelineSinksResultConfigPartitioningToTerraform = dataCloudflarePipelineSinksResultConfigPartitioningToTerraform;
exports.dataCloudflarePipelineSinksResultConfigPartitioningToHclTerraform = dataCloudflarePipelineSinksResultConfigPartitioningToHclTerraform;
exports.dataCloudflarePipelineSinksResultConfigRollingPolicyToTerraform = dataCloudflarePipelineSinksResultConfigRollingPolicyToTerraform;
exports.dataCloudflarePipelineSinksResultConfigRollingPolicyToHclTerraform = dataCloudflarePipelineSinksResultConfigRollingPolicyToHclTerraform;
exports.dataCloudflarePipelineSinksResultConfigToTerraform = dataCloudflarePipelineSinksResultConfigToTerraform;
exports.dataCloudflarePipelineSinksResultConfigToHclTerraform = dataCloudflarePipelineSinksResultConfigToHclTerraform;
exports.dataCloudflarePipelineSinksResultFormatToTerraform = dataCloudflarePipelineSinksResultFormatToTerraform;
exports.dataCloudflarePipelineSinksResultFormatToHclTerraform = dataCloudflarePipelineSinksResultFormatToHclTerraform;
exports.dataCloudflarePipelineSinksResultSchemaFieldsToTerraform = dataCloudflarePipelineSinksResultSchemaFieldsToTerraform;
exports.dataCloudflarePipelineSinksResultSchemaFieldsToHclTerraform = dataCloudflarePipelineSinksResultSchemaFieldsToHclTerraform;
exports.dataCloudflarePipelineSinksResultSchemaFormatToTerraform = dataCloudflarePipelineSinksResultSchemaFormatToTerraform;
exports.dataCloudflarePipelineSinksResultSchemaFormatToHclTerraform = dataCloudflarePipelineSinksResultSchemaFormatToHclTerraform;
exports.dataCloudflarePipelineSinksResultSchemaToTerraform = dataCloudflarePipelineSinksResultSchemaToTerraform;
exports.dataCloudflarePipelineSinksResultSchemaToHclTerraform = dataCloudflarePipelineSinksResultSchemaToHclTerraform;
exports.dataCloudflarePipelineSinksResultToTerraform = dataCloudflarePipelineSinksResultToTerraform;
exports.dataCloudflarePipelineSinksResultToHclTerraform = dataCloudflarePipelineSinksResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflarePipelineSinksResultConfigFileNamingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePipelineSinksResultConfigFileNamingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePipelineSinksResultConfigFileNamingOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineSinksResultConfigFileNamingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePipelineSinksResultConfigFileNamingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.prototype, "prefix", {
        // prefix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('prefix');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.prototype, "strategy", {
        // strategy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('strategy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.prototype, "suffix", {
        // suffix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('suffix');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePipelineSinksResultConfigFileNamingOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference = DataCloudflarePipelineSinksResultConfigFileNamingOutputReference;
function dataCloudflarePipelineSinksResultConfigPartitioningToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePipelineSinksResultConfigPartitioningToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePipelineSinksResultConfigPartitioningOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineSinksResultConfigPartitioningOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePipelineSinksResultConfigPartitioningOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.prototype, "timePattern", {
        // time_pattern - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('time_pattern');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePipelineSinksResultConfigPartitioningOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference = DataCloudflarePipelineSinksResultConfigPartitioningOutputReference;
function dataCloudflarePipelineSinksResultConfigRollingPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePipelineSinksResultConfigRollingPolicyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.prototype, "fileSizeBytes", {
        // file_size_bytes - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('file_size_bytes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.prototype, "inactivitySeconds", {
        // inactivity_seconds - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('inactivity_seconds');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.prototype, "intervalSeconds", {
        // interval_seconds - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('interval_seconds');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference = DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference;
function dataCloudflarePipelineSinksResultConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePipelineSinksResultConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePipelineSinksResultConfigOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineSinksResultConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePipelineSinksResultConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // file_naming - computed: true, optional: false, required: false
        _this._fileNaming = new DataCloudflarePipelineSinksResultConfigFileNamingOutputReference(_this, "file_naming");
        // partitioning - computed: true, optional: false, required: false
        _this._partitioning = new DataCloudflarePipelineSinksResultConfigPartitioningOutputReference(_this, "partitioning");
        // rolling_policy - computed: true, optional: false, required: false
        _this._rollingPolicy = new DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference(_this, "rolling_policy");
        return _this;
    }
    Object.defineProperty(DataCloudflarePipelineSinksResultConfigOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePipelineSinksResultConfigOutputReference.prototype, "accountId", {
        // account_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('account_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinksResultConfigOutputReference.prototype, "bucket", {
        // bucket - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bucket');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinksResultConfigOutputReference.prototype, "fileNaming", {
        get: function () {
            return this._fileNaming;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinksResultConfigOutputReference.prototype, "jurisdiction", {
        // jurisdiction - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('jurisdiction');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinksResultConfigOutputReference.prototype, "namespace", {
        // namespace - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('namespace');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinksResultConfigOutputReference.prototype, "partitioning", {
        get: function () {
            return this._partitioning;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinksResultConfigOutputReference.prototype, "path", {
        // path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('path');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinksResultConfigOutputReference.prototype, "rollingPolicy", {
        get: function () {
            return this._rollingPolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinksResultConfigOutputReference.prototype, "tableName", {
        // table_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('table_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePipelineSinksResultConfigOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePipelineSinksResultConfigOutputReference = DataCloudflarePipelineSinksResultConfigOutputReference;
function dataCloudflarePipelineSinksResultFormatToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePipelineSinksResultFormatToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePipelineSinksResultFormatOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineSinksResultFormatOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePipelineSinksResultFormatOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePipelineSinksResultFormatOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePipelineSinksResultFormatOutputReference.prototype, "compression", {
        // compression - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('compression');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinksResultFormatOutputReference.prototype, "decimalEncoding", {
        // decimal_encoding - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('decimal_encoding');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinksResultFormatOutputReference.prototype, "rowGroupBytes", {
        // row_group_bytes - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('row_group_bytes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinksResultFormatOutputReference.prototype, "timestampFormat", {
        // timestamp_format - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('timestamp_format');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinksResultFormatOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinksResultFormatOutputReference.prototype, "unstructured", {
        // unstructured - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('unstructured');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePipelineSinksResultFormatOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePipelineSinksResultFormatOutputReference = DataCloudflarePipelineSinksResultFormatOutputReference;
function dataCloudflarePipelineSinksResultSchemaFieldsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePipelineSinksResultSchemaFieldsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePipelineSinksResultSchemaFieldsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineSinksResultSchemaFieldsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflarePipelineSinksResultSchemaFieldsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.prototype, "metadataKey", {
        // metadata_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('metadata_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.prototype, "required", {
        // required - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('required');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.prototype, "sqlName", {
        // sql_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sql_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.prototype, "unit", {
        // unit - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('unit');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePipelineSinksResultSchemaFieldsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference = DataCloudflarePipelineSinksResultSchemaFieldsOutputReference;
var DataCloudflarePipelineSinksResultSchemaFieldsList = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineSinksResultSchemaFieldsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflarePipelineSinksResultSchemaFieldsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflarePipelineSinksResultSchemaFieldsList.prototype.get = function (index) {
        return new DataCloudflarePipelineSinksResultSchemaFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflarePipelineSinksResultSchemaFieldsList;
}(cdktf.ComplexList));
exports.DataCloudflarePipelineSinksResultSchemaFieldsList = DataCloudflarePipelineSinksResultSchemaFieldsList;
function dataCloudflarePipelineSinksResultSchemaFormatToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePipelineSinksResultSchemaFormatToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePipelineSinksResultSchemaFormatOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineSinksResultSchemaFormatOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePipelineSinksResultSchemaFormatOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePipelineSinksResultSchemaFormatOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePipelineSinksResultSchemaFormatOutputReference.prototype, "compression", {
        // compression - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('compression');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinksResultSchemaFormatOutputReference.prototype, "decimalEncoding", {
        // decimal_encoding - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('decimal_encoding');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinksResultSchemaFormatOutputReference.prototype, "rowGroupBytes", {
        // row_group_bytes - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('row_group_bytes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinksResultSchemaFormatOutputReference.prototype, "timestampFormat", {
        // timestamp_format - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('timestamp_format');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinksResultSchemaFormatOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinksResultSchemaFormatOutputReference.prototype, "unstructured", {
        // unstructured - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('unstructured');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePipelineSinksResultSchemaFormatOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePipelineSinksResultSchemaFormatOutputReference = DataCloudflarePipelineSinksResultSchemaFormatOutputReference;
function dataCloudflarePipelineSinksResultSchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePipelineSinksResultSchemaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePipelineSinksResultSchemaOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineSinksResultSchemaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePipelineSinksResultSchemaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // fields - computed: true, optional: false, required: false
        _this._fields = new DataCloudflarePipelineSinksResultSchemaFieldsList(_this, "fields", false);
        // format - computed: true, optional: false, required: false
        _this._format = new DataCloudflarePipelineSinksResultSchemaFormatOutputReference(_this, "format");
        return _this;
    }
    Object.defineProperty(DataCloudflarePipelineSinksResultSchemaOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePipelineSinksResultSchemaOutputReference.prototype, "fields", {
        get: function () {
            return this._fields;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinksResultSchemaOutputReference.prototype, "format", {
        get: function () {
            return this._format;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinksResultSchemaOutputReference.prototype, "inferred", {
        // inferred - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('inferred');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePipelineSinksResultSchemaOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePipelineSinksResultSchemaOutputReference = DataCloudflarePipelineSinksResultSchemaOutputReference;
function dataCloudflarePipelineSinksResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePipelineSinksResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePipelineSinksResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineSinksResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflarePipelineSinksResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // config - computed: true, optional: false, required: false
        _this._config = new DataCloudflarePipelineSinksResultConfigOutputReference(_this, "config");
        // format - computed: true, optional: false, required: false
        _this._format = new DataCloudflarePipelineSinksResultFormatOutputReference(_this, "format");
        // schema - computed: true, optional: false, required: false
        _this._schema = new DataCloudflarePipelineSinksResultSchemaOutputReference(_this, "schema");
        return _this;
    }
    Object.defineProperty(DataCloudflarePipelineSinksResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePipelineSinksResultOutputReference.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinksResultOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinksResultOutputReference.prototype, "format", {
        get: function () {
            return this._format;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinksResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinksResultOutputReference.prototype, "modifiedAt", {
        // modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinksResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinksResultOutputReference.prototype, "schema", {
        get: function () {
            return this._schema;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinksResultOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePipelineSinksResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePipelineSinksResultOutputReference = DataCloudflarePipelineSinksResultOutputReference;
var DataCloudflarePipelineSinksResultList = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineSinksResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflarePipelineSinksResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflarePipelineSinksResultList.prototype.get = function (index) {
        return new DataCloudflarePipelineSinksResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflarePipelineSinksResultList;
}(cdktf.ComplexList));
exports.DataCloudflarePipelineSinksResultList = DataCloudflarePipelineSinksResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_sinks cloudflare_pipeline_sinks}
*/
var DataCloudflarePipelineSinks = /** @class */ (function (_super) {
    __extends(DataCloudflarePipelineSinks, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_sinks cloudflare_pipeline_sinks} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflarePipelineSinksConfig = {}
    */
    function DataCloudflarePipelineSinks(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_pipeline_sinks',
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
        _this._result = new DataCloudflarePipelineSinksResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        _this._pipelineId = config.pipelineId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflarePipelineSinks resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflarePipelineSinks to import
    * @param importFromId The id of the existing DataCloudflarePipelineSinks that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_sinks#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflarePipelineSinks to import is found
    */
    DataCloudflarePipelineSinks.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_pipeline_sinks", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflarePipelineSinks.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePipelineSinks.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflarePipelineSinks.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinks.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePipelineSinks.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflarePipelineSinks.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinks.prototype, "pipelineId", {
        get: function () {
            return this.getStringAttribute('pipeline_id');
        },
        set: function (value) {
            this._pipelineId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePipelineSinks.prototype.resetPipelineId = function () {
        this._pipelineId = undefined;
    };
    Object.defineProperty(DataCloudflarePipelineSinks.prototype, "pipelineIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pipelineId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePipelineSinks.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflarePipelineSinks.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
            pipeline_id: cdktf.stringToTerraform(this._pipelineId),
        };
    };
    DataCloudflarePipelineSinks.prototype.synthesizeHclAttributes = function () {
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
    DataCloudflarePipelineSinks.tfResourceType = "cloudflare_pipeline_sinks";
    return DataCloudflarePipelineSinks;
}(cdktf.TerraformDataSource));
exports.DataCloudflarePipelineSinks = DataCloudflarePipelineSinks;
