"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/user_gpg_key
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
exports.UserGpgKey = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/user_gpg_key github_user_gpg_key}
*/
var UserGpgKey = /** @class */ (function (_super) {
    __extends(UserGpgKey, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/user_gpg_key github_user_gpg_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options UserGpgKeyConfig
    */
    function UserGpgKey(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_user_gpg_key',
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
        _this._armoredPublicKey = config.armoredPublicKey;
        _this._id = config.id;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a UserGpgKey resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the UserGpgKey to import
    * @param importFromId The id of the existing UserGpgKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/user_gpg_key#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the UserGpgKey to import is found
    */
    UserGpgKey.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_user_gpg_key", importId: importFromId, provider: provider });
    };
    Object.defineProperty(UserGpgKey.prototype, "armoredPublicKey", {
        get: function () {
            return this.getStringAttribute('armored_public_key');
        },
        set: function (value) {
            this._armoredPublicKey = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserGpgKey.prototype, "armoredPublicKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._armoredPublicKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserGpgKey.prototype, "etag", {
        // etag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('etag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserGpgKey.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    UserGpgKey.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(UserGpgKey.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserGpgKey.prototype, "keyId", {
        // key_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key_id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    UserGpgKey.prototype.synthesizeAttributes = function () {
        return {
            armored_public_key: cdktf.stringToTerraform(this._armoredPublicKey),
            id: cdktf.stringToTerraform(this._id),
        };
    };
    UserGpgKey.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            armored_public_key: {
                value: cdktf.stringToHclTerraform(this._armoredPublicKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
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
    UserGpgKey.tfResourceType = "github_user_gpg_key";
    return UserGpgKey;
}(cdktf.TerraformResource));
exports.UserGpgKey = UserGpgKey;
