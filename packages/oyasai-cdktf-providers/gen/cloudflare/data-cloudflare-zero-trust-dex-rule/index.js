"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_rule
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
exports.DataCloudflareZeroTrustDexRule = exports.DataCloudflareZeroTrustDexRuleTargetedTestsList = exports.DataCloudflareZeroTrustDexRuleTargetedTestsOutputReference = exports.DataCloudflareZeroTrustDexRuleTargetedTestsDataOutputReference = void 0;
exports.dataCloudflareZeroTrustDexRuleTargetedTestsDataToTerraform = dataCloudflareZeroTrustDexRuleTargetedTestsDataToTerraform;
exports.dataCloudflareZeroTrustDexRuleTargetedTestsDataToHclTerraform = dataCloudflareZeroTrustDexRuleTargetedTestsDataToHclTerraform;
exports.dataCloudflareZeroTrustDexRuleTargetedTestsToTerraform = dataCloudflareZeroTrustDexRuleTargetedTestsToTerraform;
exports.dataCloudflareZeroTrustDexRuleTargetedTestsToHclTerraform = dataCloudflareZeroTrustDexRuleTargetedTestsToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustDexRuleTargetedTestsDataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDexRuleTargetedTestsDataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDexRuleTargetedTestsDataOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDexRuleTargetedTestsDataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDexRuleTargetedTestsDataOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDexRuleTargetedTestsDataOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDexRuleTargetedTestsDataOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexRuleTargetedTestsDataOutputReference.prototype, "kind", {
        // kind - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kind');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexRuleTargetedTestsDataOutputReference.prototype, "method", {
        // method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('method');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDexRuleTargetedTestsDataOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDexRuleTargetedTestsDataOutputReference = DataCloudflareZeroTrustDexRuleTargetedTestsDataOutputReference;
function dataCloudflareZeroTrustDexRuleTargetedTestsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDexRuleTargetedTestsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDexRuleTargetedTestsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDexRuleTargetedTestsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDexRuleTargetedTestsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // data - computed: true, optional: false, required: false
        _this._data = new DataCloudflareZeroTrustDexRuleTargetedTestsDataOutputReference(_this, "data");
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDexRuleTargetedTestsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDexRuleTargetedTestsOutputReference.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexRuleTargetedTestsOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexRuleTargetedTestsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexRuleTargetedTestsOutputReference.prototype, "testId", {
        // test_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('test_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDexRuleTargetedTestsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDexRuleTargetedTestsOutputReference = DataCloudflareZeroTrustDexRuleTargetedTestsOutputReference;
var DataCloudflareZeroTrustDexRuleTargetedTestsList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDexRuleTargetedTestsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDexRuleTargetedTestsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDexRuleTargetedTestsList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDexRuleTargetedTestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDexRuleTargetedTestsList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDexRuleTargetedTestsList = DataCloudflareZeroTrustDexRuleTargetedTestsList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_rule cloudflare_zero_trust_dex_rule}
*/
var DataCloudflareZeroTrustDexRule = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDexRule, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_rule cloudflare_zero_trust_dex_rule} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDexRuleConfig
    */
    function DataCloudflareZeroTrustDexRule(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_dex_rule',
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
        // targeted_tests - computed: true, optional: false, required: false
        _this._targetedTests = new DataCloudflareZeroTrustDexRuleTargetedTestsList(_this, "targeted_tests", false);
        _this._accountId = config.accountId;
        _this._ruleId = config.ruleId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDexRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDexRule to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDexRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDexRule to import is found
    */
    DataCloudflareZeroTrustDexRule.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_dex_rule", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustDexRule.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDexRule.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDexRule.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexRule.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexRule.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexRule.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexRule.prototype, "match", {
        // match - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('match');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexRule.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexRule.prototype, "ruleId", {
        get: function () {
            return this.getStringAttribute('rule_id');
        },
        set: function (value) {
            this._ruleId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexRule.prototype, "ruleIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ruleId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexRule.prototype, "targetedTests", {
        get: function () {
            return this._targetedTests;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexRule.prototype, "updatedAt", {
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
    DataCloudflareZeroTrustDexRule.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            rule_id: cdktf.stringToTerraform(this._ruleId),
        };
    };
    DataCloudflareZeroTrustDexRule.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rule_id: {
                value: cdktf.stringToHclTerraform(this._ruleId),
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
    DataCloudflareZeroTrustDexRule.tfResourceType = "cloudflare_zero_trust_dex_rule";
    return DataCloudflareZeroTrustDexRule;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustDexRule = DataCloudflareZeroTrustDexRule;
