"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/dependabot_organization_secret
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
exports.DependabotOrganizationSecret = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/dependabot_organization_secret github_dependabot_organization_secret}
*/
var DependabotOrganizationSecret = /** @class */ (function (_super) {
    __extends(DependabotOrganizationSecret, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/dependabot_organization_secret github_dependabot_organization_secret} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DependabotOrganizationSecretConfig
    */
    function DependabotOrganizationSecret(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_dependabot_organization_secret',
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
        _this._secretName = config.secretName;
        _this._selectedRepositoryIds = config.selectedRepositoryIds;
        _this._value = config.value;
        _this._valueEncrypted = config.valueEncrypted;
        _this._visibility = config.visibility;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DependabotOrganizationSecret resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DependabotOrganizationSecret to import
    * @param importFromId The id of the existing DependabotOrganizationSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/dependabot_organization_secret#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DependabotOrganizationSecret to import is found
    */
    DependabotOrganizationSecret.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_dependabot_organization_secret", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DependabotOrganizationSecret.prototype, "createdAt", {
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
    Object.defineProperty(DependabotOrganizationSecret.prototype, "encryptedValue", {
        get: function () {
            return this.getStringAttribute('encrypted_value');
        },
        set: function (value) {
            this._encryptedValue = value;
        },
        enumerable: false,
        configurable: true
    });
    DependabotOrganizationSecret.prototype.resetEncryptedValue = function () {
        this._encryptedValue = undefined;
    };
    Object.defineProperty(DependabotOrganizationSecret.prototype, "encryptedValueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._encryptedValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DependabotOrganizationSecret.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DependabotOrganizationSecret.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DependabotOrganizationSecret.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DependabotOrganizationSecret.prototype, "keyId", {
        get: function () {
            return this.getStringAttribute('key_id');
        },
        set: function (value) {
            this._keyId = value;
        },
        enumerable: false,
        configurable: true
    });
    DependabotOrganizationSecret.prototype.resetKeyId = function () {
        this._keyId = undefined;
    };
    Object.defineProperty(DependabotOrganizationSecret.prototype, "keyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DependabotOrganizationSecret.prototype, "plaintextValue", {
        get: function () {
            return this.getStringAttribute('plaintext_value');
        },
        set: function (value) {
            this._plaintextValue = value;
        },
        enumerable: false,
        configurable: true
    });
    DependabotOrganizationSecret.prototype.resetPlaintextValue = function () {
        this._plaintextValue = undefined;
    };
    Object.defineProperty(DependabotOrganizationSecret.prototype, "plaintextValueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._plaintextValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DependabotOrganizationSecret.prototype, "remoteUpdatedAt", {
        // remote_updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('remote_updated_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DependabotOrganizationSecret.prototype, "secretName", {
        get: function () {
            return this.getStringAttribute('secret_name');
        },
        set: function (value) {
            this._secretName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DependabotOrganizationSecret.prototype, "secretNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DependabotOrganizationSecret.prototype, "selectedRepositoryIds", {
        get: function () {
            return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('selected_repository_ids')));
        },
        set: function (value) {
            this._selectedRepositoryIds = value;
        },
        enumerable: false,
        configurable: true
    });
    DependabotOrganizationSecret.prototype.resetSelectedRepositoryIds = function () {
        this._selectedRepositoryIds = undefined;
    };
    Object.defineProperty(DependabotOrganizationSecret.prototype, "selectedRepositoryIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._selectedRepositoryIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DependabotOrganizationSecret.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DependabotOrganizationSecret.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    DependabotOrganizationSecret.prototype.resetValue = function () {
        this._value = undefined;
    };
    Object.defineProperty(DependabotOrganizationSecret.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DependabotOrganizationSecret.prototype, "valueEncrypted", {
        get: function () {
            return this.getStringAttribute('value_encrypted');
        },
        set: function (value) {
            this._valueEncrypted = value;
        },
        enumerable: false,
        configurable: true
    });
    DependabotOrganizationSecret.prototype.resetValueEncrypted = function () {
        this._valueEncrypted = undefined;
    };
    Object.defineProperty(DependabotOrganizationSecret.prototype, "valueEncryptedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._valueEncrypted;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DependabotOrganizationSecret.prototype, "visibility", {
        get: function () {
            return this.getStringAttribute('visibility');
        },
        set: function (value) {
            this._visibility = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DependabotOrganizationSecret.prototype, "visibilityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._visibility;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DependabotOrganizationSecret.prototype.synthesizeAttributes = function () {
        return {
            encrypted_value: cdktf.stringToTerraform(this._encryptedValue),
            id: cdktf.stringToTerraform(this._id),
            key_id: cdktf.stringToTerraform(this._keyId),
            plaintext_value: cdktf.stringToTerraform(this._plaintextValue),
            secret_name: cdktf.stringToTerraform(this._secretName),
            selected_repository_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._selectedRepositoryIds),
            value: cdktf.stringToTerraform(this._value),
            value_encrypted: cdktf.stringToTerraform(this._valueEncrypted),
            visibility: cdktf.stringToTerraform(this._visibility),
        };
    };
    DependabotOrganizationSecret.prototype.synthesizeHclAttributes = function () {
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
            secret_name: {
                value: cdktf.stringToHclTerraform(this._secretName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            selected_repository_ids: {
                value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._selectedRepositoryIds),
                isBlock: false,
                type: "set",
                storageClassType: "numberList",
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
            visibility: {
                value: cdktf.stringToHclTerraform(this._visibility),
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
    DependabotOrganizationSecret.tfResourceType = "github_dependabot_organization_secret";
    return DependabotOrganizationSecret;
}(cdktf.TerraformResource));
exports.DependabotOrganizationSecret = DependabotOrganizationSecret;
