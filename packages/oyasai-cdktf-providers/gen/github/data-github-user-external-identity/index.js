"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/user_external_identity
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
exports.DataGithubUserExternalIdentity = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/user_external_identity github_user_external_identity}
*/
var DataGithubUserExternalIdentity = /** @class */ (function (_super) {
    __extends(DataGithubUserExternalIdentity, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/user_external_identity github_user_external_identity} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubUserExternalIdentityConfig
    */
    function DataGithubUserExternalIdentity(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_user_external_identity',
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
        // saml_identity - computed: true, optional: false, required: false
        _this._samlIdentity = new cdktf.StringMap(_this, "saml_identity");
        // scim_identity - computed: true, optional: false, required: false
        _this._scimIdentity = new cdktf.StringMap(_this, "scim_identity");
        _this._id = config.id;
        _this._username = config.username;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubUserExternalIdentity resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubUserExternalIdentity to import
    * @param importFromId The id of the existing DataGithubUserExternalIdentity that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/user_external_identity#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubUserExternalIdentity to import is found
    */
    DataGithubUserExternalIdentity.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_user_external_identity", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataGithubUserExternalIdentity.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubUserExternalIdentity.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataGithubUserExternalIdentity.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubUserExternalIdentity.prototype, "login", {
        // login - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('login');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubUserExternalIdentity.prototype, "samlIdentity", {
        get: function () {
            return this._samlIdentity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubUserExternalIdentity.prototype, "scimIdentity", {
        get: function () {
            return this._scimIdentity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubUserExternalIdentity.prototype, "username", {
        get: function () {
            return this.getStringAttribute('username');
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubUserExternalIdentity.prototype, "usernameInput", {
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
    DataGithubUserExternalIdentity.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            username: cdktf.stringToTerraform(this._username),
        };
    };
    DataGithubUserExternalIdentity.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            id: {
                value: cdktf.stringToHclTerraform(this._id),
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
    DataGithubUserExternalIdentity.tfResourceType = "github_user_external_identity";
    return DataGithubUserExternalIdentity;
}(cdktf.TerraformDataSource));
exports.DataGithubUserExternalIdentity = DataGithubUserExternalIdentity;
