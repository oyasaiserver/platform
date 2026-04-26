"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/users
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
exports.DataGithubUsers = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/users github_users}
*/
var DataGithubUsers = /** @class */ (function (_super) {
    __extends(DataGithubUsers, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/users github_users} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubUsersConfig
    */
    function DataGithubUsers(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_users',
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
        _this._usernames = config.usernames;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubUsers resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubUsers to import
    * @param importFromId The id of the existing DataGithubUsers that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/users#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubUsers to import is found
    */
    DataGithubUsers.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_users", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataGithubUsers.prototype, "emails", {
        // ==========
        // ATTRIBUTES
        // ==========
        // emails - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('emails');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubUsers.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubUsers.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataGithubUsers.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubUsers.prototype, "logins", {
        // logins - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('logins');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubUsers.prototype, "nodeIds", {
        // node_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('node_ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubUsers.prototype, "unknownLogins", {
        // unknown_logins - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('unknown_logins');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubUsers.prototype, "usernames", {
        get: function () {
            return this.getListAttribute('usernames');
        },
        set: function (value) {
            this._usernames = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubUsers.prototype, "usernamesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._usernames;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataGithubUsers.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            usernames: cdktf.listMapper(cdktf.stringToTerraform, false)(this._usernames),
        };
    };
    DataGithubUsers.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            usernames: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._usernames),
                isBlock: false,
                type: "list",
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
    DataGithubUsers.tfResourceType = "github_users";
    return DataGithubUsers;
}(cdktf.TerraformDataSource));
exports.DataGithubUsers = DataGithubUsers;
