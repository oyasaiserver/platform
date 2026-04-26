"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_import
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
exports.SecretImport = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_import infisical_secret_import}
*/
var SecretImport = /** @class */ (function (_super) {
    __extends(SecretImport, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_import infisical_secret_import} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretImportConfig
    */
    function SecretImport(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_secret_import',
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
        _this._environmentSlug = config.environmentSlug;
        _this._folderPath = config.folderPath;
        _this._importEnvironmentSlug = config.importEnvironmentSlug;
        _this._importFolderPath = config.importFolderPath;
        _this._isReplication = config.isReplication;
        _this._projectId = config.projectId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a SecretImport resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretImport to import
    * @param importFromId The id of the existing SecretImport that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_import#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretImport to import is found
    */
    SecretImport.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_import", importId: importFromId, provider: provider });
    };
    Object.defineProperty(SecretImport.prototype, "environmentSlug", {
        get: function () {
            return this.getStringAttribute('environment_slug');
        },
        set: function (value) {
            this._environmentSlug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretImport.prototype, "environmentSlugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environmentSlug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretImport.prototype, "folderPath", {
        get: function () {
            return this.getStringAttribute('folder_path');
        },
        set: function (value) {
            this._folderPath = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretImport.prototype, "folderPathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._folderPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretImport.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretImport.prototype, "importEnvironmentSlug", {
        get: function () {
            return this.getStringAttribute('import_environment_slug');
        },
        set: function (value) {
            this._importEnvironmentSlug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretImport.prototype, "importEnvironmentSlugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._importEnvironmentSlug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretImport.prototype, "importFolderPath", {
        get: function () {
            return this.getStringAttribute('import_folder_path');
        },
        set: function (value) {
            this._importFolderPath = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretImport.prototype, "importFolderPathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._importFolderPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretImport.prototype, "isReplication", {
        get: function () {
            return this.getBooleanAttribute('is_replication');
        },
        set: function (value) {
            this._isReplication = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretImport.prototype, "isReplicationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isReplication;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretImport.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretImport.prototype, "projectIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SecretImport.prototype.synthesizeAttributes = function () {
        return {
            environment_slug: cdktf.stringToTerraform(this._environmentSlug),
            folder_path: cdktf.stringToTerraform(this._folderPath),
            import_environment_slug: cdktf.stringToTerraform(this._importEnvironmentSlug),
            import_folder_path: cdktf.stringToTerraform(this._importFolderPath),
            is_replication: cdktf.booleanToTerraform(this._isReplication),
            project_id: cdktf.stringToTerraform(this._projectId),
        };
    };
    SecretImport.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            environment_slug: {
                value: cdktf.stringToHclTerraform(this._environmentSlug),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            folder_path: {
                value: cdktf.stringToHclTerraform(this._folderPath),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            import_environment_slug: {
                value: cdktf.stringToHclTerraform(this._importEnvironmentSlug),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            import_folder_path: {
                value: cdktf.stringToHclTerraform(this._importFolderPath),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            is_replication: {
                value: cdktf.booleanToHclTerraform(this._isReplication),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
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
    SecretImport.tfResourceType = "infisical_secret_import";
    return SecretImport;
}(cdktf.TerraformResource));
exports.SecretImport = SecretImport;
