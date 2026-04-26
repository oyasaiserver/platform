"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/membership
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
exports.DataGithubMembership = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/membership github_membership}
*/
var DataGithubMembership = /** @class */ (function (_super) {
    __extends(DataGithubMembership, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/membership github_membership} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubMembershipConfig
    */
    function DataGithubMembership(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_membership',
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
        _this._organization = config.organization;
        _this._username = config.username;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubMembership resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubMembership to import
    * @param importFromId The id of the existing DataGithubMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/membership#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubMembership to import is found
    */
    DataGithubMembership.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_membership", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataGithubMembership.prototype, "etag", {
        // ==========
        // ATTRIBUTES
        // ==========
        // etag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('etag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubMembership.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubMembership.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataGithubMembership.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubMembership.prototype, "organization", {
        get: function () {
            return this.getStringAttribute('organization');
        },
        set: function (value) {
            this._organization = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubMembership.prototype.resetOrganization = function () {
        this._organization = undefined;
    };
    Object.defineProperty(DataGithubMembership.prototype, "organizationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._organization;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubMembership.prototype, "role", {
        // role - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('role');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubMembership.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubMembership.prototype, "username", {
        get: function () {
            return this.getStringAttribute('username');
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubMembership.prototype, "usernameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._username;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataGithubMembership.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            organization: cdktf.stringToTerraform(this._organization),
            username: cdktf.stringToTerraform(this._username),
        };
    };
    DataGithubMembership.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            organization: {
                value: cdktf.stringToHclTerraform(this._organization),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            username: {
                value: cdktf.stringToHclTerraform(this._username),
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
    DataGithubMembership.tfResourceType = "github_membership";
    return DataGithubMembership;
}(cdktf.TerraformDataSource));
exports.DataGithubMembership = DataGithubMembership;
