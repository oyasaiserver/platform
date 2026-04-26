"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_custom_property
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
exports.RepositoryCustomProperty = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_custom_property github_repository_custom_property}
*/
var RepositoryCustomProperty = /** @class */ (function (_super) {
    __extends(RepositoryCustomProperty, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_custom_property github_repository_custom_property} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryCustomPropertyConfig
    */
    function RepositoryCustomProperty(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_repository_custom_property',
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
        _this._id = config.id;
        _this._propertyName = config.propertyName;
        _this._propertyType = config.propertyType;
        _this._propertyValue = config.propertyValue;
        _this._repository = config.repository;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a RepositoryCustomProperty resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryCustomProperty to import
    * @param importFromId The id of the existing RepositoryCustomProperty that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_custom_property#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryCustomProperty to import is found
    */
    RepositoryCustomProperty.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_custom_property", importId: importFromId, provider: provider });
    };
    Object.defineProperty(RepositoryCustomProperty.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryCustomProperty.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(RepositoryCustomProperty.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryCustomProperty.prototype, "propertyName", {
        get: function () {
            return this.getStringAttribute('property_name');
        },
        set: function (value) {
            this._propertyName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryCustomProperty.prototype, "propertyNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._propertyName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryCustomProperty.prototype, "propertyType", {
        get: function () {
            return this.getStringAttribute('property_type');
        },
        set: function (value) {
            this._propertyType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryCustomProperty.prototype, "propertyTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._propertyType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryCustomProperty.prototype, "propertyValue", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('property_value'));
        },
        set: function (value) {
            this._propertyValue = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryCustomProperty.prototype, "propertyValueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._propertyValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryCustomProperty.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryCustomProperty.prototype, "repositoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repository;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    RepositoryCustomProperty.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            property_name: cdktf.stringToTerraform(this._propertyName),
            property_type: cdktf.stringToTerraform(this._propertyType),
            property_value: cdktf.listMapper(cdktf.stringToTerraform, false)(this._propertyValue),
            repository: cdktf.stringToTerraform(this._repository),
        };
    };
    RepositoryCustomProperty.prototype.synthesizeHclAttributes = function () {
        var attrs = {
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
            property_type: {
                value: cdktf.stringToHclTerraform(this._propertyType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            property_value: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._propertyValue),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            repository: {
                value: cdktf.stringToHclTerraform(this._repository),
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
    RepositoryCustomProperty.tfResourceType = "github_repository_custom_property";
    return RepositoryCustomProperty;
}(cdktf.TerraformResource));
exports.RepositoryCustomProperty = RepositoryCustomProperty;
