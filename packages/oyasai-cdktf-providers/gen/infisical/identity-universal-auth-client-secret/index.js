"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_universal_auth_client_secret
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
exports.IdentityUniversalAuthClientSecret = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_universal_auth_client_secret infisical_identity_universal_auth_client_secret}
*/
var IdentityUniversalAuthClientSecret = /** @class */ (function (_super) {
    __extends(IdentityUniversalAuthClientSecret, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_universal_auth_client_secret infisical_identity_universal_auth_client_secret} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IdentityUniversalAuthClientSecretConfig
    */
    function IdentityUniversalAuthClientSecret(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_identity_universal_auth_client_secret',
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
        _this._description = config.description;
        _this._identityId = config.identityId;
        _this._numberOfUsesLimit = config.numberOfUsesLimit;
        _this._ttl = config.ttl;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a IdentityUniversalAuthClientSecret resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IdentityUniversalAuthClientSecret to import
    * @param importFromId The id of the existing IdentityUniversalAuthClientSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_universal_auth_client_secret#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IdentityUniversalAuthClientSecret to import is found
    */
    IdentityUniversalAuthClientSecret.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_identity_universal_auth_client_secret", importId: importFromId, provider: provider });
    };
    Object.defineProperty(IdentityUniversalAuthClientSecret.prototype, "clientId", {
        // ==========
        // ATTRIBUTES
        // ==========
        // client_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('client_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityUniversalAuthClientSecret.prototype, "clientSecret", {
        // client_secret - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('client_secret');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityUniversalAuthClientSecret.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityUniversalAuthClientSecret.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityUniversalAuthClientSecret.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(IdentityUniversalAuthClientSecret.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityUniversalAuthClientSecret.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityUniversalAuthClientSecret.prototype, "identityId", {
        get: function () {
            return this.getStringAttribute('identity_id');
        },
        set: function (value) {
            this._identityId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityUniversalAuthClientSecret.prototype, "identityIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityUniversalAuthClientSecret.prototype, "isRevoked", {
        // is_revoked - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_revoked');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityUniversalAuthClientSecret.prototype, "numberOfUses", {
        // number_of_uses - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('number_of_uses');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityUniversalAuthClientSecret.prototype, "numberOfUsesLimit", {
        get: function () {
            return this.getNumberAttribute('number_of_uses_limit');
        },
        set: function (value) {
            this._numberOfUsesLimit = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityUniversalAuthClientSecret.prototype.resetNumberOfUsesLimit = function () {
        this._numberOfUsesLimit = undefined;
    };
    Object.defineProperty(IdentityUniversalAuthClientSecret.prototype, "numberOfUsesLimitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._numberOfUsesLimit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityUniversalAuthClientSecret.prototype, "ttl", {
        get: function () {
            return this.getNumberAttribute('ttl');
        },
        set: function (value) {
            this._ttl = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityUniversalAuthClientSecret.prototype.resetTtl = function () {
        this._ttl = undefined;
    };
    Object.defineProperty(IdentityUniversalAuthClientSecret.prototype, "ttlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ttl;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    IdentityUniversalAuthClientSecret.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            identity_id: cdktf.stringToTerraform(this._identityId),
            number_of_uses_limit: cdktf.numberToTerraform(this._numberOfUsesLimit),
            ttl: cdktf.numberToTerraform(this._ttl),
        };
    };
    IdentityUniversalAuthClientSecret.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            identity_id: {
                value: cdktf.stringToHclTerraform(this._identityId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            number_of_uses_limit: {
                value: cdktf.numberToHclTerraform(this._numberOfUsesLimit),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            ttl: {
                value: cdktf.numberToHclTerraform(this._ttl),
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
    IdentityUniversalAuthClientSecret.tfResourceType = "infisical_identity_universal_auth_client_secret";
    return IdentityUniversalAuthClientSecret;
}(cdktf.TerraformResource));
exports.IdentityUniversalAuthClientSecret = IdentityUniversalAuthClientSecret;
