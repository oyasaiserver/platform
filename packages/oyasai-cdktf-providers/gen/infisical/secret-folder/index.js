"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_folder
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
exports.SecretFolder = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_folder infisical_secret_folder}
*/
var SecretFolder = /** @class */ (function (_super) {
    __extends(SecretFolder, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_folder infisical_secret_folder} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretFolderConfig
    */
    function SecretFolder(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_secret_folder',
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
        _this._forceDelete = config.forceDelete;
        _this._name = config.name;
        _this._projectId = config.projectId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a SecretFolder resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretFolder to import
    * @param importFromId The id of the existing SecretFolder that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_folder#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretFolder to import is found
    */
    SecretFolder.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_folder", importId: importFromId, provider: provider });
    };
    Object.defineProperty(SecretFolder.prototype, "environmentId", {
        // ==========
        // ATTRIBUTES
        // ==========
        // environment_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('environment_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretFolder.prototype, "environmentSlug", {
        get: function () {
            return this.getStringAttribute('environment_slug');
        },
        set: function (value) {
            this._environmentSlug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretFolder.prototype, "environmentSlugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environmentSlug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretFolder.prototype, "folderPath", {
        get: function () {
            return this.getStringAttribute('folder_path');
        },
        set: function (value) {
            this._folderPath = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretFolder.prototype, "folderPathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._folderPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretFolder.prototype, "forceDelete", {
        get: function () {
            return this.getBooleanAttribute('force_delete');
        },
        set: function (value) {
            this._forceDelete = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretFolder.prototype.resetForceDelete = function () {
        this._forceDelete = undefined;
    };
    Object.defineProperty(SecretFolder.prototype, "forceDeleteInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._forceDelete;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretFolder.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretFolder.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretFolder.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretFolder.prototype, "path", {
        // path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('path');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretFolder.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretFolder.prototype, "projectIdInput", {
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
    SecretFolder.prototype.synthesizeAttributes = function () {
        return {
            environment_slug: cdktf.stringToTerraform(this._environmentSlug),
            folder_path: cdktf.stringToTerraform(this._folderPath),
            force_delete: cdktf.booleanToTerraform(this._forceDelete),
            name: cdktf.stringToTerraform(this._name),
            project_id: cdktf.stringToTerraform(this._projectId),
        };
    };
    SecretFolder.prototype.synthesizeHclAttributes = function () {
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
            force_delete: {
                value: cdktf.booleanToHclTerraform(this._forceDelete),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
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
    SecretFolder.tfResourceType = "infisical_secret_folder";
    return SecretFolder;
}(cdktf.TerraformResource));
exports.SecretFolder = SecretFolder;
