"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records
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
exports.DataCloudflareDnsRecords = exports.DataCloudflareDnsRecordsTagOutputReference = exports.DataCloudflareDnsRecordsResultList = exports.DataCloudflareDnsRecordsResultOutputReference = exports.DataCloudflareDnsRecordsResultSettingsOutputReference = exports.DataCloudflareDnsRecordsResultDataOutputReference = exports.DataCloudflareDnsRecordsNameOutputReference = exports.DataCloudflareDnsRecordsContentOutputReference = exports.DataCloudflareDnsRecordsCommentOutputReference = void 0;
exports.dataCloudflareDnsRecordsCommentToTerraform = dataCloudflareDnsRecordsCommentToTerraform;
exports.dataCloudflareDnsRecordsCommentToHclTerraform = dataCloudflareDnsRecordsCommentToHclTerraform;
exports.dataCloudflareDnsRecordsContentToTerraform = dataCloudflareDnsRecordsContentToTerraform;
exports.dataCloudflareDnsRecordsContentToHclTerraform = dataCloudflareDnsRecordsContentToHclTerraform;
exports.dataCloudflareDnsRecordsNameToTerraform = dataCloudflareDnsRecordsNameToTerraform;
exports.dataCloudflareDnsRecordsNameToHclTerraform = dataCloudflareDnsRecordsNameToHclTerraform;
exports.dataCloudflareDnsRecordsResultDataToTerraform = dataCloudflareDnsRecordsResultDataToTerraform;
exports.dataCloudflareDnsRecordsResultDataToHclTerraform = dataCloudflareDnsRecordsResultDataToHclTerraform;
exports.dataCloudflareDnsRecordsResultSettingsToTerraform = dataCloudflareDnsRecordsResultSettingsToTerraform;
exports.dataCloudflareDnsRecordsResultSettingsToHclTerraform = dataCloudflareDnsRecordsResultSettingsToHclTerraform;
exports.dataCloudflareDnsRecordsResultToTerraform = dataCloudflareDnsRecordsResultToTerraform;
exports.dataCloudflareDnsRecordsResultToHclTerraform = dataCloudflareDnsRecordsResultToHclTerraform;
exports.dataCloudflareDnsRecordsTagToTerraform = dataCloudflareDnsRecordsTagToTerraform;
exports.dataCloudflareDnsRecordsTagToHclTerraform = dataCloudflareDnsRecordsTagToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareDnsRecordsCommentToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        absent: cdktf.stringToTerraform(struct.absent),
        contains: cdktf.stringToTerraform(struct.contains),
        endswith: cdktf.stringToTerraform(struct.endswith),
        exact: cdktf.stringToTerraform(struct.exact),
        present: cdktf.stringToTerraform(struct.present),
        startswith: cdktf.stringToTerraform(struct.startswith),
    };
}
function dataCloudflareDnsRecordsCommentToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        absent: {
            value: cdktf.stringToHclTerraform(struct.absent),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        contains: {
            value: cdktf.stringToHclTerraform(struct.contains),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        endswith: {
            value: cdktf.stringToHclTerraform(struct.endswith),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        exact: {
            value: cdktf.stringToHclTerraform(struct.exact),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        present: {
            value: cdktf.stringToHclTerraform(struct.present),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        startswith: {
            value: cdktf.stringToHclTerraform(struct.startswith),
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
var DataCloudflareDnsRecordsCommentOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareDnsRecordsCommentOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareDnsRecordsCommentOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareDnsRecordsCommentOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._absent !== undefined) {
                hasAnyValues = true;
                internalValueResult.absent = this._absent;
            }
            if (this._contains !== undefined) {
                hasAnyValues = true;
                internalValueResult.contains = this._contains;
            }
            if (this._endswith !== undefined) {
                hasAnyValues = true;
                internalValueResult.endswith = this._endswith;
            }
            if (this._exact !== undefined) {
                hasAnyValues = true;
                internalValueResult.exact = this._exact;
            }
            if (this._present !== undefined) {
                hasAnyValues = true;
                internalValueResult.present = this._present;
            }
            if (this._startswith !== undefined) {
                hasAnyValues = true;
                internalValueResult.startswith = this._startswith;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._absent = undefined;
                this._contains = undefined;
                this._endswith = undefined;
                this._exact = undefined;
                this._present = undefined;
                this._startswith = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._absent = value.absent;
                this._contains = value.contains;
                this._endswith = value.endswith;
                this._exact = value.exact;
                this._present = value.present;
                this._startswith = value.startswith;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsCommentOutputReference.prototype, "absent", {
        get: function () {
            return this.getStringAttribute('absent');
        },
        set: function (value) {
            this._absent = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordsCommentOutputReference.prototype.resetAbsent = function () {
        this._absent = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordsCommentOutputReference.prototype, "absentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._absent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsCommentOutputReference.prototype, "contains", {
        get: function () {
            return this.getStringAttribute('contains');
        },
        set: function (value) {
            this._contains = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordsCommentOutputReference.prototype.resetContains = function () {
        this._contains = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordsCommentOutputReference.prototype, "containsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contains;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsCommentOutputReference.prototype, "endswith", {
        get: function () {
            return this.getStringAttribute('endswith');
        },
        set: function (value) {
            this._endswith = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordsCommentOutputReference.prototype.resetEndswith = function () {
        this._endswith = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordsCommentOutputReference.prototype, "endswithInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endswith;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsCommentOutputReference.prototype, "exact", {
        get: function () {
            return this.getStringAttribute('exact');
        },
        set: function (value) {
            this._exact = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordsCommentOutputReference.prototype.resetExact = function () {
        this._exact = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordsCommentOutputReference.prototype, "exactInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._exact;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsCommentOutputReference.prototype, "present", {
        get: function () {
            return this.getStringAttribute('present');
        },
        set: function (value) {
            this._present = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordsCommentOutputReference.prototype.resetPresent = function () {
        this._present = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordsCommentOutputReference.prototype, "presentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._present;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsCommentOutputReference.prototype, "startswith", {
        get: function () {
            return this.getStringAttribute('startswith');
        },
        set: function (value) {
            this._startswith = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordsCommentOutputReference.prototype.resetStartswith = function () {
        this._startswith = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordsCommentOutputReference.prototype, "startswithInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._startswith;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareDnsRecordsCommentOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareDnsRecordsCommentOutputReference = DataCloudflareDnsRecordsCommentOutputReference;
function dataCloudflareDnsRecordsContentToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        contains: cdktf.stringToTerraform(struct.contains),
        endswith: cdktf.stringToTerraform(struct.endswith),
        exact: cdktf.stringToTerraform(struct.exact),
        startswith: cdktf.stringToTerraform(struct.startswith),
    };
}
function dataCloudflareDnsRecordsContentToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        contains: {
            value: cdktf.stringToHclTerraform(struct.contains),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        endswith: {
            value: cdktf.stringToHclTerraform(struct.endswith),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        exact: {
            value: cdktf.stringToHclTerraform(struct.exact),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        startswith: {
            value: cdktf.stringToHclTerraform(struct.startswith),
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
var DataCloudflareDnsRecordsContentOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareDnsRecordsContentOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareDnsRecordsContentOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareDnsRecordsContentOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._contains !== undefined) {
                hasAnyValues = true;
                internalValueResult.contains = this._contains;
            }
            if (this._endswith !== undefined) {
                hasAnyValues = true;
                internalValueResult.endswith = this._endswith;
            }
            if (this._exact !== undefined) {
                hasAnyValues = true;
                internalValueResult.exact = this._exact;
            }
            if (this._startswith !== undefined) {
                hasAnyValues = true;
                internalValueResult.startswith = this._startswith;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._contains = undefined;
                this._endswith = undefined;
                this._exact = undefined;
                this._startswith = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._contains = value.contains;
                this._endswith = value.endswith;
                this._exact = value.exact;
                this._startswith = value.startswith;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsContentOutputReference.prototype, "contains", {
        get: function () {
            return this.getStringAttribute('contains');
        },
        set: function (value) {
            this._contains = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordsContentOutputReference.prototype.resetContains = function () {
        this._contains = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordsContentOutputReference.prototype, "containsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contains;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsContentOutputReference.prototype, "endswith", {
        get: function () {
            return this.getStringAttribute('endswith');
        },
        set: function (value) {
            this._endswith = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordsContentOutputReference.prototype.resetEndswith = function () {
        this._endswith = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordsContentOutputReference.prototype, "endswithInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endswith;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsContentOutputReference.prototype, "exact", {
        get: function () {
            return this.getStringAttribute('exact');
        },
        set: function (value) {
            this._exact = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordsContentOutputReference.prototype.resetExact = function () {
        this._exact = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordsContentOutputReference.prototype, "exactInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._exact;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsContentOutputReference.prototype, "startswith", {
        get: function () {
            return this.getStringAttribute('startswith');
        },
        set: function (value) {
            this._startswith = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordsContentOutputReference.prototype.resetStartswith = function () {
        this._startswith = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordsContentOutputReference.prototype, "startswithInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._startswith;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareDnsRecordsContentOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareDnsRecordsContentOutputReference = DataCloudflareDnsRecordsContentOutputReference;
function dataCloudflareDnsRecordsNameToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        contains: cdktf.stringToTerraform(struct.contains),
        endswith: cdktf.stringToTerraform(struct.endswith),
        exact: cdktf.stringToTerraform(struct.exact),
        startswith: cdktf.stringToTerraform(struct.startswith),
    };
}
function dataCloudflareDnsRecordsNameToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        contains: {
            value: cdktf.stringToHclTerraform(struct.contains),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        endswith: {
            value: cdktf.stringToHclTerraform(struct.endswith),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        exact: {
            value: cdktf.stringToHclTerraform(struct.exact),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        startswith: {
            value: cdktf.stringToHclTerraform(struct.startswith),
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
var DataCloudflareDnsRecordsNameOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareDnsRecordsNameOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareDnsRecordsNameOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareDnsRecordsNameOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._contains !== undefined) {
                hasAnyValues = true;
                internalValueResult.contains = this._contains;
            }
            if (this._endswith !== undefined) {
                hasAnyValues = true;
                internalValueResult.endswith = this._endswith;
            }
            if (this._exact !== undefined) {
                hasAnyValues = true;
                internalValueResult.exact = this._exact;
            }
            if (this._startswith !== undefined) {
                hasAnyValues = true;
                internalValueResult.startswith = this._startswith;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._contains = undefined;
                this._endswith = undefined;
                this._exact = undefined;
                this._startswith = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._contains = value.contains;
                this._endswith = value.endswith;
                this._exact = value.exact;
                this._startswith = value.startswith;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsNameOutputReference.prototype, "contains", {
        get: function () {
            return this.getStringAttribute('contains');
        },
        set: function (value) {
            this._contains = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordsNameOutputReference.prototype.resetContains = function () {
        this._contains = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordsNameOutputReference.prototype, "containsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contains;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsNameOutputReference.prototype, "endswith", {
        get: function () {
            return this.getStringAttribute('endswith');
        },
        set: function (value) {
            this._endswith = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordsNameOutputReference.prototype.resetEndswith = function () {
        this._endswith = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordsNameOutputReference.prototype, "endswithInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endswith;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsNameOutputReference.prototype, "exact", {
        get: function () {
            return this.getStringAttribute('exact');
        },
        set: function (value) {
            this._exact = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordsNameOutputReference.prototype.resetExact = function () {
        this._exact = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordsNameOutputReference.prototype, "exactInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._exact;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsNameOutputReference.prototype, "startswith", {
        get: function () {
            return this.getStringAttribute('startswith');
        },
        set: function (value) {
            this._startswith = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordsNameOutputReference.prototype.resetStartswith = function () {
        this._startswith = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordsNameOutputReference.prototype, "startswithInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._startswith;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareDnsRecordsNameOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareDnsRecordsNameOutputReference = DataCloudflareDnsRecordsNameOutputReference;
function dataCloudflareDnsRecordsResultDataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareDnsRecordsResultDataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareDnsRecordsResultDataOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareDnsRecordsResultDataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareDnsRecordsResultDataOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // flags - computed: true, optional: false, required: false
        _this._flags = new cdktf.AnyMap(_this, "flags");
        return _this;
    }
    Object.defineProperty(DataCloudflareDnsRecordsResultDataOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareDnsRecordsResultDataOutputReference.prototype, "algorithm", {
        // algorithm - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('algorithm');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultDataOutputReference.prototype, "altitude", {
        // altitude - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('altitude');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultDataOutputReference.prototype, "certificate", {
        // certificate - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultDataOutputReference.prototype, "digest", {
        // digest - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('digest');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultDataOutputReference.prototype, "digestType", {
        // digest_type - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('digest_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultDataOutputReference.prototype, "fingerprint", {
        // fingerprint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('fingerprint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultDataOutputReference.prototype, "flags", {
        get: function () {
            return this._flags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultDataOutputReference.prototype, "keyTag", {
        // key_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('key_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultDataOutputReference.prototype, "latDegrees", {
        // lat_degrees - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('lat_degrees');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultDataOutputReference.prototype, "latDirection", {
        // lat_direction - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('lat_direction');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultDataOutputReference.prototype, "latMinutes", {
        // lat_minutes - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('lat_minutes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultDataOutputReference.prototype, "latSeconds", {
        // lat_seconds - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('lat_seconds');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultDataOutputReference.prototype, "longDegrees", {
        // long_degrees - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('long_degrees');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultDataOutputReference.prototype, "longDirection", {
        // long_direction - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('long_direction');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultDataOutputReference.prototype, "longMinutes", {
        // long_minutes - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('long_minutes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultDataOutputReference.prototype, "longSeconds", {
        // long_seconds - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('long_seconds');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultDataOutputReference.prototype, "matchingType", {
        // matching_type - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('matching_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultDataOutputReference.prototype, "order", {
        // order - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('order');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultDataOutputReference.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultDataOutputReference.prototype, "precisionHorz", {
        // precision_horz - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('precision_horz');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultDataOutputReference.prototype, "precisionVert", {
        // precision_vert - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('precision_vert');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultDataOutputReference.prototype, "preference", {
        // preference - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('preference');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultDataOutputReference.prototype, "priority", {
        // priority - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('priority');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultDataOutputReference.prototype, "protocol", {
        // protocol - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('protocol');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultDataOutputReference.prototype, "publicKey", {
        // public_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('public_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultDataOutputReference.prototype, "regex", {
        // regex - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('regex');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultDataOutputReference.prototype, "replacement", {
        // replacement - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('replacement');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultDataOutputReference.prototype, "selector", {
        // selector - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('selector');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultDataOutputReference.prototype, "service", {
        // service - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultDataOutputReference.prototype, "size", {
        // size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultDataOutputReference.prototype, "tag", {
        // tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultDataOutputReference.prototype, "target", {
        // target - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('target');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultDataOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultDataOutputReference.prototype, "usage", {
        // usage - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('usage');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultDataOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultDataOutputReference.prototype, "weight", {
        // weight - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('weight');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareDnsRecordsResultDataOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareDnsRecordsResultDataOutputReference = DataCloudflareDnsRecordsResultDataOutputReference;
function dataCloudflareDnsRecordsResultSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareDnsRecordsResultSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareDnsRecordsResultSettingsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareDnsRecordsResultSettingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareDnsRecordsResultSettingsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareDnsRecordsResultSettingsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareDnsRecordsResultSettingsOutputReference.prototype, "flattenCname", {
        // flatten_cname - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('flatten_cname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultSettingsOutputReference.prototype, "ipv4Only", {
        // ipv4_only - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ipv4_only');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultSettingsOutputReference.prototype, "ipv6Only", {
        // ipv6_only - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ipv6_only');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareDnsRecordsResultSettingsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareDnsRecordsResultSettingsOutputReference = DataCloudflareDnsRecordsResultSettingsOutputReference;
function dataCloudflareDnsRecordsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareDnsRecordsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareDnsRecordsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareDnsRecordsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareDnsRecordsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // data - computed: true, optional: false, required: false
        _this._data = new DataCloudflareDnsRecordsResultDataOutputReference(_this, "data");
        // settings - computed: true, optional: false, required: false
        _this._settings = new DataCloudflareDnsRecordsResultSettingsOutputReference(_this, "settings");
        return _this;
    }
    Object.defineProperty(DataCloudflareDnsRecordsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareDnsRecordsResultOutputReference.prototype, "comment", {
        // comment - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('comment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultOutputReference.prototype, "commentModifiedOn", {
        // comment_modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('comment_modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultOutputReference.prototype, "content", {
        // content - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultOutputReference.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultOutputReference.prototype, "meta", {
        // meta - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('meta');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultOutputReference.prototype, "priority", {
        // priority - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('priority');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultOutputReference.prototype, "privateRouting", {
        // private_routing - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('private_routing');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultOutputReference.prototype, "proxiable", {
        // proxiable - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('proxiable');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultOutputReference.prototype, "proxied", {
        // proxied - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('proxied');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultOutputReference.prototype, "settings", {
        get: function () {
            return this._settings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultOutputReference.prototype, "tags", {
        // tags - computed: true, optional: false, required: false
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('tags'));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultOutputReference.prototype, "tagsModifiedOn", {
        // tags_modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tags_modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultOutputReference.prototype, "ttl", {
        // ttl - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('ttl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsResultOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareDnsRecordsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareDnsRecordsResultOutputReference = DataCloudflareDnsRecordsResultOutputReference;
var DataCloudflareDnsRecordsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareDnsRecordsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareDnsRecordsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareDnsRecordsResultList.prototype.get = function (index) {
        return new DataCloudflareDnsRecordsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareDnsRecordsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareDnsRecordsResultList = DataCloudflareDnsRecordsResultList;
function dataCloudflareDnsRecordsTagToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        absent: cdktf.stringToTerraform(struct.absent),
        contains: cdktf.stringToTerraform(struct.contains),
        endswith: cdktf.stringToTerraform(struct.endswith),
        exact: cdktf.stringToTerraform(struct.exact),
        present: cdktf.stringToTerraform(struct.present),
        startswith: cdktf.stringToTerraform(struct.startswith),
    };
}
function dataCloudflareDnsRecordsTagToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        absent: {
            value: cdktf.stringToHclTerraform(struct.absent),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        contains: {
            value: cdktf.stringToHclTerraform(struct.contains),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        endswith: {
            value: cdktf.stringToHclTerraform(struct.endswith),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        exact: {
            value: cdktf.stringToHclTerraform(struct.exact),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        present: {
            value: cdktf.stringToHclTerraform(struct.present),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        startswith: {
            value: cdktf.stringToHclTerraform(struct.startswith),
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
var DataCloudflareDnsRecordsTagOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareDnsRecordsTagOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareDnsRecordsTagOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareDnsRecordsTagOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._absent !== undefined) {
                hasAnyValues = true;
                internalValueResult.absent = this._absent;
            }
            if (this._contains !== undefined) {
                hasAnyValues = true;
                internalValueResult.contains = this._contains;
            }
            if (this._endswith !== undefined) {
                hasAnyValues = true;
                internalValueResult.endswith = this._endswith;
            }
            if (this._exact !== undefined) {
                hasAnyValues = true;
                internalValueResult.exact = this._exact;
            }
            if (this._present !== undefined) {
                hasAnyValues = true;
                internalValueResult.present = this._present;
            }
            if (this._startswith !== undefined) {
                hasAnyValues = true;
                internalValueResult.startswith = this._startswith;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._absent = undefined;
                this._contains = undefined;
                this._endswith = undefined;
                this._exact = undefined;
                this._present = undefined;
                this._startswith = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._absent = value.absent;
                this._contains = value.contains;
                this._endswith = value.endswith;
                this._exact = value.exact;
                this._present = value.present;
                this._startswith = value.startswith;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsTagOutputReference.prototype, "absent", {
        get: function () {
            return this.getStringAttribute('absent');
        },
        set: function (value) {
            this._absent = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordsTagOutputReference.prototype.resetAbsent = function () {
        this._absent = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordsTagOutputReference.prototype, "absentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._absent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsTagOutputReference.prototype, "contains", {
        get: function () {
            return this.getStringAttribute('contains');
        },
        set: function (value) {
            this._contains = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordsTagOutputReference.prototype.resetContains = function () {
        this._contains = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordsTagOutputReference.prototype, "containsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contains;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsTagOutputReference.prototype, "endswith", {
        get: function () {
            return this.getStringAttribute('endswith');
        },
        set: function (value) {
            this._endswith = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordsTagOutputReference.prototype.resetEndswith = function () {
        this._endswith = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordsTagOutputReference.prototype, "endswithInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endswith;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsTagOutputReference.prototype, "exact", {
        get: function () {
            return this.getStringAttribute('exact');
        },
        set: function (value) {
            this._exact = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordsTagOutputReference.prototype.resetExact = function () {
        this._exact = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordsTagOutputReference.prototype, "exactInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._exact;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsTagOutputReference.prototype, "present", {
        get: function () {
            return this.getStringAttribute('present');
        },
        set: function (value) {
            this._present = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordsTagOutputReference.prototype.resetPresent = function () {
        this._present = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordsTagOutputReference.prototype, "presentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._present;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordsTagOutputReference.prototype, "startswith", {
        get: function () {
            return this.getStringAttribute('startswith');
        },
        set: function (value) {
            this._startswith = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordsTagOutputReference.prototype.resetStartswith = function () {
        this._startswith = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordsTagOutputReference.prototype, "startswithInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._startswith;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareDnsRecordsTagOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareDnsRecordsTagOutputReference = DataCloudflareDnsRecordsTagOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records cloudflare_dns_records}
*/
var DataCloudflareDnsRecords = /** @class */ (function (_super) {
    __extends(DataCloudflareDnsRecords, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records cloudflare_dns_records} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareDnsRecordsConfig = {}
    */
    function DataCloudflareDnsRecords(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_dns_records',
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
        // ==========
        // ATTRIBUTES
        // ==========
        // comment - computed: false, optional: true, required: false
        _this._comment = new DataCloudflareDnsRecordsCommentOutputReference(_this, "comment");
        // content - computed: false, optional: true, required: false
        _this._content = new DataCloudflareDnsRecordsContentOutputReference(_this, "content");
        // name - computed: false, optional: true, required: false
        _this._name = new DataCloudflareDnsRecordsNameOutputReference(_this, "name");
        // result - computed: true, optional: false, required: false
        _this._result = new DataCloudflareDnsRecordsResultList(_this, "result", false);
        // tag - computed: false, optional: true, required: false
        _this._tag = new DataCloudflareDnsRecordsTagOutputReference(_this, "tag");
        _this._comment.internalValue = config.comment;
        _this._content.internalValue = config.content;
        _this._direction = config.direction;
        _this._match = config.match;
        _this._maxItems = config.maxItems;
        _this._name.internalValue = config.name;
        _this._order = config.order;
        _this._proxied = config.proxied;
        _this._search = config.search;
        _this._tag.internalValue = config.tag;
        _this._tagMatch = config.tagMatch;
        _this._type = config.type;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareDnsRecords resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareDnsRecords to import
    * @param importFromId The id of the existing DataCloudflareDnsRecords that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareDnsRecords to import is found
    */
    DataCloudflareDnsRecords.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_dns_records", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareDnsRecords.prototype, "comment", {
        get: function () {
            return this._comment;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecords.prototype.putComment = function (value) {
        this._comment.internalValue = value;
    };
    DataCloudflareDnsRecords.prototype.resetComment = function () {
        this._comment.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecords.prototype, "commentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._comment.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecords.prototype, "content", {
        get: function () {
            return this._content;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecords.prototype.putContent = function (value) {
        this._content.internalValue = value;
    };
    DataCloudflareDnsRecords.prototype.resetContent = function () {
        this._content.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecords.prototype, "contentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._content.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecords.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecords.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecords.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecords.prototype, "match", {
        get: function () {
            return this.getStringAttribute('match');
        },
        set: function (value) {
            this._match = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecords.prototype.resetMatch = function () {
        this._match = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecords.prototype, "matchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._match;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecords.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecords.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecords.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecords.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecords.prototype.putName = function (value) {
        this._name.internalValue = value;
    };
    DataCloudflareDnsRecords.prototype.resetName = function () {
        this._name.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecords.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecords.prototype, "order", {
        get: function () {
            return this.getStringAttribute('order');
        },
        set: function (value) {
            this._order = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecords.prototype.resetOrder = function () {
        this._order = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecords.prototype, "orderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._order;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecords.prototype, "proxied", {
        get: function () {
            return this.getBooleanAttribute('proxied');
        },
        set: function (value) {
            this._proxied = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecords.prototype.resetProxied = function () {
        this._proxied = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecords.prototype, "proxiedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._proxied;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecords.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecords.prototype, "search", {
        get: function () {
            return this.getStringAttribute('search');
        },
        set: function (value) {
            this._search = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecords.prototype.resetSearch = function () {
        this._search = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecords.prototype, "searchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._search;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecords.prototype, "tag", {
        get: function () {
            return this._tag;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecords.prototype.putTag = function (value) {
        this._tag.internalValue = value;
    };
    DataCloudflareDnsRecords.prototype.resetTag = function () {
        this._tag.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecords.prototype, "tagInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tag.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecords.prototype, "tagMatch", {
        get: function () {
            return this.getStringAttribute('tag_match');
        },
        set: function (value) {
            this._tagMatch = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecords.prototype.resetTagMatch = function () {
        this._tagMatch = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecords.prototype, "tagMatchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagMatch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecords.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecords.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecords.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecords.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecords.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecords.prototype, "zoneIdInput", {
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
    DataCloudflareDnsRecords.prototype.synthesizeAttributes = function () {
        return {
            comment: dataCloudflareDnsRecordsCommentToTerraform(this._comment.internalValue),
            content: dataCloudflareDnsRecordsContentToTerraform(this._content.internalValue),
            direction: cdktf.stringToTerraform(this._direction),
            match: cdktf.stringToTerraform(this._match),
            max_items: cdktf.numberToTerraform(this._maxItems),
            name: dataCloudflareDnsRecordsNameToTerraform(this._name.internalValue),
            order: cdktf.stringToTerraform(this._order),
            proxied: cdktf.booleanToTerraform(this._proxied),
            search: cdktf.stringToTerraform(this._search),
            tag: dataCloudflareDnsRecordsTagToTerraform(this._tag.internalValue),
            tag_match: cdktf.stringToTerraform(this._tagMatch),
            type: cdktf.stringToTerraform(this._type),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareDnsRecords.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            comment: {
                value: dataCloudflareDnsRecordsCommentToHclTerraform(this._comment.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareDnsRecordsComment",
            },
            content: {
                value: dataCloudflareDnsRecordsContentToHclTerraform(this._content.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareDnsRecordsContent",
            },
            direction: {
                value: cdktf.stringToHclTerraform(this._direction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            match: {
                value: cdktf.stringToHclTerraform(this._match),
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
            name: {
                value: dataCloudflareDnsRecordsNameToHclTerraform(this._name.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareDnsRecordsName",
            },
            order: {
                value: cdktf.stringToHclTerraform(this._order),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            proxied: {
                value: cdktf.booleanToHclTerraform(this._proxied),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            search: {
                value: cdktf.stringToHclTerraform(this._search),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tag: {
                value: dataCloudflareDnsRecordsTagToHclTerraform(this._tag.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareDnsRecordsTag",
            },
            tag_match: {
                value: cdktf.stringToHclTerraform(this._tagMatch),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            type: {
                value: cdktf.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
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
    DataCloudflareDnsRecords.tfResourceType = "cloudflare_dns_records";
    return DataCloudflareDnsRecords;
}(cdktf.TerraformDataSource));
exports.DataCloudflareDnsRecords = DataCloudflareDnsRecords;
