"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/schema_validation_settings
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
exports.SchemaValidationSettings = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/schema_validation_settings cloudflare_schema_validation_settings}
*/
var SchemaValidationSettings = /** @class */ (function (_super) {
    __extends(SchemaValidationSettings, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/schema_validation_settings cloudflare_schema_validation_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SchemaValidationSettingsConfig
    */
    function SchemaValidationSettings(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_schema_validation_settings',
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
        _this._validationDefaultMitigationAction = config.validationDefaultMitigationAction;
        _this._validationOverrideMitigationAction = config.validationOverrideMitigationAction;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a SchemaValidationSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SchemaValidationSettings to import
    * @param importFromId The id of the existing SchemaValidationSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/schema_validation_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SchemaValidationSettings to import is found
    */
    SchemaValidationSettings.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_schema_validation_settings", importId: importFromId, provider: provider });
    };
    Object.defineProperty(SchemaValidationSettings.prototype, "validationDefaultMitigationAction", {
        get: function () {
            return this.getStringAttribute('validation_default_mitigation_action');
        },
        set: function (value) {
            this._validationDefaultMitigationAction = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SchemaValidationSettings.prototype, "validationDefaultMitigationActionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._validationDefaultMitigationAction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SchemaValidationSettings.prototype, "validationOverrideMitigationAction", {
        get: function () {
            return this.getStringAttribute('validation_override_mitigation_action');
        },
        set: function (value) {
            this._validationOverrideMitigationAction = value;
        },
        enumerable: false,
        configurable: true
    });
    SchemaValidationSettings.prototype.resetValidationOverrideMitigationAction = function () {
        this._validationOverrideMitigationAction = undefined;
    };
    Object.defineProperty(SchemaValidationSettings.prototype, "validationOverrideMitigationActionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._validationOverrideMitigationAction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SchemaValidationSettings.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    SchemaValidationSettings.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(SchemaValidationSettings.prototype, "zoneIdInput", {
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
    SchemaValidationSettings.prototype.synthesizeAttributes = function () {
        return {
            validation_default_mitigation_action: cdktf.stringToTerraform(this._validationDefaultMitigationAction),
            validation_override_mitigation_action: cdktf.stringToTerraform(this._validationOverrideMitigationAction),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    SchemaValidationSettings.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            validation_default_mitigation_action: {
                value: cdktf.stringToHclTerraform(this._validationDefaultMitigationAction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            validation_override_mitigation_action: {
                value: cdktf.stringToHclTerraform(this._validationOverrideMitigationAction),
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
    SchemaValidationSettings.tfResourceType = "cloudflare_schema_validation_settings";
    return SchemaValidationSettings;
}(cdktf.TerraformResource));
exports.SchemaValidationSettings = SchemaValidationSettings;
