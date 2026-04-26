"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_organization
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
exports.EnterpriseOrganization = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_organization github_enterprise_organization}
*/
var EnterpriseOrganization = /** @class */ (function (_super) {
    __extends(EnterpriseOrganization, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_organization github_enterprise_organization} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EnterpriseOrganizationConfig
    */
    function EnterpriseOrganization(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_enterprise_organization',
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
        _this._adminLogins = config.adminLogins;
        _this._billingEmail = config.billingEmail;
        _this._description = config.description;
        _this._displayName = config.displayName;
        _this._enterpriseId = config.enterpriseId;
        _this._name = config.name;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a EnterpriseOrganization resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EnterpriseOrganization to import
    * @param importFromId The id of the existing EnterpriseOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_organization#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EnterpriseOrganization to import is found
    */
    EnterpriseOrganization.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_enterprise_organization", importId: importFromId, provider: provider });
    };
    Object.defineProperty(EnterpriseOrganization.prototype, "adminLogins", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('admin_logins'));
        },
        set: function (value) {
            this._adminLogins = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseOrganization.prototype, "adminLoginsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._adminLogins;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseOrganization.prototype, "billingEmail", {
        get: function () {
            return this.getStringAttribute('billing_email');
        },
        set: function (value) {
            this._billingEmail = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseOrganization.prototype, "billingEmailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._billingEmail;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseOrganization.prototype, "databaseId", {
        // database_id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('database_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseOrganization.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    EnterpriseOrganization.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(EnterpriseOrganization.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseOrganization.prototype, "displayName", {
        get: function () {
            return this.getStringAttribute('display_name');
        },
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    EnterpriseOrganization.prototype.resetDisplayName = function () {
        this._displayName = undefined;
    };
    Object.defineProperty(EnterpriseOrganization.prototype, "displayNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._displayName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseOrganization.prototype, "enterpriseId", {
        get: function () {
            return this.getStringAttribute('enterprise_id');
        },
        set: function (value) {
            this._enterpriseId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseOrganization.prototype, "enterpriseIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enterpriseId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseOrganization.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseOrganization.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseOrganization.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    EnterpriseOrganization.prototype.synthesizeAttributes = function () {
        return {
            admin_logins: cdktf.listMapper(cdktf.stringToTerraform, false)(this._adminLogins),
            billing_email: cdktf.stringToTerraform(this._billingEmail),
            description: cdktf.stringToTerraform(this._description),
            display_name: cdktf.stringToTerraform(this._displayName),
            enterprise_id: cdktf.stringToTerraform(this._enterpriseId),
            name: cdktf.stringToTerraform(this._name),
        };
    };
    EnterpriseOrganization.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            admin_logins: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._adminLogins),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            billing_email: {
                value: cdktf.stringToHclTerraform(this._billingEmail),
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
            display_name: {
                value: cdktf.stringToHclTerraform(this._displayName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enterprise_id: {
                value: cdktf.stringToHclTerraform(this._enterpriseId),
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
    EnterpriseOrganization.tfResourceType = "github_enterprise_organization";
    return EnterpriseOrganization;
}(cdktf.TerraformResource));
exports.EnterpriseOrganization = EnterpriseOrganization;
