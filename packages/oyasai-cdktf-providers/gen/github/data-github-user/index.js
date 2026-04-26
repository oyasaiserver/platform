"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/user
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
exports.DataGithubUser = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/user github_user}
*/
var DataGithubUser = /** @class */ (function (_super) {
    __extends(DataGithubUser, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/user github_user} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubUserConfig
    */
    function DataGithubUser(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_user',
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
        _this._username = config.username;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubUser resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubUser to import
    * @param importFromId The id of the existing DataGithubUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/user#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubUser to import is found
    */
    DataGithubUser.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_user", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataGithubUser.prototype, "avatarUrl", {
        // ==========
        // ATTRIBUTES
        // ==========
        // avatar_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('avatar_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubUser.prototype, "bio", {
        // bio - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bio');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubUser.prototype, "blog", {
        // blog - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('blog');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubUser.prototype, "company", {
        // company - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('company');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubUser.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubUser.prototype, "email", {
        // email - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubUser.prototype, "followers", {
        // followers - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('followers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubUser.prototype, "following", {
        // following - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('following');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubUser.prototype, "gpgKeys", {
        // gpg_keys - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('gpg_keys');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubUser.prototype, "gravatarId", {
        // gravatar_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('gravatar_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubUser.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubUser.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataGithubUser.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubUser.prototype, "location", {
        // location - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('location');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubUser.prototype, "login", {
        // login - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('login');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubUser.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubUser.prototype, "nodeId", {
        // node_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('node_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubUser.prototype, "publicGists", {
        // public_gists - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('public_gists');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubUser.prototype, "publicRepos", {
        // public_repos - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('public_repos');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubUser.prototype, "siteAdmin", {
        // site_admin - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('site_admin');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubUser.prototype, "sshKeys", {
        // ssh_keys - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('ssh_keys');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubUser.prototype, "suspendedAt", {
        // suspended_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('suspended_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubUser.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubUser.prototype, "username", {
        get: function () {
            return this.getStringAttribute('username');
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubUser.prototype, "usernameInput", {
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
    DataGithubUser.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            username: cdktf.stringToTerraform(this._username),
        };
    };
    DataGithubUser.prototype.synthesizeHclAttributes = function () {
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
    DataGithubUser.tfResourceType = "github_user";
    return DataGithubUser;
}(cdktf.TerraformDataSource));
exports.DataGithubUser = DataGithubUser;
