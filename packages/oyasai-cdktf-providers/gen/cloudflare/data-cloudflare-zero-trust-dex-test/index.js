"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_test
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
exports.DataCloudflareZeroTrustDexTest = exports.DataCloudflareZeroTrustDexTestTargetPoliciesList = exports.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference = exports.DataCloudflareZeroTrustDexTestFilterOutputReference = exports.DataCloudflareZeroTrustDexTestDataOutputReference = void 0;
exports.dataCloudflareZeroTrustDexTestDataToTerraform = dataCloudflareZeroTrustDexTestDataToTerraform;
exports.dataCloudflareZeroTrustDexTestDataToHclTerraform = dataCloudflareZeroTrustDexTestDataToHclTerraform;
exports.dataCloudflareZeroTrustDexTestFilterToTerraform = dataCloudflareZeroTrustDexTestFilterToTerraform;
exports.dataCloudflareZeroTrustDexTestFilterToHclTerraform = dataCloudflareZeroTrustDexTestFilterToHclTerraform;
exports.dataCloudflareZeroTrustDexTestTargetPoliciesToTerraform = dataCloudflareZeroTrustDexTestTargetPoliciesToTerraform;
exports.dataCloudflareZeroTrustDexTestTargetPoliciesToHclTerraform = dataCloudflareZeroTrustDexTestTargetPoliciesToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustDexTestDataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDexTestDataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDexTestDataOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDexTestDataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDexTestDataOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDexTestDataOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDexTestDataOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexTestDataOutputReference.prototype, "kind", {
        // kind - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kind');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexTestDataOutputReference.prototype, "method", {
        // method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('method');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDexTestDataOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDexTestDataOutputReference = DataCloudflareZeroTrustDexTestDataOutputReference;
function dataCloudflareZeroTrustDexTestFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        kind: cdktf.stringToTerraform(struct.kind),
        test_name: cdktf.stringToTerraform(struct.testName),
    };
}
function dataCloudflareZeroTrustDexTestFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        kind: {
            value: cdktf.stringToHclTerraform(struct.kind),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        test_name: {
            value: cdktf.stringToHclTerraform(struct.testName),
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
var DataCloudflareZeroTrustDexTestFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDexTestFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDexTestFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDexTestFilterOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._kind !== undefined) {
                hasAnyValues = true;
                internalValueResult.kind = this._kind;
            }
            if (this._testName !== undefined) {
                hasAnyValues = true;
                internalValueResult.testName = this._testName;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._kind = undefined;
                this._testName = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._kind = value.kind;
                this._testName = value.testName;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexTestFilterOutputReference.prototype, "kind", {
        get: function () {
            return this.getStringAttribute('kind');
        },
        set: function (value) {
            this._kind = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDexTestFilterOutputReference.prototype.resetKind = function () {
        this._kind = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDexTestFilterOutputReference.prototype, "kindInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kind;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexTestFilterOutputReference.prototype, "testName", {
        get: function () {
            return this.getStringAttribute('test_name');
        },
        set: function (value) {
            this._testName = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDexTestFilterOutputReference.prototype.resetTestName = function () {
        this._testName = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDexTestFilterOutputReference.prototype, "testNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._testName;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDexTestFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDexTestFilterOutputReference = DataCloudflareZeroTrustDexTestFilterOutputReference;
function dataCloudflareZeroTrustDexTestTargetPoliciesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDexTestTargetPoliciesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.prototype, "default", {
        // default - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('default');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference = DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference;
var DataCloudflareZeroTrustDexTestTargetPoliciesList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDexTestTargetPoliciesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDexTestTargetPoliciesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDexTestTargetPoliciesList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDexTestTargetPoliciesList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDexTestTargetPoliciesList = DataCloudflareZeroTrustDexTestTargetPoliciesList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_test cloudflare_zero_trust_dex_test}
*/
var DataCloudflareZeroTrustDexTest = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDexTest, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_test cloudflare_zero_trust_dex_test} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDexTestConfig = {}
    */
    function DataCloudflareZeroTrustDexTest(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_dex_test',
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
        // data - computed: true, optional: false, required: false
        _this._data = new DataCloudflareZeroTrustDexTestDataOutputReference(_this, "data");
        // filter - computed: false, optional: true, required: false
        _this._filter = new DataCloudflareZeroTrustDexTestFilterOutputReference(_this, "filter");
        // target_policies - computed: true, optional: true, required: false
        _this._targetPolicies = new DataCloudflareZeroTrustDexTestTargetPoliciesList(_this, "target_policies", false);
        _this._accountId = config.accountId;
        _this._dexTestId = config.dexTestId;
        _this._filter.internalValue = config.filter;
        _this._targetPolicies.internalValue = config.targetPolicies;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDexTest resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDexTest to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDexTest that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_test#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDexTest to import is found
    */
    DataCloudflareZeroTrustDexTest.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_dex_test", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustDexTest.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDexTest.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDexTest.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexTest.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexTest.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexTest.prototype, "dexTestId", {
        get: function () {
            return this.getStringAttribute('dex_test_id');
        },
        set: function (value) {
            this._dexTestId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDexTest.prototype.resetDexTestId = function () {
        this._dexTestId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDexTest.prototype, "dexTestIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dexTestId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexTest.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexTest.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDexTest.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareZeroTrustDexTest.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDexTest.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexTest.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexTest.prototype, "interval", {
        // interval - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('interval');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexTest.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexTest.prototype, "targetPolicies", {
        get: function () {
            return this._targetPolicies;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDexTest.prototype.putTargetPolicies = function (value) {
        this._targetPolicies.internalValue = value;
    };
    DataCloudflareZeroTrustDexTest.prototype.resetTargetPolicies = function () {
        this._targetPolicies.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDexTest.prototype, "targetPoliciesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetPolicies.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexTest.prototype, "targeted", {
        // targeted - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('targeted');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDexTest.prototype, "testId", {
        // test_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('test_id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustDexTest.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            dex_test_id: cdktf.stringToTerraform(this._dexTestId),
            filter: dataCloudflareZeroTrustDexTestFilterToTerraform(this._filter.internalValue),
            target_policies: cdktf.listMapper(dataCloudflareZeroTrustDexTestTargetPoliciesToTerraform, false)(this._targetPolicies.internalValue),
        };
    };
    DataCloudflareZeroTrustDexTest.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            dex_test_id: {
                value: cdktf.stringToHclTerraform(this._dexTestId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareZeroTrustDexTestFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareZeroTrustDexTestFilter",
            },
            target_policies: {
                value: cdktf.listMapperHcl(dataCloudflareZeroTrustDexTestTargetPoliciesToHclTerraform, false)(this._targetPolicies.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "DataCloudflareZeroTrustDexTestTargetPoliciesList",
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
    DataCloudflareZeroTrustDexTest.tfResourceType = "cloudflare_zero_trust_dex_test";
    return DataCloudflareZeroTrustDexTest;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustDexTest = DataCloudflareZeroTrustDexTest;
