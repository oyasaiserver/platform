"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_tests
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
exports.DataCloudflareZeroTrustDexTests = exports.DataCloudflareZeroTrustDexTestsResultList = exports.DataCloudflareZeroTrustDexTestsResultOutputReference = exports.DataCloudflareZeroTrustDexTestsResultTargetPoliciesList = exports.DataCloudflareZeroTrustDexTestsResultTargetPoliciesOutputReference = exports.DataCloudflareZeroTrustDexTestsResultDataOutputReference = void 0;
exports.dataCloudflareZeroTrustDexTestsResultDataToTerraform = dataCloudflareZeroTrustDexTestsResultDataToTerraform;
exports.dataCloudflareZeroTrustDexTestsResultDataToHclTerraform = dataCloudflareZeroTrustDexTestsResultDataToHclTerraform;
exports.dataCloudflareZeroTrustDexTestsResultTargetPoliciesToTerraform = dataCloudflareZeroTrustDexTestsResultTargetPoliciesToTerraform;
exports.dataCloudflareZeroTrustDexTestsResultTargetPoliciesToHclTerraform = dataCloudflareZeroTrustDexTestsResultTargetPoliciesToHclTerraform;
exports.dataCloudflareZeroTrustDexTestsResultToTerraform = dataCloudflareZeroTrustDexTestsResultToTerraform;
exports.dataCloudflareZeroTrustDexTestsResultToHclTerraform = dataCloudflareZeroTrustDexTestsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustDexTestsResultDataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDexTestsResultDataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDexTestsResultDataOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDexTestsResultDataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDexTestsResultDataOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDexTestsResultDataOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDexTestsResultDataOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexTestsResultDataOutputReference.prototype, "kind", {
        // kind - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kind');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexTestsResultDataOutputReference.prototype, "method", {
        // method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('method');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDexTestsResultDataOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDexTestsResultDataOutputReference = DataCloudflareZeroTrustDexTestsResultDataOutputReference;
function dataCloudflareZeroTrustDexTestsResultTargetPoliciesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDexTestsResultTargetPoliciesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDexTestsResultTargetPoliciesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDexTestsResultTargetPoliciesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDexTestsResultTargetPoliciesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDexTestsResultTargetPoliciesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexTestsResultTargetPoliciesOutputReference.prototype, "default", {
        // default - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('default');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexTestsResultTargetPoliciesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexTestsResultTargetPoliciesOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDexTestsResultTargetPoliciesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDexTestsResultTargetPoliciesOutputReference = DataCloudflareZeroTrustDexTestsResultTargetPoliciesOutputReference;
var DataCloudflareZeroTrustDexTestsResultTargetPoliciesList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDexTestsResultTargetPoliciesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDexTestsResultTargetPoliciesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDexTestsResultTargetPoliciesList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDexTestsResultTargetPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDexTestsResultTargetPoliciesList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDexTestsResultTargetPoliciesList = DataCloudflareZeroTrustDexTestsResultTargetPoliciesList;
function dataCloudflareZeroTrustDexTestsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        target_policies: cdktf.listMapper(dataCloudflareZeroTrustDexTestsResultTargetPoliciesToTerraform, false)(struct.targetPolicies),
    };
}
function dataCloudflareZeroTrustDexTestsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        target_policies: {
            value: cdktf.listMapperHcl(dataCloudflareZeroTrustDexTestsResultTargetPoliciesToHclTerraform, false)(struct.targetPolicies),
            isBlock: true,
            type: "list",
            storageClassType: "DataCloudflareZeroTrustDexTestsResultTargetPoliciesList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var DataCloudflareZeroTrustDexTestsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDexTestsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDexTestsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // data - computed: true, optional: false, required: false
        _this._data = new DataCloudflareZeroTrustDexTestsResultDataOutputReference(_this, "data");
        // target_policies - computed: true, optional: true, required: false
        _this._targetPolicies = new DataCloudflareZeroTrustDexTestsResultTargetPoliciesList(_this, "target_policies", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDexTestsResultOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._targetPolicies) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.targetPolicies = (_b = this._targetPolicies) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._targetPolicies.internalValue = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._targetPolicies.internalValue = value.targetPolicies;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexTestsResultOutputReference.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexTestsResultOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexTestsResultOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexTestsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexTestsResultOutputReference.prototype, "interval", {
        // interval - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('interval');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexTestsResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexTestsResultOutputReference.prototype, "targetPolicies", {
        get: function () {
            return this._targetPolicies;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDexTestsResultOutputReference.prototype.putTargetPolicies = function (value) {
        this._targetPolicies.internalValue = value;
    };
    DataCloudflareZeroTrustDexTestsResultOutputReference.prototype.resetTargetPolicies = function () {
        this._targetPolicies.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDexTestsResultOutputReference.prototype, "targetPoliciesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetPolicies.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexTestsResultOutputReference.prototype, "targeted", {
        // targeted - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('targeted');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexTestsResultOutputReference.prototype, "testId", {
        // test_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('test_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDexTestsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDexTestsResultOutputReference = DataCloudflareZeroTrustDexTestsResultOutputReference;
var DataCloudflareZeroTrustDexTestsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDexTestsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDexTestsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDexTestsResultList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDexTestsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDexTestsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDexTestsResultList = DataCloudflareZeroTrustDexTestsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_tests cloudflare_zero_trust_dex_tests}
*/
var DataCloudflareZeroTrustDexTests = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDexTests, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_tests cloudflare_zero_trust_dex_tests} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDexTestsConfig = {}
    */
    function DataCloudflareZeroTrustDexTests(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_dex_tests',
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
        _this._result = new DataCloudflareZeroTrustDexTestsResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._kind = config.kind;
        _this._maxItems = config.maxItems;
        _this._testName = config.testName;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDexTests resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDexTests to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDexTests that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_tests#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDexTests to import is found
    */
    DataCloudflareZeroTrustDexTests.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_dex_tests", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustDexTests.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDexTests.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDexTests.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexTests.prototype, "kind", {
        get: function () {
            return this.getStringAttribute('kind');
        },
        set: function (value) {
            this._kind = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDexTests.prototype.resetKind = function () {
        this._kind = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDexTests.prototype, "kindInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kind;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexTests.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDexTests.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDexTests.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexTests.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexTests.prototype, "testName", {
        get: function () {
            return this.getStringAttribute('test_name');
        },
        set: function (value) {
            this._testName = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDexTests.prototype.resetTestName = function () {
        this._testName = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDexTests.prototype, "testNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._testName;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustDexTests.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            kind: cdktf.stringToTerraform(this._kind),
            max_items: cdktf.numberToTerraform(this._maxItems),
            test_name: cdktf.stringToTerraform(this._testName),
        };
    };
    DataCloudflareZeroTrustDexTests.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kind: {
                value: cdktf.stringToHclTerraform(this._kind),
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
            test_name: {
                value: cdktf.stringToHclTerraform(this._testName),
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
    DataCloudflareZeroTrustDexTests.tfResourceType = "cloudflare_zero_trust_dex_tests";
    return DataCloudflareZeroTrustDexTests;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustDexTests = DataCloudflareZeroTrustDexTests;
