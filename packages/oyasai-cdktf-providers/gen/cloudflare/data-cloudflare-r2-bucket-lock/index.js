"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_lock
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
exports.DataCloudflareR2BucketLock = exports.DataCloudflareR2BucketLockRulesList = exports.DataCloudflareR2BucketLockRulesOutputReference = exports.DataCloudflareR2BucketLockRulesConditionOutputReference = void 0;
exports.dataCloudflareR2BucketLockRulesConditionToTerraform = dataCloudflareR2BucketLockRulesConditionToTerraform;
exports.dataCloudflareR2BucketLockRulesConditionToHclTerraform = dataCloudflareR2BucketLockRulesConditionToHclTerraform;
exports.dataCloudflareR2BucketLockRulesToTerraform = dataCloudflareR2BucketLockRulesToTerraform;
exports.dataCloudflareR2BucketLockRulesToHclTerraform = dataCloudflareR2BucketLockRulesToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareR2BucketLockRulesConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareR2BucketLockRulesConditionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareR2BucketLockRulesConditionOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareR2BucketLockRulesConditionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareR2BucketLockRulesConditionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareR2BucketLockRulesConditionOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareR2BucketLockRulesConditionOutputReference.prototype, "date", {
        // date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketLockRulesConditionOutputReference.prototype, "maxAgeSeconds", {
        // max_age_seconds - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_age_seconds');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketLockRulesConditionOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareR2BucketLockRulesConditionOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareR2BucketLockRulesConditionOutputReference = DataCloudflareR2BucketLockRulesConditionOutputReference;
function dataCloudflareR2BucketLockRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareR2BucketLockRulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareR2BucketLockRulesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareR2BucketLockRulesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareR2BucketLockRulesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // condition - computed: true, optional: false, required: false
        _this._condition = new DataCloudflareR2BucketLockRulesConditionOutputReference(_this, "condition");
        return _this;
    }
    Object.defineProperty(DataCloudflareR2BucketLockRulesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareR2BucketLockRulesOutputReference.prototype, "condition", {
        get: function () {
            return this._condition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketLockRulesOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketLockRulesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketLockRulesOutputReference.prototype, "prefix", {
        // prefix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('prefix');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareR2BucketLockRulesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareR2BucketLockRulesOutputReference = DataCloudflareR2BucketLockRulesOutputReference;
var DataCloudflareR2BucketLockRulesList = /** @class */ (function (_super) {
    __extends(DataCloudflareR2BucketLockRulesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareR2BucketLockRulesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareR2BucketLockRulesList.prototype.get = function (index) {
        return new DataCloudflareR2BucketLockRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareR2BucketLockRulesList;
}(cdktf.ComplexList));
exports.DataCloudflareR2BucketLockRulesList = DataCloudflareR2BucketLockRulesList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_lock cloudflare_r2_bucket_lock}
*/
var DataCloudflareR2BucketLock = /** @class */ (function (_super) {
    __extends(DataCloudflareR2BucketLock, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_lock cloudflare_r2_bucket_lock} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareR2BucketLockConfig
    */
    function DataCloudflareR2BucketLock(scope, id, config) {
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
        // rules - computed: true, optional: false, required: false
        _this._rules = new DataCloudflareR2BucketLockRulesList(_this, "rules", false);
        _this._accountId = config.accountId;
        _this._bucketName = config.bucketName;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareR2BucketLock resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareR2BucketLock to import
    * @param importFromId The id of the existing DataCloudflareR2BucketLock that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_lock#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareR2BucketLock to import is found
    */
    DataCloudflareR2BucketLock.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_r2_bucket_lock", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareR2BucketLock.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareR2BucketLock.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareR2BucketLock.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketLock.prototype, "bucketName", {
        get: function () {
            return this.getStringAttribute('bucket_name');
        },
        set: function (value) {
            this._bucketName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketLock.prototype, "bucketNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucketName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketLock.prototype, "rules", {
        get: function () {
            return this._rules;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareR2BucketLock.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            bucket_name: cdktf.stringToTerraform(this._bucketName),
        };
    };
    DataCloudflareR2BucketLock.prototype.synthesizeHclAttributes = function () {
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
    DataCloudflareR2BucketLock.tfResourceType = "cloudflare_r2_bucket_lock";
    return DataCloudflareR2BucketLock;
}(cdktf.TerraformDataSource));
exports.DataCloudflareR2BucketLock = DataCloudflareR2BucketLock;
