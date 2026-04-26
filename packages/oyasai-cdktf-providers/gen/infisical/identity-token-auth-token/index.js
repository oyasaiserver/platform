"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_token_auth_token
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
exports.IdentityTokenAuthToken = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_token_auth_token infisical_identity_token_auth_token}
*/
var IdentityTokenAuthToken = /** @class */ (function (_super) {
    __extends(IdentityTokenAuthToken, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_token_auth_token infisical_identity_token_auth_token} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IdentityTokenAuthTokenConfig
    */
    function IdentityTokenAuthToken(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_identity_token_auth_token',
            terraformGeneratorMetadata: {
                providerName: 'infisical',
                providerVersion: '0.16.18'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        }) || this;
        _this._identityId = config.identityId;
        _this._name = config.name;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a IdentityTokenAuthToken resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IdentityTokenAuthToken to import
    * @param importFromId The id of the existing IdentityTokenAuthToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_token_auth_token#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IdentityTokenAuthToken to import is found
    */
    IdentityTokenAuthToken.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_identity_token_auth_token", importId: importFromId, provider: provider });
    };
    Object.defineProperty(IdentityTokenAuthToken.prototype, "createdAt", {
        // ==========
        // ATTRIBUTES
        // ==========
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityTokenAuthToken.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityTokenAuthToken.prototype, "identityId", {
        get: function () {
            return this.getStringAttribute('identity_id');
        },
        set: function (value) {
            this._identityId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityTokenAuthToken.prototype, "identityIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityTokenAuthToken.prototype, "isRevoked", {
        // is_revoked - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_revoked');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityTokenAuthToken.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityTokenAuthToken.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(IdentityTokenAuthToken.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityTokenAuthToken.prototype, "numberOfUses", {
        // number_of_uses - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('number_of_uses');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityTokenAuthToken.prototype, "numberOfUsesLimit", {
        // number_of_uses_limit - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('number_of_uses_limit');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityTokenAuthToken.prototype, "token", {
        // token - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('token');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityTokenAuthToken.prototype, "ttl", {
        // ttl - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('ttl');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    IdentityTokenAuthToken.prototype.synthesizeAttributes = function () {
        return {
            identity_id: cdktf.stringToTerraform(this._identityId),
            name: cdktf.stringToTerraform(this._name),
        };
    };
    IdentityTokenAuthToken.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            identity_id: {
                value: cdktf.stringToHclTerraform(this._identityId),
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
    IdentityTokenAuthToken.tfResourceType = "infisical_identity_token_auth_token";
    return IdentityTokenAuthToken;
}(cdktf.TerraformResource));
exports.IdentityTokenAuthToken = IdentityTokenAuthToken;
