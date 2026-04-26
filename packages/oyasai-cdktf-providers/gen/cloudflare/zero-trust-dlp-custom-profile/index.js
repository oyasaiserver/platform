"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile
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
exports.ZeroTrustDlpCustomProfile = exports.ZeroTrustDlpCustomProfileSharedEntriesList = exports.ZeroTrustDlpCustomProfileSharedEntriesOutputReference = exports.ZeroTrustDlpCustomProfileSensitivityLevelsList = exports.ZeroTrustDlpCustomProfileSensitivityLevelsOutputReference = exports.ZeroTrustDlpCustomProfileEntriesList = exports.ZeroTrustDlpCustomProfileEntriesOutputReference = exports.ZeroTrustDlpCustomProfileEntriesPatternOutputReference = exports.ZeroTrustDlpCustomProfileContextAwarenessOutputReference = exports.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference = void 0;
exports.zeroTrustDlpCustomProfileContextAwarenessSkipToTerraform = zeroTrustDlpCustomProfileContextAwarenessSkipToTerraform;
exports.zeroTrustDlpCustomProfileContextAwarenessSkipToHclTerraform = zeroTrustDlpCustomProfileContextAwarenessSkipToHclTerraform;
exports.zeroTrustDlpCustomProfileContextAwarenessToTerraform = zeroTrustDlpCustomProfileContextAwarenessToTerraform;
exports.zeroTrustDlpCustomProfileContextAwarenessToHclTerraform = zeroTrustDlpCustomProfileContextAwarenessToHclTerraform;
exports.zeroTrustDlpCustomProfileEntriesPatternToTerraform = zeroTrustDlpCustomProfileEntriesPatternToTerraform;
exports.zeroTrustDlpCustomProfileEntriesPatternToHclTerraform = zeroTrustDlpCustomProfileEntriesPatternToHclTerraform;
exports.zeroTrustDlpCustomProfileEntriesToTerraform = zeroTrustDlpCustomProfileEntriesToTerraform;
exports.zeroTrustDlpCustomProfileEntriesToHclTerraform = zeroTrustDlpCustomProfileEntriesToHclTerraform;
exports.zeroTrustDlpCustomProfileSensitivityLevelsToTerraform = zeroTrustDlpCustomProfileSensitivityLevelsToTerraform;
exports.zeroTrustDlpCustomProfileSensitivityLevelsToHclTerraform = zeroTrustDlpCustomProfileSensitivityLevelsToHclTerraform;
exports.zeroTrustDlpCustomProfileSharedEntriesToTerraform = zeroTrustDlpCustomProfileSharedEntriesToTerraform;
exports.zeroTrustDlpCustomProfileSharedEntriesToHclTerraform = zeroTrustDlpCustomProfileSharedEntriesToHclTerraform;
var cdktf = require("cdktf");
function zeroTrustDlpCustomProfileContextAwarenessSkipToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        files: cdktf.booleanToTerraform(struct.files),
    };
}
function zeroTrustDlpCustomProfileContextAwarenessSkipToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        files: {
            value: cdktf.booleanToHclTerraform(struct.files),
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
var ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._files !== undefined) {
                hasAnyValues = true;
                internalValueResult.files = this._files;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._files = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._files = value.files;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.prototype, "files", {
        get: function () {
            return this.getBooleanAttribute('files');
        },
        set: function (value) {
            this._files = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.prototype.resetFiles = function () {
        this._files = undefined;
    };
    Object.defineProperty(ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.prototype, "filesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._files;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference = ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference;
function zeroTrustDlpCustomProfileContextAwarenessToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        skip: zeroTrustDlpCustomProfileContextAwarenessSkipToTerraform(struct.skip),
    };
}
function zeroTrustDlpCustomProfileContextAwarenessToHclTerraform(struct) {
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
        skip: {
            value: zeroTrustDlpCustomProfileContextAwarenessSkipToHclTerraform(struct.skip),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustDlpCustomProfileContextAwarenessSkip",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ZeroTrustDlpCustomProfileContextAwarenessOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDlpCustomProfileContextAwarenessOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustDlpCustomProfileContextAwarenessOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // skip - computed: true, optional: true, required: false
        _this._skip = new ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference(_this, "skip");
        return _this;
    }
    Object.defineProperty(ZeroTrustDlpCustomProfileContextAwarenessOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (((_a = this._skip) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.skip = (_b = this._skip) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._enabled = undefined;
                this._skip.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._enabled = value.enabled;
                this._skip.internalValue = value.skip;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfileContextAwarenessOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpCustomProfileContextAwarenessOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(ZeroTrustDlpCustomProfileContextAwarenessOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfileContextAwarenessOutputReference.prototype, "skip", {
        get: function () {
            return this._skip;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpCustomProfileContextAwarenessOutputReference.prototype.putSkip = function (value) {
        this._skip.internalValue = value;
    };
    ZeroTrustDlpCustomProfileContextAwarenessOutputReference.prototype.resetSkip = function () {
        this._skip.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustDlpCustomProfileContextAwarenessOutputReference.prototype, "skipInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._skip.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDlpCustomProfileContextAwarenessOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDlpCustomProfileContextAwarenessOutputReference = ZeroTrustDlpCustomProfileContextAwarenessOutputReference;
function zeroTrustDlpCustomProfileEntriesPatternToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        regex: cdktf.stringToTerraform(struct.regex),
        validation: cdktf.stringToTerraform(struct.validation),
    };
}
function zeroTrustDlpCustomProfileEntriesPatternToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        regex: {
            value: cdktf.stringToHclTerraform(struct.regex),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        validation: {
            value: cdktf.stringToHclTerraform(struct.validation),
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
var ZeroTrustDlpCustomProfileEntriesPatternOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDlpCustomProfileEntriesPatternOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustDlpCustomProfileEntriesPatternOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDlpCustomProfileEntriesPatternOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._regex !== undefined) {
                hasAnyValues = true;
                internalValueResult.regex = this._regex;
            }
            if (this._validation !== undefined) {
                hasAnyValues = true;
                internalValueResult.validation = this._validation;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._regex = undefined;
                this._validation = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._regex = value.regex;
                this._validation = value.validation;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfileEntriesPatternOutputReference.prototype, "regex", {
        get: function () {
            return this.getStringAttribute('regex');
        },
        set: function (value) {
            this._regex = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfileEntriesPatternOutputReference.prototype, "regexInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._regex;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfileEntriesPatternOutputReference.prototype, "validation", {
        get: function () {
            return this.getStringAttribute('validation');
        },
        set: function (value) {
            this._validation = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpCustomProfileEntriesPatternOutputReference.prototype.resetValidation = function () {
        this._validation = undefined;
    };
    Object.defineProperty(ZeroTrustDlpCustomProfileEntriesPatternOutputReference.prototype, "validationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._validation;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDlpCustomProfileEntriesPatternOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDlpCustomProfileEntriesPatternOutputReference = ZeroTrustDlpCustomProfileEntriesPatternOutputReference;
function zeroTrustDlpCustomProfileEntriesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        description: cdktf.stringToTerraform(struct.description),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        entry_id: cdktf.stringToTerraform(struct.entryId),
        name: cdktf.stringToTerraform(struct.name),
        pattern: zeroTrustDlpCustomProfileEntriesPatternToTerraform(struct.pattern),
    };
}
function zeroTrustDlpCustomProfileEntriesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        description: {
            value: cdktf.stringToHclTerraform(struct.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        entry_id: {
            value: cdktf.stringToHclTerraform(struct.entryId),
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
        pattern: {
            value: zeroTrustDlpCustomProfileEntriesPatternToHclTerraform(struct.pattern),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustDlpCustomProfileEntriesPattern",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ZeroTrustDlpCustomProfileEntriesOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDlpCustomProfileEntriesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDlpCustomProfileEntriesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // pattern - computed: false, optional: false, required: true
        _this._pattern = new ZeroTrustDlpCustomProfileEntriesPatternOutputReference(_this, "pattern");
        return _this;
    }
    Object.defineProperty(ZeroTrustDlpCustomProfileEntriesOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._description !== undefined) {
                hasAnyValues = true;
                internalValueResult.description = this._description;
            }
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (this._entryId !== undefined) {
                hasAnyValues = true;
                internalValueResult.entryId = this._entryId;
            }
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            if (((_a = this._pattern) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.pattern = (_b = this._pattern) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._description = undefined;
                this._enabled = undefined;
                this._entryId = undefined;
                this._name = undefined;
                this._pattern.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._description = value.description;
                this._enabled = value.enabled;
                this._entryId = value.entryId;
                this._name = value.name;
                this._pattern.internalValue = value.pattern;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfileEntriesOutputReference.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpCustomProfileEntriesOutputReference.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ZeroTrustDlpCustomProfileEntriesOutputReference.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfileEntriesOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfileEntriesOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfileEntriesOutputReference.prototype, "entryId", {
        get: function () {
            return this.getStringAttribute('entry_id');
        },
        set: function (value) {
            this._entryId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpCustomProfileEntriesOutputReference.prototype.resetEntryId = function () {
        this._entryId = undefined;
    };
    Object.defineProperty(ZeroTrustDlpCustomProfileEntriesOutputReference.prototype, "entryIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._entryId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfileEntriesOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfileEntriesOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfileEntriesOutputReference.prototype, "pattern", {
        get: function () {
            return this._pattern;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpCustomProfileEntriesOutputReference.prototype.putPattern = function (value) {
        this._pattern.internalValue = value;
    };
    Object.defineProperty(ZeroTrustDlpCustomProfileEntriesOutputReference.prototype, "patternInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pattern.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDlpCustomProfileEntriesOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDlpCustomProfileEntriesOutputReference = ZeroTrustDlpCustomProfileEntriesOutputReference;
var ZeroTrustDlpCustomProfileEntriesList = /** @class */ (function (_super) {
    __extends(ZeroTrustDlpCustomProfileEntriesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDlpCustomProfileEntriesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustDlpCustomProfileEntriesList.prototype.get = function (index) {
        return new ZeroTrustDlpCustomProfileEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustDlpCustomProfileEntriesList;
}(cdktf.ComplexList));
exports.ZeroTrustDlpCustomProfileEntriesList = ZeroTrustDlpCustomProfileEntriesList;
function zeroTrustDlpCustomProfileSensitivityLevelsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        group_id: cdktf.stringToTerraform(struct.groupId),
        level_id: cdktf.stringToTerraform(struct.levelId),
    };
}
function zeroTrustDlpCustomProfileSensitivityLevelsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        group_id: {
            value: cdktf.stringToHclTerraform(struct.groupId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        level_id: {
            value: cdktf.stringToHclTerraform(struct.levelId),
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
var ZeroTrustDlpCustomProfileSensitivityLevelsOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDlpCustomProfileSensitivityLevelsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDlpCustomProfileSensitivityLevelsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDlpCustomProfileSensitivityLevelsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._groupId !== undefined) {
                hasAnyValues = true;
                internalValueResult.groupId = this._groupId;
            }
            if (this._levelId !== undefined) {
                hasAnyValues = true;
                internalValueResult.levelId = this._levelId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._groupId = undefined;
                this._levelId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._groupId = value.groupId;
                this._levelId = value.levelId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfileSensitivityLevelsOutputReference.prototype, "groupId", {
        get: function () {
            return this.getStringAttribute('group_id');
        },
        set: function (value) {
            this._groupId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfileSensitivityLevelsOutputReference.prototype, "groupIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._groupId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfileSensitivityLevelsOutputReference.prototype, "levelId", {
        get: function () {
            return this.getStringAttribute('level_id');
        },
        set: function (value) {
            this._levelId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfileSensitivityLevelsOutputReference.prototype, "levelIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._levelId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDlpCustomProfileSensitivityLevelsOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDlpCustomProfileSensitivityLevelsOutputReference = ZeroTrustDlpCustomProfileSensitivityLevelsOutputReference;
var ZeroTrustDlpCustomProfileSensitivityLevelsList = /** @class */ (function (_super) {
    __extends(ZeroTrustDlpCustomProfileSensitivityLevelsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDlpCustomProfileSensitivityLevelsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustDlpCustomProfileSensitivityLevelsList.prototype.get = function (index) {
        return new ZeroTrustDlpCustomProfileSensitivityLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustDlpCustomProfileSensitivityLevelsList;
}(cdktf.ComplexList));
exports.ZeroTrustDlpCustomProfileSensitivityLevelsList = ZeroTrustDlpCustomProfileSensitivityLevelsList;
function zeroTrustDlpCustomProfileSharedEntriesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        entry_id: cdktf.stringToTerraform(struct.entryId),
        entry_type: cdktf.stringToTerraform(struct.entryType),
    };
}
function zeroTrustDlpCustomProfileSharedEntriesToHclTerraform(struct) {
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
        entry_id: {
            value: cdktf.stringToHclTerraform(struct.entryId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        entry_type: {
            value: cdktf.stringToHclTerraform(struct.entryType),
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
var ZeroTrustDlpCustomProfileSharedEntriesOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDlpCustomProfileSharedEntriesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDlpCustomProfileSharedEntriesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDlpCustomProfileSharedEntriesOutputReference.prototype, "internalValue", {
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
            if (this._entryId !== undefined) {
                hasAnyValues = true;
                internalValueResult.entryId = this._entryId;
            }
            if (this._entryType !== undefined) {
                hasAnyValues = true;
                internalValueResult.entryType = this._entryType;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._enabled = undefined;
                this._entryId = undefined;
                this._entryType = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._enabled = value.enabled;
                this._entryId = value.entryId;
                this._entryType = value.entryType;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfileSharedEntriesOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfileSharedEntriesOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfileSharedEntriesOutputReference.prototype, "entryId", {
        get: function () {
            return this.getStringAttribute('entry_id');
        },
        set: function (value) {
            this._entryId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfileSharedEntriesOutputReference.prototype, "entryIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._entryId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfileSharedEntriesOutputReference.prototype, "entryType", {
        get: function () {
            return this.getStringAttribute('entry_type');
        },
        set: function (value) {
            this._entryType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfileSharedEntriesOutputReference.prototype, "entryTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._entryType;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDlpCustomProfileSharedEntriesOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDlpCustomProfileSharedEntriesOutputReference = ZeroTrustDlpCustomProfileSharedEntriesOutputReference;
var ZeroTrustDlpCustomProfileSharedEntriesList = /** @class */ (function (_super) {
    __extends(ZeroTrustDlpCustomProfileSharedEntriesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDlpCustomProfileSharedEntriesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustDlpCustomProfileSharedEntriesList.prototype.get = function (index) {
        return new ZeroTrustDlpCustomProfileSharedEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustDlpCustomProfileSharedEntriesList;
}(cdktf.ComplexList));
exports.ZeroTrustDlpCustomProfileSharedEntriesList = ZeroTrustDlpCustomProfileSharedEntriesList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile cloudflare_zero_trust_dlp_custom_profile}
*/
var ZeroTrustDlpCustomProfile = /** @class */ (function (_super) {
    __extends(ZeroTrustDlpCustomProfile, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile cloudflare_zero_trust_dlp_custom_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDlpCustomProfileConfig
    */
    function ZeroTrustDlpCustomProfile(scope, id, config) {
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
        // context_awareness - computed: true, optional: true, required: false
        _this._contextAwareness = new ZeroTrustDlpCustomProfileContextAwarenessOutputReference(_this, "context_awareness");
        // entries - computed: false, optional: true, required: false
        _this._entries = new ZeroTrustDlpCustomProfileEntriesList(_this, "entries", true);
        // sensitivity_levels - computed: false, optional: true, required: false
        _this._sensitivityLevels = new ZeroTrustDlpCustomProfileSensitivityLevelsList(_this, "sensitivity_levels", false);
        // shared_entries - computed: false, optional: true, required: false
        _this._sharedEntries = new ZeroTrustDlpCustomProfileSharedEntriesList(_this, "shared_entries", true);
        _this._accountId = config.accountId;
        _this._aiContextEnabled = config.aiContextEnabled;
        _this._allowedMatchCount = config.allowedMatchCount;
        _this._confidenceThreshold = config.confidenceThreshold;
        _this._contextAwareness.internalValue = config.contextAwareness;
        _this._dataClasses = config.dataClasses;
        _this._dataTags = config.dataTags;
        _this._description = config.description;
        _this._entries.internalValue = config.entries;
        _this._name = config.name;
        _this._ocrEnabled = config.ocrEnabled;
        _this._sensitivityLevels.internalValue = config.sensitivityLevels;
        _this._sharedEntries.internalValue = config.sharedEntries;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustDlpCustomProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDlpCustomProfile to import
    * @param importFromId The id of the existing ZeroTrustDlpCustomProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDlpCustomProfile to import is found
    */
    ZeroTrustDlpCustomProfile.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_dlp_custom_profile", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZeroTrustDlpCustomProfile.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpCustomProfile.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(ZeroTrustDlpCustomProfile.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfile.prototype, "aiContextEnabled", {
        get: function () {
            return this.getBooleanAttribute('ai_context_enabled');
        },
        set: function (value) {
            this._aiContextEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpCustomProfile.prototype.resetAiContextEnabled = function () {
        this._aiContextEnabled = undefined;
    };
    Object.defineProperty(ZeroTrustDlpCustomProfile.prototype, "aiContextEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._aiContextEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfile.prototype, "allowedMatchCount", {
        get: function () {
            return this.getNumberAttribute('allowed_match_count');
        },
        set: function (value) {
            this._allowedMatchCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpCustomProfile.prototype.resetAllowedMatchCount = function () {
        this._allowedMatchCount = undefined;
    };
    Object.defineProperty(ZeroTrustDlpCustomProfile.prototype, "allowedMatchCountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedMatchCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfile.prototype, "confidenceThreshold", {
        get: function () {
            return this.getStringAttribute('confidence_threshold');
        },
        set: function (value) {
            this._confidenceThreshold = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpCustomProfile.prototype.resetConfidenceThreshold = function () {
        this._confidenceThreshold = undefined;
    };
    Object.defineProperty(ZeroTrustDlpCustomProfile.prototype, "confidenceThresholdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._confidenceThreshold;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfile.prototype, "contextAwareness", {
        get: function () {
            return this._contextAwareness;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpCustomProfile.prototype.putContextAwareness = function (value) {
        this._contextAwareness.internalValue = value;
    };
    ZeroTrustDlpCustomProfile.prototype.resetContextAwareness = function () {
        this._contextAwareness.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustDlpCustomProfile.prototype, "contextAwarenessInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contextAwareness.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfile.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfile.prototype, "dataClasses", {
        get: function () {
            return this.getListAttribute('data_classes');
        },
        set: function (value) {
            this._dataClasses = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpCustomProfile.prototype.resetDataClasses = function () {
        this._dataClasses = undefined;
    };
    Object.defineProperty(ZeroTrustDlpCustomProfile.prototype, "dataClassesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dataClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfile.prototype, "dataTags", {
        get: function () {
            return this.getListAttribute('data_tags');
        },
        set: function (value) {
            this._dataTags = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpCustomProfile.prototype.resetDataTags = function () {
        this._dataTags = undefined;
    };
    Object.defineProperty(ZeroTrustDlpCustomProfile.prototype, "dataTagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dataTags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfile.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpCustomProfile.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ZeroTrustDlpCustomProfile.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfile.prototype, "entries", {
        get: function () {
            return this._entries;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpCustomProfile.prototype.putEntries = function (value) {
        this._entries.internalValue = value;
    };
    ZeroTrustDlpCustomProfile.prototype.resetEntries = function () {
        this._entries.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustDlpCustomProfile.prototype, "entriesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._entries.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfile.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfile.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfile.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfile.prototype, "ocrEnabled", {
        get: function () {
            return this.getBooleanAttribute('ocr_enabled');
        },
        set: function (value) {
            this._ocrEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpCustomProfile.prototype.resetOcrEnabled = function () {
        this._ocrEnabled = undefined;
    };
    Object.defineProperty(ZeroTrustDlpCustomProfile.prototype, "ocrEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ocrEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfile.prototype, "openAccess", {
        // open_access - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('open_access');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfile.prototype, "sensitivityLevels", {
        get: function () {
            return this._sensitivityLevels;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpCustomProfile.prototype.putSensitivityLevels = function (value) {
        this._sensitivityLevels.internalValue = value;
    };
    ZeroTrustDlpCustomProfile.prototype.resetSensitivityLevels = function () {
        this._sensitivityLevels.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustDlpCustomProfile.prototype, "sensitivityLevelsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sensitivityLevels.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfile.prototype, "sharedEntries", {
        get: function () {
            return this._sharedEntries;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpCustomProfile.prototype.putSharedEntries = function (value) {
        this._sharedEntries.internalValue = value;
    };
    ZeroTrustDlpCustomProfile.prototype.resetSharedEntries = function () {
        this._sharedEntries.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustDlpCustomProfile.prototype, "sharedEntriesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sharedEntries.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfile.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpCustomProfile.prototype, "updatedAt", {
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
    ZeroTrustDlpCustomProfile.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            ai_context_enabled: cdktf.booleanToTerraform(this._aiContextEnabled),
            allowed_match_count: cdktf.numberToTerraform(this._allowedMatchCount),
            confidence_threshold: cdktf.stringToTerraform(this._confidenceThreshold),
            context_awareness: zeroTrustDlpCustomProfileContextAwarenessToTerraform(this._contextAwareness.internalValue),
            data_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dataClasses),
            data_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dataTags),
            description: cdktf.stringToTerraform(this._description),
            entries: cdktf.listMapper(zeroTrustDlpCustomProfileEntriesToTerraform, false)(this._entries.internalValue),
            name: cdktf.stringToTerraform(this._name),
            ocr_enabled: cdktf.booleanToTerraform(this._ocrEnabled),
            sensitivity_levels: cdktf.listMapper(zeroTrustDlpCustomProfileSensitivityLevelsToTerraform, false)(this._sensitivityLevels.internalValue),
            shared_entries: cdktf.listMapper(zeroTrustDlpCustomProfileSharedEntriesToTerraform, false)(this._sharedEntries.internalValue),
        };
    };
    ZeroTrustDlpCustomProfile.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ai_context_enabled: {
                value: cdktf.booleanToHclTerraform(this._aiContextEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            allowed_match_count: {
                value: cdktf.numberToHclTerraform(this._allowedMatchCount),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            confidence_threshold: {
                value: cdktf.stringToHclTerraform(this._confidenceThreshold),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            context_awareness: {
                value: zeroTrustDlpCustomProfileContextAwarenessToHclTerraform(this._contextAwareness.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustDlpCustomProfileContextAwareness",
            },
            data_classes: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dataClasses),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            data_tags: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dataTags),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            entries: {
                value: cdktf.listMapperHcl(zeroTrustDlpCustomProfileEntriesToHclTerraform, false)(this._entries.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ZeroTrustDlpCustomProfileEntriesList",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ocr_enabled: {
                value: cdktf.booleanToHclTerraform(this._ocrEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            sensitivity_levels: {
                value: cdktf.listMapperHcl(zeroTrustDlpCustomProfileSensitivityLevelsToHclTerraform, false)(this._sensitivityLevels.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ZeroTrustDlpCustomProfileSensitivityLevelsList",
            },
            shared_entries: {
                value: cdktf.listMapperHcl(zeroTrustDlpCustomProfileSharedEntriesToHclTerraform, false)(this._sharedEntries.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ZeroTrustDlpCustomProfileSharedEntriesList",
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
    ZeroTrustDlpCustomProfile.tfResourceType = "cloudflare_zero_trust_dlp_custom_profile";
    return ZeroTrustDlpCustomProfile;
}(cdktf.TerraformResource));
exports.ZeroTrustDlpCustomProfile = ZeroTrustDlpCustomProfile;
