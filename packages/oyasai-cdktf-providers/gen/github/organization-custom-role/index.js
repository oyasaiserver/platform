"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_custom_role
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
exports.OrganizationCustomRole = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_custom_role github_organization_custom_role}
*/
var OrganizationCustomRole = /** @class */ (function (_super) {
    __extends(OrganizationCustomRole, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_custom_role github_organization_custom_role} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationCustomRoleConfig
    */
    function OrganizationCustomRole(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_organization_custom_role',
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
        _this._baseRole = config.baseRole;
        _this._description = config.description;
        _this._id = config.id;
        _this._name = config.name;
        _this._permissions = config.permissions;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a OrganizationCustomRole resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OrganizationCustomRole to import
    * @param importFromId The id of the existing OrganizationCustomRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_custom_role#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OrganizationCustomRole to import is found
    */
    OrganizationCustomRole.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_organization_custom_role", importId: importFromId, provider: provider });
    };
    Object.defineProperty(OrganizationCustomRole.prototype, "baseRole", {
        get: function () {
            return this.getStringAttribute('base_role');
        },
        set: function (value) {
            this._baseRole = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationCustomRole.prototype, "baseRoleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._baseRole;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationCustomRole.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationCustomRole.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(OrganizationCustomRole.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationCustomRole.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationCustomRole.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(OrganizationCustomRole.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationCustomRole.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationCustomRole.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationCustomRole.prototype, "permissions", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('permissions'));
        },
        set: function (value) {
            this._permissions = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationCustomRole.prototype, "permissionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._permissions;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    OrganizationCustomRole.prototype.synthesizeAttributes = function () {
        return {
            base_role: cdktf.stringToTerraform(this._baseRole),
            description: cdktf.stringToTerraform(this._description),
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
            permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._permissions),
        };
    };
    OrganizationCustomRole.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            base_role: {
                value: cdktf.stringToHclTerraform(this._baseRole),
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
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            permissions: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._permissions),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
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
    OrganizationCustomRole.tfResourceType = "github_organization_custom_role";
    return OrganizationCustomRole;
}(cdktf.TerraformResource));
exports.OrganizationCustomRole = OrganizationCustomRole;
