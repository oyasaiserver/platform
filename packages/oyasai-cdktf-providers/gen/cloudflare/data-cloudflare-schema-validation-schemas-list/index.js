"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/schema_validation_schemas_list
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
exports.DataCloudflareSchemaValidationSchemasList = exports.DataCloudflareSchemaValidationSchemasListResultList = exports.DataCloudflareSchemaValidationSchemasListResultOutputReference = void 0;
exports.dataCloudflareSchemaValidationSchemasListResultToTerraform = dataCloudflareSchemaValidationSchemasListResultToTerraform;
exports.dataCloudflareSchemaValidationSchemasListResultToHclTerraform = dataCloudflareSchemaValidationSchemasListResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareSchemaValidationSchemasListResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareSchemaValidationSchemasListResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareSchemaValidationSchemasListResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareSchemaValidationSchemasListResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareSchemaValidationSchemasListResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareSchemaValidationSchemasListResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareSchemaValidationSchemasListResultOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSchemaValidationSchemasListResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSchemaValidationSchemasListResultOutputReference.prototype, "kind", {
        // kind - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kind');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSchemaValidationSchemasListResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSchemaValidationSchemasListResultOutputReference.prototype, "schemaId", {
        // schema_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('schema_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSchemaValidationSchemasListResultOutputReference.prototype, "source", {
        // source - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSchemaValidationSchemasListResultOutputReference.prototype, "validationEnabled", {
        // validation_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('validation_enabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareSchemaValidationSchemasListResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareSchemaValidationSchemasListResultOutputReference = DataCloudflareSchemaValidationSchemasListResultOutputReference;
var DataCloudflareSchemaValidationSchemasListResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareSchemaValidationSchemasListResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareSchemaValidationSchemasListResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareSchemaValidationSchemasListResultList.prototype.get = function (index) {
        return new DataCloudflareSchemaValidationSchemasListResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareSchemaValidationSchemasListResultList;
}(cdktf.ComplexList));
exports.DataCloudflareSchemaValidationSchemasListResultList = DataCloudflareSchemaValidationSchemasListResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/schema_validation_schemas_list cloudflare_schema_validation_schemas_list}
*/
var DataCloudflareSchemaValidationSchemasList = /** @class */ (function (_super) {
    __extends(DataCloudflareSchemaValidationSchemasList, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/schema_validation_schemas_list cloudflare_schema_validation_schemas_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareSchemaValidationSchemasListConfig = {}
    */
    function DataCloudflareSchemaValidationSchemasList(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_schema_validation_schemas_list',
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
        _this._result = new DataCloudflareSchemaValidationSchemasListResultList(_this, "result", false);
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
    * Generates CDKTF code for importing a DataCloudflareSchemaValidationSchemasList resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareSchemaValidationSchemasList to import
    * @param importFromId The id of the existing DataCloudflareSchemaValidationSchemasList that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/schema_validation_schemas_list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareSchemaValidationSchemasList to import is found
    */
    DataCloudflareSchemaValidationSchemasList.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_schema_validation_schemas_list", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareSchemaValidationSchemasList.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareSchemaValidationSchemasList.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareSchemaValidationSchemasList.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSchemaValidationSchemasList.prototype, "omitSource", {
        get: function () {
            return this.getBooleanAttribute('omit_source');
        },
        set: function (value) {
            this._omitSource = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareSchemaValidationSchemasList.prototype.resetOmitSource = function () {
        this._omitSource = undefined;
    };
    Object.defineProperty(DataCloudflareSchemaValidationSchemasList.prototype, "omitSourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._omitSource;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSchemaValidationSchemasList.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSchemaValidationSchemasList.prototype, "validationEnabled", {
        get: function () {
            return this.getBooleanAttribute('validation_enabled');
        },
        set: function (value) {
            this._validationEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareSchemaValidationSchemasList.prototype.resetValidationEnabled = function () {
        this._validationEnabled = undefined;
    };
    Object.defineProperty(DataCloudflareSchemaValidationSchemasList.prototype, "validationEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._validationEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSchemaValidationSchemasList.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareSchemaValidationSchemasList.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareSchemaValidationSchemasList.prototype, "zoneIdInput", {
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
    DataCloudflareSchemaValidationSchemasList.prototype.synthesizeAttributes = function () {
        return {
            max_items: cdktf.numberToTerraform(this._maxItems),
            omit_source: cdktf.booleanToTerraform(this._omitSource),
            validation_enabled: cdktf.booleanToTerraform(this._validationEnabled),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareSchemaValidationSchemasList.prototype.synthesizeHclAttributes = function () {
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
    DataCloudflareSchemaValidationSchemasList.tfResourceType = "cloudflare_schema_validation_schemas_list";
    return DataCloudflareSchemaValidationSchemasList;
}(cdktf.TerraformDataSource));
exports.DataCloudflareSchemaValidationSchemasList = DataCloudflareSchemaValidationSchemasList;
