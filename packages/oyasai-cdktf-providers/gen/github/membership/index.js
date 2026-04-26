"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/membership
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
exports.Membership = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/membership github_membership}
*/
var Membership = /** @class */ (function (_super) {
    __extends(Membership, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/membership github_membership} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MembershipConfig
    */
    function Membership(scope, id, config) {
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
        _this._downgradeOnDestroy = config.downgradeOnDestroy;
        _this._id = config.id;
        _this._role = config.role;
        _this._username = config.username;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Membership resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Membership to import
    * @param importFromId The id of the existing Membership that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/membership#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Membership to import is found
    */
    Membership.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_membership", importId: importFromId, provider: provider });
    };
    Object.defineProperty(Membership.prototype, "downgradeOnDestroy", {
        get: function () {
            return this.getBooleanAttribute('downgrade_on_destroy');
        },
        set: function (value) {
            this._downgradeOnDestroy = value;
        },
        enumerable: false,
        configurable: true
    });
    Membership.prototype.resetDowngradeOnDestroy = function () {
        this._downgradeOnDestroy = undefined;
    };
    Object.defineProperty(Membership.prototype, "downgradeOnDestroyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._downgradeOnDestroy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Membership.prototype, "etag", {
        // etag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('etag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Membership.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Membership.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(Membership.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Membership.prototype, "role", {
        get: function () {
            return this.getStringAttribute('role');
        },
        set: function (value) {
            this._role = value;
        },
        enumerable: false,
        configurable: true
    });
    Membership.prototype.resetRole = function () {
        this._role = undefined;
    };
    Object.defineProperty(Membership.prototype, "roleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._role;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Membership.prototype, "username", {
        get: function () {
            return this.getStringAttribute('username');
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Membership.prototype, "usernameInput", {
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
    Membership.prototype.synthesizeAttributes = function () {
        return {
            downgrade_on_destroy: cdktf.booleanToTerraform(this._downgradeOnDestroy),
            id: cdktf.stringToTerraform(this._id),
            role: cdktf.stringToTerraform(this._role),
            username: cdktf.stringToTerraform(this._username),
        };
    };
    Membership.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            downgrade_on_destroy: {
                value: cdktf.booleanToHclTerraform(this._downgradeOnDestroy),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            role: {
                value: cdktf.stringToHclTerraform(this._role),
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
    Membership.tfResourceType = "github_membership";
    return Membership;
}(cdktf.TerraformResource));
exports.Membership = Membership;
