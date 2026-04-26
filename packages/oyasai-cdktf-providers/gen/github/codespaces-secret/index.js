"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/codespaces_secret
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
exports.CodespacesSecret = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/codespaces_secret github_codespaces_secret}
*/
var CodespacesSecret = /** @class */ (function (_super) {
    __extends(CodespacesSecret, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/codespaces_secret github_codespaces_secret} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodespacesSecretConfig
    */
    function CodespacesSecret(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_codespaces_secret',
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
        _this._plaintextValue = config.plaintextValue;
        _this._repository = config.repository;
        _this._secretName = config.secretName;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CodespacesSecret resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CodespacesSecret to import
    * @param importFromId The id of the existing CodespacesSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/codespaces_secret#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CodespacesSecret to import is found
    */
    CodespacesSecret.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_codespaces_secret", importId: importFromId, provider: provider });
    };
    Object.defineProperty(CodespacesSecret.prototype, "createdAt", {
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
    Object.defineProperty(CodespacesSecret.prototype, "encryptedValue", {
        get: function () {
            return this.getStringAttribute('encrypted_value');
        },
        set: function (value) {
            this._encryptedValue = value;
        },
        enumerable: false,
        configurable: true
    });
    CodespacesSecret.prototype.resetEncryptedValue = function () {
        this._encryptedValue = undefined;
    };
    Object.defineProperty(CodespacesSecret.prototype, "encryptedValueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._encryptedValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodespacesSecret.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    CodespacesSecret.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(CodespacesSecret.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodespacesSecret.prototype, "plaintextValue", {
        get: function () {
            return this.getStringAttribute('plaintext_value');
        },
        set: function (value) {
            this._plaintextValue = value;
        },
        enumerable: false,
        configurable: true
    });
    CodespacesSecret.prototype.resetPlaintextValue = function () {
        this._plaintextValue = undefined;
    };
    Object.defineProperty(CodespacesSecret.prototype, "plaintextValueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._plaintextValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodespacesSecret.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodespacesSecret.prototype, "repositoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repository;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodespacesSecret.prototype, "secretName", {
        get: function () {
            return this.getStringAttribute('secret_name');
        },
        set: function (value) {
            this._secretName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodespacesSecret.prototype, "secretNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodespacesSecret.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CodespacesSecret.prototype.synthesizeAttributes = function () {
        return {
            encrypted_value: cdktf.stringToTerraform(this._encryptedValue),
            id: cdktf.stringToTerraform(this._id),
            plaintext_value: cdktf.stringToTerraform(this._plaintextValue),
            repository: cdktf.stringToTerraform(this._repository),
            secret_name: cdktf.stringToTerraform(this._secretName),
        };
    };
    CodespacesSecret.prototype.synthesizeHclAttributes = function () {
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
    CodespacesSecret.tfResourceType = "github_codespaces_secret";
    return CodespacesSecret;
}(cdktf.TerraformResource));
exports.CodespacesSecret = CodespacesSecret;
