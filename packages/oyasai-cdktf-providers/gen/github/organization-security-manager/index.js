"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_security_manager
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
exports.OrganizationSecurityManager = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_security_manager github_organization_security_manager}
*/
var OrganizationSecurityManager = /** @class */ (function (_super) {
    __extends(OrganizationSecurityManager, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_security_manager github_organization_security_manager} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationSecurityManagerConfig
    */
    function OrganizationSecurityManager(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_organization_security_manager',
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
        _this._teamSlug = config.teamSlug;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a OrganizationSecurityManager resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OrganizationSecurityManager to import
    * @param importFromId The id of the existing OrganizationSecurityManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_security_manager#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OrganizationSecurityManager to import is found
    */
    OrganizationSecurityManager.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_organization_security_manager", importId: importFromId, provider: provider });
    };
    Object.defineProperty(OrganizationSecurityManager.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationSecurityManager.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(OrganizationSecurityManager.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationSecurityManager.prototype, "teamSlug", {
        get: function () {
            return this.getStringAttribute('team_slug');
        },
        set: function (value) {
            this._teamSlug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationSecurityManager.prototype, "teamSlugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._teamSlug;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    OrganizationSecurityManager.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            team_slug: cdktf.stringToTerraform(this._teamSlug),
        };
    };
    OrganizationSecurityManager.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            team_slug: {
                value: cdktf.stringToHclTerraform(this._teamSlug),
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
    OrganizationSecurityManager.tfResourceType = "github_organization_security_manager";
    return OrganizationSecurityManager;
}(cdktf.TerraformResource));
exports.OrganizationSecurityManager = OrganizationSecurityManager;
