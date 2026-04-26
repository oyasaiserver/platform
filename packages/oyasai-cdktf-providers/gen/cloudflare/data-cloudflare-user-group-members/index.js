"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_group_members
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
exports.DataCloudflareUserGroupMembers = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_group_members cloudflare_user_group_members}
*/
var DataCloudflareUserGroupMembers = /** @class */ (function (_super) {
    __extends(DataCloudflareUserGroupMembers, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_group_members cloudflare_user_group_members} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareUserGroupMembersConfig
    */
    function DataCloudflareUserGroupMembers(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_user_group_members',
            terraformGeneratorMetadata: {
                providerName: 'cloudflare',
                providerVersion: '5.19.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        }) || this;
        _this._accountId = config.accountId;
        _this._direction = config.direction;
        _this._fuzzyEmail = config.fuzzyEmail;
        _this._userGroupId = config.userGroupId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareUserGroupMembers resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareUserGroupMembers to import
    * @param importFromId The id of the existing DataCloudflareUserGroupMembers that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_group_members#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareUserGroupMembers to import is found
    */
    DataCloudflareUserGroupMembers.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_user_group_members", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareUserGroupMembers.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupMembers.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupMembers.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareUserGroupMembers.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(DataCloudflareUserGroupMembers.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupMembers.prototype, "email", {
        // email - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupMembers.prototype, "fuzzyEmail", {
        get: function () {
            return this.getStringAttribute('fuzzy_email');
        },
        set: function (value) {
            this._fuzzyEmail = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareUserGroupMembers.prototype.resetFuzzyEmail = function () {
        this._fuzzyEmail = undefined;
    };
    Object.defineProperty(DataCloudflareUserGroupMembers.prototype, "fuzzyEmailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fuzzyEmail;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupMembers.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupMembers.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupMembers.prototype, "userGroupId", {
        get: function () {
            return this.getStringAttribute('user_group_id');
        },
        set: function (value) {
            this._userGroupId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserGroupMembers.prototype, "userGroupIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userGroupId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareUserGroupMembers.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            direction: cdktf.stringToTerraform(this._direction),
            fuzzy_email: cdktf.stringToTerraform(this._fuzzyEmail),
            user_group_id: cdktf.stringToTerraform(this._userGroupId),
        };
    };
    DataCloudflareUserGroupMembers.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            direction: {
                value: cdktf.stringToHclTerraform(this._direction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            fuzzy_email: {
                value: cdktf.stringToHclTerraform(this._fuzzyEmail),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            user_group_id: {
                value: cdktf.stringToHclTerraform(this._userGroupId),
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
    DataCloudflareUserGroupMembers.tfResourceType = "cloudflare_user_group_members";
    return DataCloudflareUserGroupMembers;
}(cdktf.TerraformDataSource));
exports.DataCloudflareUserGroupMembers = DataCloudflareUserGroupMembers;
