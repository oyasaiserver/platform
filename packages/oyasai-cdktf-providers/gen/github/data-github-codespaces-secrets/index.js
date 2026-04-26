"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/codespaces_secrets
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
exports.DataGithubCodespacesSecrets = exports.DataGithubCodespacesSecretsSecretsList = exports.DataGithubCodespacesSecretsSecretsOutputReference = void 0;
exports.dataGithubCodespacesSecretsSecretsToTerraform = dataGithubCodespacesSecretsSecretsToTerraform;
exports.dataGithubCodespacesSecretsSecretsToHclTerraform = dataGithubCodespacesSecretsSecretsToHclTerraform;
var cdktf = require("cdktf");
function dataGithubCodespacesSecretsSecretsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataGithubCodespacesSecretsSecretsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataGithubCodespacesSecretsSecretsOutputReference = /** @class */ (function (_super) {
    __extends(DataGithubCodespacesSecretsSecretsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubCodespacesSecretsSecretsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataGithubCodespacesSecretsSecretsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataGithubCodespacesSecretsSecretsOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubCodespacesSecretsSecretsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubCodespacesSecretsSecretsOutputReference.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    return DataGithubCodespacesSecretsSecretsOutputReference;
}(cdktf.ComplexObject));
exports.DataGithubCodespacesSecretsSecretsOutputReference = DataGithubCodespacesSecretsSecretsOutputReference;
var DataGithubCodespacesSecretsSecretsList = /** @class */ (function (_super) {
    __extends(DataGithubCodespacesSecretsSecretsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubCodespacesSecretsSecretsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataGithubCodespacesSecretsSecretsList.prototype.get = function (index) {
        return new DataGithubCodespacesSecretsSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataGithubCodespacesSecretsSecretsList;
}(cdktf.ComplexList));
exports.DataGithubCodespacesSecretsSecretsList = DataGithubCodespacesSecretsSecretsList;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/codespaces_secrets github_codespaces_secrets}
*/
var DataGithubCodespacesSecrets = /** @class */ (function (_super) {
    __extends(DataGithubCodespacesSecrets, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/codespaces_secrets github_codespaces_secrets} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubCodespacesSecretsConfig = {}
    */
    function DataGithubCodespacesSecrets(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_codespaces_secrets',
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
        // secrets - computed: true, optional: false, required: false
        _this._secrets = new DataGithubCodespacesSecretsSecretsList(_this, "secrets", false);
        _this._fullName = config.fullName;
        _this._id = config.id;
        _this._name = config.name;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubCodespacesSecrets resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubCodespacesSecrets to import
    * @param importFromId The id of the existing DataGithubCodespacesSecrets that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/codespaces_secrets#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubCodespacesSecrets to import is found
    */
    DataGithubCodespacesSecrets.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_codespaces_secrets", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataGithubCodespacesSecrets.prototype, "fullName", {
        get: function () {
            return this.getStringAttribute('full_name');
        },
        set: function (value) {
            this._fullName = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubCodespacesSecrets.prototype.resetFullName = function () {
        this._fullName = undefined;
    };
    Object.defineProperty(DataGithubCodespacesSecrets.prototype, "fullNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fullName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubCodespacesSecrets.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubCodespacesSecrets.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataGithubCodespacesSecrets.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubCodespacesSecrets.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubCodespacesSecrets.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataGithubCodespacesSecrets.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubCodespacesSecrets.prototype, "secrets", {
        get: function () {
            return this._secrets;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataGithubCodespacesSecrets.prototype.synthesizeAttributes = function () {
        return {
            full_name: cdktf.stringToTerraform(this._fullName),
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
        };
    };
    DataGithubCodespacesSecrets.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            full_name: {
                value: cdktf.stringToHclTerraform(this._fullName),
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
            name: {
                value: cdktf.stringToHclTerraform(this._name),
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
    DataGithubCodespacesSecrets.tfResourceType = "github_codespaces_secrets";
    return DataGithubCodespacesSecrets;
}(cdktf.TerraformDataSource));
exports.DataGithubCodespacesSecrets = DataGithubCodespacesSecrets;
