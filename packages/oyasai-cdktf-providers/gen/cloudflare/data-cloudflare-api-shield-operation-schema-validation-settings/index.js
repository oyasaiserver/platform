"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operation_schema_validation_settings
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
exports.DataCloudflareApiShieldOperationSchemaValidationSettings = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operation_schema_validation_settings cloudflare_api_shield_operation_schema_validation_settings}
*/
var DataCloudflareApiShieldOperationSchemaValidationSettings = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldOperationSchemaValidationSettings, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operation_schema_validation_settings cloudflare_api_shield_operation_schema_validation_settings} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareApiShieldOperationSchemaValidationSettingsConfig
    */
    function DataCloudflareApiShieldOperationSchemaValidationSettings(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_api_shield_operation_schema_validation_settings',
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
        _this._operationId = config.operationId;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareApiShieldOperationSchemaValidationSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareApiShieldOperationSchemaValidationSettings to import
    * @param importFromId The id of the existing DataCloudflareApiShieldOperationSchemaValidationSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operation_schema_validation_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareApiShieldOperationSchemaValidationSettings to import is found
    */
    DataCloudflareApiShieldOperationSchemaValidationSettings.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_api_shield_operation_schema_validation_settings", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareApiShieldOperationSchemaValidationSettings.prototype, "mitigationAction", {
        // ==========
        // ATTRIBUTES
        // ==========
        // mitigation_action - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mitigation_action');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationSchemaValidationSettings.prototype, "operationId", {
        get: function () {
            return this.getStringAttribute('operation_id');
        },
        set: function (value) {
            this._operationId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationSchemaValidationSettings.prototype, "operationIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._operationId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationSchemaValidationSettings.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiShieldOperationSchemaValidationSettings.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareApiShieldOperationSchemaValidationSettings.prototype, "zoneIdInput", {
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
    DataCloudflareApiShieldOperationSchemaValidationSettings.prototype.synthesizeAttributes = function () {
        return {
            operation_id: cdktf.stringToTerraform(this._operationId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareApiShieldOperationSchemaValidationSettings.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            operation_id: {
                value: cdktf.stringToHclTerraform(this._operationId),
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
    DataCloudflareApiShieldOperationSchemaValidationSettings.tfResourceType = "cloudflare_api_shield_operation_schema_validation_settings";
    return DataCloudflareApiShieldOperationSchemaValidationSettings;
}(cdktf.TerraformDataSource));
exports.DataCloudflareApiShieldOperationSchemaValidationSettings = DataCloudflareApiShieldOperationSchemaValidationSettings;
