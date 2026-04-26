"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_schema
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
exports.DataCloudflareApiShieldSchema = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_schema cloudflare_api_shield_schema}
*/
var DataCloudflareApiShieldSchema = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldSchema, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_schema cloudflare_api_shield_schema} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareApiShieldSchemaConfig
    */
    function DataCloudflareApiShieldSchema(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_api_shield_schema',
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
        _this._omitSource = config.omitSource;
        _this._schemaId = config.schemaId;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareApiShieldSchema resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareApiShieldSchema to import
    * @param importFromId The id of the existing DataCloudflareApiShieldSchema that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_schema#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareApiShieldSchema to import is found
    */
    DataCloudflareApiShieldSchema.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_api_shield_schema", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareApiShieldSchema.prototype, "createdAt", {
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
    Object.defineProperty(DataCloudflareApiShieldSchema.prototype, "kind", {
        // kind - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kind');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldSchema.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldSchema.prototype, "omitSource", {
        get: function () {
            return this.getBooleanAttribute('omit_source');
        },
        set: function (value) {
            this._omitSource = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiShieldSchema.prototype.resetOmitSource = function () {
        this._omitSource = undefined;
    };
    Object.defineProperty(DataCloudflareApiShieldSchema.prototype, "omitSourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._omitSource;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldSchema.prototype, "schemaId", {
        get: function () {
            return this.getStringAttribute('schema_id');
        },
        set: function (value) {
            this._schemaId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldSchema.prototype, "schemaIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._schemaId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldSchema.prototype, "source", {
        // source - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldSchema.prototype, "validationEnabled", {
        // validation_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('validation_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldSchema.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiShieldSchema.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareApiShieldSchema.prototype, "zoneIdInput", {
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
    DataCloudflareApiShieldSchema.prototype.synthesizeAttributes = function () {
        return {
            omit_source: cdktf.booleanToTerraform(this._omitSource),
            schema_id: cdktf.stringToTerraform(this._schemaId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareApiShieldSchema.prototype.synthesizeHclAttributes = function () {
        var attrs = {
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
    DataCloudflareApiShieldSchema.tfResourceType = "cloudflare_api_shield_schema";
    return DataCloudflareApiShieldSchema;
}(cdktf.TerraformDataSource));
exports.DataCloudflareApiShieldSchema = DataCloudflareApiShieldSchema;
