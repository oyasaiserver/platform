"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_deploy_keys
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
exports.DataGithubRepositoryDeployKeys = exports.DataGithubRepositoryDeployKeysKeysList = exports.DataGithubRepositoryDeployKeysKeysOutputReference = void 0;
exports.dataGithubRepositoryDeployKeysKeysToTerraform = dataGithubRepositoryDeployKeysKeysToTerraform;
exports.dataGithubRepositoryDeployKeysKeysToHclTerraform = dataGithubRepositoryDeployKeysKeysToHclTerraform;
var cdktf = require("cdktf");
function dataGithubRepositoryDeployKeysKeysToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataGithubRepositoryDeployKeysKeysToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataGithubRepositoryDeployKeysKeysOutputReference = /** @class */ (function (_super) {
    __extends(DataGithubRepositoryDeployKeysKeysOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubRepositoryDeployKeysKeysOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataGithubRepositoryDeployKeysKeysOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataGithubRepositoryDeployKeysKeysOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryDeployKeysKeysOutputReference.prototype, "key", {
        // key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryDeployKeysKeysOutputReference.prototype, "title", {
        // title - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('title');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryDeployKeysKeysOutputReference.prototype, "verified", {
        // verified - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('verified');
        },
        enumerable: false,
        configurable: true
    });
    return DataGithubRepositoryDeployKeysKeysOutputReference;
}(cdktf.ComplexObject));
exports.DataGithubRepositoryDeployKeysKeysOutputReference = DataGithubRepositoryDeployKeysKeysOutputReference;
var DataGithubRepositoryDeployKeysKeysList = /** @class */ (function (_super) {
    __extends(DataGithubRepositoryDeployKeysKeysList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubRepositoryDeployKeysKeysList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataGithubRepositoryDeployKeysKeysList.prototype.get = function (index) {
        return new DataGithubRepositoryDeployKeysKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataGithubRepositoryDeployKeysKeysList;
}(cdktf.ComplexList));
exports.DataGithubRepositoryDeployKeysKeysList = DataGithubRepositoryDeployKeysKeysList;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_deploy_keys github_repository_deploy_keys}
*/
var DataGithubRepositoryDeployKeys = /** @class */ (function (_super) {
    __extends(DataGithubRepositoryDeployKeys, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_deploy_keys github_repository_deploy_keys} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubRepositoryDeployKeysConfig
    */
    function DataGithubRepositoryDeployKeys(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_repository_deploy_keys',
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
        // keys - computed: true, optional: false, required: false
        _this._keys = new DataGithubRepositoryDeployKeysKeysList(_this, "keys", false);
        _this._id = config.id;
        _this._repository = config.repository;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubRepositoryDeployKeys resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubRepositoryDeployKeys to import
    * @param importFromId The id of the existing DataGithubRepositoryDeployKeys that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_deploy_keys#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubRepositoryDeployKeys to import is found
    */
    DataGithubRepositoryDeployKeys.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_deploy_keys", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataGithubRepositoryDeployKeys.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubRepositoryDeployKeys.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataGithubRepositoryDeployKeys.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryDeployKeys.prototype, "keys", {
        get: function () {
            return this._keys;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryDeployKeys.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryDeployKeys.prototype, "repositoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repository;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataGithubRepositoryDeployKeys.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            repository: cdktf.stringToTerraform(this._repository),
        };
    };
    DataGithubRepositoryDeployKeys.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            id: {
                value: cdktf.stringToHclTerraform(this._id),
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
    DataGithubRepositoryDeployKeys.tfResourceType = "github_repository_deploy_keys";
    return DataGithubRepositoryDeployKeys;
}(cdktf.TerraformDataSource));
exports.DataGithubRepositoryDeployKeys = DataGithubRepositoryDeployKeys;
