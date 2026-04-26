"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_custom_properties
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
exports.DataGithubOrganizationCustomProperties = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_custom_properties github_organization_custom_properties}
*/
var DataGithubOrganizationCustomProperties = /** @class */ (function (_super) {
    __extends(DataGithubOrganizationCustomProperties, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_custom_properties github_organization_custom_properties} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubOrganizationCustomPropertiesConfig
    */
    function DataGithubOrganizationCustomProperties(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_organization_custom_properties',
            terraformGeneratorMetadata: {
                providerName: 'github',
                providerVersion: '6.12.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        }) || this;
        _this._allowedValues = config.allowedValues;
        _this._defaultValue = config.defaultValue;
        _this._description = config.description;
        _this._id = config.id;
        _this._propertyName = config.propertyName;
        _this._required = config.required;
        _this._valueType = config.valueType;
        _this._valuesEditableBy = config.valuesEditableBy;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubOrganizationCustomProperties resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubOrganizationCustomProperties to import
    * @param importFromId The id of the existing DataGithubOrganizationCustomProperties that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_custom_properties#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubOrganizationCustomProperties to import is found
    */
    DataGithubOrganizationCustomProperties.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_organization_custom_properties", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataGithubOrganizationCustomProperties.prototype, "allowedValues", {
        get: function () {
            return this.getListAttribute('allowed_values');
        },
        set: function (value) {
            this._allowedValues = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubOrganizationCustomProperties.prototype.resetAllowedValues = function () {
        this._allowedValues = undefined;
    };
    Object.defineProperty(DataGithubOrganizationCustomProperties.prototype, "allowedValuesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedValues;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationCustomProperties.prototype, "defaultValue", {
        get: function () {
            return this.getStringAttribute('default_value');
        },
        set: function (value) {
            this._defaultValue = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubOrganizationCustomProperties.prototype.resetDefaultValue = function () {
        this._defaultValue = undefined;
    };
    Object.defineProperty(DataGithubOrganizationCustomProperties.prototype, "defaultValueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationCustomProperties.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubOrganizationCustomProperties.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(DataGithubOrganizationCustomProperties.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationCustomProperties.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubOrganizationCustomProperties.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataGithubOrganizationCustomProperties.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationCustomProperties.prototype, "propertyName", {
        get: function () {
            return this.getStringAttribute('property_name');
        },
        set: function (value) {
            this._propertyName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationCustomProperties.prototype, "propertyNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._propertyName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationCustomProperties.prototype, "required", {
        get: function () {
            return this.getBooleanAttribute('required');
        },
        set: function (value) {
            this._required = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubOrganizationCustomProperties.prototype.resetRequired = function () {
        this._required = undefined;
    };
    Object.defineProperty(DataGithubOrganizationCustomProperties.prototype, "requiredInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._required;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationCustomProperties.prototype, "valueType", {
        get: function () {
            return this.getStringAttribute('value_type');
        },
        set: function (value) {
            this._valueType = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubOrganizationCustomProperties.prototype.resetValueType = function () {
        this._valueType = undefined;
    };
    Object.defineProperty(DataGithubOrganizationCustomProperties.prototype, "valueTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._valueType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationCustomProperties.prototype, "valuesEditableBy", {
        get: function () {
            return this.getStringAttribute('values_editable_by');
        },
        set: function (value) {
            this._valuesEditableBy = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubOrganizationCustomProperties.prototype.resetValuesEditableBy = function () {
        this._valuesEditableBy = undefined;
    };
    Object.defineProperty(DataGithubOrganizationCustomProperties.prototype, "valuesEditableByInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._valuesEditableBy;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataGithubOrganizationCustomProperties.prototype.synthesizeAttributes = function () {
        return {
            allowed_values: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedValues),
            default_value: cdktf.stringToTerraform(this._defaultValue),
            description: cdktf.stringToTerraform(this._description),
            id: cdktf.stringToTerraform(this._id),
            property_name: cdktf.stringToTerraform(this._propertyName),
            required: cdktf.booleanToTerraform(this._required),
            value_type: cdktf.stringToTerraform(this._valueType),
            values_editable_by: cdktf.stringToTerraform(this._valuesEditableBy),
        };
    };
    DataGithubOrganizationCustomProperties.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            allowed_values: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedValues),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            default_value: {
                value: cdktf.stringToHclTerraform(this._defaultValue),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            property_name: {
                value: cdktf.stringToHclTerraform(this._propertyName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            required: {
                value: cdktf.booleanToHclTerraform(this._required),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            value_type: {
                value: cdktf.stringToHclTerraform(this._valueType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            values_editable_by: {
                value: cdktf.stringToHclTerraform(this._valuesEditableBy),
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
    DataGithubOrganizationCustomProperties.tfResourceType = "github_organization_custom_properties";
    return DataGithubOrganizationCustomProperties;
}(cdktf.TerraformDataSource));
exports.DataGithubOrganizationCustomProperties = DataGithubOrganizationCustomProperties;
