"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_lifecycle
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
exports.DataCloudflareR2BucketLifecycle = exports.DataCloudflareR2BucketLifecycleRulesList = exports.DataCloudflareR2BucketLifecycleRulesOutputReference = exports.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList = exports.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference = exports.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference = exports.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference = exports.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference = exports.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference = exports.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference = exports.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference = void 0;
exports.dataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionToTerraform = dataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionToTerraform;
exports.dataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionToHclTerraform = dataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionToHclTerraform;
exports.dataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionToTerraform = dataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionToTerraform;
exports.dataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionToHclTerraform = dataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionToHclTerraform;
exports.dataCloudflareR2BucketLifecycleRulesConditionsToTerraform = dataCloudflareR2BucketLifecycleRulesConditionsToTerraform;
exports.dataCloudflareR2BucketLifecycleRulesConditionsToHclTerraform = dataCloudflareR2BucketLifecycleRulesConditionsToHclTerraform;
exports.dataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionToTerraform = dataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionToTerraform;
exports.dataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionToHclTerraform = dataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionToHclTerraform;
exports.dataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionToTerraform = dataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionToTerraform;
exports.dataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionToHclTerraform = dataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionToHclTerraform;
exports.dataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionToTerraform = dataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionToTerraform;
exports.dataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionToHclTerraform = dataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionToHclTerraform;
exports.dataCloudflareR2BucketLifecycleRulesStorageClassTransitionsToTerraform = dataCloudflareR2BucketLifecycleRulesStorageClassTransitionsToTerraform;
exports.dataCloudflareR2BucketLifecycleRulesStorageClassTransitionsToHclTerraform = dataCloudflareR2BucketLifecycleRulesStorageClassTransitionsToHclTerraform;
exports.dataCloudflareR2BucketLifecycleRulesToTerraform = dataCloudflareR2BucketLifecycleRulesToTerraform;
exports.dataCloudflareR2BucketLifecycleRulesToHclTerraform = dataCloudflareR2BucketLifecycleRulesToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.prototype, "maxAge", {
        // max_age - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_age');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference = DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference;
function dataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // condition - computed: true, optional: false, required: false
        _this._condition = new DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference(_this, "condition");
        return _this;
    }
    Object.defineProperty(DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.prototype, "condition", {
        get: function () {
            return this._condition;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference = DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference;
function dataCloudflareR2BucketLifecycleRulesConditionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareR2BucketLifecycleRulesConditionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareR2BucketLifecycleRulesConditionsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareR2BucketLifecycleRulesConditionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareR2BucketLifecycleRulesConditionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.prototype, "prefix", {
        // prefix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('prefix');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareR2BucketLifecycleRulesConditionsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference = DataCloudflareR2BucketLifecycleRulesConditionsOutputReference;
function dataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.prototype, "date", {
        // date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.prototype, "maxAge", {
        // max_age - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_age');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference = DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference;
function dataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // condition - computed: true, optional: false, required: false
        _this._condition = new DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference(_this, "condition");
        return _this;
    }
    Object.defineProperty(DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.prototype, "condition", {
        get: function () {
            return this._condition;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference = DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference;
function dataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.prototype, "date", {
        // date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.prototype, "maxAge", {
        // max_age - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_age');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference = DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference;
function dataCloudflareR2BucketLifecycleRulesStorageClassTransitionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareR2BucketLifecycleRulesStorageClassTransitionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // condition - computed: true, optional: false, required: false
        _this._condition = new DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference(_this, "condition");
        return _this;
    }
    Object.defineProperty(DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.prototype, "condition", {
        get: function () {
            return this._condition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.prototype, "storageClass", {
        // storage_class - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('storage_class');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference = DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference;
var DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList = /** @class */ (function (_super) {
    __extends(DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.prototype.get = function (index) {
        return new DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList;
}(cdktf.ComplexList));
exports.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList = DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList;
function dataCloudflareR2BucketLifecycleRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareR2BucketLifecycleRulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareR2BucketLifecycleRulesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareR2BucketLifecycleRulesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareR2BucketLifecycleRulesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // abort_multipart_uploads_transition - computed: true, optional: false, required: false
        _this._abortMultipartUploadsTransition = new DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference(_this, "abort_multipart_uploads_transition");
        // conditions - computed: true, optional: false, required: false
        _this._conditions = new DataCloudflareR2BucketLifecycleRulesConditionsOutputReference(_this, "conditions");
        // delete_objects_transition - computed: true, optional: false, required: false
        _this._deleteObjectsTransition = new DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference(_this, "delete_objects_transition");
        // storage_class_transitions - computed: true, optional: false, required: false
        _this._storageClassTransitions = new DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList(_this, "storage_class_transitions", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareR2BucketLifecycleRulesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareR2BucketLifecycleRulesOutputReference.prototype, "abortMultipartUploadsTransition", {
        get: function () {
            return this._abortMultipartUploadsTransition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketLifecycleRulesOutputReference.prototype, "conditions", {
        get: function () {
            return this._conditions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketLifecycleRulesOutputReference.prototype, "deleteObjectsTransition", {
        get: function () {
            return this._deleteObjectsTransition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketLifecycleRulesOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketLifecycleRulesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketLifecycleRulesOutputReference.prototype, "storageClassTransitions", {
        get: function () {
            return this._storageClassTransitions;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareR2BucketLifecycleRulesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareR2BucketLifecycleRulesOutputReference = DataCloudflareR2BucketLifecycleRulesOutputReference;
var DataCloudflareR2BucketLifecycleRulesList = /** @class */ (function (_super) {
    __extends(DataCloudflareR2BucketLifecycleRulesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareR2BucketLifecycleRulesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareR2BucketLifecycleRulesList.prototype.get = function (index) {
        return new DataCloudflareR2BucketLifecycleRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareR2BucketLifecycleRulesList;
}(cdktf.ComplexList));
exports.DataCloudflareR2BucketLifecycleRulesList = DataCloudflareR2BucketLifecycleRulesList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_lifecycle cloudflare_r2_bucket_lifecycle}
*/
var DataCloudflareR2BucketLifecycle = /** @class */ (function (_super) {
    __extends(DataCloudflareR2BucketLifecycle, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_lifecycle cloudflare_r2_bucket_lifecycle} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareR2BucketLifecycleConfig
    */
    function DataCloudflareR2BucketLifecycle(scope, id, config) {
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
        // rules - computed: true, optional: false, required: false
        _this._rules = new DataCloudflareR2BucketLifecycleRulesList(_this, "rules", false);
        _this._accountId = config.accountId;
        _this._bucketName = config.bucketName;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareR2BucketLifecycle resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareR2BucketLifecycle to import
    * @param importFromId The id of the existing DataCloudflareR2BucketLifecycle that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_lifecycle#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareR2BucketLifecycle to import is found
    */
    DataCloudflareR2BucketLifecycle.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_r2_bucket_lifecycle", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareR2BucketLifecycle.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareR2BucketLifecycle.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareR2BucketLifecycle.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketLifecycle.prototype, "bucketName", {
        get: function () {
            return this.getStringAttribute('bucket_name');
        },
        set: function (value) {
            this._bucketName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketLifecycle.prototype, "bucketNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucketName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketLifecycle.prototype, "rules", {
        get: function () {
            return this._rules;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareR2BucketLifecycle.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            bucket_name: cdktf.stringToTerraform(this._bucketName),
        };
    };
    DataCloudflareR2BucketLifecycle.prototype.synthesizeHclAttributes = function () {
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
    DataCloudflareR2BucketLifecycle.tfResourceType = "cloudflare_r2_bucket_lifecycle";
    return DataCloudflareR2BucketLifecycle;
}(cdktf.TerraformDataSource));
exports.DataCloudflareR2BucketLifecycle = DataCloudflareR2BucketLifecycle;
