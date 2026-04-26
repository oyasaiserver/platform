"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_rules
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
exports.DataCloudflareZeroTrustDexRules = exports.DataCloudflareZeroTrustDexRulesResultList = exports.DataCloudflareZeroTrustDexRulesResultOutputReference = exports.DataCloudflareZeroTrustDexRulesResultRulesList = exports.DataCloudflareZeroTrustDexRulesResultRulesOutputReference = exports.DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsList = exports.DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsOutputReference = exports.DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsDataOutputReference = void 0;
exports.dataCloudflareZeroTrustDexRulesResultRulesTargetedTestsDataToTerraform = dataCloudflareZeroTrustDexRulesResultRulesTargetedTestsDataToTerraform;
exports.dataCloudflareZeroTrustDexRulesResultRulesTargetedTestsDataToHclTerraform = dataCloudflareZeroTrustDexRulesResultRulesTargetedTestsDataToHclTerraform;
exports.dataCloudflareZeroTrustDexRulesResultRulesTargetedTestsToTerraform = dataCloudflareZeroTrustDexRulesResultRulesTargetedTestsToTerraform;
exports.dataCloudflareZeroTrustDexRulesResultRulesTargetedTestsToHclTerraform = dataCloudflareZeroTrustDexRulesResultRulesTargetedTestsToHclTerraform;
exports.dataCloudflareZeroTrustDexRulesResultRulesToTerraform = dataCloudflareZeroTrustDexRulesResultRulesToTerraform;
exports.dataCloudflareZeroTrustDexRulesResultRulesToHclTerraform = dataCloudflareZeroTrustDexRulesResultRulesToHclTerraform;
exports.dataCloudflareZeroTrustDexRulesResultToTerraform = dataCloudflareZeroTrustDexRulesResultToTerraform;
exports.dataCloudflareZeroTrustDexRulesResultToHclTerraform = dataCloudflareZeroTrustDexRulesResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustDexRulesResultRulesTargetedTestsDataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDexRulesResultRulesTargetedTestsDataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsDataOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsDataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsDataOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsDataOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsDataOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsDataOutputReference.prototype, "kind", {
        // kind - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kind');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsDataOutputReference.prototype, "method", {
        // method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('method');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsDataOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsDataOutputReference = DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsDataOutputReference;
function dataCloudflareZeroTrustDexRulesResultRulesTargetedTestsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDexRulesResultRulesTargetedTestsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // data - computed: true, optional: false, required: false
        _this._data = new DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsDataOutputReference(_this, "data");
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsOutputReference.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsOutputReference.prototype, "testId", {
        // test_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('test_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsOutputReference = DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsOutputReference;
var DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsList = DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsList;
function dataCloudflareZeroTrustDexRulesResultRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDexRulesResultRulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDexRulesResultRulesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDexRulesResultRulesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDexRulesResultRulesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // targeted_tests - computed: true, optional: false, required: false
        _this._targetedTests = new DataCloudflareZeroTrustDexRulesResultRulesTargetedTestsList(_this, "targeted_tests", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDexRulesResultRulesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDexRulesResultRulesOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexRulesResultRulesOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexRulesResultRulesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexRulesResultRulesOutputReference.prototype, "match", {
        // match - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('match');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexRulesResultRulesOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexRulesResultRulesOutputReference.prototype, "targetedTests", {
        get: function () {
            return this._targetedTests;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexRulesResultRulesOutputReference.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDexRulesResultRulesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDexRulesResultRulesOutputReference = DataCloudflareZeroTrustDexRulesResultRulesOutputReference;
var DataCloudflareZeroTrustDexRulesResultRulesList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDexRulesResultRulesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDexRulesResultRulesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDexRulesResultRulesList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDexRulesResultRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDexRulesResultRulesList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDexRulesResultRulesList = DataCloudflareZeroTrustDexRulesResultRulesList;
function dataCloudflareZeroTrustDexRulesResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDexRulesResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDexRulesResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDexRulesResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDexRulesResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // rules - computed: true, optional: false, required: false
        _this._rules = new DataCloudflareZeroTrustDexRulesResultRulesList(_this, "rules", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDexRulesResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDexRulesResultOutputReference.prototype, "rules", {
        get: function () {
            return this._rules;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDexRulesResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDexRulesResultOutputReference = DataCloudflareZeroTrustDexRulesResultOutputReference;
var DataCloudflareZeroTrustDexRulesResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDexRulesResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDexRulesResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDexRulesResultList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDexRulesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDexRulesResultList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDexRulesResultList = DataCloudflareZeroTrustDexRulesResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_rules cloudflare_zero_trust_dex_rules}
*/
var DataCloudflareZeroTrustDexRules = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDexRules, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_rules cloudflare_zero_trust_dex_rules} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDexRulesConfig = {}
    */
    function DataCloudflareZeroTrustDexRules(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_dex_rules',
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
        _this._result = new DataCloudflareZeroTrustDexRulesResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        _this._name = config.name;
        _this._sortBy = config.sortBy;
        _this._sortOrder = config.sortOrder;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDexRules resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDexRules to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDexRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_rules#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDexRules to import is found
    */
    DataCloudflareZeroTrustDexRules.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_dex_rules", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustDexRules.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDexRules.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDexRules.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexRules.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDexRules.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDexRules.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexRules.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDexRules.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDexRules.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexRules.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexRules.prototype, "sortBy", {
        get: function () {
            return this.getStringAttribute('sort_by');
        },
        set: function (value) {
            this._sortBy = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDexRules.prototype.resetSortBy = function () {
        this._sortBy = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDexRules.prototype, "sortByInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sortBy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexRules.prototype, "sortOrder", {
        get: function () {
            return this.getStringAttribute('sort_order');
        },
        set: function (value) {
            this._sortOrder = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDexRules.prototype.resetSortOrder = function () {
        this._sortOrder = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDexRules.prototype, "sortOrderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sortOrder;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustDexRules.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
            name: cdktf.stringToTerraform(this._name),
            sort_by: cdktf.stringToTerraform(this._sortBy),
            sort_order: cdktf.stringToTerraform(this._sortOrder),
        };
    };
    DataCloudflareZeroTrustDexRules.prototype.synthesizeHclAttributes = function () {
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
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sort_by: {
                value: cdktf.stringToHclTerraform(this._sortBy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sort_order: {
                value: cdktf.stringToHclTerraform(this._sortOrder),
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
    DataCloudflareZeroTrustDexRules.tfResourceType = "cloudflare_zero_trust_dex_rules";
    return DataCloudflareZeroTrustDexRules;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustDexRules = DataCloudflareZeroTrustDexRules;
