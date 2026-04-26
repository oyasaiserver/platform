"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secrets
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
exports.DataInfisicalSecrets = exports.DataInfisicalSecretsSecretsMap = exports.DataInfisicalSecretsSecretsOutputReference = void 0;
exports.dataInfisicalSecretsSecretsToTerraform = dataInfisicalSecretsSecretsToTerraform;
exports.dataInfisicalSecretsSecretsToHclTerraform = dataInfisicalSecretsSecretsToHclTerraform;
var cdktf = require("cdktf");
function dataInfisicalSecretsSecretsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataInfisicalSecretsSecretsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataInfisicalSecretsSecretsOutputReference = /** @class */ (function (_super) {
    __extends(DataInfisicalSecretsSecretsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataInfisicalSecretsSecretsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataInfisicalSecretsSecretsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalSecretsSecretsOutputReference.prototype, "comment", {
        // comment - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('comment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalSecretsSecretsOutputReference.prototype, "secretType", {
        // secret_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('secret_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalSecretsSecretsOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataInfisicalSecretsSecretsOutputReference;
}(cdktf.ComplexObject));
exports.DataInfisicalSecretsSecretsOutputReference = DataInfisicalSecretsSecretsOutputReference;
var DataInfisicalSecretsSecretsMap = /** @class */ (function (_super) {
    __extends(DataInfisicalSecretsSecretsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataInfisicalSecretsSecretsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataInfisicalSecretsSecretsMap.prototype.get = function (key) {
        return new DataInfisicalSecretsSecretsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataInfisicalSecretsSecretsMap;
}(cdktf.ComplexMap));
exports.DataInfisicalSecretsSecretsMap = DataInfisicalSecretsSecretsMap;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secrets infisical_secrets}
*/
var DataInfisicalSecrets = /** @class */ (function (_super) {
    __extends(DataInfisicalSecrets, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secrets infisical_secrets} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataInfisicalSecretsConfig
    */
    function DataInfisicalSecrets(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_secrets',
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
        // secrets - computed: true, optional: false, required: false
        _this._secrets = new DataInfisicalSecretsSecretsMap(_this, "secrets");
        _this._envSlug = config.envSlug;
        _this._folderPath = config.folderPath;
        _this._workspaceId = config.workspaceId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataInfisicalSecrets resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataInfisicalSecrets to import
    * @param importFromId The id of the existing DataInfisicalSecrets that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secrets#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataInfisicalSecrets to import is found
    */
    DataInfisicalSecrets.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secrets", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataInfisicalSecrets.prototype, "envSlug", {
        get: function () {
            return this.getStringAttribute('env_slug');
        },
        set: function (value) {
            this._envSlug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalSecrets.prototype, "envSlugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._envSlug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalSecrets.prototype, "folderPath", {
        get: function () {
            return this.getStringAttribute('folder_path');
        },
        set: function (value) {
            this._folderPath = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalSecrets.prototype, "folderPathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._folderPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalSecrets.prototype, "secrets", {
        get: function () {
            return this._secrets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalSecrets.prototype, "workspaceId", {
        get: function () {
            return this.getStringAttribute('workspace_id');
        },
        set: function (value) {
            this._workspaceId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataInfisicalSecrets.prototype.resetWorkspaceId = function () {
        this._workspaceId = undefined;
    };
    Object.defineProperty(DataInfisicalSecrets.prototype, "workspaceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._workspaceId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataInfisicalSecrets.prototype.synthesizeAttributes = function () {
        return {
            env_slug: cdktf.stringToTerraform(this._envSlug),
            folder_path: cdktf.stringToTerraform(this._folderPath),
            workspace_id: cdktf.stringToTerraform(this._workspaceId),
        };
    };
    DataInfisicalSecrets.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            env_slug: {
                value: cdktf.stringToHclTerraform(this._envSlug),
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
            workspace_id: {
                value: cdktf.stringToHclTerraform(this._workspaceId),
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
    DataInfisicalSecrets.tfResourceType = "infisical_secrets";
    return DataInfisicalSecrets;
}(cdktf.TerraformDataSource));
exports.DataInfisicalSecrets = DataInfisicalSecrets;
