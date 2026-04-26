"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lifecycle
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
exports.R2BucketLifecycle = exports.R2BucketLifecycleRulesList = exports.R2BucketLifecycleRulesOutputReference = exports.R2BucketLifecycleRulesStorageClassTransitionsList = exports.R2BucketLifecycleRulesStorageClassTransitionsOutputReference = exports.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference = exports.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference = exports.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference = exports.R2BucketLifecycleRulesConditionsOutputReference = exports.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference = exports.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference = void 0;
exports.r2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionToTerraform = r2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionToTerraform;
exports.r2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionToHclTerraform = r2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionToHclTerraform;
exports.r2BucketLifecycleRulesAbortMultipartUploadsTransitionToTerraform = r2BucketLifecycleRulesAbortMultipartUploadsTransitionToTerraform;
exports.r2BucketLifecycleRulesAbortMultipartUploadsTransitionToHclTerraform = r2BucketLifecycleRulesAbortMultipartUploadsTransitionToHclTerraform;
exports.r2BucketLifecycleRulesConditionsToTerraform = r2BucketLifecycleRulesConditionsToTerraform;
exports.r2BucketLifecycleRulesConditionsToHclTerraform = r2BucketLifecycleRulesConditionsToHclTerraform;
exports.r2BucketLifecycleRulesDeleteObjectsTransitionConditionToTerraform = r2BucketLifecycleRulesDeleteObjectsTransitionConditionToTerraform;
exports.r2BucketLifecycleRulesDeleteObjectsTransitionConditionToHclTerraform = r2BucketLifecycleRulesDeleteObjectsTransitionConditionToHclTerraform;
exports.r2BucketLifecycleRulesDeleteObjectsTransitionToTerraform = r2BucketLifecycleRulesDeleteObjectsTransitionToTerraform;
exports.r2BucketLifecycleRulesDeleteObjectsTransitionToHclTerraform = r2BucketLifecycleRulesDeleteObjectsTransitionToHclTerraform;
exports.r2BucketLifecycleRulesStorageClassTransitionsConditionToTerraform = r2BucketLifecycleRulesStorageClassTransitionsConditionToTerraform;
exports.r2BucketLifecycleRulesStorageClassTransitionsConditionToHclTerraform = r2BucketLifecycleRulesStorageClassTransitionsConditionToHclTerraform;
exports.r2BucketLifecycleRulesStorageClassTransitionsToTerraform = r2BucketLifecycleRulesStorageClassTransitionsToTerraform;
exports.r2BucketLifecycleRulesStorageClassTransitionsToHclTerraform = r2BucketLifecycleRulesStorageClassTransitionsToHclTerraform;
exports.r2BucketLifecycleRulesToTerraform = r2BucketLifecycleRulesToTerraform;
exports.r2BucketLifecycleRulesToHclTerraform = r2BucketLifecycleRulesToHclTerraform;
var cdktf = require("cdktf");
function r2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        max_age: cdktf.numberToTerraform(struct.maxAge),
        type: cdktf.stringToTerraform(struct.type),
    };
}
function r2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        max_age: {
            value: cdktf.numberToHclTerraform(struct.maxAge),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
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
var R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference = /** @class */ (function (_super) {
    __extends(R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._maxAge !== undefined) {
                hasAnyValues = true;
                internalValueResult.maxAge = this._maxAge;
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
                this.resolvableValue = undefined;
                this._maxAge = undefined;
                this._type = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._maxAge = value.maxAge;
                this._type = value.type;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.prototype, "maxAge", {
        get: function () {
            return this.getNumberAttribute('max_age');
        },
        set: function (value) {
            this._maxAge = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.prototype, "maxAgeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxAge;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    return R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference;
}(cdktf.ComplexObject));
exports.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference = R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference;
function r2BucketLifecycleRulesAbortMultipartUploadsTransitionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        condition: r2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionToTerraform(struct.condition),
    };
}
function r2BucketLifecycleRulesAbortMultipartUploadsTransitionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        condition: {
            value: r2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionToHclTerraform(struct.condition),
            isBlock: true,
            type: "struct",
            storageClassType: "R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference = /** @class */ (function (_super) {
    __extends(R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // condition - computed: false, optional: true, required: false
        _this._condition = new R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference(_this, "condition");
        return _this;
    }
    Object.defineProperty(R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._condition) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.condition = (_b = this._condition) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._condition.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._condition.internalValue = value.condition;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.prototype, "condition", {
        get: function () {
            return this._condition;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.prototype.putCondition = function (value) {
        this._condition.internalValue = value;
    };
    R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.prototype.resetCondition = function () {
        this._condition.internalValue = undefined;
    };
    Object.defineProperty(R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.prototype, "conditionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._condition.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference;
}(cdktf.ComplexObject));
exports.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference = R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference;
function r2BucketLifecycleRulesConditionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        prefix: cdktf.stringToTerraform(struct.prefix),
    };
}
function r2BucketLifecycleRulesConditionsToHclTerraform(struct) {
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var R2BucketLifecycleRulesConditionsOutputReference = /** @class */ (function (_super) {
    __extends(R2BucketLifecycleRulesConditionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function R2BucketLifecycleRulesConditionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(R2BucketLifecycleRulesConditionsOutputReference.prototype, "internalValue", {
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
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._prefix = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._prefix = value.prefix;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLifecycleRulesConditionsOutputReference.prototype, "prefix", {
        get: function () {
            return this.getStringAttribute('prefix');
        },
        set: function (value) {
            this._prefix = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLifecycleRulesConditionsOutputReference.prototype, "prefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._prefix;
        },
        enumerable: false,
        configurable: true
    });
    return R2BucketLifecycleRulesConditionsOutputReference;
}(cdktf.ComplexObject));
exports.R2BucketLifecycleRulesConditionsOutputReference = R2BucketLifecycleRulesConditionsOutputReference;
function r2BucketLifecycleRulesDeleteObjectsTransitionConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        date: cdktf.stringToTerraform(struct.date),
        max_age: cdktf.numberToTerraform(struct.maxAge),
        type: cdktf.stringToTerraform(struct.type),
    };
}
function r2BucketLifecycleRulesDeleteObjectsTransitionConditionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        date: {
            value: cdktf.stringToHclTerraform(struct.date),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_age: {
            value: cdktf.numberToHclTerraform(struct.maxAge),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
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
var R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference = /** @class */ (function (_super) {
    __extends(R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._date !== undefined) {
                hasAnyValues = true;
                internalValueResult.date = this._date;
            }
            if (this._maxAge !== undefined) {
                hasAnyValues = true;
                internalValueResult.maxAge = this._maxAge;
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
                this.resolvableValue = undefined;
                this._date = undefined;
                this._maxAge = undefined;
                this._type = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._date = value.date;
                this._maxAge = value.maxAge;
                this._type = value.type;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.prototype, "date", {
        get: function () {
            return this.getStringAttribute('date');
        },
        set: function (value) {
            this._date = value;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.prototype.resetDate = function () {
        this._date = undefined;
    };
    Object.defineProperty(R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.prototype, "dateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._date;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.prototype, "maxAge", {
        get: function () {
            return this.getNumberAttribute('max_age');
        },
        set: function (value) {
            this._maxAge = value;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.prototype.resetMaxAge = function () {
        this._maxAge = undefined;
    };
    Object.defineProperty(R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.prototype, "maxAgeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxAge;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    return R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference;
}(cdktf.ComplexObject));
exports.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference = R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference;
function r2BucketLifecycleRulesDeleteObjectsTransitionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        condition: r2BucketLifecycleRulesDeleteObjectsTransitionConditionToTerraform(struct.condition),
    };
}
function r2BucketLifecycleRulesDeleteObjectsTransitionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        condition: {
            value: r2BucketLifecycleRulesDeleteObjectsTransitionConditionToHclTerraform(struct.condition),
            isBlock: true,
            type: "struct",
            storageClassType: "R2BucketLifecycleRulesDeleteObjectsTransitionCondition",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference = /** @class */ (function (_super) {
    __extends(R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // condition - computed: false, optional: true, required: false
        _this._condition = new R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference(_this, "condition");
        return _this;
    }
    Object.defineProperty(R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._condition) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.condition = (_b = this._condition) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._condition.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._condition.internalValue = value.condition;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.prototype, "condition", {
        get: function () {
            return this._condition;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.prototype.putCondition = function (value) {
        this._condition.internalValue = value;
    };
    R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.prototype.resetCondition = function () {
        this._condition.internalValue = undefined;
    };
    Object.defineProperty(R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.prototype, "conditionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._condition.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference;
}(cdktf.ComplexObject));
exports.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference = R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference;
function r2BucketLifecycleRulesStorageClassTransitionsConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        date: cdktf.stringToTerraform(struct.date),
        max_age: cdktf.numberToTerraform(struct.maxAge),
        type: cdktf.stringToTerraform(struct.type),
    };
}
function r2BucketLifecycleRulesStorageClassTransitionsConditionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        date: {
            value: cdktf.stringToHclTerraform(struct.date),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_age: {
            value: cdktf.numberToHclTerraform(struct.maxAge),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
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
var R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference = /** @class */ (function (_super) {
    __extends(R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._date !== undefined) {
                hasAnyValues = true;
                internalValueResult.date = this._date;
            }
            if (this._maxAge !== undefined) {
                hasAnyValues = true;
                internalValueResult.maxAge = this._maxAge;
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
                this.resolvableValue = undefined;
                this._date = undefined;
                this._maxAge = undefined;
                this._type = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._date = value.date;
                this._maxAge = value.maxAge;
                this._type = value.type;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.prototype, "date", {
        get: function () {
            return this.getStringAttribute('date');
        },
        set: function (value) {
            this._date = value;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.prototype.resetDate = function () {
        this._date = undefined;
    };
    Object.defineProperty(R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.prototype, "dateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._date;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.prototype, "maxAge", {
        get: function () {
            return this.getNumberAttribute('max_age');
        },
        set: function (value) {
            this._maxAge = value;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.prototype.resetMaxAge = function () {
        this._maxAge = undefined;
    };
    Object.defineProperty(R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.prototype, "maxAgeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxAge;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    return R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference;
}(cdktf.ComplexObject));
exports.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference = R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference;
function r2BucketLifecycleRulesStorageClassTransitionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        condition: r2BucketLifecycleRulesStorageClassTransitionsConditionToTerraform(struct.condition),
        storage_class: cdktf.stringToTerraform(struct.storageClass),
    };
}
function r2BucketLifecycleRulesStorageClassTransitionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        condition: {
            value: r2BucketLifecycleRulesStorageClassTransitionsConditionToHclTerraform(struct.condition),
            isBlock: true,
            type: "struct",
            storageClassType: "R2BucketLifecycleRulesStorageClassTransitionsCondition",
        },
        storage_class: {
            value: cdktf.stringToHclTerraform(struct.storageClass),
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
var R2BucketLifecycleRulesStorageClassTransitionsOutputReference = /** @class */ (function (_super) {
    __extends(R2BucketLifecycleRulesStorageClassTransitionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function R2BucketLifecycleRulesStorageClassTransitionsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // condition - computed: false, optional: false, required: true
        _this._condition = new R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference(_this, "condition");
        return _this;
    }
    Object.defineProperty(R2BucketLifecycleRulesStorageClassTransitionsOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._condition) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.condition = (_b = this._condition) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._storageClass !== undefined) {
                hasAnyValues = true;
                internalValueResult.storageClass = this._storageClass;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._condition.internalValue = undefined;
                this._storageClass = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._condition.internalValue = value.condition;
                this._storageClass = value.storageClass;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLifecycleRulesStorageClassTransitionsOutputReference.prototype, "condition", {
        get: function () {
            return this._condition;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketLifecycleRulesStorageClassTransitionsOutputReference.prototype.putCondition = function (value) {
        this._condition.internalValue = value;
    };
    Object.defineProperty(R2BucketLifecycleRulesStorageClassTransitionsOutputReference.prototype, "conditionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._condition.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLifecycleRulesStorageClassTransitionsOutputReference.prototype, "storageClass", {
        get: function () {
            return this.getStringAttribute('storage_class');
        },
        set: function (value) {
            this._storageClass = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLifecycleRulesStorageClassTransitionsOutputReference.prototype, "storageClassInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._storageClass;
        },
        enumerable: false,
        configurable: true
    });
    return R2BucketLifecycleRulesStorageClassTransitionsOutputReference;
}(cdktf.ComplexObject));
exports.R2BucketLifecycleRulesStorageClassTransitionsOutputReference = R2BucketLifecycleRulesStorageClassTransitionsOutputReference;
var R2BucketLifecycleRulesStorageClassTransitionsList = /** @class */ (function (_super) {
    __extends(R2BucketLifecycleRulesStorageClassTransitionsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function R2BucketLifecycleRulesStorageClassTransitionsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    R2BucketLifecycleRulesStorageClassTransitionsList.prototype.get = function (index) {
        return new R2BucketLifecycleRulesStorageClassTransitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return R2BucketLifecycleRulesStorageClassTransitionsList;
}(cdktf.ComplexList));
exports.R2BucketLifecycleRulesStorageClassTransitionsList = R2BucketLifecycleRulesStorageClassTransitionsList;
function r2BucketLifecycleRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        abort_multipart_uploads_transition: r2BucketLifecycleRulesAbortMultipartUploadsTransitionToTerraform(struct.abortMultipartUploadsTransition),
        conditions: r2BucketLifecycleRulesConditionsToTerraform(struct.conditions),
        delete_objects_transition: r2BucketLifecycleRulesDeleteObjectsTransitionToTerraform(struct.deleteObjectsTransition),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        id: cdktf.stringToTerraform(struct.id),
        storage_class_transitions: cdktf.listMapper(r2BucketLifecycleRulesStorageClassTransitionsToTerraform, false)(struct.storageClassTransitions),
    };
}
function r2BucketLifecycleRulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        abort_multipart_uploads_transition: {
            value: r2BucketLifecycleRulesAbortMultipartUploadsTransitionToHclTerraform(struct.abortMultipartUploadsTransition),
            isBlock: true,
            type: "struct",
            storageClassType: "R2BucketLifecycleRulesAbortMultipartUploadsTransition",
        },
        conditions: {
            value: r2BucketLifecycleRulesConditionsToHclTerraform(struct.conditions),
            isBlock: true,
            type: "struct",
            storageClassType: "R2BucketLifecycleRulesConditions",
        },
        delete_objects_transition: {
            value: r2BucketLifecycleRulesDeleteObjectsTransitionToHclTerraform(struct.deleteObjectsTransition),
            isBlock: true,
            type: "struct",
            storageClassType: "R2BucketLifecycleRulesDeleteObjectsTransition",
        },
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        storage_class_transitions: {
            value: cdktf.listMapperHcl(r2BucketLifecycleRulesStorageClassTransitionsToHclTerraform, false)(struct.storageClassTransitions),
            isBlock: true,
            type: "list",
            storageClassType: "R2BucketLifecycleRulesStorageClassTransitionsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var R2BucketLifecycleRulesOutputReference = /** @class */ (function (_super) {
    __extends(R2BucketLifecycleRulesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function R2BucketLifecycleRulesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // abort_multipart_uploads_transition - computed: false, optional: true, required: false
        _this._abortMultipartUploadsTransition = new R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference(_this, "abort_multipart_uploads_transition");
        // conditions - computed: false, optional: false, required: true
        _this._conditions = new R2BucketLifecycleRulesConditionsOutputReference(_this, "conditions");
        // delete_objects_transition - computed: false, optional: true, required: false
        _this._deleteObjectsTransition = new R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference(_this, "delete_objects_transition");
        // storage_class_transitions - computed: false, optional: true, required: false
        _this._storageClassTransitions = new R2BucketLifecycleRulesStorageClassTransitionsList(_this, "storage_class_transitions", false);
        return _this;
    }
    Object.defineProperty(R2BucketLifecycleRulesOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._abortMultipartUploadsTransition) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.abortMultipartUploadsTransition = (_b = this._abortMultipartUploadsTransition) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._conditions) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.conditions = (_d = this._conditions) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (((_e = this._deleteObjectsTransition) === null || _e === void 0 ? void 0 : _e.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.deleteObjectsTransition = (_f = this._deleteObjectsTransition) === null || _f === void 0 ? void 0 : _f.internalValue;
            }
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            if (((_g = this._storageClassTransitions) === null || _g === void 0 ? void 0 : _g.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.storageClassTransitions = (_h = this._storageClassTransitions) === null || _h === void 0 ? void 0 : _h.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._abortMultipartUploadsTransition.internalValue = undefined;
                this._conditions.internalValue = undefined;
                this._deleteObjectsTransition.internalValue = undefined;
                this._enabled = undefined;
                this._id = undefined;
                this._storageClassTransitions.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._abortMultipartUploadsTransition.internalValue = value.abortMultipartUploadsTransition;
                this._conditions.internalValue = value.conditions;
                this._deleteObjectsTransition.internalValue = value.deleteObjectsTransition;
                this._enabled = value.enabled;
                this._id = value.id;
                this._storageClassTransitions.internalValue = value.storageClassTransitions;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLifecycleRulesOutputReference.prototype, "abortMultipartUploadsTransition", {
        get: function () {
            return this._abortMultipartUploadsTransition;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketLifecycleRulesOutputReference.prototype.putAbortMultipartUploadsTransition = function (value) {
        this._abortMultipartUploadsTransition.internalValue = value;
    };
    R2BucketLifecycleRulesOutputReference.prototype.resetAbortMultipartUploadsTransition = function () {
        this._abortMultipartUploadsTransition.internalValue = undefined;
    };
    Object.defineProperty(R2BucketLifecycleRulesOutputReference.prototype, "abortMultipartUploadsTransitionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._abortMultipartUploadsTransition.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLifecycleRulesOutputReference.prototype, "conditions", {
        get: function () {
            return this._conditions;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketLifecycleRulesOutputReference.prototype.putConditions = function (value) {
        this._conditions.internalValue = value;
    };
    Object.defineProperty(R2BucketLifecycleRulesOutputReference.prototype, "conditionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._conditions.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLifecycleRulesOutputReference.prototype, "deleteObjectsTransition", {
        get: function () {
            return this._deleteObjectsTransition;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketLifecycleRulesOutputReference.prototype.putDeleteObjectsTransition = function (value) {
        this._deleteObjectsTransition.internalValue = value;
    };
    R2BucketLifecycleRulesOutputReference.prototype.resetDeleteObjectsTransition = function () {
        this._deleteObjectsTransition.internalValue = undefined;
    };
    Object.defineProperty(R2BucketLifecycleRulesOutputReference.prototype, "deleteObjectsTransitionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deleteObjectsTransition.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLifecycleRulesOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLifecycleRulesOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLifecycleRulesOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLifecycleRulesOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLifecycleRulesOutputReference.prototype, "storageClassTransitions", {
        get: function () {
            return this._storageClassTransitions;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketLifecycleRulesOutputReference.prototype.putStorageClassTransitions = function (value) {
        this._storageClassTransitions.internalValue = value;
    };
    R2BucketLifecycleRulesOutputReference.prototype.resetStorageClassTransitions = function () {
        this._storageClassTransitions.internalValue = undefined;
    };
    Object.defineProperty(R2BucketLifecycleRulesOutputReference.prototype, "storageClassTransitionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._storageClassTransitions.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return R2BucketLifecycleRulesOutputReference;
}(cdktf.ComplexObject));
exports.R2BucketLifecycleRulesOutputReference = R2BucketLifecycleRulesOutputReference;
var R2BucketLifecycleRulesList = /** @class */ (function (_super) {
    __extends(R2BucketLifecycleRulesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function R2BucketLifecycleRulesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    R2BucketLifecycleRulesList.prototype.get = function (index) {
        return new R2BucketLifecycleRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return R2BucketLifecycleRulesList;
}(cdktf.ComplexList));
exports.R2BucketLifecycleRulesList = R2BucketLifecycleRulesList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lifecycle cloudflare_r2_bucket_lifecycle}
*/
var R2BucketLifecycle = /** @class */ (function (_super) {
    __extends(R2BucketLifecycle, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lifecycle cloudflare_r2_bucket_lifecycle} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options R2BucketLifecycleConfig
    */
    function R2BucketLifecycle(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_r2_bucket_lifecycle',
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
        // rules - computed: false, optional: true, required: false
        _this._rules = new R2BucketLifecycleRulesList(_this, "rules", false);
        _this._accountId = config.accountId;
        _this._bucketName = config.bucketName;
        _this._jurisdiction = config.jurisdiction;
        _this._rules.internalValue = config.rules;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a R2BucketLifecycle resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the R2BucketLifecycle to import
    * @param importFromId The id of the existing R2BucketLifecycle that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lifecycle#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the R2BucketLifecycle to import is found
    */
    R2BucketLifecycle.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_r2_bucket_lifecycle", importId: importFromId, provider: provider });
    };
    Object.defineProperty(R2BucketLifecycle.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketLifecycle.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(R2BucketLifecycle.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLifecycle.prototype, "bucketName", {
        get: function () {
            return this.getStringAttribute('bucket_name');
        },
        set: function (value) {
            this._bucketName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLifecycle.prototype, "bucketNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucketName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLifecycle.prototype, "jurisdiction", {
        get: function () {
            return this.getStringAttribute('jurisdiction');
        },
        set: function (value) {
            this._jurisdiction = value;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketLifecycle.prototype.resetJurisdiction = function () {
        this._jurisdiction = undefined;
    };
    Object.defineProperty(R2BucketLifecycle.prototype, "jurisdictionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._jurisdiction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLifecycle.prototype, "rules", {
        get: function () {
            return this._rules;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketLifecycle.prototype.putRules = function (value) {
        this._rules.internalValue = value;
    };
    R2BucketLifecycle.prototype.resetRules = function () {
        this._rules.internalValue = undefined;
    };
    Object.defineProperty(R2BucketLifecycle.prototype, "rulesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rules.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    R2BucketLifecycle.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            bucket_name: cdktf.stringToTerraform(this._bucketName),
            jurisdiction: cdktf.stringToTerraform(this._jurisdiction),
            rules: cdktf.listMapper(r2BucketLifecycleRulesToTerraform, false)(this._rules.internalValue),
        };
    };
    R2BucketLifecycle.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            bucket_name: {
                value: cdktf.stringToHclTerraform(this._bucketName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            jurisdiction: {
                value: cdktf.stringToHclTerraform(this._jurisdiction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rules: {
                value: cdktf.listMapperHcl(r2BucketLifecycleRulesToHclTerraform, false)(this._rules.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "R2BucketLifecycleRulesList",
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
    R2BucketLifecycle.tfResourceType = "cloudflare_r2_bucket_lifecycle";
    return R2BucketLifecycle;
}(cdktf.TerraformResource));
exports.R2BucketLifecycle = R2BucketLifecycle;
