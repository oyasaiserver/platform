"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_schemas
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
exports.DataCloudflareApiShieldSchemas = exports.DataCloudflareApiShieldSchemasResultList = exports.DataCloudflareApiShieldSchemasResultOutputReference = void 0;
exports.dataCloudflareApiShieldSchemasResultToTerraform = dataCloudflareApiShieldSchemasResultToTerraform;
exports.dataCloudflareApiShieldSchemasResultToHclTerraform = dataCloudflareApiShieldSchemasResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareApiShieldSchemasResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiShieldSchemasResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiShieldSchemasResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldSchemasResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareApiShieldSchemasResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareApiShieldSchemasResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiShieldSchemasResultOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldSchemasResultOutputReference.prototype, "kind", {
        // kind - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kind');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldSchemasResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldSchemasResultOutputReference.prototype, "schemaId", {
        // schema_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('schema_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldSchemasResultOutputReference.prototype, "source", {
        // source - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldSchemasResultOutputReference.prototype, "validationEnabled", {
        // validation_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('validation_enabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiShieldSchemasResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiShieldSchemasResultOutputReference = DataCloudflareApiShieldSchemasResultOutputReference;
var DataCloudflareApiShieldSchemasResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldSchemasResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareApiShieldSchemasResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareApiShieldSchemasResultList.prototype.get = function (index) {
        return new DataCloudflareApiShieldSchemasResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareApiShieldSchemasResultList;
}(cdktf.ComplexList));
exports.DataCloudflareApiShieldSchemasResultList = DataCloudflareApiShieldSchemasResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_schemas cloudflare_api_shield_schemas}
*/
var DataCloudflareApiShieldSchemas = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldSchemas, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_schemas cloudflare_api_shield_schemas} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareApiShieldSchemasConfig = {}
    */
    function DataCloudflareApiShieldSchemas(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_api_shield_schemas',
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
        _this._result = new DataCloudflareApiShieldSchemasResultList(_this, "result", false);
        _this._maxItems = config.maxItems;
        _this._omitSource = config.omitSource;
        _this._validationEnabled = config.validationEnabled;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareApiShieldSchemas resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareApiShieldSchemas to import
    * @param importFromId The id of the existing DataCloudflareApiShieldSchemas that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_schemas#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareApiShieldSchemas to import is found
    */
    DataCloudflareApiShieldSchemas.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_api_shield_schemas", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareApiShieldSchemas.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiShieldSchemas.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareApiShieldSchemas.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldSchemas.prototype, "omitSource", {
        get: function () {
            return this.getBooleanAttribute('omit_source');
        },
        set: function (value) {
            this._omitSource = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiShieldSchemas.prototype.resetOmitSource = function () {
        this._omitSource = undefined;
    };
    Object.defineProperty(DataCloudflareApiShieldSchemas.prototype, "omitSourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._omitSource;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldSchemas.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldSchemas.prototype, "validationEnabled", {
        get: function () {
            return this.getBooleanAttribute('validation_enabled');
        },
        set: function (value) {
            this._validationEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiShieldSchemas.prototype.resetValidationEnabled = function () {
        this._validationEnabled = undefined;
    };
    Object.defineProperty(DataCloudflareApiShieldSchemas.prototype, "validationEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._validationEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldSchemas.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiShieldSchemas.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareApiShieldSchemas.prototype, "zoneIdInput", {
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
    DataCloudflareApiShieldSchemas.prototype.synthesizeAttributes = function () {
        return {
            max_items: cdktf.numberToTerraform(this._maxItems),
            omit_source: cdktf.booleanToTerraform(this._omitSource),
            validation_enabled: cdktf.booleanToTerraform(this._validationEnabled),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareApiShieldSchemas.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            omit_source: {
                value: cdktf.booleanToHclTerraform(this._omitSource),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            validation_enabled: {
                value: cdktf.booleanToHclTerraform(this._validationEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
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
    DataCloudflareApiShieldSchemas.tfResourceType = "cloudflare_api_shield_schemas";
    return DataCloudflareApiShieldSchemas;
}(cdktf.TerraformDataSource));
exports.DataCloudflareApiShieldSchemas = DataCloudflareApiShieldSchemas;
