"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lock
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
exports.R2BucketLock = exports.R2BucketLockRulesList = exports.R2BucketLockRulesOutputReference = exports.R2BucketLockRulesConditionOutputReference = void 0;
exports.r2BucketLockRulesConditionToTerraform = r2BucketLockRulesConditionToTerraform;
exports.r2BucketLockRulesConditionToHclTerraform = r2BucketLockRulesConditionToHclTerraform;
exports.r2BucketLockRulesToTerraform = r2BucketLockRulesToTerraform;
exports.r2BucketLockRulesToHclTerraform = r2BucketLockRulesToHclTerraform;
var cdktf = require("cdktf");
function r2BucketLockRulesConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        date: cdktf.stringToTerraform(struct.date),
        max_age_seconds: cdktf.numberToTerraform(struct.maxAgeSeconds),
        type: cdktf.stringToTerraform(struct.type),
    };
}
function r2BucketLockRulesConditionToHclTerraform(struct) {
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
        max_age_seconds: {
            value: cdktf.numberToHclTerraform(struct.maxAgeSeconds),
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
var R2BucketLockRulesConditionOutputReference = /** @class */ (function (_super) {
    __extends(R2BucketLockRulesConditionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function R2BucketLockRulesConditionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(R2BucketLockRulesConditionOutputReference.prototype, "internalValue", {
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
            if (this._maxAgeSeconds !== undefined) {
                hasAnyValues = true;
                internalValueResult.maxAgeSeconds = this._maxAgeSeconds;
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
                this._maxAgeSeconds = undefined;
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
                this._maxAgeSeconds = value.maxAgeSeconds;
                this._type = value.type;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLockRulesConditionOutputReference.prototype, "date", {
        get: function () {
            return this.getStringAttribute('date');
        },
        set: function (value) {
            this._date = value;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketLockRulesConditionOutputReference.prototype.resetDate = function () {
        this._date = undefined;
    };
    Object.defineProperty(R2BucketLockRulesConditionOutputReference.prototype, "dateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._date;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLockRulesConditionOutputReference.prototype, "maxAgeSeconds", {
        get: function () {
            return this.getNumberAttribute('max_age_seconds');
        },
        set: function (value) {
            this._maxAgeSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketLockRulesConditionOutputReference.prototype.resetMaxAgeSeconds = function () {
        this._maxAgeSeconds = undefined;
    };
    Object.defineProperty(R2BucketLockRulesConditionOutputReference.prototype, "maxAgeSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxAgeSeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLockRulesConditionOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLockRulesConditionOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    return R2BucketLockRulesConditionOutputReference;
}(cdktf.ComplexObject));
exports.R2BucketLockRulesConditionOutputReference = R2BucketLockRulesConditionOutputReference;
function r2BucketLockRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        condition: r2BucketLockRulesConditionToTerraform(struct.condition),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        id: cdktf.stringToTerraform(struct.id),
        prefix: cdktf.stringToTerraform(struct.prefix),
    };
}
function r2BucketLockRulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        condition: {
            value: r2BucketLockRulesConditionToHclTerraform(struct.condition),
            isBlock: true,
            type: "struct",
            storageClassType: "R2BucketLockRulesCondition",
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
var R2BucketLockRulesOutputReference = /** @class */ (function (_super) {
    __extends(R2BucketLockRulesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function R2BucketLockRulesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // condition - computed: false, optional: false, required: true
        _this._condition = new R2BucketLockRulesConditionOutputReference(_this, "condition");
        return _this;
    }
    Object.defineProperty(R2BucketLockRulesOutputReference.prototype, "internalValue", {
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
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
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
                this._condition.internalValue = undefined;
                this._enabled = undefined;
                this._id = undefined;
                this._prefix = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._condition.internalValue = value.condition;
                this._enabled = value.enabled;
                this._id = value.id;
                this._prefix = value.prefix;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLockRulesOutputReference.prototype, "condition", {
        get: function () {
            return this._condition;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketLockRulesOutputReference.prototype.putCondition = function (value) {
        this._condition.internalValue = value;
    };
    Object.defineProperty(R2BucketLockRulesOutputReference.prototype, "conditionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._condition.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLockRulesOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLockRulesOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLockRulesOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLockRulesOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLockRulesOutputReference.prototype, "prefix", {
        get: function () {
            return this.getStringAttribute('prefix');
        },
        set: function (value) {
            this._prefix = value;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketLockRulesOutputReference.prototype.resetPrefix = function () {
        this._prefix = undefined;
    };
    Object.defineProperty(R2BucketLockRulesOutputReference.prototype, "prefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._prefix;
        },
        enumerable: false,
        configurable: true
    });
    return R2BucketLockRulesOutputReference;
}(cdktf.ComplexObject));
exports.R2BucketLockRulesOutputReference = R2BucketLockRulesOutputReference;
var R2BucketLockRulesList = /** @class */ (function (_super) {
    __extends(R2BucketLockRulesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function R2BucketLockRulesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    R2BucketLockRulesList.prototype.get = function (index) {
        return new R2BucketLockRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return R2BucketLockRulesList;
}(cdktf.ComplexList));
exports.R2BucketLockRulesList = R2BucketLockRulesList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lock cloudflare_r2_bucket_lock}
*/
var R2BucketLock = /** @class */ (function (_super) {
    __extends(R2BucketLock, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lock cloudflare_r2_bucket_lock} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options R2BucketLockConfig
    */
    function R2BucketLock(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_r2_bucket_lock',
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
        _this._rules = new R2BucketLockRulesList(_this, "rules", false);
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
    * Generates CDKTF code for importing a R2BucketLock resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the R2BucketLock to import
    * @param importFromId The id of the existing R2BucketLock that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_lock#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the R2BucketLock to import is found
    */
    R2BucketLock.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_r2_bucket_lock", importId: importFromId, provider: provider });
    };
    Object.defineProperty(R2BucketLock.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketLock.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(R2BucketLock.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLock.prototype, "bucketName", {
        get: function () {
            return this.getStringAttribute('bucket_name');
        },
        set: function (value) {
            this._bucketName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLock.prototype, "bucketNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucketName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLock.prototype, "jurisdiction", {
        get: function () {
            return this.getStringAttribute('jurisdiction');
        },
        set: function (value) {
            this._jurisdiction = value;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketLock.prototype.resetJurisdiction = function () {
        this._jurisdiction = undefined;
    };
    Object.defineProperty(R2BucketLock.prototype, "jurisdictionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._jurisdiction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketLock.prototype, "rules", {
        get: function () {
            return this._rules;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketLock.prototype.putRules = function (value) {
        this._rules.internalValue = value;
    };
    R2BucketLock.prototype.resetRules = function () {
        this._rules.internalValue = undefined;
    };
    Object.defineProperty(R2BucketLock.prototype, "rulesInput", {
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
    R2BucketLock.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            bucket_name: cdktf.stringToTerraform(this._bucketName),
            jurisdiction: cdktf.stringToTerraform(this._jurisdiction),
            rules: cdktf.listMapper(r2BucketLockRulesToTerraform, false)(this._rules.internalValue),
        };
    };
    R2BucketLock.prototype.synthesizeHclAttributes = function () {
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
                value: cdktf.listMapperHcl(r2BucketLockRulesToHclTerraform, false)(this._rules.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "R2BucketLockRulesList",
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
    R2BucketLock.tfResourceType = "cloudflare_r2_bucket_lock";
    return R2BucketLock;
}(cdktf.TerraformResource));
exports.R2BucketLock = R2BucketLock;
