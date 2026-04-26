"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/kms_key
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
exports.KmsKey = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/kms_key infisical_kms_key}
*/
var KmsKey = /** @class */ (function (_super) {
    __extends(KmsKey, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/kms_key infisical_kms_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KmsKeyConfig
    */
    function KmsKey(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_kms_key',
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
        _this._encryptionAlgorithm = config.encryptionAlgorithm;
        _this._isDisabled = config.isDisabled;
        _this._keyUsage = config.keyUsage;
        _this._name = config.name;
        _this._projectId = config.projectId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a KmsKey resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the KmsKey to import
    * @param importFromId The id of the existing KmsKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/kms_key#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the KmsKey to import is found
    */
    KmsKey.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_kms_key", importId: importFromId, provider: provider });
    };
    Object.defineProperty(KmsKey.prototype, "createdAt", {
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
    Object.defineProperty(KmsKey.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsKey.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(KmsKey.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsKey.prototype, "encryptionAlgorithm", {
        get: function () {
            return this.getStringAttribute('encryption_algorithm');
        },
        set: function (value) {
            this._encryptionAlgorithm = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsKey.prototype.resetEncryptionAlgorithm = function () {
        this._encryptionAlgorithm = undefined;
    };
    Object.defineProperty(KmsKey.prototype, "encryptionAlgorithmInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._encryptionAlgorithm;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsKey.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsKey.prototype, "isDisabled", {
        get: function () {
            return this.getBooleanAttribute('is_disabled');
        },
        set: function (value) {
            this._isDisabled = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsKey.prototype.resetIsDisabled = function () {
        this._isDisabled = undefined;
    };
    Object.defineProperty(KmsKey.prototype, "isDisabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isDisabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsKey.prototype, "keyUsage", {
        get: function () {
            return this.getStringAttribute('key_usage');
        },
        set: function (value) {
            this._keyUsage = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsKey.prototype.resetKeyUsage = function () {
        this._keyUsage = undefined;
    };
    Object.defineProperty(KmsKey.prototype, "keyUsageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyUsage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsKey.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsKey.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsKey.prototype, "orgId", {
        // org_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('org_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsKey.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsKey.prototype, "projectIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsKey.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsKey.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    KmsKey.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            encryption_algorithm: cdktf.stringToTerraform(this._encryptionAlgorithm),
            is_disabled: cdktf.booleanToTerraform(this._isDisabled),
            key_usage: cdktf.stringToTerraform(this._keyUsage),
            name: cdktf.stringToTerraform(this._name),
            project_id: cdktf.stringToTerraform(this._projectId),
        };
    };
    KmsKey.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            encryption_algorithm: {
                value: cdktf.stringToHclTerraform(this._encryptionAlgorithm),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            is_disabled: {
                value: cdktf.booleanToHclTerraform(this._isDisabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            key_usage: {
                value: cdktf.stringToHclTerraform(this._keyUsage),
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
            project_id: {
                value: cdktf.stringToHclTerraform(this._projectId),
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
    KmsKey.tfResourceType = "infisical_kms_key";
    return KmsKey;
}(cdktf.TerraformResource));
exports.KmsKey = KmsKey;
