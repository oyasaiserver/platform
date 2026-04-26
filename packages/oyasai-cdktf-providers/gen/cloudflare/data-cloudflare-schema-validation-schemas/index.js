"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/schema_validation_schemas
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
exports.DataCloudflareSchemaValidationSchemas = exports.DataCloudflareSchemaValidationSchemasFilterOutputReference = void 0;
exports.dataCloudflareSchemaValidationSchemasFilterToTerraform = dataCloudflareSchemaValidationSchemasFilterToTerraform;
exports.dataCloudflareSchemaValidationSchemasFilterToHclTerraform = dataCloudflareSchemaValidationSchemasFilterToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareSchemaValidationSchemasFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        validation_enabled: cdktf.booleanToTerraform(struct.validationEnabled),
    };
}
function dataCloudflareSchemaValidationSchemasFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        validation_enabled: {
            value: cdktf.booleanToHclTerraform(struct.validationEnabled),
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
var DataCloudflareSchemaValidationSchemasFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareSchemaValidationSchemasFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareSchemaValidationSchemasFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareSchemaValidationSchemasFilterOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._validationEnabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.validationEnabled = this._validationEnabled;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._validationEnabled = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._validationEnabled = value.validationEnabled;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSchemaValidationSchemasFilterOutputReference.prototype, "validationEnabled", {
        get: function () {
            return this.getBooleanAttribute('validation_enabled');
        },
        set: function (value) {
            this._validationEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareSchemaValidationSchemasFilterOutputReference.prototype.resetValidationEnabled = function () {
        this._validationEnabled = undefined;
    };
    Object.defineProperty(DataCloudflareSchemaValidationSchemasFilterOutputReference.prototype, "validationEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._validationEnabled;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareSchemaValidationSchemasFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareSchemaValidationSchemasFilterOutputReference = DataCloudflareSchemaValidationSchemasFilterOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/schema_validation_schemas cloudflare_schema_validation_schemas}
*/
var DataCloudflareSchemaValidationSchemas = /** @class */ (function (_super) {
    __extends(DataCloudflareSchemaValidationSchemas, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/schema_validation_schemas cloudflare_schema_validation_schemas} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareSchemaValidationSchemasConfig = {}
    */
    function DataCloudflareSchemaValidationSchemas(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_schema_validation_schemas',
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
        // filter - computed: false, optional: true, required: false
        _this._filter = new DataCloudflareSchemaValidationSchemasFilterOutputReference(_this, "filter");
        _this._filter.internalValue = config.filter;
        _this._omitSource = config.omitSource;
        _this._schemaId = config.schemaId;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareSchemaValidationSchemas resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareSchemaValidationSchemas to import
    * @param importFromId The id of the existing DataCloudflareSchemaValidationSchemas that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/schema_validation_schemas#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareSchemaValidationSchemas to import is found
    */
    DataCloudflareSchemaValidationSchemas.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_schema_validation_schemas", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareSchemaValidationSchemas.prototype, "createdAt", {
        // ==========
        // ATTRIBUTES
        // ==========
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSchemaValidationSchemas.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareSchemaValidationSchemas.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareSchemaValidationSchemas.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareSchemaValidationSchemas.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSchemaValidationSchemas.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSchemaValidationSchemas.prototype, "kind", {
        // kind - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kind');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSchemaValidationSchemas.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSchemaValidationSchemas.prototype, "omitSource", {
        get: function () {
            return this.getBooleanAttribute('omit_source');
        },
        set: function (value) {
            this._omitSource = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareSchemaValidationSchemas.prototype.resetOmitSource = function () {
        this._omitSource = undefined;
    };
    Object.defineProperty(DataCloudflareSchemaValidationSchemas.prototype, "omitSourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._omitSource;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSchemaValidationSchemas.prototype, "schemaId", {
        get: function () {
            return this.getStringAttribute('schema_id');
        },
        set: function (value) {
            this._schemaId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareSchemaValidationSchemas.prototype.resetSchemaId = function () {
        this._schemaId = undefined;
    };
    Object.defineProperty(DataCloudflareSchemaValidationSchemas.prototype, "schemaIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._schemaId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSchemaValidationSchemas.prototype, "source", {
        // source - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSchemaValidationSchemas.prototype, "validationEnabled", {
        // validation_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('validation_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSchemaValidationSchemas.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareSchemaValidationSchemas.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareSchemaValidationSchemas.prototype, "zoneIdInput", {
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
    DataCloudflareSchemaValidationSchemas.prototype.synthesizeAttributes = function () {
        return {
            filter: dataCloudflareSchemaValidationSchemasFilterToTerraform(this._filter.internalValue),
            omit_source: cdktf.booleanToTerraform(this._omitSource),
            schema_id: cdktf.stringToTerraform(this._schemaId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareSchemaValidationSchemas.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            filter: {
                value: dataCloudflareSchemaValidationSchemasFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareSchemaValidationSchemasFilter",
            },
            omit_source: {
                value: cdktf.booleanToHclTerraform(this._omitSource),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            schema_id: {
                value: cdktf.stringToHclTerraform(this._schemaId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
    DataCloudflareSchemaValidationSchemas.tfResourceType = "cloudflare_schema_validation_schemas";
    return DataCloudflareSchemaValidationSchemas;
}(cdktf.TerraformDataSource));
exports.DataCloudflareSchemaValidationSchemas = DataCloudflareSchemaValidationSchemas;
