"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/codespaces_user_secrets
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
exports.DataGithubCodespacesUserSecrets = exports.DataGithubCodespacesUserSecretsSecretsList = exports.DataGithubCodespacesUserSecretsSecretsOutputReference = void 0;
exports.dataGithubCodespacesUserSecretsSecretsToTerraform = dataGithubCodespacesUserSecretsSecretsToTerraform;
exports.dataGithubCodespacesUserSecretsSecretsToHclTerraform = dataGithubCodespacesUserSecretsSecretsToHclTerraform;
var cdktf = require("cdktf");
function dataGithubCodespacesUserSecretsSecretsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataGithubCodespacesUserSecretsSecretsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataGithubCodespacesUserSecretsSecretsOutputReference = /** @class */ (function (_super) {
    __extends(DataGithubCodespacesUserSecretsSecretsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubCodespacesUserSecretsSecretsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataGithubCodespacesUserSecretsSecretsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataGithubCodespacesUserSecretsSecretsOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubCodespacesUserSecretsSecretsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubCodespacesUserSecretsSecretsOutputReference.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubCodespacesUserSecretsSecretsOutputReference.prototype, "visibility", {
        // visibility - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('visibility');
        },
        enumerable: false,
        configurable: true
    });
    return DataGithubCodespacesUserSecretsSecretsOutputReference;
}(cdktf.ComplexObject));
exports.DataGithubCodespacesUserSecretsSecretsOutputReference = DataGithubCodespacesUserSecretsSecretsOutputReference;
var DataGithubCodespacesUserSecretsSecretsList = /** @class */ (function (_super) {
    __extends(DataGithubCodespacesUserSecretsSecretsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubCodespacesUserSecretsSecretsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataGithubCodespacesUserSecretsSecretsList.prototype.get = function (index) {
        return new DataGithubCodespacesUserSecretsSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataGithubCodespacesUserSecretsSecretsList;
}(cdktf.ComplexList));
exports.DataGithubCodespacesUserSecretsSecretsList = DataGithubCodespacesUserSecretsSecretsList;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/codespaces_user_secrets github_codespaces_user_secrets}
*/
var DataGithubCodespacesUserSecrets = /** @class */ (function (_super) {
    __extends(DataGithubCodespacesUserSecrets, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/codespaces_user_secrets github_codespaces_user_secrets} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubCodespacesUserSecretsConfig = {}
    */
    function DataGithubCodespacesUserSecrets(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_codespaces_user_secrets',
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
        _this._secrets = new DataGithubCodespacesUserSecretsSecretsList(_this, "secrets", false);
        _this._id = config.id;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubCodespacesUserSecrets resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubCodespacesUserSecrets to import
    * @param importFromId The id of the existing DataGithubCodespacesUserSecrets that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/codespaces_user_secrets#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubCodespacesUserSecrets to import is found
    */
    DataGithubCodespacesUserSecrets.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_codespaces_user_secrets", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataGithubCodespacesUserSecrets.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubCodespacesUserSecrets.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataGithubCodespacesUserSecrets.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubCodespacesUserSecrets.prototype, "secrets", {
        get: function () {
            return this._secrets;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataGithubCodespacesUserSecrets.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
        };
    };
    DataGithubCodespacesUserSecrets.prototype.synthesizeHclAttributes = function () {
        var attrs = {
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
    DataGithubCodespacesUserSecrets.tfResourceType = "github_codespaces_user_secrets";
    return DataGithubCodespacesUserSecrets;
}(cdktf.TerraformDataSource));
exports.DataGithubCodespacesUserSecrets = DataGithubCodespacesUserSecrets;
