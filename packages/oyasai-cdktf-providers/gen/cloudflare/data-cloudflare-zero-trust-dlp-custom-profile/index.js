"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_custom_profile
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
exports.DataCloudflareZeroTrustDlpCustomProfile = exports.DataCloudflareZeroTrustDlpCustomProfileSharedEntriesList = exports.DataCloudflareZeroTrustDlpCustomProfileSharedEntriesOutputReference = exports.DataCloudflareZeroTrustDlpCustomProfileSharedEntriesVariantOutputReference = exports.DataCloudflareZeroTrustDlpCustomProfileSharedEntriesPatternOutputReference = exports.DataCloudflareZeroTrustDlpCustomProfileSharedEntriesConfidenceOutputReference = exports.DataCloudflareZeroTrustDlpCustomProfileSensitivityLevelsList = exports.DataCloudflareZeroTrustDlpCustomProfileSensitivityLevelsOutputReference = exports.DataCloudflareZeroTrustDlpCustomProfileEntriesList = exports.DataCloudflareZeroTrustDlpCustomProfileEntriesOutputReference = exports.DataCloudflareZeroTrustDlpCustomProfileEntriesVariantOutputReference = exports.DataCloudflareZeroTrustDlpCustomProfileEntriesPatternOutputReference = exports.DataCloudflareZeroTrustDlpCustomProfileEntriesConfidenceOutputReference = exports.DataCloudflareZeroTrustDlpCustomProfileContextAwarenessOutputReference = exports.DataCloudflareZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference = void 0;
exports.dataCloudflareZeroTrustDlpCustomProfileContextAwarenessSkipToTerraform = dataCloudflareZeroTrustDlpCustomProfileContextAwarenessSkipToTerraform;
exports.dataCloudflareZeroTrustDlpCustomProfileContextAwarenessSkipToHclTerraform = dataCloudflareZeroTrustDlpCustomProfileContextAwarenessSkipToHclTerraform;
exports.dataCloudflareZeroTrustDlpCustomProfileContextAwarenessToTerraform = dataCloudflareZeroTrustDlpCustomProfileContextAwarenessToTerraform;
exports.dataCloudflareZeroTrustDlpCustomProfileContextAwarenessToHclTerraform = dataCloudflareZeroTrustDlpCustomProfileContextAwarenessToHclTerraform;
exports.dataCloudflareZeroTrustDlpCustomProfileEntriesConfidenceToTerraform = dataCloudflareZeroTrustDlpCustomProfileEntriesConfidenceToTerraform;
exports.dataCloudflareZeroTrustDlpCustomProfileEntriesConfidenceToHclTerraform = dataCloudflareZeroTrustDlpCustomProfileEntriesConfidenceToHclTerraform;
exports.dataCloudflareZeroTrustDlpCustomProfileEntriesPatternToTerraform = dataCloudflareZeroTrustDlpCustomProfileEntriesPatternToTerraform;
exports.dataCloudflareZeroTrustDlpCustomProfileEntriesPatternToHclTerraform = dataCloudflareZeroTrustDlpCustomProfileEntriesPatternToHclTerraform;
exports.dataCloudflareZeroTrustDlpCustomProfileEntriesVariantToTerraform = dataCloudflareZeroTrustDlpCustomProfileEntriesVariantToTerraform;
exports.dataCloudflareZeroTrustDlpCustomProfileEntriesVariantToHclTerraform = dataCloudflareZeroTrustDlpCustomProfileEntriesVariantToHclTerraform;
exports.dataCloudflareZeroTrustDlpCustomProfileEntriesToTerraform = dataCloudflareZeroTrustDlpCustomProfileEntriesToTerraform;
exports.dataCloudflareZeroTrustDlpCustomProfileEntriesToHclTerraform = dataCloudflareZeroTrustDlpCustomProfileEntriesToHclTerraform;
exports.dataCloudflareZeroTrustDlpCustomProfileSensitivityLevelsToTerraform = dataCloudflareZeroTrustDlpCustomProfileSensitivityLevelsToTerraform;
exports.dataCloudflareZeroTrustDlpCustomProfileSensitivityLevelsToHclTerraform = dataCloudflareZeroTrustDlpCustomProfileSensitivityLevelsToHclTerraform;
exports.dataCloudflareZeroTrustDlpCustomProfileSharedEntriesConfidenceToTerraform = dataCloudflareZeroTrustDlpCustomProfileSharedEntriesConfidenceToTerraform;
exports.dataCloudflareZeroTrustDlpCustomProfileSharedEntriesConfidenceToHclTerraform = dataCloudflareZeroTrustDlpCustomProfileSharedEntriesConfidenceToHclTerraform;
exports.dataCloudflareZeroTrustDlpCustomProfileSharedEntriesPatternToTerraform = dataCloudflareZeroTrustDlpCustomProfileSharedEntriesPatternToTerraform;
exports.dataCloudflareZeroTrustDlpCustomProfileSharedEntriesPatternToHclTerraform = dataCloudflareZeroTrustDlpCustomProfileSharedEntriesPatternToHclTerraform;
exports.dataCloudflareZeroTrustDlpCustomProfileSharedEntriesVariantToTerraform = dataCloudflareZeroTrustDlpCustomProfileSharedEntriesVariantToTerraform;
exports.dataCloudflareZeroTrustDlpCustomProfileSharedEntriesVariantToHclTerraform = dataCloudflareZeroTrustDlpCustomProfileSharedEntriesVariantToHclTerraform;
exports.dataCloudflareZeroTrustDlpCustomProfileSharedEntriesToTerraform = dataCloudflareZeroTrustDlpCustomProfileSharedEntriesToTerraform;
exports.dataCloudflareZeroTrustDlpCustomProfileSharedEntriesToHclTerraform = dataCloudflareZeroTrustDlpCustomProfileSharedEntriesToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustDlpCustomProfileContextAwarenessSkipToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDlpCustomProfileContextAwarenessSkipToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.prototype, "files", {
        // files - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('files');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference = DataCloudflareZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference;
function dataCloudflareZeroTrustDlpCustomProfileContextAwarenessToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDlpCustomProfileContextAwarenessToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDlpCustomProfileContextAwarenessOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpCustomProfileContextAwarenessOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDlpCustomProfileContextAwarenessOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // skip - computed: true, optional: false, required: false
        _this._skip = new DataCloudflareZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference(_this, "skip");
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileContextAwarenessOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileContextAwarenessOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileContextAwarenessOutputReference.prototype, "skip", {
        get: function () {
            return this._skip;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDlpCustomProfileContextAwarenessOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDlpCustomProfileContextAwarenessOutputReference = DataCloudflareZeroTrustDlpCustomProfileContextAwarenessOutputReference;
function dataCloudflareZeroTrustDlpCustomProfileEntriesConfidenceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDlpCustomProfileEntriesConfidenceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDlpCustomProfileEntriesConfidenceOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpCustomProfileEntriesConfidenceOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDlpCustomProfileEntriesConfidenceOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileEntriesConfidenceOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileEntriesConfidenceOutputReference.prototype, "aiContextAvailable", {
        // ai_context_available - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ai_context_available');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileEntriesConfidenceOutputReference.prototype, "available", {
        // available - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('available');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDlpCustomProfileEntriesConfidenceOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDlpCustomProfileEntriesConfidenceOutputReference = DataCloudflareZeroTrustDlpCustomProfileEntriesConfidenceOutputReference;
function dataCloudflareZeroTrustDlpCustomProfileEntriesPatternToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDlpCustomProfileEntriesPatternToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDlpCustomProfileEntriesPatternOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpCustomProfileEntriesPatternOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDlpCustomProfileEntriesPatternOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileEntriesPatternOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileEntriesPatternOutputReference.prototype, "regex", {
        // regex - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('regex');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileEntriesPatternOutputReference.prototype, "validation", {
        // validation - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('validation');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDlpCustomProfileEntriesPatternOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDlpCustomProfileEntriesPatternOutputReference = DataCloudflareZeroTrustDlpCustomProfileEntriesPatternOutputReference;
function dataCloudflareZeroTrustDlpCustomProfileEntriesVariantToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDlpCustomProfileEntriesVariantToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDlpCustomProfileEntriesVariantOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpCustomProfileEntriesVariantOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDlpCustomProfileEntriesVariantOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileEntriesVariantOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileEntriesVariantOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileEntriesVariantOutputReference.prototype, "topicType", {
        // topic_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('topic_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileEntriesVariantOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDlpCustomProfileEntriesVariantOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDlpCustomProfileEntriesVariantOutputReference = DataCloudflareZeroTrustDlpCustomProfileEntriesVariantOutputReference;
function dataCloudflareZeroTrustDlpCustomProfileEntriesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDlpCustomProfileEntriesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDlpCustomProfileEntriesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpCustomProfileEntriesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDlpCustomProfileEntriesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // confidence - computed: true, optional: false, required: false
        _this._confidence = new DataCloudflareZeroTrustDlpCustomProfileEntriesConfidenceOutputReference(_this, "confidence");
        // pattern - computed: true, optional: false, required: false
        _this._pattern = new DataCloudflareZeroTrustDlpCustomProfileEntriesPatternOutputReference(_this, "pattern");
        // variant - computed: true, optional: false, required: false
        _this._variant = new DataCloudflareZeroTrustDlpCustomProfileEntriesVariantOutputReference(_this, "variant");
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileEntriesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileEntriesOutputReference.prototype, "caseSensitive", {
        // case_sensitive - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('case_sensitive');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileEntriesOutputReference.prototype, "confidence", {
        get: function () {
            return this._confidence;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileEntriesOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileEntriesOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileEntriesOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileEntriesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileEntriesOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileEntriesOutputReference.prototype, "pattern", {
        get: function () {
            return this._pattern;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileEntriesOutputReference.prototype, "profileId", {
        // profile_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('profile_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileEntriesOutputReference.prototype, "secret", {
        // secret - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('secret');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileEntriesOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileEntriesOutputReference.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileEntriesOutputReference.prototype, "variant", {
        get: function () {
            return this._variant;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileEntriesOutputReference.prototype, "wordList", {
        // word_list - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('word_list');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDlpCustomProfileEntriesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDlpCustomProfileEntriesOutputReference = DataCloudflareZeroTrustDlpCustomProfileEntriesOutputReference;
var DataCloudflareZeroTrustDlpCustomProfileEntriesList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpCustomProfileEntriesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDlpCustomProfileEntriesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDlpCustomProfileEntriesList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDlpCustomProfileEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDlpCustomProfileEntriesList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDlpCustomProfileEntriesList = DataCloudflareZeroTrustDlpCustomProfileEntriesList;
function dataCloudflareZeroTrustDlpCustomProfileSensitivityLevelsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDlpCustomProfileSensitivityLevelsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDlpCustomProfileSensitivityLevelsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpCustomProfileSensitivityLevelsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDlpCustomProfileSensitivityLevelsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileSensitivityLevelsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileSensitivityLevelsOutputReference.prototype, "groupId", {
        // group_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('group_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileSensitivityLevelsOutputReference.prototype, "levelId", {
        // level_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('level_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDlpCustomProfileSensitivityLevelsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDlpCustomProfileSensitivityLevelsOutputReference = DataCloudflareZeroTrustDlpCustomProfileSensitivityLevelsOutputReference;
var DataCloudflareZeroTrustDlpCustomProfileSensitivityLevelsList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpCustomProfileSensitivityLevelsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDlpCustomProfileSensitivityLevelsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDlpCustomProfileSensitivityLevelsList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDlpCustomProfileSensitivityLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDlpCustomProfileSensitivityLevelsList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDlpCustomProfileSensitivityLevelsList = DataCloudflareZeroTrustDlpCustomProfileSensitivityLevelsList;
function dataCloudflareZeroTrustDlpCustomProfileSharedEntriesConfidenceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDlpCustomProfileSharedEntriesConfidenceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDlpCustomProfileSharedEntriesConfidenceOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpCustomProfileSharedEntriesConfidenceOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDlpCustomProfileSharedEntriesConfidenceOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileSharedEntriesConfidenceOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileSharedEntriesConfidenceOutputReference.prototype, "aiContextAvailable", {
        // ai_context_available - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ai_context_available');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileSharedEntriesConfidenceOutputReference.prototype, "available", {
        // available - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('available');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDlpCustomProfileSharedEntriesConfidenceOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDlpCustomProfileSharedEntriesConfidenceOutputReference = DataCloudflareZeroTrustDlpCustomProfileSharedEntriesConfidenceOutputReference;
function dataCloudflareZeroTrustDlpCustomProfileSharedEntriesPatternToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDlpCustomProfileSharedEntriesPatternToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDlpCustomProfileSharedEntriesPatternOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpCustomProfileSharedEntriesPatternOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDlpCustomProfileSharedEntriesPatternOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileSharedEntriesPatternOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileSharedEntriesPatternOutputReference.prototype, "regex", {
        // regex - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('regex');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileSharedEntriesPatternOutputReference.prototype, "validation", {
        // validation - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('validation');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDlpCustomProfileSharedEntriesPatternOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDlpCustomProfileSharedEntriesPatternOutputReference = DataCloudflareZeroTrustDlpCustomProfileSharedEntriesPatternOutputReference;
function dataCloudflareZeroTrustDlpCustomProfileSharedEntriesVariantToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDlpCustomProfileSharedEntriesVariantToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDlpCustomProfileSharedEntriesVariantOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpCustomProfileSharedEntriesVariantOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDlpCustomProfileSharedEntriesVariantOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileSharedEntriesVariantOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileSharedEntriesVariantOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileSharedEntriesVariantOutputReference.prototype, "topicType", {
        // topic_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('topic_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileSharedEntriesVariantOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDlpCustomProfileSharedEntriesVariantOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDlpCustomProfileSharedEntriesVariantOutputReference = DataCloudflareZeroTrustDlpCustomProfileSharedEntriesVariantOutputReference;
function dataCloudflareZeroTrustDlpCustomProfileSharedEntriesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDlpCustomProfileSharedEntriesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDlpCustomProfileSharedEntriesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpCustomProfileSharedEntriesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDlpCustomProfileSharedEntriesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // confidence - computed: true, optional: false, required: false
        _this._confidence = new DataCloudflareZeroTrustDlpCustomProfileSharedEntriesConfidenceOutputReference(_this, "confidence");
        // pattern - computed: true, optional: false, required: false
        _this._pattern = new DataCloudflareZeroTrustDlpCustomProfileSharedEntriesPatternOutputReference(_this, "pattern");
        // variant - computed: true, optional: false, required: false
        _this._variant = new DataCloudflareZeroTrustDlpCustomProfileSharedEntriesVariantOutputReference(_this, "variant");
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileSharedEntriesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileSharedEntriesOutputReference.prototype, "caseSensitive", {
        // case_sensitive - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('case_sensitive');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileSharedEntriesOutputReference.prototype, "confidence", {
        get: function () {
            return this._confidence;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileSharedEntriesOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileSharedEntriesOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileSharedEntriesOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileSharedEntriesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileSharedEntriesOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileSharedEntriesOutputReference.prototype, "pattern", {
        get: function () {
            return this._pattern;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileSharedEntriesOutputReference.prototype, "profileId", {
        // profile_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('profile_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileSharedEntriesOutputReference.prototype, "secret", {
        // secret - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('secret');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileSharedEntriesOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileSharedEntriesOutputReference.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileSharedEntriesOutputReference.prototype, "variant", {
        get: function () {
            return this._variant;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfileSharedEntriesOutputReference.prototype, "wordList", {
        // word_list - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('word_list');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDlpCustomProfileSharedEntriesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDlpCustomProfileSharedEntriesOutputReference = DataCloudflareZeroTrustDlpCustomProfileSharedEntriesOutputReference;
var DataCloudflareZeroTrustDlpCustomProfileSharedEntriesList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpCustomProfileSharedEntriesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDlpCustomProfileSharedEntriesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDlpCustomProfileSharedEntriesList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDlpCustomProfileSharedEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDlpCustomProfileSharedEntriesList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDlpCustomProfileSharedEntriesList = DataCloudflareZeroTrustDlpCustomProfileSharedEntriesList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_custom_profile cloudflare_zero_trust_dlp_custom_profile}
*/
var DataCloudflareZeroTrustDlpCustomProfile = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpCustomProfile, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_custom_profile cloudflare_zero_trust_dlp_custom_profile} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDlpCustomProfileConfig
    */
    function DataCloudflareZeroTrustDlpCustomProfile(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_dlp_custom_profile',
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
        // context_awareness - computed: true, optional: false, required: false
        _this._contextAwareness = new DataCloudflareZeroTrustDlpCustomProfileContextAwarenessOutputReference(_this, "context_awareness");
        // entries - computed: true, optional: false, required: false
        _this._entries = new DataCloudflareZeroTrustDlpCustomProfileEntriesList(_this, "entries", false);
        // sensitivity_levels - computed: true, optional: false, required: false
        _this._sensitivityLevels = new DataCloudflareZeroTrustDlpCustomProfileSensitivityLevelsList(_this, "sensitivity_levels", false);
        // shared_entries - computed: true, optional: false, required: false
        _this._sharedEntries = new DataCloudflareZeroTrustDlpCustomProfileSharedEntriesList(_this, "shared_entries", false);
        _this._accountId = config.accountId;
        _this._profileId = config.profileId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDlpCustomProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDlpCustomProfile to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDlpCustomProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_custom_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDlpCustomProfile to import is found
    */
    DataCloudflareZeroTrustDlpCustomProfile.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_dlp_custom_profile", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfile.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDlpCustomProfile.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfile.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfile.prototype, "aiContextEnabled", {
        // ai_context_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ai_context_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfile.prototype, "allowedMatchCount", {
        // allowed_match_count - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('allowed_match_count');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfile.prototype, "confidenceThreshold", {
        // confidence_threshold - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('confidence_threshold');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfile.prototype, "contextAwareness", {
        get: function () {
            return this._contextAwareness;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfile.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfile.prototype, "dataClasses", {
        // data_classes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('data_classes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfile.prototype, "dataTags", {
        // data_tags - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('data_tags');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfile.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfile.prototype, "entries", {
        get: function () {
            return this._entries;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfile.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfile.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfile.prototype, "ocrEnabled", {
        // ocr_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ocr_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfile.prototype, "openAccess", {
        // open_access - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('open_access');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfile.prototype, "profileId", {
        get: function () {
            return this.getStringAttribute('profile_id');
        },
        set: function (value) {
            this._profileId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfile.prototype, "profileIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._profileId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfile.prototype, "sensitivityLevels", {
        get: function () {
            return this._sensitivityLevels;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfile.prototype, "sharedEntries", {
        get: function () {
            return this._sharedEntries;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfile.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpCustomProfile.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustDlpCustomProfile.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            profile_id: cdktf.stringToTerraform(this._profileId),
        };
    };
    DataCloudflareZeroTrustDlpCustomProfile.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            profile_id: {
                value: cdktf.stringToHclTerraform(this._profileId),
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
    DataCloudflareZeroTrustDlpCustomProfile.tfResourceType = "cloudflare_zero_trust_dlp_custom_profile";
    return DataCloudflareZeroTrustDlpCustomProfile;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustDlpCustomProfile = DataCloudflareZeroTrustDlpCustomProfile;
