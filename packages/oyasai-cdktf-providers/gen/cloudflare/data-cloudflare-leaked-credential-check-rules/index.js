"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/leaked_credential_check_rules
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
exports.DataCloudflareLeakedCredentialCheckRules = exports.DataCloudflareLeakedCredentialCheckRulesResultList = exports.DataCloudflareLeakedCredentialCheckRulesResultOutputReference = void 0;
exports.dataCloudflareLeakedCredentialCheckRulesResultToTerraform = dataCloudflareLeakedCredentialCheckRulesResultToTerraform;
exports.dataCloudflareLeakedCredentialCheckRulesResultToHclTerraform = dataCloudflareLeakedCredentialCheckRulesResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareLeakedCredentialCheckRulesResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareLeakedCredentialCheckRulesResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareLeakedCredentialCheckRulesResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLeakedCredentialCheckRulesResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareLeakedCredentialCheckRulesResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareLeakedCredentialCheckRulesResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLeakedCredentialCheckRulesResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLeakedCredentialCheckRulesResultOutputReference.prototype, "password", {
        // password - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('password');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLeakedCredentialCheckRulesResultOutputReference.prototype, "username", {
        // username - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('username');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLeakedCredentialCheckRulesResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLeakedCredentialCheckRulesResultOutputReference = DataCloudflareLeakedCredentialCheckRulesResultOutputReference;
var DataCloudflareLeakedCredentialCheckRulesResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareLeakedCredentialCheckRulesResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareLeakedCredentialCheckRulesResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareLeakedCredentialCheckRulesResultList.prototype.get = function (index) {
        return new DataCloudflareLeakedCredentialCheckRulesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareLeakedCredentialCheckRulesResultList;
}(cdktf.ComplexList));
exports.DataCloudflareLeakedCredentialCheckRulesResultList = DataCloudflareLeakedCredentialCheckRulesResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/leaked_credential_check_rules cloudflare_leaked_credential_check_rules}
*/
var DataCloudflareLeakedCredentialCheckRules = /** @class */ (function (_super) {
    __extends(DataCloudflareLeakedCredentialCheckRules, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/leaked_credential_check_rules cloudflare_leaked_credential_check_rules} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareLeakedCredentialCheckRulesConfig = {}
    */
    function DataCloudflareLeakedCredentialCheckRules(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_leaked_credential_check_rules',
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
        _this._result = new DataCloudflareLeakedCredentialCheckRulesResultList(_this, "result", false);
        _this._maxItems = config.maxItems;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareLeakedCredentialCheckRules resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareLeakedCredentialCheckRules to import
    * @param importFromId The id of the existing DataCloudflareLeakedCredentialCheckRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/leaked_credential_check_rules#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareLeakedCredentialCheckRules to import is found
    */
    DataCloudflareLeakedCredentialCheckRules.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_leaked_credential_check_rules", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareLeakedCredentialCheckRules.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareLeakedCredentialCheckRules.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareLeakedCredentialCheckRules.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLeakedCredentialCheckRules.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLeakedCredentialCheckRules.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareLeakedCredentialCheckRules.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareLeakedCredentialCheckRules.prototype, "zoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareLeakedCredentialCheckRules.prototype.synthesizeAttributes = function () {
        return {
            max_items: cdktf.numberToTerraform(this._maxItems),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareLeakedCredentialCheckRules.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            zone_id: {
                value: cdktf.stringToHclTerraform(this._zoneId),
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
    DataCloudflareLeakedCredentialCheckRules.tfResourceType = "cloudflare_leaked_credential_check_rules";
    return DataCloudflareLeakedCredentialCheckRules;
}(cdktf.TerraformDataSource));
exports.DataCloudflareLeakedCredentialCheckRules = DataCloudflareLeakedCredentialCheckRules;
