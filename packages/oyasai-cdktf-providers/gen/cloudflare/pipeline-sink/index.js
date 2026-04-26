"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink
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
exports.PipelineSink = exports.PipelineSinkSchemaOutputReference = exports.PipelineSinkSchemaFormatOutputReference = exports.PipelineSinkSchemaFieldsList = exports.PipelineSinkSchemaFieldsOutputReference = exports.PipelineSinkFormatOutputReference = exports.PipelineSinkConfigAOutputReference = exports.PipelineSinkConfigRollingPolicyOutputReference = exports.PipelineSinkConfigPartitioningOutputReference = exports.PipelineSinkConfigFileNamingOutputReference = exports.PipelineSinkConfigCredentialsOutputReference = void 0;
exports.pipelineSinkConfigCredentialsToTerraform = pipelineSinkConfigCredentialsToTerraform;
exports.pipelineSinkConfigCredentialsToHclTerraform = pipelineSinkConfigCredentialsToHclTerraform;
exports.pipelineSinkConfigFileNamingToTerraform = pipelineSinkConfigFileNamingToTerraform;
exports.pipelineSinkConfigFileNamingToHclTerraform = pipelineSinkConfigFileNamingToHclTerraform;
exports.pipelineSinkConfigPartitioningToTerraform = pipelineSinkConfigPartitioningToTerraform;
exports.pipelineSinkConfigPartitioningToHclTerraform = pipelineSinkConfigPartitioningToHclTerraform;
exports.pipelineSinkConfigRollingPolicyToTerraform = pipelineSinkConfigRollingPolicyToTerraform;
exports.pipelineSinkConfigRollingPolicyToHclTerraform = pipelineSinkConfigRollingPolicyToHclTerraform;
exports.pipelineSinkConfigAToTerraform = pipelineSinkConfigAToTerraform;
exports.pipelineSinkConfigAToHclTerraform = pipelineSinkConfigAToHclTerraform;
exports.pipelineSinkFormatToTerraform = pipelineSinkFormatToTerraform;
exports.pipelineSinkFormatToHclTerraform = pipelineSinkFormatToHclTerraform;
exports.pipelineSinkSchemaFieldsToTerraform = pipelineSinkSchemaFieldsToTerraform;
exports.pipelineSinkSchemaFieldsToHclTerraform = pipelineSinkSchemaFieldsToHclTerraform;
exports.pipelineSinkSchemaFormatToTerraform = pipelineSinkSchemaFormatToTerraform;
exports.pipelineSinkSchemaFormatToHclTerraform = pipelineSinkSchemaFormatToHclTerraform;
exports.pipelineSinkSchemaToTerraform = pipelineSinkSchemaToTerraform;
exports.pipelineSinkSchemaToHclTerraform = pipelineSinkSchemaToHclTerraform;
var cdktf = require("cdktf");
function pipelineSinkConfigCredentialsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_key_id: cdktf.stringToTerraform(struct.accessKeyId),
        secret_access_key: cdktf.stringToTerraform(struct.secretAccessKey),
    };
}
function pipelineSinkConfigCredentialsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        access_key_id: {
            value: cdktf.stringToHclTerraform(struct.accessKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_access_key: {
            value: cdktf.stringToHclTerraform(struct.secretAccessKey),
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
var PipelineSinkConfigCredentialsOutputReference = /** @class */ (function (_super) {
    __extends(PipelineSinkConfigCredentialsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PipelineSinkConfigCredentialsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PipelineSinkConfigCredentialsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._accessKeyId !== undefined) {
                hasAnyValues = true;
                internalValueResult.accessKeyId = this._accessKeyId;
            }
            if (this._secretAccessKey !== undefined) {
                hasAnyValues = true;
                internalValueResult.secretAccessKey = this._secretAccessKey;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._accessKeyId = undefined;
                this._secretAccessKey = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._accessKeyId = value.accessKeyId;
                this._secretAccessKey = value.secretAccessKey;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkConfigCredentialsOutputReference.prototype, "accessKeyId", {
        get: function () {
            return this.getStringAttribute('access_key_id');
        },
        set: function (value) {
            this._accessKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkConfigCredentialsOutputReference.prototype, "accessKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkConfigCredentialsOutputReference.prototype, "secretAccessKey", {
        get: function () {
            return this.getStringAttribute('secret_access_key');
        },
        set: function (value) {
            this._secretAccessKey = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkConfigCredentialsOutputReference.prototype, "secretAccessKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretAccessKey;
        },
        enumerable: false,
        configurable: true
    });
    return PipelineSinkConfigCredentialsOutputReference;
}(cdktf.ComplexObject));
exports.PipelineSinkConfigCredentialsOutputReference = PipelineSinkConfigCredentialsOutputReference;
function pipelineSinkConfigFileNamingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        prefix: cdktf.stringToTerraform(struct.prefix),
        strategy: cdktf.stringToTerraform(struct.strategy),
        suffix: cdktf.stringToTerraform(struct.suffix),
    };
}
function pipelineSinkConfigFileNamingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        prefix: {
            value: cdktf.stringToHclTerraform(struct.prefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        strategy: {
            value: cdktf.stringToHclTerraform(struct.strategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        suffix: {
            value: cdktf.stringToHclTerraform(struct.suffix),
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
var PipelineSinkConfigFileNamingOutputReference = /** @class */ (function (_super) {
    __extends(PipelineSinkConfigFileNamingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PipelineSinkConfigFileNamingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PipelineSinkConfigFileNamingOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._prefix !== undefined) {
                hasAnyValues = true;
                internalValueResult.prefix = this._prefix;
            }
            if (this._strategy !== undefined) {
                hasAnyValues = true;
                internalValueResult.strategy = this._strategy;
            }
            if (this._suffix !== undefined) {
                hasAnyValues = true;
                internalValueResult.suffix = this._suffix;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._prefix = undefined;
                this._strategy = undefined;
                this._suffix = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._prefix = value.prefix;
                this._strategy = value.strategy;
                this._suffix = value.suffix;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkConfigFileNamingOutputReference.prototype, "prefix", {
        get: function () {
            return this.getStringAttribute('prefix');
        },
        set: function (value) {
            this._prefix = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSinkConfigFileNamingOutputReference.prototype.resetPrefix = function () {
        this._prefix = undefined;
    };
    Object.defineProperty(PipelineSinkConfigFileNamingOutputReference.prototype, "prefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._prefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkConfigFileNamingOutputReference.prototype, "strategy", {
        get: function () {
            return this.getStringAttribute('strategy');
        },
        set: function (value) {
            this._strategy = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSinkConfigFileNamingOutputReference.prototype.resetStrategy = function () {
        this._strategy = undefined;
    };
    Object.defineProperty(PipelineSinkConfigFileNamingOutputReference.prototype, "strategyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._strategy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkConfigFileNamingOutputReference.prototype, "suffix", {
        get: function () {
            return this.getStringAttribute('suffix');
        },
        set: function (value) {
            this._suffix = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSinkConfigFileNamingOutputReference.prototype.resetSuffix = function () {
        this._suffix = undefined;
    };
    Object.defineProperty(PipelineSinkConfigFileNamingOutputReference.prototype, "suffixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._suffix;
        },
        enumerable: false,
        configurable: true
    });
    return PipelineSinkConfigFileNamingOutputReference;
}(cdktf.ComplexObject));
exports.PipelineSinkConfigFileNamingOutputReference = PipelineSinkConfigFileNamingOutputReference;
function pipelineSinkConfigPartitioningToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        time_pattern: cdktf.stringToTerraform(struct.timePattern),
    };
}
function pipelineSinkConfigPartitioningToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        time_pattern: {
            value: cdktf.stringToHclTerraform(struct.timePattern),
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
var PipelineSinkConfigPartitioningOutputReference = /** @class */ (function (_super) {
    __extends(PipelineSinkConfigPartitioningOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PipelineSinkConfigPartitioningOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PipelineSinkConfigPartitioningOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._timePattern !== undefined) {
                hasAnyValues = true;
                internalValueResult.timePattern = this._timePattern;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._timePattern = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._timePattern = value.timePattern;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkConfigPartitioningOutputReference.prototype, "timePattern", {
        get: function () {
            return this.getStringAttribute('time_pattern');
        },
        set: function (value) {
            this._timePattern = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSinkConfigPartitioningOutputReference.prototype.resetTimePattern = function () {
        this._timePattern = undefined;
    };
    Object.defineProperty(PipelineSinkConfigPartitioningOutputReference.prototype, "timePatternInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timePattern;
        },
        enumerable: false,
        configurable: true
    });
    return PipelineSinkConfigPartitioningOutputReference;
}(cdktf.ComplexObject));
exports.PipelineSinkConfigPartitioningOutputReference = PipelineSinkConfigPartitioningOutputReference;
function pipelineSinkConfigRollingPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        file_size_bytes: cdktf.numberToTerraform(struct.fileSizeBytes),
        inactivity_seconds: cdktf.numberToTerraform(struct.inactivitySeconds),
        interval_seconds: cdktf.numberToTerraform(struct.intervalSeconds),
    };
}
function pipelineSinkConfigRollingPolicyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        file_size_bytes: {
            value: cdktf.numberToHclTerraform(struct.fileSizeBytes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        inactivity_seconds: {
            value: cdktf.numberToHclTerraform(struct.inactivitySeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        interval_seconds: {
            value: cdktf.numberToHclTerraform(struct.intervalSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var PipelineSinkConfigRollingPolicyOutputReference = /** @class */ (function (_super) {
    __extends(PipelineSinkConfigRollingPolicyOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PipelineSinkConfigRollingPolicyOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PipelineSinkConfigRollingPolicyOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._fileSizeBytes !== undefined) {
                hasAnyValues = true;
                internalValueResult.fileSizeBytes = this._fileSizeBytes;
            }
            if (this._inactivitySeconds !== undefined) {
                hasAnyValues = true;
                internalValueResult.inactivitySeconds = this._inactivitySeconds;
            }
            if (this._intervalSeconds !== undefined) {
                hasAnyValues = true;
                internalValueResult.intervalSeconds = this._intervalSeconds;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._fileSizeBytes = undefined;
                this._inactivitySeconds = undefined;
                this._intervalSeconds = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._fileSizeBytes = value.fileSizeBytes;
                this._inactivitySeconds = value.inactivitySeconds;
                this._intervalSeconds = value.intervalSeconds;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkConfigRollingPolicyOutputReference.prototype, "fileSizeBytes", {
        get: function () {
            return this.getNumberAttribute('file_size_bytes');
        },
        set: function (value) {
            this._fileSizeBytes = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSinkConfigRollingPolicyOutputReference.prototype.resetFileSizeBytes = function () {
        this._fileSizeBytes = undefined;
    };
    Object.defineProperty(PipelineSinkConfigRollingPolicyOutputReference.prototype, "fileSizeBytesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fileSizeBytes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkConfigRollingPolicyOutputReference.prototype, "inactivitySeconds", {
        get: function () {
            return this.getNumberAttribute('inactivity_seconds');
        },
        set: function (value) {
            this._inactivitySeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSinkConfigRollingPolicyOutputReference.prototype.resetInactivitySeconds = function () {
        this._inactivitySeconds = undefined;
    };
    Object.defineProperty(PipelineSinkConfigRollingPolicyOutputReference.prototype, "inactivitySecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._inactivitySeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkConfigRollingPolicyOutputReference.prototype, "intervalSeconds", {
        get: function () {
            return this.getNumberAttribute('interval_seconds');
        },
        set: function (value) {
            this._intervalSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSinkConfigRollingPolicyOutputReference.prototype.resetIntervalSeconds = function () {
        this._intervalSeconds = undefined;
    };
    Object.defineProperty(PipelineSinkConfigRollingPolicyOutputReference.prototype, "intervalSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._intervalSeconds;
        },
        enumerable: false,
        configurable: true
    });
    return PipelineSinkConfigRollingPolicyOutputReference;
}(cdktf.ComplexObject));
exports.PipelineSinkConfigRollingPolicyOutputReference = PipelineSinkConfigRollingPolicyOutputReference;
function pipelineSinkConfigAToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        account_id: cdktf.stringToTerraform(struct.accountId),
        bucket: cdktf.stringToTerraform(struct.bucket),
        credentials: pipelineSinkConfigCredentialsToTerraform(struct.credentials),
        file_naming: pipelineSinkConfigFileNamingToTerraform(struct.fileNaming),
        jurisdiction: cdktf.stringToTerraform(struct.jurisdiction),
        namespace: cdktf.stringToTerraform(struct.namespace),
        partitioning: pipelineSinkConfigPartitioningToTerraform(struct.partitioning),
        path: cdktf.stringToTerraform(struct.path),
        rolling_policy: pipelineSinkConfigRollingPolicyToTerraform(struct.rollingPolicy),
        table_name: cdktf.stringToTerraform(struct.tableName),
        token: cdktf.stringToTerraform(struct.token),
    };
}
function pipelineSinkConfigAToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        account_id: {
            value: cdktf.stringToHclTerraform(struct.accountId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bucket: {
            value: cdktf.stringToHclTerraform(struct.bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        credentials: {
            value: pipelineSinkConfigCredentialsToHclTerraform(struct.credentials),
            isBlock: true,
            type: "struct",
            storageClassType: "PipelineSinkConfigCredentials",
        },
        file_naming: {
            value: pipelineSinkConfigFileNamingToHclTerraform(struct.fileNaming),
            isBlock: true,
            type: "struct",
            storageClassType: "PipelineSinkConfigFileNaming",
        },
        jurisdiction: {
            value: cdktf.stringToHclTerraform(struct.jurisdiction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        namespace: {
            value: cdktf.stringToHclTerraform(struct.namespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        partitioning: {
            value: pipelineSinkConfigPartitioningToHclTerraform(struct.partitioning),
            isBlock: true,
            type: "struct",
            storageClassType: "PipelineSinkConfigPartitioning",
        },
        path: {
            value: cdktf.stringToHclTerraform(struct.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rolling_policy: {
            value: pipelineSinkConfigRollingPolicyToHclTerraform(struct.rollingPolicy),
            isBlock: true,
            type: "struct",
            storageClassType: "PipelineSinkConfigRollingPolicy",
        },
        table_name: {
            value: cdktf.stringToHclTerraform(struct.tableName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        token: {
            value: cdktf.stringToHclTerraform(struct.token),
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
var PipelineSinkConfigAOutputReference = /** @class */ (function (_super) {
    __extends(PipelineSinkConfigAOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PipelineSinkConfigAOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // credentials - computed: false, optional: true, required: false
        _this._credentials = new PipelineSinkConfigCredentialsOutputReference(_this, "credentials");
        // file_naming - computed: false, optional: true, required: false
        _this._fileNaming = new PipelineSinkConfigFileNamingOutputReference(_this, "file_naming");
        // partitioning - computed: false, optional: true, required: false
        _this._partitioning = new PipelineSinkConfigPartitioningOutputReference(_this, "partitioning");
        // rolling_policy - computed: false, optional: true, required: false
        _this._rollingPolicy = new PipelineSinkConfigRollingPolicyOutputReference(_this, "rolling_policy");
        return _this;
    }
    Object.defineProperty(PipelineSinkConfigAOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._accountId !== undefined) {
                hasAnyValues = true;
                internalValueResult.accountId = this._accountId;
            }
            if (this._bucket !== undefined) {
                hasAnyValues = true;
                internalValueResult.bucket = this._bucket;
            }
            if (((_a = this._credentials) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.credentials = (_b = this._credentials) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._fileNaming) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.fileNaming = (_d = this._fileNaming) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (this._jurisdiction !== undefined) {
                hasAnyValues = true;
                internalValueResult.jurisdiction = this._jurisdiction;
            }
            if (this._namespace !== undefined) {
                hasAnyValues = true;
                internalValueResult.namespace = this._namespace;
            }
            if (((_e = this._partitioning) === null || _e === void 0 ? void 0 : _e.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.partitioning = (_f = this._partitioning) === null || _f === void 0 ? void 0 : _f.internalValue;
            }
            if (this._path !== undefined) {
                hasAnyValues = true;
                internalValueResult.path = this._path;
            }
            if (((_g = this._rollingPolicy) === null || _g === void 0 ? void 0 : _g.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.rollingPolicy = (_h = this._rollingPolicy) === null || _h === void 0 ? void 0 : _h.internalValue;
            }
            if (this._tableName !== undefined) {
                hasAnyValues = true;
                internalValueResult.tableName = this._tableName;
            }
            if (this._token !== undefined) {
                hasAnyValues = true;
                internalValueResult.token = this._token;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._accountId = undefined;
                this._bucket = undefined;
                this._credentials.internalValue = undefined;
                this._fileNaming.internalValue = undefined;
                this._jurisdiction = undefined;
                this._namespace = undefined;
                this._partitioning.internalValue = undefined;
                this._path = undefined;
                this._rollingPolicy.internalValue = undefined;
                this._tableName = undefined;
                this._token = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._accountId = value.accountId;
                this._bucket = value.bucket;
                this._credentials.internalValue = value.credentials;
                this._fileNaming.internalValue = value.fileNaming;
                this._jurisdiction = value.jurisdiction;
                this._namespace = value.namespace;
                this._partitioning.internalValue = value.partitioning;
                this._path = value.path;
                this._rollingPolicy.internalValue = value.rollingPolicy;
                this._tableName = value.tableName;
                this._token = value.token;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkConfigAOutputReference.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkConfigAOutputReference.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkConfigAOutputReference.prototype, "bucket", {
        get: function () {
            return this.getStringAttribute('bucket');
        },
        set: function (value) {
            this._bucket = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkConfigAOutputReference.prototype, "bucketInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkConfigAOutputReference.prototype, "credentials", {
        get: function () {
            return this._credentials;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSinkConfigAOutputReference.prototype.putCredentials = function (value) {
        this._credentials.internalValue = value;
    };
    PipelineSinkConfigAOutputReference.prototype.resetCredentials = function () {
        this._credentials.internalValue = undefined;
    };
    Object.defineProperty(PipelineSinkConfigAOutputReference.prototype, "credentialsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._credentials.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkConfigAOutputReference.prototype, "fileNaming", {
        get: function () {
            return this._fileNaming;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSinkConfigAOutputReference.prototype.putFileNaming = function (value) {
        this._fileNaming.internalValue = value;
    };
    PipelineSinkConfigAOutputReference.prototype.resetFileNaming = function () {
        this._fileNaming.internalValue = undefined;
    };
    Object.defineProperty(PipelineSinkConfigAOutputReference.prototype, "fileNamingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fileNaming.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkConfigAOutputReference.prototype, "jurisdiction", {
        get: function () {
            return this.getStringAttribute('jurisdiction');
        },
        set: function (value) {
            this._jurisdiction = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSinkConfigAOutputReference.prototype.resetJurisdiction = function () {
        this._jurisdiction = undefined;
    };
    Object.defineProperty(PipelineSinkConfigAOutputReference.prototype, "jurisdictionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._jurisdiction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkConfigAOutputReference.prototype, "namespace", {
        get: function () {
            return this.getStringAttribute('namespace');
        },
        set: function (value) {
            this._namespace = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSinkConfigAOutputReference.prototype.resetNamespace = function () {
        this._namespace = undefined;
    };
    Object.defineProperty(PipelineSinkConfigAOutputReference.prototype, "namespaceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namespace;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkConfigAOutputReference.prototype, "partitioning", {
        get: function () {
            return this._partitioning;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSinkConfigAOutputReference.prototype.putPartitioning = function (value) {
        this._partitioning.internalValue = value;
    };
    PipelineSinkConfigAOutputReference.prototype.resetPartitioning = function () {
        this._partitioning.internalValue = undefined;
    };
    Object.defineProperty(PipelineSinkConfigAOutputReference.prototype, "partitioningInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._partitioning.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkConfigAOutputReference.prototype, "path", {
        get: function () {
            return this.getStringAttribute('path');
        },
        set: function (value) {
            this._path = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSinkConfigAOutputReference.prototype.resetPath = function () {
        this._path = undefined;
    };
    Object.defineProperty(PipelineSinkConfigAOutputReference.prototype, "pathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkConfigAOutputReference.prototype, "rollingPolicy", {
        get: function () {
            return this._rollingPolicy;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSinkConfigAOutputReference.prototype.putRollingPolicy = function (value) {
        this._rollingPolicy.internalValue = value;
    };
    PipelineSinkConfigAOutputReference.prototype.resetRollingPolicy = function () {
        this._rollingPolicy.internalValue = undefined;
    };
    Object.defineProperty(PipelineSinkConfigAOutputReference.prototype, "rollingPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rollingPolicy.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkConfigAOutputReference.prototype, "tableName", {
        get: function () {
            return this.getStringAttribute('table_name');
        },
        set: function (value) {
            this._tableName = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSinkConfigAOutputReference.prototype.resetTableName = function () {
        this._tableName = undefined;
    };
    Object.defineProperty(PipelineSinkConfigAOutputReference.prototype, "tableNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tableName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkConfigAOutputReference.prototype, "token", {
        get: function () {
            return this.getStringAttribute('token');
        },
        set: function (value) {
            this._token = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSinkConfigAOutputReference.prototype.resetToken = function () {
        this._token = undefined;
    };
    Object.defineProperty(PipelineSinkConfigAOutputReference.prototype, "tokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._token;
        },
        enumerable: false,
        configurable: true
    });
    return PipelineSinkConfigAOutputReference;
}(cdktf.ComplexObject));
exports.PipelineSinkConfigAOutputReference = PipelineSinkConfigAOutputReference;
function pipelineSinkFormatToTerraform(struct) {
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
function pipelineSinkFormatToHclTerraform(struct) {
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
var PipelineSinkFormatOutputReference = /** @class */ (function (_super) {
    __extends(PipelineSinkFormatOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PipelineSinkFormatOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PipelineSinkFormatOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(PipelineSinkFormatOutputReference.prototype, "compression", {
        get: function () {
            return this.getStringAttribute('compression');
        },
        set: function (value) {
            this._compression = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSinkFormatOutputReference.prototype.resetCompression = function () {
        this._compression = undefined;
    };
    Object.defineProperty(PipelineSinkFormatOutputReference.prototype, "compressionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._compression;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkFormatOutputReference.prototype, "decimalEncoding", {
        get: function () {
            return this.getStringAttribute('decimal_encoding');
        },
        set: function (value) {
            this._decimalEncoding = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSinkFormatOutputReference.prototype.resetDecimalEncoding = function () {
        this._decimalEncoding = undefined;
    };
    Object.defineProperty(PipelineSinkFormatOutputReference.prototype, "decimalEncodingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._decimalEncoding;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkFormatOutputReference.prototype, "rowGroupBytes", {
        get: function () {
            return this.getNumberAttribute('row_group_bytes');
        },
        set: function (value) {
            this._rowGroupBytes = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSinkFormatOutputReference.prototype.resetRowGroupBytes = function () {
        this._rowGroupBytes = undefined;
    };
    Object.defineProperty(PipelineSinkFormatOutputReference.prototype, "rowGroupBytesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rowGroupBytes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkFormatOutputReference.prototype, "timestampFormat", {
        get: function () {
            return this.getStringAttribute('timestamp_format');
        },
        set: function (value) {
            this._timestampFormat = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSinkFormatOutputReference.prototype.resetTimestampFormat = function () {
        this._timestampFormat = undefined;
    };
    Object.defineProperty(PipelineSinkFormatOutputReference.prototype, "timestampFormatInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timestampFormat;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkFormatOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkFormatOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkFormatOutputReference.prototype, "unstructured", {
        get: function () {
            return this.getBooleanAttribute('unstructured');
        },
        set: function (value) {
            this._unstructured = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSinkFormatOutputReference.prototype.resetUnstructured = function () {
        this._unstructured = undefined;
    };
    Object.defineProperty(PipelineSinkFormatOutputReference.prototype, "unstructuredInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._unstructured;
        },
        enumerable: false,
        configurable: true
    });
    return PipelineSinkFormatOutputReference;
}(cdktf.ComplexObject));
exports.PipelineSinkFormatOutputReference = PipelineSinkFormatOutputReference;
function pipelineSinkSchemaFieldsToTerraform(struct) {
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
function pipelineSinkSchemaFieldsToHclTerraform(struct) {
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
var PipelineSinkSchemaFieldsOutputReference = /** @class */ (function (_super) {
    __extends(PipelineSinkSchemaFieldsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function PipelineSinkSchemaFieldsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PipelineSinkSchemaFieldsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(PipelineSinkSchemaFieldsOutputReference.prototype, "metadataKey", {
        get: function () {
            return this.getStringAttribute('metadata_key');
        },
        set: function (value) {
            this._metadataKey = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSinkSchemaFieldsOutputReference.prototype.resetMetadataKey = function () {
        this._metadataKey = undefined;
    };
    Object.defineProperty(PipelineSinkSchemaFieldsOutputReference.prototype, "metadataKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._metadataKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkSchemaFieldsOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSinkSchemaFieldsOutputReference.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(PipelineSinkSchemaFieldsOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkSchemaFieldsOutputReference.prototype, "required", {
        get: function () {
            return this.getBooleanAttribute('required');
        },
        set: function (value) {
            this._required = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSinkSchemaFieldsOutputReference.prototype.resetRequired = function () {
        this._required = undefined;
    };
    Object.defineProperty(PipelineSinkSchemaFieldsOutputReference.prototype, "requiredInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._required;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkSchemaFieldsOutputReference.prototype, "sqlName", {
        get: function () {
            return this.getStringAttribute('sql_name');
        },
        set: function (value) {
            this._sqlName = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSinkSchemaFieldsOutputReference.prototype.resetSqlName = function () {
        this._sqlName = undefined;
    };
    Object.defineProperty(PipelineSinkSchemaFieldsOutputReference.prototype, "sqlNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sqlName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkSchemaFieldsOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkSchemaFieldsOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkSchemaFieldsOutputReference.prototype, "unit", {
        get: function () {
            return this.getStringAttribute('unit');
        },
        set: function (value) {
            this._unit = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSinkSchemaFieldsOutputReference.prototype.resetUnit = function () {
        this._unit = undefined;
    };
    Object.defineProperty(PipelineSinkSchemaFieldsOutputReference.prototype, "unitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._unit;
        },
        enumerable: false,
        configurable: true
    });
    return PipelineSinkSchemaFieldsOutputReference;
}(cdktf.ComplexObject));
exports.PipelineSinkSchemaFieldsOutputReference = PipelineSinkSchemaFieldsOutputReference;
var PipelineSinkSchemaFieldsList = /** @class */ (function (_super) {
    __extends(PipelineSinkSchemaFieldsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function PipelineSinkSchemaFieldsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    PipelineSinkSchemaFieldsList.prototype.get = function (index) {
        return new PipelineSinkSchemaFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return PipelineSinkSchemaFieldsList;
}(cdktf.ComplexList));
exports.PipelineSinkSchemaFieldsList = PipelineSinkSchemaFieldsList;
function pipelineSinkSchemaFormatToTerraform(struct) {
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
function pipelineSinkSchemaFormatToHclTerraform(struct) {
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
var PipelineSinkSchemaFormatOutputReference = /** @class */ (function (_super) {
    __extends(PipelineSinkSchemaFormatOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PipelineSinkSchemaFormatOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PipelineSinkSchemaFormatOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(PipelineSinkSchemaFormatOutputReference.prototype, "compression", {
        get: function () {
            return this.getStringAttribute('compression');
        },
        set: function (value) {
            this._compression = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSinkSchemaFormatOutputReference.prototype.resetCompression = function () {
        this._compression = undefined;
    };
    Object.defineProperty(PipelineSinkSchemaFormatOutputReference.prototype, "compressionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._compression;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkSchemaFormatOutputReference.prototype, "decimalEncoding", {
        get: function () {
            return this.getStringAttribute('decimal_encoding');
        },
        set: function (value) {
            this._decimalEncoding = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSinkSchemaFormatOutputReference.prototype.resetDecimalEncoding = function () {
        this._decimalEncoding = undefined;
    };
    Object.defineProperty(PipelineSinkSchemaFormatOutputReference.prototype, "decimalEncodingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._decimalEncoding;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkSchemaFormatOutputReference.prototype, "rowGroupBytes", {
        get: function () {
            return this.getNumberAttribute('row_group_bytes');
        },
        set: function (value) {
            this._rowGroupBytes = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSinkSchemaFormatOutputReference.prototype.resetRowGroupBytes = function () {
        this._rowGroupBytes = undefined;
    };
    Object.defineProperty(PipelineSinkSchemaFormatOutputReference.prototype, "rowGroupBytesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rowGroupBytes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkSchemaFormatOutputReference.prototype, "timestampFormat", {
        get: function () {
            return this.getStringAttribute('timestamp_format');
        },
        set: function (value) {
            this._timestampFormat = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSinkSchemaFormatOutputReference.prototype.resetTimestampFormat = function () {
        this._timestampFormat = undefined;
    };
    Object.defineProperty(PipelineSinkSchemaFormatOutputReference.prototype, "timestampFormatInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timestampFormat;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkSchemaFormatOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkSchemaFormatOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkSchemaFormatOutputReference.prototype, "unstructured", {
        get: function () {
            return this.getBooleanAttribute('unstructured');
        },
        set: function (value) {
            this._unstructured = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSinkSchemaFormatOutputReference.prototype.resetUnstructured = function () {
        this._unstructured = undefined;
    };
    Object.defineProperty(PipelineSinkSchemaFormatOutputReference.prototype, "unstructuredInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._unstructured;
        },
        enumerable: false,
        configurable: true
    });
    return PipelineSinkSchemaFormatOutputReference;
}(cdktf.ComplexObject));
exports.PipelineSinkSchemaFormatOutputReference = PipelineSinkSchemaFormatOutputReference;
function pipelineSinkSchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fields: cdktf.listMapper(pipelineSinkSchemaFieldsToTerraform, false)(struct.fields),
        format: pipelineSinkSchemaFormatToTerraform(struct.format),
        inferred: cdktf.booleanToTerraform(struct.inferred),
    };
}
function pipelineSinkSchemaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        fields: {
            value: cdktf.listMapperHcl(pipelineSinkSchemaFieldsToHclTerraform, false)(struct.fields),
            isBlock: true,
            type: "list",
            storageClassType: "PipelineSinkSchemaFieldsList",
        },
        format: {
            value: pipelineSinkSchemaFormatToHclTerraform(struct.format),
            isBlock: true,
            type: "struct",
            storageClassType: "PipelineSinkSchemaFormat",
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
var PipelineSinkSchemaOutputReference = /** @class */ (function (_super) {
    __extends(PipelineSinkSchemaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PipelineSinkSchemaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // fields - computed: false, optional: true, required: false
        _this._fields = new PipelineSinkSchemaFieldsList(_this, "fields", false);
        // format - computed: false, optional: true, required: false
        _this._format = new PipelineSinkSchemaFormatOutputReference(_this, "format");
        return _this;
    }
    Object.defineProperty(PipelineSinkSchemaOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(PipelineSinkSchemaOutputReference.prototype, "fields", {
        get: function () {
            return this._fields;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSinkSchemaOutputReference.prototype.putFields = function (value) {
        this._fields.internalValue = value;
    };
    PipelineSinkSchemaOutputReference.prototype.resetFields = function () {
        this._fields.internalValue = undefined;
    };
    Object.defineProperty(PipelineSinkSchemaOutputReference.prototype, "fieldsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fields.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkSchemaOutputReference.prototype, "format", {
        get: function () {
            return this._format;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSinkSchemaOutputReference.prototype.putFormat = function (value) {
        this._format.internalValue = value;
    };
    PipelineSinkSchemaOutputReference.prototype.resetFormat = function () {
        this._format.internalValue = undefined;
    };
    Object.defineProperty(PipelineSinkSchemaOutputReference.prototype, "formatInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._format.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSinkSchemaOutputReference.prototype, "inferred", {
        get: function () {
            return this.getBooleanAttribute('inferred');
        },
        set: function (value) {
            this._inferred = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSinkSchemaOutputReference.prototype.resetInferred = function () {
        this._inferred = undefined;
    };
    Object.defineProperty(PipelineSinkSchemaOutputReference.prototype, "inferredInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._inferred;
        },
        enumerable: false,
        configurable: true
    });
    return PipelineSinkSchemaOutputReference;
}(cdktf.ComplexObject));
exports.PipelineSinkSchemaOutputReference = PipelineSinkSchemaOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink cloudflare_pipeline_sink}
*/
var PipelineSink = /** @class */ (function (_super) {
    __extends(PipelineSink, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink cloudflare_pipeline_sink} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PipelineSinkConfig
    */
    function PipelineSink(scope, id, config) {
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
        // config - computed: false, optional: true, required: false
        _this._config = new PipelineSinkConfigAOutputReference(_this, "config");
        // format - computed: false, optional: true, required: false
        _this._format = new PipelineSinkFormatOutputReference(_this, "format");
        // schema - computed: false, optional: true, required: false
        _this._schema = new PipelineSinkSchemaOutputReference(_this, "schema");
        _this._accountId = config.accountId;
        _this._config.internalValue = config.config;
        _this._format.internalValue = config.format;
        _this._name = config.name;
        _this._schema.internalValue = config.schema;
        _this._type = config.type;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a PipelineSink resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the PipelineSink to import
    * @param importFromId The id of the existing PipelineSink that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline_sink#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the PipelineSink to import is found
    */
    PipelineSink.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_pipeline_sink", importId: importFromId, provider: provider });
    };
    Object.defineProperty(PipelineSink.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSink.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(PipelineSink.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSink.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSink.prototype.putConfig = function (value) {
        this._config.internalValue = value;
    };
    PipelineSink.prototype.resetConfig = function () {
        this._config.internalValue = undefined;
    };
    Object.defineProperty(PipelineSink.prototype, "configInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._config.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSink.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSink.prototype, "format", {
        get: function () {
            return this._format;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSink.prototype.putFormat = function (value) {
        this._format.internalValue = value;
    };
    PipelineSink.prototype.resetFormat = function () {
        this._format.internalValue = undefined;
    };
    Object.defineProperty(PipelineSink.prototype, "formatInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._format.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSink.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSink.prototype, "modifiedAt", {
        // modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSink.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSink.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSink.prototype, "schema", {
        get: function () {
            return this._schema;
        },
        enumerable: false,
        configurable: true
    });
    PipelineSink.prototype.putSchema = function (value) {
        this._schema.internalValue = value;
    };
    PipelineSink.prototype.resetSchema = function () {
        this._schema.internalValue = undefined;
    };
    Object.defineProperty(PipelineSink.prototype, "schemaInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._schema.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSink.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineSink.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    PipelineSink.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            config: pipelineSinkConfigAToTerraform(this._config.internalValue),
            format: pipelineSinkFormatToTerraform(this._format.internalValue),
            name: cdktf.stringToTerraform(this._name),
            schema: pipelineSinkSchemaToTerraform(this._schema.internalValue),
            type: cdktf.stringToTerraform(this._type),
        };
    };
    PipelineSink.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            config: {
                value: pipelineSinkConfigAToHclTerraform(this._config.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "PipelineSinkConfigA",
            },
            format: {
                value: pipelineSinkFormatToHclTerraform(this._format.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "PipelineSinkFormat",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            schema: {
                value: pipelineSinkSchemaToHclTerraform(this._schema.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "PipelineSinkSchema",
            },
            type: {
                value: cdktf.stringToHclTerraform(this._type),
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
    PipelineSink.tfResourceType = "cloudflare_pipeline_sink";
    return PipelineSink;
}(cdktf.TerraformResource));
exports.PipelineSink = PipelineSink;
