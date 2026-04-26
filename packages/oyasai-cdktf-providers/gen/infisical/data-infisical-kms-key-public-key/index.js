"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/kms_key_public_key
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
exports.DataInfisicalKmsKeyPublicKey = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/kms_key_public_key infisical_kms_key_public_key}
*/
var DataInfisicalKmsKeyPublicKey = /** @class */ (function (_super) {
    __extends(DataInfisicalKmsKeyPublicKey, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/kms_key_public_key infisical_kms_key_public_key} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataInfisicalKmsKeyPublicKeyConfig
    */
    function DataInfisicalKmsKeyPublicKey(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_kms_key_public_key',
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
        _this._keyId = config.keyId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataInfisicalKmsKeyPublicKey resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataInfisicalKmsKeyPublicKey to import
    * @param importFromId The id of the existing DataInfisicalKmsKeyPublicKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/kms_key_public_key#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataInfisicalKmsKeyPublicKey to import is found
    */
    DataInfisicalKmsKeyPublicKey.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_kms_key_public_key", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataInfisicalKmsKeyPublicKey.prototype, "encryptionAlgorithm", {
        // ==========
        // ATTRIBUTES
        // ==========
        // encryption_algorithm - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('encryption_algorithm');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalKmsKeyPublicKey.prototype, "keyId", {
        get: function () {
            return this.getStringAttribute('key_id');
        },
        set: function (value) {
            this._keyId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalKmsKeyPublicKey.prototype, "keyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalKmsKeyPublicKey.prototype, "keyUsage", {
        // key_usage - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key_usage');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalKmsKeyPublicKey.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalKmsKeyPublicKey.prototype, "publicKey", {
        // public_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('public_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalKmsKeyPublicKey.prototype, "signingAlgorithms", {
        // signing_algorithms - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('signing_algorithms');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataInfisicalKmsKeyPublicKey.prototype.synthesizeAttributes = function () {
        return {
            key_id: cdktf.stringToTerraform(this._keyId),
        };
    };
    DataInfisicalKmsKeyPublicKey.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            key_id: {
                value: cdktf.stringToHclTerraform(this._keyId),
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
    DataInfisicalKmsKeyPublicKey.tfResourceType = "infisical_kms_key_public_key";
    return DataInfisicalKmsKeyPublicKey;
}(cdktf.TerraformDataSource));
exports.DataInfisicalKmsKeyPublicKey = DataInfisicalKmsKeyPublicKey;
