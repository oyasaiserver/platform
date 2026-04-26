"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/dependabot_secret
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
exports.DependabotSecret = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/dependabot_secret github_dependabot_secret}
*/
var DependabotSecret = /** @class */ (function (_super) {
    __extends(DependabotSecret, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/dependabot_secret github_dependabot_secret} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DependabotSecretConfig
    */
    function DependabotSecret(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_dependabot_secret',
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
        _this._encryptedValue = config.encryptedValue;
        _this._id = config.id;
        _this._keyId = config.keyId;
        _this._plaintextValue = config.plaintextValue;
        _this._repository = config.repository;
        _this._secretName = config.secretName;
        _this._value = config.value;
        _this._valueEncrypted = config.valueEncrypted;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DependabotSecret resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DependabotSecret to import
    * @param importFromId The id of the existing DependabotSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/dependabot_secret#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DependabotSecret to import is found
    */
    DependabotSecret.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_dependabot_secret", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DependabotSecret.prototype, "createdAt", {
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
    Object.defineProperty(DependabotSecret.prototype, "encryptedValue", {
        get: function () {
            return this.getStringAttribute('encrypted_value');
        },
        set: function (value) {
            this._encryptedValue = value;
        },
        enumerable: false,
        configurable: true
    });
    DependabotSecret.prototype.resetEncryptedValue = function () {
        this._encryptedValue = undefined;
    };
    Object.defineProperty(DependabotSecret.prototype, "encryptedValueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._encryptedValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DependabotSecret.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DependabotSecret.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DependabotSecret.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DependabotSecret.prototype, "keyId", {
        get: function () {
            return this.getStringAttribute('key_id');
        },
        set: function (value) {
            this._keyId = value;
        },
        enumerable: false,
        configurable: true
    });
    DependabotSecret.prototype.resetKeyId = function () {
        this._keyId = undefined;
    };
    Object.defineProperty(DependabotSecret.prototype, "keyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DependabotSecret.prototype, "plaintextValue", {
        get: function () {
            return this.getStringAttribute('plaintext_value');
        },
        set: function (value) {
            this._plaintextValue = value;
        },
        enumerable: false,
        configurable: true
    });
    DependabotSecret.prototype.resetPlaintextValue = function () {
        this._plaintextValue = undefined;
    };
    Object.defineProperty(DependabotSecret.prototype, "plaintextValueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._plaintextValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DependabotSecret.prototype, "remoteUpdatedAt", {
        // remote_updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('remote_updated_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DependabotSecret.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DependabotSecret.prototype, "repositoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repository;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DependabotSecret.prototype, "repositoryId", {
        // repository_id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('repository_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DependabotSecret.prototype, "secretName", {
        get: function () {
            return this.getStringAttribute('secret_name');
        },
        set: function (value) {
            this._secretName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DependabotSecret.prototype, "secretNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DependabotSecret.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DependabotSecret.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    DependabotSecret.prototype.resetValue = function () {
        this._value = undefined;
    };
    Object.defineProperty(DependabotSecret.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DependabotSecret.prototype, "valueEncrypted", {
        get: function () {
            return this.getStringAttribute('value_encrypted');
        },
        set: function (value) {
            this._valueEncrypted = value;
        },
        enumerable: false,
        configurable: true
    });
    DependabotSecret.prototype.resetValueEncrypted = function () {
        this._valueEncrypted = undefined;
    };
    Object.defineProperty(DependabotSecret.prototype, "valueEncryptedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._valueEncrypted;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DependabotSecret.prototype.synthesizeAttributes = function () {
        return {
            encrypted_value: cdktf.stringToTerraform(this._encryptedValue),
            id: cdktf.stringToTerraform(this._id),
            key_id: cdktf.stringToTerraform(this._keyId),
            plaintext_value: cdktf.stringToTerraform(this._plaintextValue),
            repository: cdktf.stringToTerraform(this._repository),
            secret_name: cdktf.stringToTerraform(this._secretName),
            value: cdktf.stringToTerraform(this._value),
            value_encrypted: cdktf.stringToTerraform(this._valueEncrypted),
        };
    };
    DependabotSecret.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            encrypted_value: {
                value: cdktf.stringToHclTerraform(this._encryptedValue),
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
            key_id: {
                value: cdktf.stringToHclTerraform(this._keyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            plaintext_value: {
                value: cdktf.stringToHclTerraform(this._plaintextValue),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            repository: {
                value: cdktf.stringToHclTerraform(this._repository),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            secret_name: {
                value: cdktf.stringToHclTerraform(this._secretName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            value: {
                value: cdktf.stringToHclTerraform(this._value),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            value_encrypted: {
                value: cdktf.stringToHclTerraform(this._valueEncrypted),
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
    DependabotSecret.tfResourceType = "github_dependabot_secret";
    return DependabotSecret;
}(cdktf.TerraformResource));
exports.DependabotSecret = DependabotSecret;
