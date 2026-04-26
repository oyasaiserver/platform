"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_role_user
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
exports.OrganizationRoleUser = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_role_user github_organization_role_user}
*/
var OrganizationRoleUser = /** @class */ (function (_super) {
    __extends(OrganizationRoleUser, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_role_user github_organization_role_user} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationRoleUserConfig
    */
    function OrganizationRoleUser(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_organization_role_user',
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
        _this._login = config.login;
        _this._roleId = config.roleId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a OrganizationRoleUser resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OrganizationRoleUser to import
    * @param importFromId The id of the existing OrganizationRoleUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_role_user#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OrganizationRoleUser to import is found
    */
    OrganizationRoleUser.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_organization_role_user", importId: importFromId, provider: provider });
    };
    Object.defineProperty(OrganizationRoleUser.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRoleUser.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(OrganizationRoleUser.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRoleUser.prototype, "login", {
        get: function () {
            return this.getStringAttribute('login');
        },
        set: function (value) {
            this._login = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRoleUser.prototype, "loginInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._login;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRoleUser.prototype, "roleId", {
        get: function () {
            return this.getNumberAttribute('role_id');
        },
        set: function (value) {
            this._roleId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRoleUser.prototype, "roleIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    OrganizationRoleUser.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            login: cdktf.stringToTerraform(this._login),
            role_id: cdktf.numberToTerraform(this._roleId),
        };
    };
    OrganizationRoleUser.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            login: {
                value: cdktf.stringToHclTerraform(this._login),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            role_id: {
                value: cdktf.numberToHclTerraform(this._roleId),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
    OrganizationRoleUser.tfResourceType = "github_organization_role_user";
    return OrganizationRoleUser;
}(cdktf.TerraformResource));
exports.OrganizationRoleUser = OrganizationRoleUser;
